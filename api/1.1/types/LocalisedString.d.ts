/**
 * LocalisedString: https://lua-api.factorio.com/latest/Concepts.html#LocalisedString
 * 
 * Localised strings are a way to support translation of in-game text.
 * It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 * 
 * The key identifies the string template. For example, "gui-alert-tooltip.attack" (for the template "\_\_1__ objects are being damaged";
 * see the file data/core/locale/en.cfg).
 * 
 * The template can contain placeholders such as \_\_1__ or \_\_2__. These will be replaced by the respective parameter in the LocalisedString.
 * The parameters themselves can be other localised strings, which will be processed recursively in the same fashion.
 * Localised strings cannot be recursed deeper than 20 levels and cannot have more than 20 parameters.
 * 
 * As a special case, when the key is just the empty string, all the parameters will be concatenated (after processing, if any are localised strings).
 * If there is only one parameter, it will be used as is.
 * 
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated,
 * or number which will be converted to its textual representation.
 */
declare type LocalisedString = [localisation_key : string, ...args : (number | string | string[])[] ];

/** Example
	In the English translation, this will print "No ammo"; in the Czech translation, it will print "Bez munice":

	game.player.print({"description.no-ammo"})

	The description.no-ammo template contains no placeholders, so no further parameters are necessary.
 */

/** Example
	In the English translation, this will print "Durability: 5/9"; in the Japanese one, it will print "耐久度: 5/9":

	game.player.print({"description.durability", 5, 9})
 */

/** Example
	This will print "hello" in all translations:
	
	game.player.print({"", "hello"})
 */

/** Example
	This will print "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
	
	game.print({"", {"item-name.iron-plate"}, ": ", 60})
 */