/**
 * @class PrototypeItem: https://wiki.factorio.com/Prototype/Item
 * 
 * Possible configuration for all items.
 * 
 * @noSelf
 */
declare class PrototypeItem extends PrototypeBase implements IconSpecification
{
	/**
	 * Count of items of the same name that can be stored in one inventory slot. Must be 1 when 'stackable' is false.
	 */
	public stack_size : ItemCountType;

	/**
	 * Name of prototype/Entity that can be built using this item.
	 * If this item should be the one that construction bots use to build the specified place_result,
	 * set the primary-place-result item flag.
	 * 
	 * The localised name of the entity will be used as the in-game item name.
	 * This behavior can be overwritten by specifying localised_name on this item, it will be used instead.
	 * 
	 * @optional Default: ""
	 */
	public place_result : string = "";

	/**
	 * @optional Default: ""
	 */
	public placed_as_equipment_result : string = "";

	/**
	 * Empty text of subgroup is not allowed.
	 * (You can ommit the definition to get the default "other").
	 */
	public subgroup : string = "other";

	/**
	 * Must exist when a fuel_value is defined. Name of one of the fuel categories.
	 * 
	 * @see PrototypeFuelCategory
	 * 
	 * @optional Default: ""
	 */
	public fuel_category : string = "";

	/**
	 * The item that is the result when this item gets burned as fuel.
	 * 
	 * @optional Default: ""
	 */
	public burnt_result : string = "";

	/**
	 * Literally no documentation for this.
	 */
	public place_as_tile : PlaceAsTile;

	/**
	 * Used to give the item multiple different icons so that they look less uniform on belts etc.
	 * For inventory icons and similar, icon/icons will be used. Maximum number of variations is 16.
	 */
	public pictures : SpriteVariations;

	/**
	 * Specifies some properties of the item.
	 */
	public flags : ItemPrototypeFlag[];

	/**
	 * I'm guessing this is the default stack size when requesting the item in logistics.
	 * 
	 * @optional Default: The stack size of this item.
	 */
	public default_request_amount : ItemCountType;

	/**
	 * The number of items needed to connect 2 entities with this as wire.
	 * In the base game, green wire, red wire and copper cable have this set to 1.
	 * 
	 * @optional Default: 0
	 */
	public wire_count : ItemCountType = 0;

	/**
	 * Amount of energy it gives when used as fuel.
	 * Mandatory when fuel_acceleration_multiplier, fuel_top_speed_multiplier, fuel_emissions_multiplier, or fuel_glow_color are used.
	 * 
	 * @optional Default: "0J"
	 */
	public fuel_value : Energy;

	/**
	 * @optional Default: 1.0
	 */
	public fuel_acceleration_multiplier : double = 1.0;

	/**
	 * @optional Default: 1.0
	 */
	public fuel_top_speed_multiplier : double = 1.0;

	 /**
	 * @optional Default: 1.0
	 */
	public fuel_emissions_multiplier : double = 1.0;

	/**
	 * Colors the glow of the burner energy source when this fuel is burned.
	 * 
	 * @optional Default: `{r:0, g:0, b:0, a:0}`
	 */
	public fuel_glow_color : Color = { r: 0, g: 0, b: 0, a: 0 };

	public open_sound : Sound;

	public close_sound : Sound;

	public rocket_launch_products : ItemProductPrototype[];

	public rocket_launch_product : ItemProductPrototype;




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