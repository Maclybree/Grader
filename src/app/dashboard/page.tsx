import { createClient } from '@/lib/supabase/server'
export default async function Dashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user!.id).single()
  return (
    <div>
      <h1 className="text-2xl font-semibold">Good morning, {profile?.full_name || 'Admin'}</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="card"><p className="text-slate-500 text-sm">Total Students</p><p className="text-3xl font-bold">0</p></div>
        <div className="card"><p className="text-slate-500 text-sm">Total Teachers</p><p className="text-3xl font-bold">0</p></div>
        <div className="card"><p className="text-slate-500 text-sm">Active Assessments</p><p className="text-3xl font-bold">0</p></div>
      </div>
    </div>
  )
}
