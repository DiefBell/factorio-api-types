/**
 * https://wiki.factorio.com/Types/CollisionMask
 * 
 * The collision mask is specified as an Array (Types/table) of strings.
 * Every entry is a specification of one layer the object collides with or a special collision option.
 * 
 * Supplying an empty table means that no layers and no collision options are set.
 * 
 * The base game provides common collision mask functions in a Lua file in the core lualib: collision-mask-util.lua.
 */
declare type CollisionMask = (CollisionMaskLayer | string)[]