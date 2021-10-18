/**
 * @class PrototypeBase: https://wiki.factorio.com/PrototypeBase
 * 
 * The abstract base for prototypes. PrototypeBase defines the common features of prototypes, such as localization and order
 * 
 * @noSelf
 */
declare abstract class PrototypeBase
{
	/**
	 * Specification of the type of the prototype.
	 * 
	 * For a full list: https://wiki.factorio.com/Prototype_definitions
	 */
	public type : DataTypes | string; // I think the "| string" is just a temporary placeholder because it's not all filled out just yet

	/**
	 * Unique textual identification of the prototype.
	 * 
	 * May not contain '.', may not exceed a length of 200 characters.
	 */
	public name : string | string;

	/**
	 * Used to order items in inventory, recipes and GUI's.
	 * May not exceed a length of 200 characters.
	 */
	public order : Order;

	/**
	 * Overwrites the name set in the locale file.
	 * Can be used to easily set a procedurally-generated name
	 * because the LocalisedString format allows inserting parameters into the name directly from the Lua script.
	 */
	localised_name : LocalisedString;

	/**
	 * Overwrites the description set in the locale file.
	 * The description is usually shown in the tooltip of the prototype.
	 */
	localised_description : LocalisedString;
}