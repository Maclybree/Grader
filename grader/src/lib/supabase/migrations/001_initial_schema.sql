-- TABLES
create table profiles (id uuid primary key references auth.users, full_name text, role text check (role in ('admin','teacher')), created_at timestamptz default now());
create table classes (id uuid primary key default gen_random_uuid(), name text, created_at timestamptz default now());
create table students (id uuid primary key default gen_random_uuid(), full_name text, class_id uuid references classes(id), active bool default true);
create table subjects (id uuid primary key default gen_random_uuid(), name text);
create table teacher_assignments (id uuid primary key default gen_random_uuid(), teacher_id uuid references profiles(id), class_id uuid references classes(id), subject_id uuid references subjects(id));
create table assessments (id uuid primary key default gen_random_uuid(), name text, class_id uuid references classes(id), subject_id uuid references subjects(id), maximum_mark int, assessment_date date);
create table marks (id uuid primary key default gen_random_uuid(), student_id uuid references students(id), assessment_id uuid references assessments(id), mark numeric, created_by uuid, updated_by uuid, created_at timestamptz default now(), updated_at timestamptz default now(), unique(student_id, assessment_id));
create table mark_audit (id uuid primary key default gen_random_uuid(), mark_id uuid references marks(id), changed_by uuid, old_mark numeric, new_mark numeric, changed_at timestamptz default now());

-- RLS
alter table profiles, students, marks, assessments, teacher_assignments enable row level security;
-- Teachers see only their assigned data
create policy "teacher access" on marks for all using (created_by = auth.uid());
-- Admins see all - add check role = 'admin' in real RLS
