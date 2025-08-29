import { Controller, Get, Req, Res } from '@nestjs/common';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { render } from '../entry-server';

@Controller()
export class SsrController {
  @Get('*')
  async handleSsr(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers as unknown as HeadersInit,
    });

    const response = await render({ request });

    res.code(response.status);
    response.headers.forEach((val, key) => res.header(key, val));
    const body = await response.text();
    res.send(body);
  }
}
