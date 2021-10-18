/**
 * @class PrototypeEntity: https://wiki.factorio.com/Prototype/Entity
 * 
 * Abstract base of all entities in the game.
 * Entity is basically everything that can be on the map (except tiles).
 * For in game script access to entity, take a look at LuaEntity.
 * 
 * @see LuaEntity
 * 
 * @noSelf
 */
declare abstract class PrototypeEntity extends PrototypeBase implements IconSpecification
{

	/******* ICON SPECIFICATION *******/
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