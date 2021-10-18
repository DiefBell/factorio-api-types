/**
 * https://wiki.factorio.com/Types/SpriteVariations
 * 
 * Additional information when sprites are loaded.
 * 
 * @member variation_count Default is 1.
 * @member repeat_count Default is 1.
 * @member line_length Default is the value of variation_count.
 */

declare interface SpriteSheet
{
	variation_count : uint32;
	repeat_count : uint32;
	line_length : uint32;
}