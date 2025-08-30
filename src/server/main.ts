import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import middie from '@fastify/middie';
import { createServer as createViteServer } from 'vite';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );

  if (process.env.NODE_ENV === 'development') {
    const fastify = app.getHttpAdapter().getInstance() as unknown as {
      use?: (fn: unknown) => void;
      register: (plugin: unknown) => Promise<void>;
      __vite?: unknown;
    };

    if (typeof fastify.use !== 'function') {
      await fastify.register(middie as unknown);
    }

    if (!fastify.__vite) {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
      });
      fastify.use?.(vite.middlewares as unknown);
      fastify.__vite = vite;
    }
  }

  await app.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' });
}

bootstrap();
