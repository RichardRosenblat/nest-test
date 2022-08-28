import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Recipe } from "src/dtos/recipe.dto";
import { BuyingList } from "../entities/buyingList.entity";
import { RecipeService } from "../services/recipe.service";

@Injectable()
export class RecipeCommand {
	constructor(private readonly service: RecipeService) {}

	public getMissingIngredients(recipe: Recipe): BuyingList {
		const needed = recipe.needed_ingredients;
		
		if (needed.length === 0) {
			throw new HttpException(
				"The recipe must need at least one ingredient",
				HttpStatus.BAD_REQUEST
			);
		}

		const available = recipe.available_ingredients;

		const { missing_ingredients, list } = this.service.getBuyingList(
			needed,
			available
		);

		const preparation_time = this.service.getPreparationTime(recipe.time);

		return {
			recipe: recipe.name,
			missing_ingredients,
			list,
			preparation_time,
		};
	}
}
