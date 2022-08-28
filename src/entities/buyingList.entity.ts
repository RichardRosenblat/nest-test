export class BuyingList {
	/*
	 * Name of the recipe
	 * @example 'popcorn'
	 */
	recipe: string;
	/*
	 * The biggest unit of time needed to complete the recipe
	 * @example '3 hours, 2 minutes and 1 second'
	 */
	preparation_time: string;
	/*
	 * Number of missing igredients to complete the recipe
	 * @example 1
	 */
	missing_ingredients: number;
	/*
	 * List of missing ingredients
	 * @example ['oil', 'tomato', 'salt']
	 */
	list: string[]
}