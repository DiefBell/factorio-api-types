/**
 * @interface OrientedCliffPrototype
 * 
 * https://wiki.factorio.com/Types/OrientedCliffPrototype
 * 
 * @member collision_bounding_box
 * @member pictures
 * @member fill_volume
 */
declare interface OrientedCliffPrototype
{
	collision_bounding_box : BoundingBox;
	pictures : SpriteVariations;
	fill_volume : uint32;
}