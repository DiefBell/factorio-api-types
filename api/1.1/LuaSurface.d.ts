/**
 * @class LuaSurface https://lua-api.factorio.com/latest/LuaSurface.html
 * 
 * A "domain" (dimension) of the world.
 * 
 * Surfaces can only be created and deleted through the API.
 * Surfaces are uniquely identified by their name.
 * Every game contains at least the surface "nauvis".
 * 
 * @noSelf
 * */
declare class LuaSurface 
{
	/**
     * Get the pollution on this surface at a given position.
	 * Pollution is stored per chunk, so this will return the same value for all positions in one chunk.
	 * 
	 * @param position Position to get the pollution value of.
	 * 
     * @return The pollution value at the given position.
	 * @example game.surfaces[1].get_pollution({1,2})
     */
	public get_pollution(position : Position) : double;

	/**
	 * Check for collisions with terrain or other entitites.
	 * 
	 * @param name Name of the entity to check.
	 * @param position Where the entity would be placed.
	 * @param direction Direction the entity would be placed facing.
	 * @param force The force that would place the entity. If not specified, the enemy force is assumed.
	 * @param build_check_type What check type should be done.
	 * @param forced If build_check_type is "ghost_place" and this is true then things that can be marked for deconstruction are ignored.
	 * 
	 * @return Whether or not terrain or other entities is being collided with.
	 */
	public can_place_entity(arg : {
		name : string,
		position : Position,
		direction? : defines.direction,
		force? : ForceSpecification,
		build_check_type? : defines.build_check_type,
		forced? : boolean
	}) : boolean;

	/**
	 * Checks whether there exists an entity at the given location that can be fast-replaced with the given entity parameters.
	 * 
	 * @param hoveredEntityPosition Entity type and position of the entity we're hovering to build at that position.
	 * 
	 * @return Whether or not the entity already at the position we're hovering can be fast-replaced.
	 */
	public can_fast_replace(hoveredEntityPosition : HoveredEntityPosition) : boolean;

	/**
	 * Find a specific entity at a specific position.
	 * 
	 * @param entity Entity to look for.
	 * @param position Coordinates to search at.
	 * 
	 * @return The entity at the given position. Null if no such entity is found.
	 * @example game.player.selected.surface.find_entity("filter-inserter", { x: 0, y: 0 })
	 */
	public find_entity(entity : string, position : Position) : LuaEntity | null;

	/**
	 * Find entities in a given area.
	 * If no area is given all entities on the surface are returned.
	 * 
	 * @param area The area in which to search for entities.
	 * 
	 * @return A list of all entites found in the given area.
	 * @example game.surfaces["nauvis"].find_entities({ left_top: { x: -2, y: -3}, right_bottom: { x: 5, y: 8} })
	 */
	public find_entities(area? : BoundingBox) : LuaEntity[];

	/**
	 * Find entities of a given type or name in a given area.
	 * If no filters (name, type, force etc) are given, returns all entities in the search area.
	 * If multiple filters are specified, returns only entities matching all given filters.
	 * 
	 * If no area or position are given, then the entire surface is searched.
	 * If position is given, returns entities colliding with that position (i.e the given position is within the entity's collision box).
	 * If position and radius are given, returns entities in that radius of the position.
	 * If area is specified, returns entities colliding with that area.
	 * 
	 * @param findEntitiesFilter Settings for filtering when finding entities.
	 * 
	 * @return A list of found entities.
	 * 
	 * @example game.surfaces[1].find_entities_filtered{area = { left_top: { x: -2, y: -3}, right_bottom: { x: 5, y: 8} }, type = "resource"} // gets all resources in the rectangle
	 * @example game.surfaces[1].find_entities_filtered{area = { left_top: { x: -2, y: -3}, right_bottom: { x: 5, y: 8} }, name = "iron-ore"} // gets all iron ores in the rectangle
	 */
	public find_entities_filtered(findEntitiesFilter : FindEntitiesFilter) : LuaEntity[];

