/**
 * A floating point number specifying an amount.
 * For backwards compatibility, MapGenSizes can also be specified as a string and will be converted to a number.
 */

declare type MapGenSize =
	float | 
	"none" | // 0
	"very-low" | "very-small" | "very-poor" | // 0.5
	"low" | "small" | "poor" | // 1/sqrt(2)
	"normal" | "medium" | "regular" | // 1
	"high" | "big" | "good" | // sqrt(2)
	"very-high" | "very-big" | "very-good"; // 2