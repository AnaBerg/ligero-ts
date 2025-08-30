import { Module } from '@nestjs/common';
import { MonitoringController } from './domains/monitoring/entrypoints/health.controller';
import { ApiAccessGuard } from './domains/shared/utils/api-access.guard';

@Module({
  controllers: [MonitoringController],
  providers: [ApiAccessGuard],
})
export class BackendModule {}
