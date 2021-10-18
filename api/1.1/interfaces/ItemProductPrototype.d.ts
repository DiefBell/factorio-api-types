/**
 * @interface ItemProductPrototype
 * https://wiki.factorio.com/Types/ItemProductPrototype
 * 
 * An item product definition for a Prototype/Recipe.
 * Its loading is triggered by the type of a Types/ProductPrototype being "item".
 * 
 * @member name The name of a Prototype/Item.
 * @member amount If 'amount' is present, 'amount_min' and 'amount_max' are not loaded.
 * @member probability Value between 0 and 1, 0 for 0% chance and 1 for 100% chance.
 * @member amount_min Mandatory if amount is not specified.
 * @member amount_max Mandatory if amount is not specified.
 * @member catalyst_amount Amount that should not be affected by productivity modules (not yielded from bonus production)
 * 		and should not be included in the item production statistics.
 * 		Default: `0`
 */

declare interface ItemProductPrototype
{
	name : string;
	amount? : uint16;
	probability? : double;
	amount_min? : uint16;
	amount_max? : uint16;
	catalyst_amount? : uint16;
}