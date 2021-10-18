/**
 * @interface FindTilesFilter Parameters for searching for multiple entities on a surface.
 * 
 * @member area Bounding box describing the area to search in.
 * @member position Point to search at. Has precedence over area.
 * @member radius When given with position, will return all entities within the radius of the position.
 * @member name Name of an entity to search for.
 * @member limit
 * @member has_hidden_tile
 * @member collision_mask
 */
declare interface FindTilesFilter
{
	area? : BoundingBox;
	position? : Position;
	radius? : double;
	name? : string;
	limit? : uint;
	has_hidden_tile? : boolean;
	collision_mask? : CollisionMaskLayer | CollisionMaskLayer[];
}