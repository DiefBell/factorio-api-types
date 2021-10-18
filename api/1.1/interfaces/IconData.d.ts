/**
 * @interface IconData https://wiki.factorio.com/Types/IconData
 * 
 * Data of one icon "layer" for the icons property of the IconSpecification.
 * @see IconSpecification
 * 
 * @member icon The path to the icon.
 * @member dark_background_icon The path to the icon for a dark background sprite.
 * @member icon_size The size of the square icon, in pixels, e.g. 32 for a 32px by 32px icon.
 * 		Mandatory if icon_size is not specified outside of 'icons' in the owner IconSpecification.
 * @member tint Tint of the icon. Default is `{r:0, g:0, b:0, a:0}`.
 * @member shift Used to offset the icon "layer" from the overall icon. Default is `[0,0]`.
 * @member scale Values different than 1 specify the scale of the icon on default gui scale.
 * 		Scale 2 means that the icon will be 2 times bigger on screen (and more pixelated).
 * 		Default is 1.
 * @member icon_mipmaps Default is 0.
 * 
 * @example
 * {
  	    icon = "__base__/graphics/icons/fluid/heavy-oil.png",
  	    icon_size = 32,
  	    scale = 0.5,
  	    shift = {4, -8}
	}
 */
declare interface IconData
{
	icon : FileName;
	dark_background_icon? : FileName;
	icon_size? : SpriteSizeType;
	tint? : Color;
	shift? : Vector;
	scale? : double;
	icon_mipmaps? : uint8;
}