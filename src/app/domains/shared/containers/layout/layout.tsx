import { HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Layout = () => {
  return (
    <>
      <HeadContent />
      <main className="min-h-dvh bg-slate-900 text-slate-100 p-6">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
      <Scripts />
    </>
  );
};
