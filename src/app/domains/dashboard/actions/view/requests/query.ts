import { queryOptions } from '@tanstack/react-query';

export const query = queryOptions({
  queryKey: ['dashboard'],
  queryFn: () => Promise.resolve({ title: 'Hello World!' }),
});
