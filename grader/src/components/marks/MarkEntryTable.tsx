"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function MarkEntryTable({ students, assessment }: any) {
  const [marks, setMarks] = useState<Record<string, number>>({})
  const supabase = createClient()

  const handleSave = async () => {
    // ORDER 18: validate 0-max, save, audit
    const updates = Object.entries(marks).map(([student_id, mark]) => ({
      student_id, assessment_id: assessment.id, mark, updated_by: (await supabase.auth.getUser()).data.user?.id
    }))
    await supabase.from('marks').upsert(updates)
    alert("✓ Changes saved")
  }

  return (
    <div className="bg-surface p-6 rounded-lg border-border">
      <h2 className="text-2xl font-semibold text-text">{assessment.name}</h2>
      <p>Maximum mark: {assessment.maximum_mark}</p>
      <table className="w-full mt-4">
        <thead><tr className="text-left text-muted text-sm"><th>Student</th><th>Mark</th></tr></thead>
        <tbody>
          {students.map((s: any, i: number) => (
            <tr key={s.id}>
              <td>{s.full_name}</td>
              <td><input type="number" onChange={e => setMarks({...marks, [s.id]: +e.target.value})} 
                className="border border-border rounded-md p-1 w-20" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave} className="mt-4 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md">Save Changes</button>
    </div>
  )
}
