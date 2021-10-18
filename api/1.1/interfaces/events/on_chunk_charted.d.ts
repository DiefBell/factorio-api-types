/**
 * @interface on_chunk_charted Called when a chunk is charted or re-charted.
 * 
 * https://lua-api.factorio.com/latest/events.html#on_chunk_charted
 */
declare interface on_chunk_charted extends Event
{
	/**
	 * The surface the chunk is on
	 */
	surface_index : uint;

	/**
	 * The position of the chunk.
	 */
	position : ChunkPosition;

	/**
	 * Area of the chunk.
	 */
	area : BoundingBox;

	/**
	 * The force that charted the chunk.
	 */
	force : LuaForce;
}
 