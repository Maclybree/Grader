import React from 'react';

type BadgeStatus = 'complete' | 'incomplete' | 'draft';

interface BadgeProps {
  status: BadgeStatus;
  label?: string;
}

export function Badge({ status, label }: BadgeProps) {
  const config = {
    complete: {
      bg: 'bg-emerald-50',
      text: 'text-status-success',
      border: 'border-emerald-200',
      dot: '✓',
      defaultLabel: 'Complete',
    },
    incomplete: {
      bg: 'bg-amber-50',
      text: 'text-status-warning',
      border: 'border-amber-200',
      dot: '!',
      defaultLabel: 'Incomplete',
    },
    draft: {
      bg: 'bg-slate-100',
      text: 'text-slate-muted',
      border: 'border-slate-border',
      dot: '●',
      defaultLabel: 'Draft',
    },
  };

  const current = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${current.bg} ${current.text} ${current.border}`}>
      <span className="font-bold">{current.dot}</span>
      {label || current.defaultLabel}
    </span>
  );
}
