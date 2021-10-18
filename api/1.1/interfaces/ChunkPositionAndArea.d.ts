/**
 * @interface ChunkPositionAndArea
 * 
 * https://lua-api.factorio.com/latest/Concepts.html#ChunkPositionAndArea
 * 
 * A ChunkPosition with an added bounding box for the area of the chunk.
 */
declare interface ChunkPositionAndArea extends ChunkPosition
{
	area : BoundingBox;
}