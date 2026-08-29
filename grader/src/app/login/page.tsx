export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="bg-surface p-8 rounded-lg shadow-sm w-96">
        <h1 className="text-2xl font-semibold text-center">GRADER</h1>
        <p className="text-center text-muted mb-6">School Marks Management</p>
        <input placeholder="Email" className="w-full border border-border p-2 rounded-md mb-3" />
        <input type="password" placeholder="Password" className="w-full border border-border p-2 rounded-md mb-3" />
        <button className="w-full bg-primary text-white p-2 rounded-md">Sign in</button>
      </div>
    </div>
  )
}
