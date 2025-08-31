import { createRouter as createTanstackRouter } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { routeTree } from '@/routeTree.gen';

export type RouterContext = {
  queryClient: QueryClient;
};

export function createRouter(options?: { context?: RouterContext }) {
  return createTanstackRouter({ routeTree, context: options?.context });
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
