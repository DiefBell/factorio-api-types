/**
 * LuaForce encapsulates data local to each "force" or "faction" of the game.
 * Default forces are player, enemy and neutral.
 * Players and mods can create additional forces (up to 64 total).
 */
declare class LuaForce
{
	/**
	 * Count entities of a given type.
	 * @param name Prototype name of the entity
	 * @returns Number of entities of given prototype belonging to this force.
	 */
	get_entity_count(name : string) : uint;

	/**
	 * Disable research for this force.
	 */
	disable_research() : void;

	/**
	 * Enabled research for this force.
	 */
	enable_research() : void;

	/**
	 * Disable all recipes and technology.
	 */
	disable_all_prototypes() : void;

	/**
	 * Enables all recipes and technologies.
	 */
	enable_all_prototypes() : void;

	/**
	 * Load the original version of all recipes from the prototypes.
	 */
	reset_recipes() : void;
}