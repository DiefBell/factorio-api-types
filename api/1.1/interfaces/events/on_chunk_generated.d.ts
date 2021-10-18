/**
 * @interface on_chunk_generated Called when a chunk is generated.
 * 
 * https://lua-api.factorio.com/latest/events.html#on_chunk_generated
 */
declare interface on_chunk_generated extends Event
{
	/**
	 * The surface the chunk is on.
	 */
	surface : LuaSurface;

	/**
	 * Position of the chunk.
	 */
	position : ChunkPosition;

	/**
	 * Area of the chunk.
	 */
	area : BoundingBox;}
 