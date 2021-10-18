/**
 * @interface BoundingBox https://lua-api.factorio.com/latest/Concepts.html#BoundingBox.
 * 
 * Two positions, specifying the top-left and bottom-right corner of the box, respectively.
 * 
 * @member left_top Top left corner of the bounding box.
 * @member right_bottom Bottom left corner of the bounding box.
 * @member orientation I have no idea what this does.
 * 
 * @example { left_top: { x: -2, y: -3}, right_bottom: { x: 5, y: 8} }
 */
declare interface BoundingBox
{
	left_top : Position;
	right_bottom : Position;
	orientation? : float;
}