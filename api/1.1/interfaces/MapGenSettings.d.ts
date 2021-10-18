/**
 * @interface MapGenSettings Settings for map generation.
 * https://lua-api.factorio.com/latest/Concepts.html#MapGenSettings
 * 
 * The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator.
 * The base game sets property_expression_names.elevation to "0_16-elevation" to reproduce terrain from 0.16 or to "0_17-island" for the island preset. 
 * Generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation'
 * and shown along with selectors for the other selectable properties.
 */
declare interface MapGenSettings
{
	/**
	* The inverse of 'water scale' in the map generator GUI.
 	* Lower terrain_segmentation increases the scale of elevation features (lakes, continents, etc).
 	* This behavior can be overridden with alternate elevation generators (see property_expression_names, below).
	*/
	terrain_segmentation? : MapGenSize;
	
	/**
	* the equivalent to 'water coverage' in the map generator GUI.
	* Specifically, when this value is non-zero, water_level = 10 * log2(the value of this field),
	* and the elevation generator subtracts water level from elevation before adding starting lakes.
	* If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes.
	* This behavior can be overridden with alternate elevation generators (see property_expression_names, below).
	*/
	water? : MapGenSize;
	
	/**
	 * Keyed by autoplace control prototype name.
	 */
	autoplace_controls? : Record<string, AutoplaceControl>;

	/**
	 * If autoplace_controls not defined should be default-enabled.
	 */
	default_enable_all_autoplace_controls? : boolean;

	/**
	 * Each setting in this dictionary maps the string type to the settings for that type
	 */
	autoplace_settings? : Record<"entity" | "tile" | "decorative", AutoplaceSettings>;

	/**
	 *  Map generation settings for entities of the type "cliff".
	 */
	cliff_settings? : Partial<CliffPlacementSettings>;

	/**
	 * The random seed used to generated this map.
	 */
	seed? : uint;

	/**
	 * Width in tiles. If 0, the map has infinite width.
	 */
	width? : uint;

	/**
	 * Height in tiles. If 0, the map has infinite height.
	 */
	height? : uint;

	/**
	 * Size of the starting area.
	 */
	starting_area? : MapGenSize;

	/**
	 * Positions of the starting areas.
	 */
	starting_points? : Position[];

	/**
	 * Whether peaceful mode is enabled for this map.
	 */
	peaceful_mode? : boolean;

	/**
	* Overrides for tile property value generators.
	* 		Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. "5").
	* 		All other controls can be overridden by a property expression names. Noteable properties:
	* 		- `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
	* 		- `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
	* 		- `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50)
	* 			that is used (together with moisture and aux) as part of tree and decorative placement.
	* 		- `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to CliffPlacementSettings.
	* 		- `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to CliffPlacementSettings) location.
	* 		- `enemy-base-intensity` - a number that is referenced by both enemy-base-frequency and enemy-base-radius.
	* 			i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable.
	* 			By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
	* 		- `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region,by default in terms of enemy-base-intensity.
	* 		- `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile,by default proportional to a constant plus enemy-base-intensity.
	* 	
	* Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI)
	* don't have their own dedicated structures in MapGenSettings.
	* Instead, their values are stored as property expression overrides with long names:
	* - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
	* - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
	* - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
	* - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0.
	* 
	* All other MapGenSettings feed into named noise expressions,
	* and therefore placement can be overridden by including the name of a property in this dictionary.
	* The probability and richness functions for placing specific tiles, entities, and decoratives
	* can be overridden by including an entry named {tile|entity|decorative}:(prototype name):{probability|richness}.
	* 
	* The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator.
	* The base game sets property_expression_names.elevation to "0_16-elevation" to reproduce terrain from 0.16 or to "0_17-island" for the island preset.
	* If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and
	* shown along with selectors for the other selectable properties.
	*/
	property_expression_names? : Record<string, string>;

}