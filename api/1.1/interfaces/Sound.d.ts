/**
 * @interface Sound
 * 
 * https://wiki.factorio.com/Types/Sound
 * 
 * @example { filename: "__base__/sound/ambient/world-ambience-3.ogg", volume: 1.2 };
 */
declare interface Sound
{
	/**
	 * Mandatory. Supported file formats are .ogg, .wav, and .voc.
	 */
	filename : FileName;

	/**
	 * default: 1.0
	 */
	volume? : float;

	preload? : boolean;

	/**
	 * default: 1.0
	 * 
	 * Speed must be >= 1 / 64. This sets both min and max speed.
	 */
	speed? : float;

	/**
	 * default: 1.0
	 * 
	 * Not loaded if speed is present. - Default: 1.0 - Speed must be >= 1 / 64.
	 */
	min_speed? : float;

	/**
	 * default: 1.0
	 * 
	 * Not loaded if speed is present. - Default: 1.0 - Speed must be >= 1 / 64.
	 */
	max_speed? : float;

	/**
	 * NOT YET IMPLEMENTED:
	 * 
	Optional properties
	aggregation
	Type: Types/table

	Table with the following members:

	max_count - Types/uint32 - Mandatory.
	progress_threshold - Types/float - Optional. - Default: 1.0 - If count already playing is true, this will determine maximum progress when instance is counted toward playing sounds.
	remove - Types/bool - Mandatory.
	count_already_playing - Types/bool - Optional. - Default: false - If true already playing sounds are taken into account when checking maxCount.
	allow_random_repeat
	Type: Types/bool

	Default: false

	audible_distance_modifier
	Type: Types/double

	Default: 1.0

	Modifies how far a sound can be heard. Must be between 0 and 1 (inclusive).

	variations
	Type: Types/table (array) of Types/tables

	Array of tables with the following members:

	filename - Types/FileName - Mandatory.
	volume - Types/float - Optional. - Default: 1.0
	preload - Types/bool - Optional.
	speed - Types/float - Optional. - Default: 1.0 - Speed must be >= 1 / 64. This sets both min and max speed.
	min_speed - Types/float - Optional. Not loaded if speed is present. - Default: 1.0 - Speed must be >= 1 / 64.
	max_speed - Types/float - Mandatory if max_speed is present, otherwise not loaded. - Default: 1.0 - Must be >= min_speed.
	filename
	Type: Types/FileName

	Mandatory if variations is not given.

	Support sound file formats are .ogg, .wav and .voc.

	volume
	Type: Types/float

	Default: 1.0

	Only loaded if variations is not given.

	preload
	Type: Types/bool

	Only loaded if variations is not given.

	speed
	Type: Types/float

	Default: 1.0

	Only loaded if variations is not given. Speed must be >= 1 / 64. This sets both min and max speed.

	min_speed
	Type: Types/float

	Default: 1.0

	Only loaded if variations is not given. Not loaded if speed is present. Speed must be >= 1 / 64.

	max_speed
	Type: Types/float

	Default: 1.0

	Only loaded if variations is not given. Mandatory if min_speed is present, otherwise not loaded. Must be >= min_speed.
	*/
}