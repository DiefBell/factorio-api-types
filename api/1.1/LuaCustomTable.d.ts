/**
 * @class LuaCustomTable: https://lua-api.factorio.com/latest/LuaCustomTable.html
 * 
 * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table.
 * This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.
 *
 * There are some notable consequences to the usage of a custom table type rather than the native Lua table type:
 * Iterating a custom table is only possible using the pairs Lua function; ipairs won't work.
 * Another key difference is that custom tables cannot be serialised into a game save file -
 * if saving the game would require serialisation of a custom table, an error will be displayed and the game will not be saved.
 * 
 * @noSelf
 */
declare class LuaCustomTable<K, V>
{
	public [key : K] : V;
}