import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">GRADER</h1>
        <p className="text-slate-400 mt-3 text-lg">Fast, secure marks management for Lesotho schools</p>
        <Link href="/login" className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition shadow-lg">
          Go to Login
        </Link>
      </div>
    </main>
  )
}
