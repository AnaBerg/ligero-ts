import { Module } from '@nestjs/common';
import { BackendModule } from '@api/backend.module.ts';
import { SsrModule } from './ssr/ssr.module.ts';

@Module({
  imports: [BackendModule, SsrModule],
})
export class AppModule {}
