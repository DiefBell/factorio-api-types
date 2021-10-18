/**
 * @interface ItemIngredientPrototype An item ingredient definition for a Prototype/Recipe.
 * It can be specified as a table with named or numbered keys, but not a mix of both.
 * This is not created by the player but by the game when loading recipt.
 * Its loading is triggered by the type of a Types/IngredientPrototype being "item".
 * 
 * https://wiki.factorio.com/Types/ItemIngredientPrototype
 * 
 * @see PrototypeRecipe
 * @see IngredientPrototype
 * @see FluidIngredientPrototype
 * 
 * @member name Name of an item prototype.
 * @member amount Amount of the fluid prototype required in the recipe.
 * 		This is defined by the amound in the IngredientPrototype.
 * @member catalyst_amount Only loaded if the table is using named keys.
 * 		Amount of this ingredient that should not be included in the item consumption statistics.
 * 		Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.
 * 		Default: 0.
 */
declare interface ItemIngredientPrototype
{
	name : string;
	amount : uint16;
	catalyst_amount? : uint16;
}