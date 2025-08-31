import { hydrateRoot } from 'react-dom/client';
import { RouterClient } from '@tanstack/react-router/ssr/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter } from './router';

const queryClient = new QueryClient();
const router = createRouter({ context: { queryClient } });

hydrateRoot(
  document,
  <QueryClientProvider client={queryClient}>
    <RouterClient router={router} />
  </QueryClientProvider>
);
