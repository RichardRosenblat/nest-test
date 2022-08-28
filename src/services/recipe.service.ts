import { Injectable } from "@nestjs/common";
import { PreparationTime } from "../dtos/preparationTime.dto";

@Injectable()
export class RecipeService {
	public getBuyingList(
		needed: string[],
		available: string[]
	): {
		missing_ingredients: number;
		list: string[];
	} {
		const list = needed.filter(
			(ingredient) => !available.includes(ingredient)
		);
		const buyingList = {
			missing_ingredients: list.length,
			list,
		};
		return buyingList;
	}

	public getPreparationTime(time: PreparationTime): string {
		const { hours, minutes, seconds } = time;
		return `${hours} hours, ${minutes} minutes and ${seconds} minutes`;
	}
}
