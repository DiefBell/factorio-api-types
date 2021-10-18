/**
 * @interface HoveredEntityPosition Position and information about entity that we may want to place there.
 * 
 * @member name Name of the entity to check.
 * @member position Where the entity would be placed.
 * @member direction Direction the entity would be placed.
 * @member force The force that would place the entity. If not specified, the enemy force is assumed.
 */
declare interface HoveredEntityPosition
{
	name : string;
	position : Position;
	direction? : defines.direction;
	force? : ForceSpecification;
}