import { Controller, Get, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { GreetCommand } from "../commands/greet.command";

@Controller()
export class GreetController {
	constructor(private readonly command: GreetCommand) {}

	@Get("/greet")
	@ApiTags('greeting')
	@ApiQuery({ name: "name", required: false })
	public getHello(@Query("name") name?: string) {
		return this.command.greet(name);
	}
}
