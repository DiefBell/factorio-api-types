/**
 * @class PrototypeArmor: https://wiki.factorio.com/Prototype/Armor
 *  
 * @noSelf
 */
declare class PrototypeArmor extends PrototypeTool
{
	/**
	 * Name of the Prototype/EquipmentGrid that this armor has.
	 * 
	 * @optional
	 */
	public equipment_grid : string;

	/**
	 * What amount of damage the armor takes on what type of damage is incoming.
	 * 
	 * @optional
	 */
	public resistances : Resistance[];

	/**
	 * By how many slots the inventory of the player is expanded when the armor is worn.
	 * 
	 * @optional
	 */
	public inventory_bonus_size : ItemStackIndex;
}