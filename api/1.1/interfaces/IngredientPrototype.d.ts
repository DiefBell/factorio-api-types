/**
 * @interface IngredientPrototype Class used for Prototype/Recipe ingredients.
 * It loads as Types/ItemIngredientPrototype or Types/FluidIngredientPrototype, depending on the type.
 * 
 * https://wiki.factorio.com/Types/IngredientPrototype
 * 
 * @member type Either "item" or "fluid".
 * 		If this is item, the definition is loaded as a Types/ItemIngredientPrototype.
 * 		If this is fluid, the definition is loaded as a Types/FluidIngredientPrototype.
 * @member name Name of the ingredient in the recipe.
 * @member amount Amount of that ingredient required by the recipe.
 * 
 * @see PrototypeRecipe
 * @see ItemIngredientPrototype
 * @see FluidIngredientPrototype
 */
declare interface IngredientPrototype
{
	type : "item" | "fluid";
	name : string;
	amount : uint;
}