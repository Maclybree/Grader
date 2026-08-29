import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold">GRADER</h1>
        <p className="text-gray-500 mt-2">School Marks Management</p>
        <Link href="/login" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 text-white">
          Go to Login
        </Link>
      </div>
    </main>
  )
}
