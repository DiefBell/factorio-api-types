/**
 * @class PrototypeCliff: https://wiki.factorio.com/Prototype/Cliff
 * 
 * A cliff.
 * 
 * @see LuaEntity
 * 
 * @noSelf
 */
declare class PrototypeCliff extends PrototypeEntity
{
	/**
	 */
	public grid_offset : Vector;

	/**
	 */
	public grid_size : Vector;

	/**
	 */
	public orientations : Record<CliffDirection, OrientedCliffPrototype>;

	/**
	 * @optional Default: 4
	 */
	public cliff_height : float = 4;

	/**
	 * Name of a capsule that has a robot_action to explode cliffs.
	 * 
	 * @optional
	 */
	public cliff_explosive : string;
}