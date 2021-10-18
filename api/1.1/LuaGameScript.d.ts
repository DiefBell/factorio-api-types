/**
 * @Class LuaGameScript
 * https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_surface
 * 
 * Main toplevel type, provides access to most of the API though its members.
 * An instance of LuaGameScript is available as the global object named game.
 * 
 * @noSelf
 */
declare class LuaGameScript
{
	public get_player(player_index : number) : LuaPlayer;
	public print(message : LocalisedString | string, color? : Color) : void;

	/**
	 * Create a new surface.
	 * 
	 * @param name Name of the new surface.
	 * @param settings Map generation settings.
	 * 
	 * @returns The surface that was just created
	 * 
	 * @note The game currently supports a maximum of 4,294,967,295 surfaces, including the default surface.
	 * @note Surface names must be unique.
	 */
	public create_surface(name : string, settings? : Partial<MapGenSettings>) : LuaSurface;

	public readonly surfaces : Record<string, LuaSurface>;
}

/**
 * Global LuaGameScript instance.
 */
declare const game : LuaGameScript;