/**
 * @interface LuaPlayerBuiltEntityEventFilter For filtering on_built_entity events.
 * https://lua-api.factorio.com/latest/Event-Filters.html#LuaPlayerBuiltEntityEventFilters
 * 
 * @member filter The condition to filter on.
 * @member mode How to combine this with the previous filter. Must be "or" or "and". Default is "or". When evaluating the filters, "and" has higher precedence than "or".
 * @member invert Inverts the condition. Default is false.
 * @member type The prototype's type (only for "type" filters).
 * @member name The prototype or ghost prototype's name (only for "name" or "ghost_name" filters).
 * @member force The entity force (only for "force" filters).
 */
declare interface LuaPlayerBuiltEntityEventFilter extends EventFilter
{
	filter : 
		"ghost" |
		"rail" |
		"rail-signal" |
		"rolling-stock" |
		"robot-with-logistics-interface" |
		"vehicle" |
		"turret" | 
		"crafting-machine" |
		"wall-connectable" |
		"transport-belt-connectable" |
		"circuit-network-connectable" |
		"type" | // adds additional field "type"
		"name" | // adds additional field "name"
		"ghost_name" | // adds additional field "name"
		"force"; // adds additional field "force"
	
	type? : string;
	name? : string;
	force? : string;
};