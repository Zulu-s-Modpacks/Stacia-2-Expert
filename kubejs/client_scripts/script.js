ItemEvents.tooltip(event => {



	//Tooltips
	event.add('exnihilosequentia:birch_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:acacia_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:dark_oak_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:jungle_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:crimson_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:spruce_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('exnihilosequentia:warped_sieve', [[Text.of('Disabled. Use Oak Sieve Instead.').darkRed()],])
	event.add('evilcraft:blood_infuser', [[Text.of('We need some blood to do magic.').darkRed()],])
	event.add('immersiveengineering:plate_aluminum', [[Text.of('Actually it is aluminum, not aluminium.').darkGray()],])
	event.add('kubejs:devilish_horn', [[Text.of('I love you, with my all heart.').darkGray()],])
	event.add('kubejs:devilish_horn', [[Text.of('No matter what.').darkGray()],])
	event.add('kubejs:reinforced_obsidian', [[Text.of('Actually Witherproof and Dragonproof').green()],])
	event.add('pipez:basic_upgrade',  [[Text.of('Item: 8 Items/15t').gray()],[Text.of('Fluid: 100 mB/t').gray()], [Text.of('Gas: 400 mB/t').gray()], [Text.of('Energy: 1024 FE/t').gray()]])
	event.add('pipez:improved_upgrade',  [[Text.of('Item: 16 Items/10t').gray()],[Text.of('Fluid: 500 mB/t').gray()], [Text.of('Gas: 2000 mB/t').gray()], [Text.of('Energy: 8192 FE/t').gray()]])
	event.add('pipez:advanced_upgrade',  [[Text.of('Item: 32 Items/5t').gray()],[Text.of('Fluid: 2000 mB/t').gray()], [Text.of('Gas: 8000 mB/t').gray()], [Text.of('Energy: 32,768 FE/t').gray()]])
	event.add('pipez:ultimate_upgrade',  [[Text.of('Item: 64 Items/t').gray()],[Text.of('Fluid: 10000 mB/t').gray()], [Text.of('Gas: 40000 mB/t').gray()], [Text.of('Energy: 131,072 FE/t').gray()]])
	event.add('mob_grinding_utils:gm_chicken_feed_cursed', [[Text.of('Use Drop Of Evil Instead.').green()],])



	//Removing Tooltips
	event.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
		text.remove(1)
	})

	event.addAdvanced('mob_grinding_utils:rotten_egg', (item, advanced, text) => {
		text.remove(1),
		text.remove(2),
		text.remove(1),
		text.remove(2)
	})

	event.addAdvanced('mob_grinding_utils:dreadful_dirt', (item, advanced, text) => {
		text.remove(1),
		text.remove(2),
		text.remove(3),
		text.remove(1),
		text.remove(2),
		text.remove(3),
		text.remove(1),
		text.remove(2),
		text.remove(3),
		text.remove(1),
		text.remove(2),
		text.remove(3)
	})

	event.addAdvanced('mob_grinding_utils:gm_chicken_feed_cursed', (item, advanced, text) => {
		text.remove(1),
		text.remove(2),
		text.remove(1),
		text.remove(2)
	})




  })
  






