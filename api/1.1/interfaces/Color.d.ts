/**
 * @interface Color
 * https://lua-api.factorio.com/latest/Concepts.html#Color
 * 
 * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1.
 * All values here are optional; color channels default to 0, the alpha channel defaults to 1.
 */

declare interface Color
{
	r? : float; // defaults to 0
	g? : float; // defaults to 0
	b? : float; // defaults to 0
	a? : float; // defaults to 1
}