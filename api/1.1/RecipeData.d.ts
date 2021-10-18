/**
 * @class RecipeData https://wiki.factorio.com/Prototype/Recipe#expensive
 * 
 * The most basic definition of a recipe.
 */
declare class RecipeData extends PrototypeBase
{
	/**
	 * https://wiki.factorio.com/Prototype/Recipe#ingredients
	 * 
	 * Ingredient names and counts. Can also contain information about fluid temperature and catalyst amounts.
	 * The catalyst amounts are automatically calculated from the recipe, or can be set manually in the IngredientPrototype.
	 * 
	 * Maximum ingredient amount is 65535.
	 * 
	 * Ingredients can be set to an empty array to create a recipe that needs no ingredients.
	 * 
	 * Duplicate ingredients, e.g. two entries for the "wood" item, are not allowed.
	 * 
	 * @example ingredients = [{ type: "item", name: "iron-stick", amount: 2}, {type: "item", name: "iron-plate", amount: 3 }];
	 * @example ingredients = [{ type: "fluid", name: "water", amount: 50}, {type: "fluid", name: "crude-oil", amount: 100 }];
	 */
	public ingredients : IngredientPrototype[];

	/**
	 * Can be replaced with the results parameter.
	 * The item created by this recipe. Must be the name of an item, such as "iron-gear-wheel".
	 */
	public result : string;

	/**
	 * IS THIS DESCRIPTION ACTUALLY CORRECT???
	 * 
	 * The amount of time it takes to make this recipe.
	 * This is the number of seconds it takes to craft at crafting speed 1.
	 */
	public energy_requried : double = 0.5;

	/**
	 * I'm guessing this is how much this particular craft increases pollution?
	 * 
	 * @optional Default: 1.0
	 */
	public emissions_multiplier : double = 1.0;

	/**
	 * If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
	 * 
	 * @optional Default: true
	 */
	public allow_inserter_overload : boolean = true;

	/**
	 * This can be false to disable the recipe at the start of the game, or "true" to leave it enabled.
	 * If your recipe is unlocked by a technology, you should set this to "false".
	 * 
	 * @optional Default: true
	 */
	public enabled : boolean = true;

	/**
	 * Hides the recipe from crafting menus.
	 * 
	 * @optional Default: false
	 */
	public hidden : boolean = false;

	/**
	 * Hides the recipe from flow stats (item/fluid production statistics).
	 * 
	 * @optional Default: false
	 */
	public hide_from_stats : boolean = false;

	/**
	 * Hides the recipe from the player's crafting screen.
	 * The recipe will still show up for selection in machines.
	 * 
	 * @optional Default: false
	 */
	public hide_from_player_crafting : boolean = false;

	/**
	 * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
	 * 
	 * @optional Default: true
	 */
	public allow_decomposition : boolean = true;
	/**
	 * Whether the recipe can be used as an intermediate recipe in hand-crafting.
	 * 
	 * @optional Default: true
	 */
	public allow_as_intermediate : boolean = true;

	/**
	 * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
	 * 
	 * @optional Default: true
	 */
	public allow_intermediates : boolean = true;

	/**
	 * Whether the "Made in: {Machine}" part of the tool-tip should always be present, not only when the recipe can not be hand-crafted.
	 * 
	 * @optional Default: false
	 */
	public always_show_made_in : boolean = false;

	/**
	 * Whether the recipe name should have the product amount in front of it,
	 * e.g. "2 transport belt"
	 * 
	 * @optional Default: true
	 */
	public show_amount_in_title : boolean = true;

	/**
	 * Whether the products are always shown in the recipe tool-tip.
	 * 
	 * @optional Default: false
	 */
	public always_show_products : boolean = false;

	/**
	 * Whether enabling this recipe unlocks its item products to show in selection lists (item filter, logistic request etc.).
	 * 
	 * @optional Default: true
	 */
	public unlock_results : boolean = true;

	/**
	 * For recipes with more than one product:
	 * This defines of which result the icon, subgroup and name is used.
	 * If it is not set and the recipe has more than 1 result
	 * the recipe will use the recipe-name and recipe-description locale and its own subgroupand icon.
	 * 
	 * For recipes with 1 result: The recipe uses the icon, subgroup and name of the result by default.
	 * If set this property is set to an empty string, the recipe will use the properties of the recipe instead of the result.
	 * 
	 * @optional
	 */
	public main_product : string;
}