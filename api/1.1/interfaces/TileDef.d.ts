/**
 * @Interface TileDef Basic information for creation of a tile.
 * 
 * https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.set_tiles
 */
declare interface TileDef
{
	/**
	 * Prototype of the tile.
	 */
	name : string;

	/**
	 * Position of the tile.
	 */
	position : Position;
}