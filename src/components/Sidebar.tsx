'use client'
import Link from 'next/link'; import { usePathname } from 'next/navigation';
const adminNav = [{label:'Dashboard',href:'/admin'},{label:'ACADEMIC',group:true},{label:'Classes',href:'/admin/classes'},{label:'Students',href:'/admin/students'},{label:'Subjects',href:'/admin/subjects'},{label:'Assessments',href:'/admin/assessments'},{label:'MARKS',group:true},{label:'History',href:'/admin/history'},{label:'ADMIN',group:true},{label:'Users',href:'/admin/users'},{label:'Assignments',href:'/admin/assignments'}]
export default function Sidebar({role}:{role:string}) {
  const path = usePathname();
  return <aside className="w-60 bg-white border-r border-slate-200 p-4 h-screen sticky top-0">
    <h1 className="font-bold text-2xl mb-8">GRADER</h1>
    <nav className="space-y-1 text-sm">
      {adminNav.map(i=> i.group? <p key={i.label} className="text-slate-400 font-semibold pt-4 text-xs">{i.label}</p> : 
      <Link key={i.href} href={i.href!} className={`block px-3 py-2 rounded-lg ${path===i.href?'bg-blue-50 text-blue-700':'hover:bg-slate-100'}`}>{i.label}</Link>)}
    </nav>
  </aside>
}
