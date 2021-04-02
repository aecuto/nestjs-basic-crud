import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  home(): { msg: string } {
    return { msg: 'Hello World' };
  }
}
