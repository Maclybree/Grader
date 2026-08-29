import { createClient } from '@/lib/supabase/server'
export default async function Admin() {
  const supabase = createClient(); const { data: { user } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user!.id).single();
  const [s,t,c,a] = await Promise.all(['students','profiles','classes','assessments'].map(t=>supabase.from(t).select('*',{count:'exact',head:true})))
  return <div><h1 className="text-2xl font-semibold">Good morning, {profile?.full_name}</h1>
  <div className="grid grid-cols-4 gap-4 mt-6">{[s,t,c,a].map((x,i)=><div key={i} className="card"><p className="text-slate-500 text-sm">Total</p><p className="text-3xl font-bold">{x.count}</p></div>)}</div></div>
}
