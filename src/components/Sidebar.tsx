'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const nav = [
  {label:'Dashboard',href:'/admin'},
  {label:'ACADEMIC',group:true},
  {label:'Classes',href:'/admin/classes'},
  {label:'Students',href:'/admin/students'},
  {label:'Subjects',href:'/admin/subjects'},
  {label:'Assessments',href:'/admin/assessments'},
  {label:'ADMIN',group:true},
  {label:'Users',href:'/admin/users'},
  {label:'Assignments',href:'/admin/assignments'},
]
export default function Sidebar() {
  const path = usePathname()
  return <aside className="w-60 bg-white border-r border-[#E2E8F0] h-screen p-4">
    <h1 className="font-bold text-2xl mb-8">GRADER</h1>
    <nav className="space-y-1">
      {nav.map(i=> i.group 
        ? <p key={i.label} className="text-xs font-semibold text-slate-400 pt-4">{i.label}</p>
        : <Link key={i.href} href={i.href!} className={`block px-3 py-2 rounded-lg text-sm ${path===i.href?'bg-blue-50 text-[#2563EB]':'hover:bg-slate-100'}`}>{i.label}</Link>
      )}
    </nav>
  </aside>
}
