
/**
 * @interface SimpleItemStack Basic representation a stack of items.
 * https://lua-api.factorio.com/latest/Concepts.html#SimpleItemStack
 * 
 * @member name Prototype name of the item the stack holds.
 * @member count Number of items the stack holds. If not specified, defaults to 1.
 * @member health Health of the items in the stack. Defaults to 1.0.
 * @member durability Durability of the tool items in the stack.
 * @member ammo Amount of ammo in the ammo items in the stack.
 * @member tags Tags of the items with tags in the stack.
 */
declare interface SimpleItemStack
{
	name : string;
	count? : uint;
	health? : float;
	durability? : double;
	ammo? : double;
	tags? : string[];
}