	/**
	 * Find tiles of a given name in a given area.
	 * If no filters are given returns all tiles in the search area.
	 * If no area or position and radius is given, then the entire surface is searched.
	 * If position and radius are given, only tiles within the radius of the position are included.
	 * 
	 * @param findTilesFilter Settings for filtering when finding tiles.
	 * 
	 * @return A list of found tiles.
	 */
	public find_tiles_filtered(findTilesFilter : FindTilesFilter) : LuaTile[];

	/**
	 * Count entities of given type or name in a given area. Works just like find_entities_filtered, except this only returns the count.
	 * As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of entities.
	 * 
	 * If no area or position are given, then the entire surface is searched.
	 * If position is given, returns entities colliding with that position (i.e the given position is within the entity's collision box).
	 * If position and radius are given, returns entities in that radius of the position.
	 * If area is specified, returns entities colliding with that area.
	 * 
	 * @param countEntitiesFilter Settings for filtering when finding and counting entities.
	 * 
	 * @return The number of found entities.
	 */
	public count_entities_filtered(countEntitiesFilter : FindEntitiesFilter) : uint;

	/**
	 * Count tiles of a given name in a given area. Works just like find_tiles_filtered, except this only returns the count.
	 * As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
	 * 
	 * If no area or position and radius is given, then the entire surface is searched.
	 * If position and radius are given, only tiles within the radius of the position are included.
	 * 
	 * @param countTilesFilter Settings for filtering when finding and counting tiles.
	 * 
	 * @return The number of found tiles.
	 */
	public count_tiles_filtered(countTilesFilter : FindTilesFilter) : uint;

	/**
	 * Find a non-colliding position within a given rectangle.
	 * 
	 * @param name Prototype name of the entity to find a position for.
	 * 		(The bounding box for the collision checking is taken from this prototype.)
	 * @param search_space The rectangle to search inside.
	 * @param precision The step length from the given position as it searches, in tiles. Minimum value is 0.01.
	 * @param force_to_tile_center Will only check tile centers.
	 * 		This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers.
	 * 		Default false.
	 * 
	 * @return The non-colliding position, or null if no suitable position was found.
	 */
	public find_non_colliding_position(
		name : string,
		search_space :BoundingBox,
		precision : double,
		force_to_tile_center? : boolean
	) : Position | null;

	/**
	 * Create an entity on this surface.
	 * 
	 * @param arg 
	 */
	public create_entity(arg : any) : LuaEntity;

	/**
	 * Get the tile at the given position.
	 * 
	 * @param x The x position of the tile.
	 * @param y The y position of the tile.
	 */
	public get_tile(x : int, y : int) : LuaTile;

	/**
	 * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
	 * 
	 * Placing a mineable tile on top of a non-mineable one will turn the latter into the LuaTile::hidden_tile for that tile.
	 * Placing a mineable tile on a mineable one or a non-mineable tile on a non-mineable one will not modify the hidden tile.
	 * This restriction can however be circumvented by using LuaSurface::set_hidden_tile.
	 * 
	 * @note It is recommended to call this method once for all the tiles you want to change rather than calling it individually for every tile.
	 * 		As the tile correction is used after every step, calling it one by one could cause the tile correction logic to redo some of the changes.
	 * 		Also, many small API calls are generally more performance intensive than one big one.
	 * 
	 * @param tiles Prototypes and positions of tiles to create.
	 * @param correct_tiles If false, the correction logic is not applied to the changed tiles. Defaults to true.
	 * @param remove_colliding_entities 
	 * @param remove_colliding_decoratives 
	 * @param raise_event 
	 */
	public set_tiles(
		tiles : TileDef[],
		correct_tiles? : boolean,
		remove_colliding_entities? : boolean | "abort_on_collision",
		remove_colliding_decoratives? : boolean,
		raise_event? : boolean
	) : void;

	/**
	 * Get an iterator going over every chunk on this surface.
	 */
	public get_chunks() : LuaChunkIterator;

	/**
	 * Is a given chunk generated?
	 * 
	 * @param position The chunk's position.
	 */	
	public is_chunk_generated(position : ChunkPosition) : boolean;

	/**
	 * Request that the game's map generator generate chunks at the given position for the given radius on this surface.
	 * 
	 * @param position Where to generate the new chunks.
	 * @param radius The chunk radius from position to generate new chunks in.
	 */
	public request_to_generate_chunks(position : Position, radius : uint) : void;

