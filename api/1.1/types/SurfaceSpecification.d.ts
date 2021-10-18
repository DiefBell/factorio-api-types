/**
 * @type SurfaceSpecification
 * 
 * https://lua-api.factorio.com/latest/Concepts.html#SurfaceSpecification
 * 
 * A surface may be specified in one of three ways:
 * - As an uint: It will be the index of the surface. nauvis has index 1, the first surface-created surface will have index 2 and so on.
 * - As a string: It will be the surface name. E.g. "nauvis".
 * - As a LuaSurface: If you have a reference to LuaSurface, you may pass it directly.
 */
declare type SurfaceSpecification = uint | string | LuaSurface;