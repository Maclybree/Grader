'use client'
import { useState } from 'react'

const COLORS = {
  bg: '#F8FAFC', surface: '#FFFFFF', primary: '#2563EB', 
  text: '#0F172A', muted: '#64748B', border: '#E2E8F0'
}

const fakeData = {
  user: { name: 'Sekonyela Sentle', role: 'admin' },
  students: [
    { id: 1, name: 'Thabo Mokoena' }, { id: 2, name: 'Lerato Nkosi' },
    { id: 3, name: 'Neo Radebe' }, { id: 4, name: 'Mpho Tau' }
  ],
  assessment: { name: 'Mathematics Test 1', max: 50 }
}

export default function GraderDemo() {
  const [page, setPage] = useState<'dashboard' | 'marks'>('dashboard')
  const [marks, setMarks] = useState<Record<number, string>>({1: '42', 2: '38', 3: '45'})
  const [saved, setSaved] = useState(false)

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text }} className="min-h-screen flex font-sans">
      {/* SIDEBAR */}
      <aside style={{ background: COLORS.surface, borderColor: COLORS.border }} className="w-60 border-r p-4">
        <h1 className="font-bold text-2xl mb-8">GRADER</h1>
        <nav className="space-y-1 text-sm">
          <p className="text-xs font-semibold text-slate-400 pt-2">ACADEMIC</p>
          <button onClick={()=>setPage('dashboard')} className={`w-full text-left px-3 py-2 rounded-lg ${page==='dashboard'?'bg-blue-50 text-blue-700':''}`}>Dashboard</button>
          <button onClick={()=>setPage('marks')} className={`w-full text-left px-3 py-2 rounded-lg ${page==='marks'?'bg-blue-50 text-blue-700':''}`}>Enter Marks</button>
          <p className="text-xs font-semibold text-slate-400 pt-4">ADMIN</p>
          <div className="px-3 py-2 text-slate-400">Users</div>
          <div className="px-3 py-2 text-slate-400">History</div>
        </nav>
        <div className="absolute bottom-4 text-sm">
          <p className="font-semibold">{fakeData.user.name}</p>
          <p className="text-slate-500">{fakeData.user.role}</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {page === 'dashboard' && (
          <div>
            <h1 className="text-2xl font-semibold">Good morning, {fakeData.user.name}</h1>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div style={{ background: COLORS.surface, borderColor: COLORS.border }} className="border rounded-xl p-6"><p className="text-sm text-slate-500">Students</p><p className="text-3xl font-bold">4</p></div>
              <div style={{ background: COLORS.surface, borderColor: COLORS.border }} className="border rounded-xl p-6"><p className="text-sm text-slate-500">Teachers</p><p className="text-3xl font-bold">1</p></div>
              <div style={{ background: COLORS.surface, borderColor: COLORS.border }} className="border rounded-xl p-6"><p className="text-sm text-slate-500">Classes</p><p className="text-3xl font-bold">1</p></div>
              <div style={{ background: COLORS.surface, borderColor: COLORS.border }} className="border rounded-xl p-6"><p className="text-sm text-slate-500">Assessments</p><p className="text-3xl font-bold">1</p></div>
            </div>
          </div>
        )}

        {page === 'marks' && (
          <div>
            <h1 className="text-2xl font-semibold">← Marks</h1>
            <p className="text-slate-500">Grade 8A | Mathematics | {fakeData.assessment.name} | Max: {fakeData.assessment.max}</p>
            <p className="mt-4 text-sm">{Object.values(marks).filter(Boolean).length} of {fakeData.students.length} completed</p>
            
            <div style={{ background: COLORS.surface, borderColor: COLORS.border }} className="border rounded-xl mt-4 overflow-hidden">
              <table className="w-full text-sm">
                <thead style={{ background: COLORS.bg }}><tr><th className="text-left p-3">Student</th><th className="text-left p-3">Mark</th><th className="text-left p-3">Status</th></tr></thead>
                <tbody>
                  {fakeData.students.map(s => (
                    <tr key={s.id} className="border-t" style={{ borderColor: COLORS.border }}>
                      <td className="p-3">{s.name}</td>
                      <td className="p-3">
                        <input 
                          type="number"
                          className="w-20 border rounded-lg px-2 py-1"
                          style={{ borderColor: COLORS.border }}
                          value={marks[s.id] || ''}
                          onChange={e => {
                            const val = e.target.value
                            if(Number(val) > fakeData.assessment.max) return alert(`Max is ${fakeData.assessment.max}`)
                            setMarks({...marks, [s.id]: val})
                            setSaved(false)
                          }}
                        />
                      </td>
                      <td className="p-3">{marks[s.id] ? '✓ Saved' : '! Missing'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button 
              onClick={() => setSaved(true)}
              style={{ background: COLORS.primary }} 
              className="text-white font-semibold px-6 py-2 rounded-lg mt-4 hover:bg-blue-700"
            >
              Save Changes
            </button>
            {saved && <p className="text-green-600 mt-2">✓ Marks saved successfully</p>}
          </div>
        )}
      </main>
    </div>
  )
}
