/**
 * @class LuaBootstrap: https://lua-api.factorio.com/latest/LuaBootstrap.html
 * 
 * Entry point for registering event handlers. It is accessible through the global object named script.
 * 
 * @noSelf
 */
declare class LuaBootstrap
{
	/**
	 * Register a handler to run on event or events.
	 * 
	 * @param event The events or custom-input name to invoke the handler on.
	 * @param handler The handler to run. Passing null will unregister the handler.
	 * @param filters The filters for this single event registration.
	 */
	public on_event(
		event : defines.events | defines.events[] | string[],
		handler : EventHandler | null,
		filters? : EventFilter[]
	) : void;

	public on_init(handler : () => void) : void;

	/**
	 * Register a function to be run on module load.
	 * This is called every time a save file is loaded *except* for the instance when a mod is loaded into a save file that it previously wasn't part of.
	 * Additionally this is called when connecting to any other game in a multiplayer session and should never change the game state.
	 * 
	 * This is meant for 3 specific reasons and only 3:
	 * - re-register conditional event handlers
	 * - re-setup meta tables
	 * - create local references to tables stored in the global table
	 * 
	 * @param handler Event handler
	 */
	public on_load(handler : () => void) : void;

	/**
	 * 
	 */
	public on_nth_tick(tick : number, handler : (data : NthTickEventData) => void)
}

declare const script : LuaBootstrap;

interface NthTickEventData
{
	// the tick during which the even happened
	tick : uint;
	// the nth tick this handler was registered to
	nth_tick : uint;
}