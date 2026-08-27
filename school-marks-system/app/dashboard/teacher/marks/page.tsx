'use client';

import { useState } from 'react';

export default function MarkEntryPage() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedAssessment, setSelectedAssessment] = useState('');

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-xl font-bold">Marks Entry</h1>
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg border">
        <div>
          <label className="block text-xs font-semibold mb-1">Class</label>
          <select className="w-full border p-2 rounded" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">Select Class</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Subject</label>
          <select className="w-full border p-2 rounded" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="">Select Subject</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Assessment</label>
          <select className="w-full border p-2 rounded" value={selectedAssessment} onChange={(e) => setSelectedAssessment(e.target.value)}>
            <option value="">Select Assessment</option>
          </select>
        </div>
      </div>
    </div>
  );
}

