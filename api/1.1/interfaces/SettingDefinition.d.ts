/**
 * @interface SettingDefinition
 * https://wiki.factorio.com/Tutorial:Mod_settings
 * 
 * The definition of a custom mod setting.
 * 
 * @member type The type of setting we're defining e.g. a number, a boolean checkbox. 
 * Depending on the type, the prototype also allows or requires additional properties.
 * 
 * @member name The name of the settings prototype should be unique to avoid mod conflicts since the mod settings are global across all mods.
 * Because of that it is recommened to prefix mod settings with your mod name.
 * 
 * @member localised_name The display name of the setting using localisation settings.
 * @member localised_description The display description of the setting using localisation settings.
 * 
 * @member order https://wiki.factorio.com/Types/Order
 * Changes how the mod settings are ordered in the settings gui.
 * Mod settings are sorted first by mod, then by the setting "order" string, then finally by the setting name.
 * 
 * @member hidden Hides mod setting from GUIs, so that they cannot be seen or changed by players.
 * However, other mods can still access hidden settings.
 * @member setting_type Defines whether the setting is "startup", "runtime-global", or "runtime-per-user".
 * This also defines which tab the setting shows in.
 * 
 * @member default_value The default value of the setting. Its type will whatever's named in "type".
 * @member forced_value Forces the setting to be this value, which can be useful for mod compatibility.
 * Only loaded if hidden == true.]
 * 
 * @member minimum_value Defines the lowest allowed numeric value of the setting.
 * @member maximum_value Defines the greatest allowed numeric value of the setting.
 * @member allowed_values A list of allowed values the setting may have. This shows as a dropdown in the GUI.
 * 
 * @member allow_blank Defines whether it's possible for the user to set the textfield to empty and still apply the setting.
 * Defaults to false.
 * @member auto_trim Whether values that are input by the user should have whitespace removed from both ends of the string.
 * Defaults to false.
 */

declare interface SettingDefinition
{
	name : string;
	type :
		"bool-setting" | 	// a true/false checkbox.
		"int-setting" | 	// a signed 64 bit integer textfield (or selection dropdown).
		"double-setting" |	// a double precision floating point textfield (or selection dropdown).
		"string-setting";	// a string textfield (or selection dropdown).
	localised_name? : LocalisedString;
	localised_description? : LocalisedString;
	order? : string;
	
	hidden? : boolean;
	setting_type : "startup" | "runtime-global" | "runtime-per-user";

	default_value : boolean | int64 | double | string;
	forced_value? : boolean;

	minimum_value? : int64 | boolean;
	maximum_value? : int64 | boolean;
	allowed_values? : (int64 | double | string)[];

	allow_blank? : boolean;
	auto_trim? : boolean;
}