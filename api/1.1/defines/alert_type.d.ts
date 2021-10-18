declare namespace defines
{
	/**
	 * @enum alert_type
	 * 
	 * Alerts are the little notification types you get for things like buildings getting destroyed, 
	 * or when the logistics network lists all of the things its been told to construct.
	 * 
	 * @member entity_destroyed Big red flashing cross when a building gets destroyed.
	 * @member entity_under_attack
	 * @member not_enough_construction_robots
	 * @member no_material_for_construction
	 * @member not_enough_repair_packs
	 * @member turret_fire
	 * @member custom
	 * @member no_storage
	 * @member train_out_of_fuel
	 */
	enum alert_type
	{	
		entity_destroyed,
		entity_under_attack,
		not_enough_construction_robots,
		no_material_for_construction,
		not_enough_repair_packs,
		turret_fire,
		custom,
		no_storage,
		train_out_of_fuel
	}
}