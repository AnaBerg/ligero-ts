import {
  createRequestHandler,
  defaultRenderHandler,
} from '@tanstack/react-router/ssr/server';
import { createRouter } from './router';

import './index.css';

export async function render({ request }: { request: Request }) {
  const handler = createRequestHandler({ request, createRouter });
  return handler(defaultRenderHandler);
}
