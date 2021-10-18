/**
 * @class LuaControl
 * 
 * https://lua-api.factorio.com/latest/LuaControl.html
 * 
 * This is an abstract base class containing the common functionality between LuaPlayer and entities (see LuaEntity).
 * When accessing player-related functions through a LuaEntity, it must refer to a character entity.
 */
declare abstract class LuaControl
{
	/**
	 * Current position of the entity.
	 */
	public readonly position : Position;
}