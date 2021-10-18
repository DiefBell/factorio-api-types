/**
 * @interface on_picked_up_item Event information for the on_picked_up_item event.
 * https://lua-api.factorio.com/latest/events.html#on_picked_up_item
 * 
 * @member item_stack The SimpleItemStack representing the stack of items the player has picked up. If specified as a string, it represents a full stack containing the specified item.
 * @member player_index The index of the player that has picked up the items.
 */
declare interface on_built_entity extends Event
{
	item_stack : SimpleItemStack | string;
	player_index : uint;
}
