import { createClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@/lib/supabase/server'
export async function POST(req:Request) {
  const supabase = createServerClient(); const { data: { user } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from('profiles').select('role').eq('id',user!.id).single();
  if(profile?.role!=='admin') return Response.json({error:'Unauthorized'},{status:403});
  const { email, role } = await req.json();
  const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data } = await admin.auth.admin.createUser({email, password: Math.random().toString(36).slice(-8), email_confirm:true});
  await admin.from('profiles').insert({id:data.user.id, role, email});
  return Response.json({ok:true})
}
