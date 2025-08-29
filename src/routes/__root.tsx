import { createRootRoute } from '@tanstack/react-router';

import { Layout } from '@/app/domains/shared/containers';

export const Route = createRootRoute({
  component: Layout,
});
