/**
 * @class PrototypeRecipe: https://wiki.factorio.com/Prototype/Recipe
 * 
 * A recipe. It can be a crafting recipe, a smelting recipe, or a custom type of recipe.
 * 
 * @noSelf
 */
declare class PrototypeRecipe extends RecipeData implements IconSpecification
{
	/**
	 * The category of this recipe. The built-in categories can be found here: https://wiki.factorio.com/Data.raw#recipe-category.
	 * This refers to whether it can be crafted by hand (crafting),
	 * only by an assembler (basic-crafting) (???),
	 * assembler with a fluid input (crafting-with-fluid) etc. 
	 * 
	 * See also https://wiki.factorio.com/Prototype/RecipeCategory.
	 * 
	 * @optional Default: "crafting"
	 */
	public category : string = "crafting";

	/**
	 * The subgroup of this recipe.
	 * If not specified, defaults to the subgroup of the product if there is only 1, or main_product if multiple products exist.
	 * If multiple products exist and no main_product is specified, the subgroup is required.
	 * 
	 * @optional
	 */
	public subgroup : string;

	/**
	 * Used by crafting machine working_visualisations to tint certain layers with the recipe color.
	 * apply_recipe_tint on the working visualisation determines which of the 4 colors is used for that layer (if any).
	 * 
	 * @optional Example is default settings.
	 * @example {
	 * 		primary: {r: 0, g: 0, b: 0, a: 0},
	 * 		secondary: {r: 0, g: 0, b: 0, a: 0},
	 * 		tertiary: {r: 0, g: 0, b: 0, a: 0},
	 * 		quaternary: {r: 0, g: 0, b: 0, a: 0}
	 * }
	 */
	public crafting_machine_tint : Record<"primary" | "secondary" | "tertiary" | "quaternaty", Color> = {
		primary: {r: 0, g: 0, b: 0, a: 0},
		secondary: {r: 0, g: 0, b: 0, a: 0},
		tertiary: {r: 0, g: 0, b: 0, a: 0},
		quaternary: {r: 0, g: 0, b: 0, a: 0}
	};




	/****** ICON SPECIFICATION *****/
	/**
	 * Data of icon layers for the specification.
	 * This is for if, for example, you're overlaying an image of the product item
	 * with an ingredient that differentiates it from other recipes for that product.
	 * 
	 * The rendering order of the individual icons follows the array order:
	 * Later added icons (higher index) get drawn on top of previously added icons (lower index).
	 * 
	 * Can't be an empty array.
	 * 
	 * @optional
	 */
	public icons : IconData[]; // ordered array

	/**
	 * The same as 'icons' but for a dark background sprite.
	 * 
	 * @optional
	 */
	public dark_background_icons : IconData[];

	/**
	 * Path to the icon file if not creating a layered icon.
	 * 
	 * @optional
	 */
	public icon : FileName;

	/**
	 * The same as 'icon' but for a dark background sprite.
	 * 
	 * @optional
	 */
	public dark_background_icon : FileName;

	/**
	 * The size of the square icon, in pixels, e.g. 32 for a 32px by 32px icon.
	 * 
	 * Mandatory if not using 'icons' (icon layers) or not all instances of IconData
	 * in 'icons' specify an icon size.
	 * 
	 * @optional If using icons and all icons define icon_sizes.
	 */
	public icon_size : SpriteSizeType;

	/**
	 * @optional Default: 0
	 */
	public icon_mipmaps : uint8 = 0;

	
}