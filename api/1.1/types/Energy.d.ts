type multiplier = 
	"k" | // 10^3
	"K" | // 10^3
	"M" | // 10^6
	"G" | // 10^9
	"T" | // 10^12
	"P" | // 10^15
	"E" | // 10^18
	"Z" | // 10^21
	"Y" ; // 10^24

/**
 * https://wiki.factorio.com/Types/Energy
 * 
 * @example "5MJ"
 * @example "300W"
 */
declare type Energy = `${number}${multiplier | ""}${"J" | "W"}`;