'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return alert(error.message)
    router.push('/admin') // middleware will redirect teachers
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96">
        <h1 className="text-2xl font-bold mb-2">GRADER</h1>
        <p className="text-slate-500 mb-6">School Marks Management</p>
        <input className="input mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input className="input mb-4" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button onClick={login} className="btn btn-primary w-full">Sign in</button>
      </div>
    </div>
  )
}
