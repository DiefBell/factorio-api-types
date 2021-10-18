/**
 * @interface ColorModifier
 * https://lua-api.factorio.com/latest/Concepts.html#ColorModifier
 * 
 * Same as Color, but red, green, blue and alpha values can be any floating point number, without any special handling o range [1, 255].
 * @see Color
 */

declare interface ColorModifier
{
	r? : float; // defaults to 0
	g? : float; // defaults to 0
	b? : float; // defaults to 0
	a? : float; // defaults to 1
}