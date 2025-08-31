import { createFileRoute } from '@tanstack/react-router';

import { DashboardView } from '@/app/domains/dashboard/actions/view/pages';
import { query } from '@/app/domains/dashboard/actions/view/requests';

export const Route = createFileRoute('/')({
  component: DashboardView,
  loader: ({ context }) => context.queryClient.ensureQueryData(query),
});
