declare class Data
{
	/**
	 * All the available prototypes organised by their types.
	 * It is not possible to add a NEW type to Factorio without asking the developers to do it,
	 * as these are handled in the closed-source C++ code backbone.
	 * 
	 * https://wiki.factorio.com/Data.raw
	 */
	public raw : {
		"armor" : Record<string, PrototypeArmor>,
		"recipe" : Record<string, PrototypeRecipe>,
		"tile" : Record<string, LuaTilePrototype>,
		"item" : Record<string, PrototypeItem>,
		"item-group" : Record<string, PrototypeItemGroup>,
		"item-subgroup" : Record<string, PrototypeItemSubGroup>
	};

	/**
	 * Adds a new prototype to data.raw.
	 */
	public extend : (newPrototypes : (PrototypeBase | SettingDefinition)[]) => void;
}

declare const data : Data;
declare type DataTypes = keyof typeof data.raw;