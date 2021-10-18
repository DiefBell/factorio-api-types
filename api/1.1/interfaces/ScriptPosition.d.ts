/**
 * @interface ScriptPosition A position defined using the map editor.
 * https://lua-api.factorio.com/latest/Concepts.html#ScriptPosition
 * 
 * @member position
 * @member name
 * @member color
 * @member id
 */
declare interface ScriptPosition
{
	position : Position;
	name : string;
	color : Color;
	id : uint;
}