/**
 * @class PrototypeTool: https://wiki.factorio.com/Prototype/Tool
 * 
 * Items with a "durability". Used for science packs.
 * 
 * @noSelf
 */
declare class PrototypeTool extends PrototypeItem
{
	/**
	 * The durability of this tool. Must be positive. Mandatory if 'infinite' is false.
	 * 
	 * @optional
	 */
	public durability : double;

	/**
	 * May not be longer than 200 characters.
	 * 
	 * @optional Default: `"description.durability-key"`.
	 */
	public durability_description_key : string = "description.durability-key";

	/**
	 * May not be longer than 200 characters.
	 * 
	 * @optional Default: `"description.durability-value"`
	 */
	public durability_description_value : string = "description.durability-value";

	/**
	 * Whether this tool has infinite durability.
	 * 
	 * @optional Default: `true`
	 */
	public infinite : boolean = true;
}