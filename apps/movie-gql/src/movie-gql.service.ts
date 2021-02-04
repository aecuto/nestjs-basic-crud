import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieGqlService {
  getHello(): string {
    return 'Hello World!';
  }
}
