import { Module } from "@nestjs/common";
import { GreetCommand } from "./commands/greet.command";
import { RecipeCommand } from "./commands/recipe.command";
import { GreetController } from "./controllers/greet.controller";
import { RecipeController } from "./controllers/recipe.controller";
import { GreetService } from "./services/greet.service";
import { RecipeService } from "./services/recipe.service";

@Module({
	imports: [],
	controllers: [GreetController, RecipeController],
	providers: [GreetService, GreetCommand, RecipeCommand, RecipeService],
})
export class AppModule {}
