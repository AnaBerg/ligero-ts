import {
  createRequestHandler,
  defineHandlerCallback,
  renderRouterToString,
  RouterServer,
} from '@tanstack/react-router/ssr/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter } from './router';

export async function render({ request }: { request: Request }) {
  const queryClient = new QueryClient();

  const handler = createRequestHandler({
    request,
    createRouter: () => createRouter({ context: { queryClient } }),
  });

  const renderHandler = defineHandlerCallback(({ router, responseHeaders }) =>
    renderRouterToString({
      router,
      responseHeaders,
      children: (
        <QueryClientProvider client={queryClient}>
          <RouterServer router={router} />
        </QueryClientProvider>
      ),
    })
  );

  return handler(renderHandler);
}
