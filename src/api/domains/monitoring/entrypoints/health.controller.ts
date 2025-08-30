import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiAccessGuard } from '../../shared/utils/api-access.guard';

@Controller('api')
export class MonitoringController {
  @UseGuards(ApiAccessGuard)
  @Get('health')
  getHealth() {
    return { status: 'ok' } as const;
  }
}