	/**
	 * Blocks and generates all chunks that have been requested using all available threads.
	 */
	public force_generate_chunk_requests() : void;

	//*******************************************/



	/**
	 * Gets the script areas that match the given name or if no name is given all areas are returned.
	 * @param name Name of script area to search for.
	 * 
	 * @returns Script areas matching given name.
	 */
	public get_script_areas(name? : string) : ScriptArea[];

	/**
	 * Gets the first script area found with the given name or id.
	 * 
	 * @param key The name or id of the ScriptArea to get.
	 * 
	 * @returns The found ScriptArea.
	 */
	public get_script_area(key? : string | uint) : ScriptArea;

	/**
	 * Sets the given script area to the new values.
	 * 
	 * @param id Id of the ScriptArea to edit.
	 * @param area New values for the ScriptArea.
	 */
	public edit_script_area(id : uint, area : ScriptArea) : void;

	/**
	 * Adds the new given ScriptArea.
	 * 
	 * @param area The ScriptArea to add.
	 * 
	 * @returns The id of the created ScriptArea.
	 */
	public add_script_area(area : ScriptArea) : uint;

	/**
	 * Removes the ScriptArea with the given id.
	 * 
	 * @param id id of the ScriptArea to remove.
	 * 
	 * @returns Whether or not the ScriptArea was actually removed.
	 * 		False if it didn't exist.
	 */
	public remove_script_area(id : uint) : boolean;

	/**
	 * Gets the script positions that match the given name, or all positions are returned if no name is given.
	 * 
	 * @param name Name of the script position to get.
	 * 
	 * @returns The found ScriptPositions.
	 */
	public get_script_positions(name? : string) : ScriptPosition[];

	/**
	 * Gets the first script position found with the given name or id.
	 * 
	 * @param key The name or id of the script position to get.
	 * 
	 * @returns The found ScriptPosition.
	 */
	public get_script_position(key? : string | uint) : ScriptPosition;

	/**
	 * Sets the given script position to the new values.
	 * 
	 * @param id The id of the position to edit.
	 * @param area The new ScriptPosition data.
	 */
	public edit_script_position(id : uint, area : ScriptPosition) : void;

	/**
	 * Adds the given script position.
	 * 
	 * @param area The ScriptPosition to add.
	 * 
	 * @returns The id of the created position.
	 */
	public add_script_position(area : ScriptPosition) : uint;

	/**
	 * Removes the ScriptPosition with the given id.
	 * 
	 * @param id id of the ScriptPosition to remove.
	 * 
	 * @returns Whether or not the ScriptPosition was actually removed.
	 * 		False if it didn't exist.
	 */
	public remove_script_position(id : uint) : boolean;

	/**
	 * Gets the map exchange string for the current map generation settings of this surface.
	 * 
	 * @returns The map exchange string.
	 */
	public get_map_exchange_string() : string;

	/**
	 * Gets the starting area radius of this surface.
	 * 
	 * @returns The starting area of this surface.
	 */
	public get_starting_area_radius() : double;

	/**
	 * Gets the closest entity in the list to this position.
	 * 
	 * @param position The position to check from.
	 * @param entities The list of entities to check.
	 * 
	 * @returns The entitity in the list closest to the given position.
	 */
	public get_closest(position : Position, entities : LuaEntity[]) : LuaEntity;

	/**
	 * Gets train stops matching the given filters.
	 * 
	 * @param opts The filter when searching for train stops. 
	 */
	public get_train_stops(opts? : { name? : string, force? : ForceSpecification}) : LuaEntity[];

	/**
	 * Gets the total amount of pollution on the surface by iterating over all of the chunks containing pollution.
	 * 
	 * @returns The total amount of pollution on this surface.
	 */
	public get_total_pollution() : double;

	/**
	 * Not entirely sure what this does as the API doesn't say.
	 * 
	 * @param prototype The entity prototype to check.
	 * @param position The position to check.
	 * @param use_map_generation_bounding_box If the map generation bounding box should be used instead of the collision bounding box.
	 * @param direction 
	 */
	public entity_prototype_collides(
		prototype : EntityPrototypeSpecification,
		position : Position,
		use_map_generation_bounding_box : boolean,
		direction? : defines.direction
	) : void; // SHOULD THIS BE A VOID???

