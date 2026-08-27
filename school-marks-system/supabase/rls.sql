-- Enable RLS across key tables
ALTER TABLE marks ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_classes ENABLE ROW LEVEL SECURITY;

-- Utility function to check if user is an admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles WHERE id = user_id AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Marks Policies
CREATE POLICY "Admins full access to marks"
  ON marks FOR ALL
  USING (is_admin(auth.uid()));

CREATE POLICY "Teachers read/write assigned class marks"
  ON marks FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM assessments a
      JOIN teacher_classes tc ON tc.class_id = a.class_id
      WHERE a.id = marks.assessment_id
      AND tc.teacher_id = auth.uid()
    )
  );

