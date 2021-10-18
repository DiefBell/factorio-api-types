/**
 * @interface IconSpecification Specifies the icon of an entity/item/technology/recipe etc.
 * The properties are specified directly in the prototype, not in another sub-property.
 * 
 * One of either 'icons' or 'icon' must be set for a regular sprite,
 * and one of either dark_background_icons or _dark_background_icon for a dark background sprite.
 * 
 * https://wiki.factorio.com/Types/IconSpecification
 * 
 * @example
 * icon = "__base__/graphics/icons/fluid/heavy-oil.png",
   icon_size = 32,
 *
 * @example
 * icon_size = 32,
   icons = {
       {
            icon = "__base__/graphics/icons/fluid/barreling/empty-barrel.png"
       },
       {
            icon = "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
            tint = { a: 0.75,  b: 0, g: 0, r: 0 }
       },
       {
            icon = "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
            tint = { a: 0.75, b: 0.5, g: 0.5, r: 0.5 }
       }
    }
 */
declare interface IconSpecification
{
	/**
	 * Data of icon layers for the specification.
	 * This is for if, for example, you're overlaying an image of the product item
	 * with an ingredient that differentiates it from other recipes for that product.
	 * 
	 * The rendering order of the individual icons follows the array order:
	 * Later added icons (higher index) get drawn on top of previously added icons (lower index).
	 * 
	 * Can't be an empty array.
	 */
	icons? : IconData[]; // ordered array

	/**
	 * The same as 'icons' but is used for the prototype's dark background sprite.
	 * 
	 * The IconDatas use the 'dark_background_icon' field instead of the 'icon' field.
	 */
	dark_background_icons? : IconData[];

	/**
	 * Path to the icon file if not creating a layered icon.
	 */
	icon? : FileName;

	/**
	 * The same as 'icon' but for a dark background sprite.
	 */
	dark_background_icon? : FileName;

	/**
	 * The size of the square icon, in pixels, e.g. 32 for a 32px by 32px icon.
	 * 
	 * Mandatory if not using 'icons' (icon layers) or not all instances of IconData
	 * in 'icons' specify an icon size.
	 */
	icon_size? : SpriteSizeType;

	/**
	 * Default: 0
	 */
	icon_mipmaps? : uint8 = 0;
}