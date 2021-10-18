/**
 * @interface FindEntitiesFilter Parameters for searching for multiple entities on a surface.
 * 
 * @member area Bounding box describing the area to search in.
 * @member position Point to search at. Has precedence over area.
 * @member radius When given with position, will return all entities within the radius of the position.
 * @member name Name of an entity to search for.
 * @member type Type of entity to search for.
 * @member ghost_name
 * @member ghost_type
 * @member direction Finds entities with the given direction(s).
 * @member collision_mask
 * @member force Returns entities owned by the given force(s).
 * @member to_be_deconstructed Return entities marked for deconstruction.
 * @member to_be_upgraded Return entities marked for upgrade.
 * @member limit Number of entities to be returned.
 * @member invert Whether or not the filters should be inverted. Filters that can be inverted are:
 * name, type, ghost_name, ghost_type, direction, collision_mask, force.
 */
declare interface FindEntitiesFilter
{
	area? : BoundingBox;
	position? : Position;
	radius? : double;
	name? : string;
	type? : string | string[];
	ghost_name? : string | string[];
	ghost_type? : string | string[];
	direction? : defines.direction | defines.direction[];
	collision_mask? : CollisionMaskLayer | CollisionMaskLayer[];
	force? : ForceSpecification | ForceSpecification[];
	to_be_deconstructed? : boolean;
	to_be_upgraded? : boolean;
	limit? : uint;
	invert? : boolean;
}