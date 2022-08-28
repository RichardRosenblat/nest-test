import { PreparationTime } from "./preparationTime.dto";

export class Recipe {
	/*
	 * Name of the recipe
	 * @example 'popcorn'
	 */
	name: string;

	/*
	 * Time to complete the recipe 
	 */
	time: PreparationTime;

	/*
	 * Ingredients needed to complete the recipe
	 * @example ['Corn', 'oil', 'salt']
	 */
	needed_ingredients: string[];

	/*
	 * Ingredients available for the recipe
	 * @example ['Corn', 'tomato', 'salt']
	 */
	available_ingredients: string[];
}
