import { hydrateRoot } from 'react-dom/client';
import { RouterClient } from '@tanstack/react-router/ssr/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter } from './router';

if (typeof window !== 'undefined') {
  const noop = () => {};
  console.log = noop;
  console.info = noop;
  console.debug = noop;
}

const queryClient = new QueryClient();
const router = createRouter({ context: { queryClient } });

hydrateRoot(
  document,
  <QueryClientProvider client={queryClient}>
    <RouterClient router={router} />
  </QueryClientProvider>
);
