/**
 * The order property is a simple string. When the game needs to sort prototypes, it looks at their order properties and sorts those alphabetically.
 * A prototype with an order string of "a" will be listed before other prototypes with order string "b" or "c".
 * The "-" or "[]" structures that can be found in vanilla order strings do not have any special meaning.
 * 
 * When the game compares two prototypes (of the same type) if the order strings aren't equal
 * then they're lexicographically compared to determine if a given prototype is shown before or after another.
 * If the order strings are equal then the game falls back to comparing the prototype names to determine order.
 * 
 * https://en.wikipedia.org/wiki/Lexicographic_order
 */
declare type Order = string;

/*

Using an UTF-8 character list, the sort order of special characters can be identified. This is the sort order for common characters:
"-"
"0"
"9"
"A"
"Z"
"["
"]"
"a"
"z"

Example using the above ordering:
"a"
"ab"
"azaaa" (b is sorted before z, so "ab" comes before "az", regardless of the rest of the letters after "az")
"b"
"b-zzzz"
"b[aaaa]" ([ is sorted after - in UTF-8)
"bb" (b is sorted after [ in UTF-8)

 */