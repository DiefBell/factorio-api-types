/**
 * @interface AutoplaceSettings Autoplace settings.
 * https://lua-api.factorio.com/latest/Concepts.html#AutoplaceSettings
 * 
 * @member treat_missing_as_default If missing autoplace names for this type should be default enabled.
 * @member settings
 */
declare interface AutoplaceSettings
{
	treat_missing_as_default : boolean;
	settings : Record<string, AutoplaceControl>;
}