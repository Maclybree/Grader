'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: {
    name: string;
    role: 'admin' | 'teacher';
  };
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? 'bg-blue-50 text-primary font-semibold'
        : 'text-slate-muted hover:text-slate-text hover:bg-slate-50'
    }`;

  return (
    <aside className="w-64 bg-surface border-r border-slate-border h-screen flex flex-col justify-between p-4 sticky top-0">
      <div className="space-y-6">
        {/* Brand */}
        <div className="px-3 py-2">
          <h1 className="text-lg font-bold tracking-tight text-slate-text">GRADER</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          <div>
            <Link href="/dashboard" className={linkClass('/dashboard')}>
              Dashboard
            </Link>
          </div>

          <div>
            <div className="px-3 text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              Academic
            </div>
            <div className="space-y-1">
              {user.role === 'admin' && (
                <>
                  <Link href="/dashboard/admin/setup" className={linkClass('/dashboard/admin/setup')}>Classes</Link>
                  <Link href="/dashboard/admin/users" className={linkClass('/dashboard/admin/users')}>Students</Link>
                </>
              )}
              <Link href="/dashboard/teacher" className={linkClass('/dashboard/teacher')}>Assessments</Link>
            </div>
          </div>

          <div>
            <div className="px-3 text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              Marks
            </div>
            <div className="space-y-1">
              <Link href="/dashboard/teacher/marks" className={linkClass('/dashboard/teacher/marks')}>Enter Marks</Link>
              <Link href="/dashboard/admin/marks" className={linkClass('/dashboard/admin/marks')}>History</Link>
            </div>
          </div>

          {user.role === 'admin' && (
            <div>
              <div className="px-3 text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
                Admin
              </div>
              <div className="space-y-1">
                <Link href="/dashboard/admin/users" className={linkClass('/dashboard/admin/users')}>Users</Link>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* User Footer */}
      <div className="border-t border-slate-border pt-4 px-3 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-status-success" />
        <div>
          <p className="text-sm font-semibold text-slate-text">{user.name}</p>
          <p className="text-xs text-slate-muted capitalize">{user.role}</p>
        </div>
      </div>
    </aside>
  );
}
