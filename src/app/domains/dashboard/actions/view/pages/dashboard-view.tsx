import { useSuspenseQuery } from '@tanstack/react-query';

import { query } from '../requests';

export const DashboardView = () => {
  const { data } = useSuspenseQuery(query);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-slate-300">
        If you can see this styled text, Tailwind is working.
      </p>
      <button className="rounded bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-500">
        Test Button
      </button>
    </div>
  );
};
