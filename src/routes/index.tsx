import { DashboardView } from '@/app/domains/dashboard/actions/view/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: DashboardView,
});
