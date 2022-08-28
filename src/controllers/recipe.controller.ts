import {
	Body,
	Controller,
	Get,
	HttpException,
	HttpStatus,
	Post,
} from "@nestjs/common";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RecipeCommand } from "../commands/recipe.command";
import { Recipe } from "../dtos/recipe.dto";
import { BuyingList } from "../entities/buyingList.entity";

@Controller()
export class RecipeController {
	constructor(private readonly command: RecipeCommand) {}

	@ApiTags("recipes")
	@Post("/recipe")
	@ApiOkResponse({
		description:
			"The missing ingredients, name of the recipe and time of preparation",
		type: BuyingList
	})	
	@ApiResponse({ status: 400})
	public getMissingIngredients(@Body() recipe: Recipe): BuyingList {
		if (Object.keys(recipe).length === 0) {
			throw new HttpException(
				"Please enter a recipe",
				HttpStatus.BAD_REQUEST
			);
		}
		return this.command.getMissingIngredients(recipe);
	}
}
