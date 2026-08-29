'use client'
import { createClient } from '@/lib/supabase/client'
export default function Login() {
  const supabase = createClient()
  const loginWithGoogle = () => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + '/auth/callback' }})
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm card text-center">
        <h1 className="text-3xl font-semibold">GRADER</h1>
        <p className="text-slate-500 text-sm mt-1 mb-8">School Marks Management</p>
        <button onClick={loginWithGoogle} className="w-full btn-primary">Continue with Google</button>
        <p className="text-xs text-slate-400 mt-6">Only school accounts allowed</p>
      </div>
    </main>
  )
}
