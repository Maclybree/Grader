
import Link from 'next/link';

export default function TeacherDashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">Teacher Portal</h1>
      <Link href="/dashboard/teacher/marks" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium">
        Enter / Update Marks
      </Link>
    </div>
  );
}
