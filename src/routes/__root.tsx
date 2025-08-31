import { createRootRouteWithContext } from '@tanstack/react-router';
import type { RouterContext } from '@/server/router';

import { Layout } from '@/app/domains/shared/containers';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Layout,
  head: () => ({
    links: [
      {
        rel: 'stylesheet',
        href: '/src/app/domains/shared/styles/global.css',
      },
    ],
  }),
});
