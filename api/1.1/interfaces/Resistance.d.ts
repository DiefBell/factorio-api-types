/**
 * @interface Resistance
 * https://wiki.factorio.com/Types/Resistances
 * 
 * Resistances to certain types of attacks from enemy, and physical damage. See https://wiki.factorio.com/Damage.
 * 
 * @member type Specification of the type. Name of a Prototype/DamageType.
 * @member decrease The flat resistance to the given damage type (higher is better).
 * 		Default: 0
 * @member percent The percentage resistance to the given damage type (higher is better).
 * 		Default: 0
 */

declare interface Resistance
{
	type : string;
	decrease? : float;
	percent? : float;
}