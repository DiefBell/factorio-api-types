/**
 * @interface Command Information passed to a CommandHandler function.
 * https://lua-api.factorio.com/latest/LuaCommandProcessor.html
 * 
 * @member name The name of the command.
 * @member tick The tick the command was used in.
 * @member player_index The player who issued the command, or null if it was issued from the server console.
 * @member parameter The parameter passed after the command, if there is one.
 */
declare interface Command
{
	name : string;
	tick : uint;
	player_index? : uint;
	parameter? : string;
}