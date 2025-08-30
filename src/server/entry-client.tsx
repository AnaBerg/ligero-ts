import { hydrateRoot } from 'react-dom/client';
import { RouterClient } from '@tanstack/react-router/ssr/client';
import { createRouter } from './router';

import './index.css';

const router = createRouter();

hydrateRoot(document, <RouterClient router={router} />);
