/**
 * @interface EventFilter Base filter for filtering events
 * https://lua-api.factorio.com/latest/Event-Filters.html
 * 
 * @member filter The condition to filter on.
 * @member mode How to combine this with the previous filter. Must be "or" or "and". Default is "or". When evaluating the filters, "and" has higher precedence than "or".
 * @member invert Inverts the condition. Default is false.
 */
declare interface EventFilter
{
	filter : string;
	mode? : "or" | "and";
	invert? : boolean;
}