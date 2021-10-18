/**
 * @class PrototypeItemGroup: https://wiki.factorio.com/Prototype/ItemGroup
 * 
 * An item group. Item groups are shown above the list of craftable items in the player's inventory.
 * The built-in groups are "logistics", "production", "intermediate-products" and "combat" but mods can define their own.
 * See also Prototype/Item#group. Only 255 instances of this prototype may be defined.
 * 
 * @noSelf
 */
declare class PrototypeItemGroup extends PrototypeBase implements IconSpecification
{
	/**
	 * Items in recipes are ordered by item group.
	 * The order_in_recipe property can be used to specify the ordering in recipes without affecting the inventory order.
	 * 
	 * @optional Default: The order of this item group.
	 */
	order_in_recipe? : Order;



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