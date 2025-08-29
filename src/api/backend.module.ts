import { Module } from '@nestjs/common';
import { MonitoringController } from './domains/monitoring/entrypoints/health.controller.ts';
import { ApiAccessGuard } from './domains/shared/utils/api-access.guard.ts';

@Module({
  controllers: [MonitoringController],
  providers: [ApiAccessGuard],
})
export class BackendModule {}
