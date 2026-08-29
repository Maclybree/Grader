export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">GRADER</h1>
          <p className="text-slate-400 text-sm">School Marks Management</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input 
              placeholder="teacher@school.ls" 
              className="w-full mt-1 rounded-lg bg-slate-700 border border-slate-600 p-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" 
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input 
              placeholder="••••••••" 
              type="password" 
              className="w-full mt-1 rounded-lg bg-slate-700 border border-slate-600 p-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" 
            />
          </div>
          <button className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
        
        <p className="text-center text-xs text-slate-500 mt-6">© 2026 GRADER Lesotho</p>
      </div>
    </main>
  )
}
