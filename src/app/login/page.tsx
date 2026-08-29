'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push('/dashboard')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-xl bg-slate-900 p-8 border border-slate-800 shadow-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">GRADER</h1>
          <p className="text-slate-400 text-sm mt-1">School Marks Management</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input 
              value={email} onChange={e => setEmail(e.target.value)}
              placeholder="sekonyelasentle081@gmail.com" 
              type="email" required
              className="mt-1 w-full rounded-lg bg-slate-800 border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition" 
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300">Password</label>
            <input 
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••" 
              type="password" required
              className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition" 
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}
