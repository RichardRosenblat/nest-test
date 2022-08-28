import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  public getHello() {
    return 'Hello World!';
  }
  public getHelloWithName(name: string) {
    return `Hello ${name}!`;
  }
}
