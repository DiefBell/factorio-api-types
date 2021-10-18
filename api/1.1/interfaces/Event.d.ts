/**
 * @interface Event Every event contains at least the name and tick attributes. Other events may include some additional attributes, specific to the event.
 * https://lua-api.factorio.com/latest/events.html#All%20events 
 * 
 * @member name Identifier of the event
 * @member tick Tick the event was generated.
 */
declare interface Event
{
	name : defines.events;
	tick : uint;
}