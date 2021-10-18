/**
 * @class LuaChunkIterator https://lua-api.factorio.com/latest/LuaChunkIterator.html
 * 
 * A chunk iterator can be used for iterating chunks coordinates of a surface.
 * The returned type is a ChunkPositionAndArea containing the chunk coordinates and its area.
 */
declare class LuaChunkIterator implements Iterable<ChunkPositionAndArea>
{
	/**
	 * Get the next chunk position or null, and increments the iterator.
	 */
	public [Symbol.iterator]() : IterableIterator<ChunkPositionAndArea | null>;

	/**
	 * 	Is this object valid?
	 */
	public readonly valid : boolean;

	/**
	 * 	The class name of this object.
	 */
	public readonly object_name : string;

	/**
	 * All methods, and properties that this object supports.
	 */
	public help() : string;
}