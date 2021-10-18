/**
 * @type PlayerIdentification
 * 
 * https://lua-api.factorio.com/latest/Concepts.html#PlayerIdentification
 * 
 * A player may be specified by either their index, the player's name, or the LuaPlayer object for that player.
 */
declare type PlayerIdentification = uint | string | LuaPlayer;