	/**
	 * API docs have no info on this either.
	 * 
	 * @param prototype The decorative prototype to check
	 * @param position The position to check.
	 */
	public decorative_prototype_collides(prototype : string, position : Position) : void; // SHOULD THIS BE A VOID???

	/**
	 * Calculate and return the named properties for the tiles at the given positions.
	 * 
	 * @param property_names Names of properties (e.g. "elevation") to calculate.
	 * @param positions Positions for which to calculate property values.
	 * 
	 * @returns Dictionary of property values, keyed by property name.
	 */
	public calculate_tile_properties(property_names : string[], positions : Position[]) : TileProperties;

	/**
	 * Returns all the entities on this chunk for the given force.
	 * 
	 * @param position The chunk's position.
	 * @param force The force to get entities for.
	 * 
	 * @returns A list of entities in the given chunk with the given force.
	 */
	public get_entities_with_force(position : ChunkPosition, force : LuaForce | string) : LuaEntity[];

	/**
	 * Sets the given area to the checkerboard lab tiles.
	 * 
	 * @param area The tile area.
	 */
	public build_checkerboard(area : BoundingBox) : void;

	/**
	 * The name of this surface. Names are unique among surfaces.
	 * 
	 * **Note:** the default surface can't be renamed.
	 */
	public name : string;

	/**
	 * Unique ID associated with this surface.
	 */
	public readonly index : uint;

	/**
	 * The generation settings for the surface.
	 * Can be used to adjust the surface after changing generation settings.
	 * 
	 * **Note:** When changing settings runtime the game will not retroactively change anything.
	 * 
	 * @see LuaSurface.regenerate_entity
	 * @see LuaSurface.regenerate_decorative
	 * @see LuaSurface.delete_chunk
	 */
	public map_gen_settings : MapGenSettings;

	/**
	 * When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings.
	 */
	public generate_with_lab_tiles : boolean;

	/**
	 * When set to true, the sun will always shine.
	 */
	public always_day : boolean;

	/**
	 * Current time of day, as a number in range [0, 1).
	 */
	public daytime : float;

	/**
	 * Amount of darkness at the current time.
	 */
	public darkness : float;

	/**
	 * Current win speed.
	 */
	public wind_speed : float;

	/**
	 * Current wind direction.
	 */
	wind_orientation : float;

	/**
	 * Change in wind orientation per pick.
	 */
	wind_orientation_change : float;

	/**
	 * Is peacful mode enabled on this surface?
	 */
	public peaceful_mode : boolean;

	/**
	 * True is daytime is currently frozen.
	 */
	public freeze_daytime : boolean;

	/**
	 * The number of ticks per day for this surface.
	 */
	public ticks_per_day : uint;

	/**
	 * The day time at which dusk starts.
	 */
	public dusk : double;

	/**
	 * The day time at which dawn starts.
	 */
	public dawn : double;

	/**
	 * The day time at which evening starts.
	 */
	public evening : double;

	/**
	 * The day time at which morning starts.
	 */
	public morning : double;

	/**
	 * The multiplier of solar power on this surface. Cannot be less than 0.
	 * 
	 * **Note:** Solar equipment is still limited to its maximum power output.
	 */
	public solar_power_multiplier : double;

	/**
	 * The minimal brightness during the night. Default is 0.15.
	 * The value has an effect on the game simalution only, it doesn't have any effect on rendering.
	 */
	public min_brightness : double;

	/**
	 * Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).
	 * The LUT is multiplied by ((1 - weight) + brightness * weight) and result is clamped to range [0, 1].
	 * Default is {0, 0, 0}, which means no influence.
	 * 
	 * Makes night on the surface pitch black, assuming LuaSurface.min_brightness being set to default value 0.15:
	 * @example game.surfaces[1].brightness_visual_weights = { 1 / 0.85, 1 / 0.85, 1 / 0.85 }
	 */
	public brightness_visual_weights : ColorModifier;

	/**
	 * If clouds are shown on this surface.
	 * **Note:** If false, clouds are never shown. If true the player must also have clouds enabled in graphics settings for them to be shown.
	 */
	public show_clouds : boolean;

}