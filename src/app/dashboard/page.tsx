import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser() // <- FIXED: added }
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Role: <span className="text-blue-400 font-semibold uppercase">{profile?.role}</span></p>
        
        {profile?.role === 'head_admin' && (
          <div className="mt-6">
            <a href="/admin/users" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700">Manage Users</a>
          </div>
        )}
      </div>
    </main>
  )
}
