/**
 * A string specifying a collision mask layer.
 * 
 * The layers "layer-13" through "layer-55" are currently unused by the game but may change.
 * If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones.
 */
declare type CollisionMaskLayer =
	"ground-tile" |
	"water-tile" |
	"resource-layer" |
	"doodad-layer" |
	"floor-layer" |
	"item-layer" |
	"ghost-layer" |
	"object-layer" |
	"player-layer" |
	"train-layer" |
	"rail-layer" |
	"transport-belt-layer" |
	"not-setup" |
	"layer-13" |
	"layer-14" |
	"layer-15" |
	"layer-16" |
	"layer-17" |
	"layer-18" |
	"layer-19" |
	"layer-20" |
	"layer-21" |
	"layer-22" |
	"layer-23" |
	"layer-24" |
	"layer-25" |
	"layer-26" |
	"layer-27" |
	"layer-28" |
	"layer-29" |
	"layer-30" |
	"layer-31" |
	"layer-32" |
	"layer-33" |
	"layer-34" |
	"layer-35" |
	"layer-36" |
	"layer-37" |
	"layer-38" |
	"layer-39" |
	"layer-40" |
	"layer-41" |
	"layer-42" |
	"layer-43" |
	"layer-44" |
	"layer-45" |
	"layer-46" |
	"layer-47" |
	"layer-48" |
	"layer-49" |
	"layer-50" |
	"layer-51" |
	"layer-52" |
	"layer-53" |
	"layer-54" |
	"layer-55";