/**
 * @interface CliffPlacementSettings
 * https://lua-api.factorio.com/latest/Concepts.html#CliffPlacementSettings
 * 
 * @member name Name of the cliff prototype.
 * @member cliff_elevation_0 Elevation at which the first row of cliffs is placed.
 * 		The default is 10, and this cannot be set from the map generation GUI.
 * @member cliff_elevation_interval Elevation difference between successive rows of cliffs.
 * 		This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is 40 / frequency.
 * @member richness Corresponds to 'continuity' in the GUI.
 * 		This value is not used directly, but is used by the 'cliffiness' noise expression,
 * 		which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when
 * 		elevation crosses the elevation contours defined by cliff_elevation_0 and cliff_elevation_interval when 'cliffiness' is greater than 0.5).
 * 		The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs,
 * 			and smaller values (between 0 and 1) result in larger gaps in cliff walls.
 */
declare interface CliffPlacementSettings
{
	name : string;
	cliff_elevation_0 : float;
	cliff_elevation_interval : float;
	richness : MapGenSize;
}