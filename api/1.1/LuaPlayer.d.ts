/** @noSelf **/
declare class LuaPlayer extends LuaControl
{
	/**
	 * Print text to the chat console.
	 * 
	 * @param str String or LocalisedString to print to the chat console.
	 * @param color Color and alpha of the text when displayed in the chat console.
	 */
	public print(str : LocalisedString | string, color? : Color) : void;

	/**
	 * Adds an alert to this player for the given entity of the given alert type.
	 * 
	 * @param entity The entity the alert is being applied to.
	 * @param type The type of the alert.
	 */
	public add_alert(entity : LuaEntity, type : defines.alert_type) : void;

	/**
	 * Teleport the entity to a given position, possibly on another surface.
	 * 
	 * @param position The x,y co-ordinates to teleport to.
	 * @param surface
	 * 		Surface to teleport to. If not given, will teleport to the entity's current surface.
	 * 		Only players, cars, and spidertrons can be teleported cross-surface.
	 * 
	 * @returns `true` if the entity was successfully teleported, otherwise `false`.
	 * 
	 * @note Some entities may not be teleported.
	 * 		For instance, transport belts won't allow teleportation and this method will always return false when used on any such entity.
	 * @note You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport coordinates.
	 * 		`teleport(0, 1)` to move the entity 1 tile positive y, `teleport(4)` to move the entity 4 tiles to the positive x.
	 */
	public teleport(position : Position | number, surface? : SurfaceSpecification | number) : boolean;

	/**
	 * The player's username.
	 */
	public name : string;

	/**
	 * The character attached to this player, or `null` if no character.
	 * 
	 * @note Will also return null when the player is disconnected (see LuaPlayer::connected).
	 */
	public character : LuaEntity;
	
}