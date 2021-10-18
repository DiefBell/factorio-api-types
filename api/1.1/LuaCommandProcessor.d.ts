/**
 * @class LuaCommandProcessor: https://lua-api.factorio.com/latest/LuaCommandProcessor.html
 * 
 * Allows for the registration of custom console commands.
 * Similarly to event subscriptions, these don't persist through a save-and-load cycle.
 * 
 * @noSelf
 */
declare class LuaCommandProcessor
{
	/**
	 * Add a custom console command.
	 * 
	 * @param name The desired name of the command (case sensitive).
	 * @param help The localised help message. It will be shown to players using the /help command.
	 * @param handler The function that will be called when this command is invoked.
	 */
	public add_command(name : string, help : LocalisedString | string, handler : CommandHandler) : void;
}

/**
 * Global LuaCommandProcessor instance.
 */
declare const commands : LuaCommandProcessor;