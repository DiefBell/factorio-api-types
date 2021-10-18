/**
 * Slash (/) is always used as directory delimiter.
 * The path should always begin by the specification of the root.
 * 
 * Path starting with \_\_core__ will access the resources in the data/core directory,
 * these resources are always accessible regardless of mod specifications.
 * 
 * Path starting with \_\_base__ will access the resources in the base mod in data/base directory.
 * These resources are usually available, as long as the base mod isn't removed/deactivated.
 * 
 * The format \_\_\<mod-name>__ is placeholder for root of any other mod (mods/<mod-name>),
 * and is accessible as long as the mod is active.
 * 
 * @example  filename = "__core__/graphics/arrows/underground-lines.png";
 * @example filename = "__base__/graphics/entity/basic-transport-belt/basic-transport-belt.png"
 */
declare type FileName = string;