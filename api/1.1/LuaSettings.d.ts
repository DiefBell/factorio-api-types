/**
 * @class LuaSettings: https://lua-api.factorio.com/latest/LuaSettings.html
 * 
 * Runtime settings can be changed through console commands and by the mod that owns the settings.
 * 
 * @noSelf
 */
declare class LuaSettings
{
	/**
	 * Gets the player settings for the given player.
	 * Note: This can become invalid if during operation if the given player becomes invalid.
	 * @param player 
	 */
	public get_player_settings(player : PlayerIdentification) : LuaCustomTable<string, ModSetting>;

	/**
	 * The object's name.
	 */
	public readonly object_name : string;

	/**
	 * Startup mod settings, which are fixed when a save is first created and cannot be altered at runtime
	 * e.g. world generation options.
	 */
	public readonly startup : LuaCustomTable<string, ModSetting>;

	/**
	 * Global mod settings, which are specific to a given save and can be altered at runtime
	 * e.g. time of day.
	 */
	public readonly global : LuaCustomTable<string, ModSetting>;

	/**
	 * Player mod settings, which are specific to a given player in a game and can be altered at runtime
	 * e.g. UI settings.
	 */
	public readonly player : LuaCustomTable<string, ModSetting>;
}

declare const settings : LuaSettings;