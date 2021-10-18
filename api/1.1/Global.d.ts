/**
 * The global table each mod has access to - a table with the name global declared as a global variable that is persisted between map sessions.
 * 
 * https://lua-api.factorio.com/latest/Global.html
 * 
 * During the lifetime of a mod it's frequently required to save mutable data.
 * Although mods are free to store such data in any variable the game will not persist that data between saving and loading.
 * 
 * To address this Factorio provides the table global - a global table - that is serialized and persisted between saving and loading of a map.
 * Each mod has access to its own instance of this table (global) so data stored does not need to use some unique name.
 * 
 * Only specific data can be saved and loaded using this table:
 * - Basic data: nil, strings, numbers, booleans.
 * - Tables, but not meta tables; tables with metatables become plain tables when saved and loaded.
 * - References to builtin Factorio LuaObjects.
 * 
 * Circular references are also handled properly.
 */
type Global = Record<string, any>;

declare const global : Global;