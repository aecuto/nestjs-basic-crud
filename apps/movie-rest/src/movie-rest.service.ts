import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieRestService {
  getHello(): string {
    return 'Hello World!';
  }
}