JEIEvents.hideItems(event => {
event.hide([
'exnihilosequentia:acacia_sieve',
'exnihilosequentia:spruce_sieve',
'exnihilosequentia:crimson_sieve',
'exnihilosequentia:jungle_sieve',
'exnihilosequentia:dark_oak_sieve',
'exnihilosequentia:birch_sieve',
'exnihilosequentia:warped_sieve',
'exnihilosequentia:mangrove_sieve',
'gag:time_sand_pouch',
'immersiveengineering:plate_copper',
'create:copper_sheet',
'mysticalagriculture:soulium_ingot',
'mysticalagriculture:soulium_gemstone',
'mysticalagriculture:soulium_seed_base',
'twilightforest:uncrafting_table',
'createaddition:gold_rod',
'createaddition:copper_rod',
'productivebees:expansion_box_bop_magic',
'extendedcrafting:handheld_table',
'cyclic:crafting_stick',
'cyclic:crafting_bag',
'exnihilosequentia:crimson_crucible',
'exnihilosequentia:warped_crucible',
'exmachinis:flux_compactor',
'constructionwand:stone_wand',
'ftbic:iron_furnace',
'cyclic:compressed_cobblestone',
'botania:apothecary_default',
'botania:apothecary_forest',
'botania:apothecary_plains',
'botania:apothecary_mountain',
'botania:apothecary_fungal',
'botania:apothecary_swamp',
'botania:apothecary_desert',
'botania:apothecary_taiga',
'botania:apothecary_mesa',
'botania:apothecary_mossy',
'botania:apothecary_deepslate',
'ae2:logic_processor',
'ae2:calculation_processor',
'ae2:engineering_processor',
'ae2:facade',
'farmersdelight:rich_soil',
'occultism:obsidian_dust',
'ftbic:obsidian_dust',
'ftbic:tin_dust',
'easy_villagers:iron_farm',
'easy_villagers:incubator',
'ae2:silicon',
'angelring:leadstone_angel_ring',
'angelring:hardened_angel_ring',
'angelring:reinforced_angel_ring',
'angelring:resonant_angel_ring',
'utilitix:experience_crystal',
'easy_villagers:iron_farm',
'easy_villagers:iron_farm',
'pamhc2foodcore:fruitsaladitem',
'thermal:ender_pearl_dust',
'mekanism:dust_quartz',
'ftbic:ender_dust',
'create:powdered_obsidian',
'ftbic:diamond_dust',
'infused_crystals:chargerblock',
'cyclic:crafter',
'eliquary:rending_gale',
'apotheosis:potion_charm',
'cyclic:chorus_flight',
'#pneumaticcraft:fluid_tanks',
'ftbic:gold_wire',
'ftbic:copper_wire',
'ftbic:aluminum_wire',
'kubejs:in_bloody_mechanism',
'kubejs:in_creative_blaze_cake',
'kubejs:in_starmetal_ingot',
'kubejs:in_enriched_iron',
'kubejs:in_rf_coil',
'cyclic:soundproofing_ghost',
'cyclic:obsidian_pressure_plate',
'quark:gold_bars',
'thermal:creosote_bucket',
'cyclic:packager',
'productivebees:configurable_honeycomb',
'ad_astra:compressor',
'compressium:soulsand_1',
'botanicalmachinery:mana_emerald_block',
'botanicalmachinery:mana_emerald'






])



event.hide(/botanypotstiers:(?!elite_terracotta_botany_pot|elite_terracotta_hopper_botany_pot|ultra_terracotta_botany_pot|ultra_terracotta_hopper_botany_pot|creative_terracotta_botany_pot|creative_terracotta_hopper_botany_pot)/)
event.hide(/botanicalmachinery:(?!mechanical_apothecary|mechanical_runic_altar|mana_battery)/)
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:wood\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:copper\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:bronze\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:silver\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:electrum\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:invar\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:steel\",Throttle:1.0d}"})
event.hide({"type": "forge:nbt","item": "ironjetpacks:jetpack","count": 1,"nbt": "{Id:\"ironjetpacks:platinum\",Throttle:1.0d}"})














})

JEIEvents.information(event =>{
	event.addItem('deeperdarker:heart_of_the_deep', ['If you dont want to spend tons of mana to duplicate hearts, you can get the Warden spawn egg with mob grinding utils and put it in the spawner. It will work.'])
	event.addItem('kubejs:arcane_ore', ['MaxY: 96, MinY: -32'])
	event.addItem('naturesaura:gold_leaf', ['To get this, right click on a tree leaf with brilliant fiber. It will spread over time. When the color of the leaf turns golden yellow, you can break it and obtain golden leaf.'])
	event.addItem('thermal:blizz_powder', ['Blizz Powder can now also be crafted with Fluid Encapsulator. Dont overlook this. You can still hunt the blizz mob as well.'])
	event.addItem('thermal:blitz_powder', ['Blitz Powder can now also be crafted with Fluid Encapsulator. Dont overlook this. You can still hunt the blitz mob as well.'])
	event.addItem('thermal:basalz_powder', ['Basalz Powder can now also be crafted with Fluid Encapsulator. Dont overlook this. You can still hunt the basalz mob as well.'])
	event.addItem('botania:ender_air_bottle', ['You can still get the Ender Air Bottle in The End dimension. Metallurgic infuser recipe added as an alternative.'])
	event.addItem('capsule:capsulemarker', ['Disabled.'])
	event.addItem('notenoughwands:acceleration_wand', ['Disabled.'])
	event.addItem('ftbic:antimatter', ['It Is Produced In The Antimatter Constructor.'])
	event.addItem('fluxnetworks:flux_dust', ['You need to craft Flux Dust at least once in bedrock before crafting it in the metallurgic infuser.'])


	console.log('JEI Information');
 })

 JEIEvents.hideFluids(event => {
    event.hide([
       Fluid.of("thermal:creosote")
    ]);
})





