/**
 * @interface PlaceAsTile
 * 
 * https://wiki.factorio.com/Types/PlaceAsTile
 * 
 * @member result Name of a Prototype/Tile.
 * @member condition
 * @member condition_size
 */
declare interface PlaceAsTile
{
	result : string;
	condition : CollisionMask;
	condition_size : int32;
}