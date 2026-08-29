export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-96 rounded-2xl border bg-white p-6 shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input placeholder="Email" className="w-full border rounded p-2 mb-3" />
        <input placeholder="Password" type="password" className="w-full border rounded p-2 mb-3" />
        <button className="w-full rounded bg-blue-600 p-2 text-white">Sign In</button>
      </div>
    </main>
  )
}
