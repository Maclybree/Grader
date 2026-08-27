import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Admin Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/dashboard/admin/users" className="p-6 bg-white border rounded-lg shadow-sm hover:border-indigo-500">
          <h2 className="font-bold text-lg">User Access</h2>
          <p className="text-sm text-slate-500">Manage teachers & assign classes</p>
        </Link>
        <Link href="/dashboard/admin/setup" className="p-6 bg-white border rounded-lg shadow-sm hover:border-indigo-500">
          <h2 className="font-bold text-lg">Academic Setup</h2>
          <p className="text-sm text-slate-500">Manage classes, subjects, assessments</p>
        </Link>
        <Link href="/dashboard/admin/marks" className="p-6 bg-white border rounded-lg shadow-sm hover:border-indigo-500">
          <h2 className="font-bold text-lg">Marks Audit Log</h2>
          <p className="text-sm text-slate-500">View all marks & edit history</p>
        </Link>
      </div>
    </div>
  );
}

