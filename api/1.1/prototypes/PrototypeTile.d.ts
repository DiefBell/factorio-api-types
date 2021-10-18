/**
 * @class PrototypeTile: https://wiki.factorio.com/Prototype/Tile
 * 
 * A tile. Only 255 instances of this prototype may be defined.
 * 
 * @noSelf
 */
declare class PrototypeTile extends PrototypeBase
{
	/**
	 * 
	 */
	public collision_mask : CollisionMask;

	/**
	 * Specifies transition drawing priority.
	 */
	public layer : uint8;

	/**
	 * Idk
	 */
	map_color : Color;

	/**
	 * Emissions absorbed per second by this tile. Use a negative value if pollution is created instead of removed.
	 */
	public pollution_absorption_per_second : double;

	/**
	 * Graphics for this tile.
	 * This has extra properties besides the properties from TileTransitions
	 */
	public variants : TileTransitions & {
		main : Array<TileSprite & {
			size : uint32,
			probability : double,
			weights : double[]
		}>,
		material_background : TileSprite
	};

	public autoplace : AutoplaceSpecification;
}