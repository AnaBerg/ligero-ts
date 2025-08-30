import { Module } from '@nestjs/common';
import { BackendModule } from '@/api/backend.module';
import { SsrModule } from './ssr/ssr.module';

@Module({
  imports: [BackendModule, SsrModule],
})
export class AppModule {}
