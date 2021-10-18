<center>

# Factorio API Types

### TypeScript type declarations for the Factorio modding API 

</center><br /><br />



## Installation
- Install the package: `yarn add --dev factorio-api-types lua-types typescript-to-lua`
- Add the types to your `tsconfig.json` file:
```jsonc
"compilerOptions": {
	// .....
	"types": [
		"factorio-api-types/1.1",
		"lua-types/5.2"
	],
	"tstl": {
		"luaTarget": "5.2",
		"noImplicitSelf": true
	}
}
```
- Build your mod with `tstl --project tsconfig.json`.
- Package the built `.lua` files with your other assets ready for use as a mod. You may want to consider automating this and symlinking it to your Factorio mods folder.
