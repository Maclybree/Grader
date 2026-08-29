'use client'
import { useState } from 'react'; import { createClient } from '@/lib/supabase/client';
export default function MarkEntryTable({students, assessment}:{students:any[], assessment:any}) {
  const [marks, setMarks] = useState<Record<string,number|string>>({}); const supabase = createClient();
  const save = async () => {
    for(const [studentId, mark] of Object.entries(marks)){
      if(mark==='') continue; if(Number(mark)<0 || Number(mark)>assessment.maximum_mark) return alert(`Max is ${assessment.maximum_mark}`);
      await supabase.from('marks').upsert({student_id:studentId, assessment_id:assessment.id, mark:Number(mark)}, {onConflict:'student_id,assessment_id'})
    }
    alert('✓ Marks saved successfully')
  }
  return <div className="card">
    <p className="text-sm text-slate-500">{Object.values(marks).filter(Boolean).length} of {students.length} completed</p>
    <table className="w-full mt-4 text-sm">
      <thead><tr className="text-left text-slate-500"><th>Student</th><th>Mark</th><th>Status</th></tr></thead>
      <tbody>{students.map((s,i)=><tr key={s.id}>
        <td className="py-2">{s.full_name}</td>
        <td><input ref={el=>i===0&&el?.focus()} onKeyDown={e=>e.key==='Tab'&&e.preventDefault()} className="input w-20" value={marks[s.id]||''} onChange={e=>setMarks({...marks,[s.id]:e.target.value})}/></td>
        <td>{marks[s.id]!==undefined?'✓ Saved':'! Missing'}</td>
      </tr>)}</tbody>
    </table>
    <button onClick={save} className="btn btn-primary mt-4">Save Changes</button>
  </div>
}
