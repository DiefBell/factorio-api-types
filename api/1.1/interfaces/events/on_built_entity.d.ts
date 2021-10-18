/**
 * @interface on_built_entity Called when player builds something. Can be filtered using LuaPlayerBuiltEntityEventFilters
 * https://lua-api.factorio.com/latest/events.html#on_built_entity
 * 
 * @member created_entity The entity that was created.
 * @member player_index The index of the player that build the entity.
 */
declare interface on_built_entity extends Event
{
	created_entity : any; //LuaEntity;
	player_index : uint;
	stack : any; //LuaItemStack;
	item? : any; //LuaItemPrototype;
	tags? : any; //Tags;
}
 