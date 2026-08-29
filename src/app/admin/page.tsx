export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-slate-500">Good morning</p>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="card"><p className="text-sm text-slate-500">Students</p><p className="text-3xl font-bold">0</p></div>
        <div className="card"><p className="text-sm text-slate-500">Teachers</p><p className="text-3xl font-bold">0</p></div>
        <div className="card"><p className="text-sm text-slate-500">Classes</p><p className="text-3xl font-bold">0</p></div>
        <div className="card"><p className="text-sm text-slate-500">Assessments</p><p className="text-3xl font-bold">0</p></div>
      </div>
    </div>
  )
}
