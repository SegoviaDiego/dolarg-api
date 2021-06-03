import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAPI(): string {
    return 'Welcome to DolARG API!';
  }
}
