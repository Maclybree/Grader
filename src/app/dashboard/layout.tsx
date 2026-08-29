export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-white border-r border-slate-200 p-4 hidden md:block">
        <h2 className="font-bold text-xl mb-8">GRADER</h2>
        <nav className="space-y-2 text-sm">
          <p className="text-slate-400 font-semibold">ACADEMIC</p>
          <a href="/admin/classes" className="block hover:text-blue-600">Classes</a>
          <a href="/admin/students" className="block hover:text-blue-600">Students</a>
          <p className="text-slate-400 font-semibold pt-4">ADMIN</p>
          <a href="/admin/users" className="block hover:text-blue-600">Users</a>
          <a href="/admin/assignments" className="block hover:text-blue-600">Assignments</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
