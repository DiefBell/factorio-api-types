/**
 * @interface ModSetting
 * https://lua-api.factorio.com/latest/Concepts.html#ModSetting
 * 
 * Contains the value of a mod setting.
 * Runtime settings can be changed through console commands and by the mod that owns the settings by writing a new table to the ModSetting.
 * 
 * @member value The value of the mod setting. The type depends on the setting.
 */

declare interface ModSetting<T extends uint | double | boolean | string>
{
	value : T;
}