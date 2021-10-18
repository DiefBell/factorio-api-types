/**
 * @interface ScriptArea An area defined using the map editor.
 * https://lua-api.factorio.com/latest/Concepts.html#ScriptArea
 * 
 * @member area
 * @member name
 * @member color
 * @member id
 */
declare interface ScriptArea
{
	area : BoundingBox;
	name : string;
	color : Color;
	id : uint;
}