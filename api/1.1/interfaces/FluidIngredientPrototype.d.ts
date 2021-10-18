/**
 * @interface FluidIngredientPrototype A fluid ingredient definition for a Prototype/Recipe.
 * This is not created by the player but by the game when loading recipt.
 * Its loading is triggered by the type of a Types/IngredientPrototype being "fluid".
 * 
 * https://wiki.factorio.com/Types/FluidIngredientPrototype
 * 
 * @see PrototypeRecipe
 * @see IngredientPrototype
 * @see ItemIngredientPrototype
 * 
 * @member name Name of a fluid prototype.
 * @member amount Amount of the fluid prototype required in the recipe.
 * 		This is defined by the amound in the IngredientPrototype.
 * @member temperature Sets the expected temperature of the fluid ingredient.
 * @member minimum_temperature If 'temperature' is not set then this sets the expected minimum temperature of the fluid ingredient.
 * @member maximum_temperature If 'temperature' is not set then this sets the expected maximum temperature of the fluid ingredient.
 * @member catalyst_amount Amount of this ingredient that should not be included in the fluid consumption statistics.
 * 		Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.
 * 		Default: 0.
 * @member fluidbox_index Used to specify which fluidbox this product should use on the machine.
 * 		It will only use this one fluidbox.
 * 		Default: 0 (no specific fluidbox).
 */
declare interface FluidIngredientPrototype
{
	name : string;
	amount : double;
	temperature? : double;
	minimum_temperature? : double;
	maximum_temperature? : double;
	catalyst_amount? : double;
	fluidbox_index? : uint32;
}