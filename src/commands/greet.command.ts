import { Injectable } from "@nestjs/common";
import { GreetService } from "../services/greet.service";

@Injectable()
export class GreetCommand {
	constructor(private readonly service: GreetService) {}

	public greet(name: string) {
		if (name) {
			return this.service.getHelloWithName(name);
		}
		return this.service.getHello();
	}
}
