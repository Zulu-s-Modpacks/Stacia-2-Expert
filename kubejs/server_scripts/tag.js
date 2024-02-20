ServerEvents.tags('item', event => {

	event.get('forge:dusts/tin').remove('mekanism:dust_tin')
    event.get('forge:dusts/tin').remove('ftbic:tin_dust')
    event.removeAllTagsFrom('ftbic:silicon', 'ftbic:copper_plate', 'immersiveengineering:plate_copper')
    event.removeAllTagsFrom('ftbic:obsidian_dust','mekanism:dust_obsidian','occultism:obsidian_dust', 'create:copper_sheet')


	//ingots
	event.get('forge:ingots/diamond').add('minecraft:diamond')
	event.get('forge:ingots/emerald').add('minecraft:emerald')
	event.get('forge:ingots/lapis').add('minecraft:lapis_lazuli')
	event.get('forge:ingots/quartz').add('minecraft:quartz')

	//plates
	event.get('forge:plates/diamond').add('kubejs:plate_diamond')
	event.get('forge:plates/emerald').add('kubejs:plate_emerald')
	event.get('forge:plates/lapis').add('kubejs:plate_lapis')
	event.get('forge:plates/quartz').add('kubejs:plate_quartz')

	event.get('forge:ores').add('kubejs:arcane_ore')
	event.get('forge:ores/arcane').add('kubejs:arcane_ore')

	event.get('forge:ores').add('kubejs:starmetal_ore')
	event.get('forge:ores/starmetal').add('kubejs:starmetal_ore')

	//nuggets
	event.get('forge:nuggets/lapis').add('kubejs:nugget_lapis')
	event.get('forge:nuggets/quartz').add('kubejs:nugget_quartz')

	//rods
	event.get('forge:metal_rods').add('ftbic:gold_rod', 'ftbic:copper_rod', 'ftbic:bronze_rod', 'ftbic:enderium_rod', 'ftbic:iridium_rod', 'ftbic:uranium_rod', 'ftbic:lead_rod', 'ftbic:tin_rod', 'immersiveengineering:stick_steel', 'immersiveengineering:stick_aluminum', 'immersiveengineering:stick_iron')

	//blocks
	event.get('forge:storage_blocks/coal_coke').remove('thermal:coal_coke_block')

	//others
	event.get('forge:spawn_eggs').add('minecraft:enderman_spawn_egg', 'minecraft:bee_spawn_egg', 'minecraft:blaze_spawn_egg', 'minecraft:chicken_spawn_egg', 'minecraft:cow_spawn_egg', 'minecraft:elder_guardian_spawn_egg', 'minecraft:ghast_spawn_egg', 'minecraft:magma_cube_spawn_egg')

	event.get('forge:plates/darksteel').add('kubejs:plate_darksteel')
	event.get('forge:plates/endsteel').add('kubejs:plate_endsteel')

	event.get('forge:gears/darksteel').add('kubejs:darksteel_gear')
	event.get('forge:gears/endsteel').add('kubejs:endsteel_gear')

	event.get('forge:ingots/darksteel').add('kubejs:darksteel_ingot')
	event.get('forge:ingots/endsteel').add('kubejs:endsteel_ingot')

	event.get('forge:nuggets/darksteel').add('kubejs:darksteel_nugget')
	event.get('forge:nuggets/endsteel').add('kubejs:endsteel_nugget')


	event.get('forge:gemingot/diamond').add('minecraft:diamond')
	event.get('forge:gemingot/emerald').add('minecraft:emerald')
	event.get('forge:gemingot/darksteel').add('kubejs:darksteel_ingot')
	event.get('forge:gemingot/endsteel').add('kubejs:endsteel_ingot')
	event.get('forge:gemingot/quartz').add('minecraft:quartz')
	event.get('forge:gemingot/lapis').add('minecraft:lapis_lazuli')
	event.get('forge:dusts').add('ftbic:tin_dust')
	event.get('forge:dusts/tin').add('ftbic:tin_dust')

	event.get('forge:ingots/soulsteeltinker').add('kubejs:soulsteel_ingot')

	event.get('forge:drawers1').add('functionalstorage:oak_1', 'functionalstorage:spruce_1', 'functionalstorage:birch_1', 'functionalstorage:jungle_1', 'functionalstorage:dark_oak_1', 'functionalstorage:acacia_1')
	event.get('forge:drawers2').add('functionalstorage:oak_2', 'functionalstorage:spruce_2', 'functionalstorage:birch_2', 'functionalstorage:jungle_2', 'functionalstorage:dark_oak_2', 'functionalstorage:acacia_2')
	event.get('forge:drawers4').add('functionalstorage:oak_4', 'functionalstorage:spruce_4', 'functionalstorage:birch_4', 'functionalstorage:jungle_4', 'functionalstorage:dark_oak_4', 'functionalstorage:acacia_4')

	event.get('forge:rubber').add('industrialforegoing:plastic')

	event.get('forge:flawedbudding').add('ae2:flawed_budding_quartz')

	event.add('forge:dusts/tin').add('ftbic:tin_dust')

	event.remove('forge:grain','farmersdelight:rice')
	event.add('forge:slimerice','farmersdelight:rice')
	event.add('forge:slimerice','thermal:rice')
	event.add('forge:slimeballs','kubejs:blue_slime')
	event.add('forge:hammers','immersiveengineering:hammer')

	event.add('hexerei:mahogany','hexerei:mahogany_log')
	event.add('hexerei:mahogany','hexerei:stripped_mahogany_wood')

	event.add('hexerei:willow','hexerei:willow_log')
	event.add('hexerei:willow','hexerei:stripped_willow_wood')

	event.add('hexerei:witch_hazel','hexerei:witch_hazel_log')
	event.add('hexerei:witch_hazel','hexerei:stripped_witch_hazel_wood')

	event.add('forge:raw_materials','kubejs:raw_arcane')
	event.add('forge:raw_materials/arcane','kubejs:raw_arcane')
	event.add('forge:raw_ores','kubejs:raw_arcane')

	event.remove('forge:rods/copper','createaddition:copper_rod')
	event.remove('forge:rods/gold','createaddition:gold_rod')
	event.remove('forge:silicon','ae2:silicon')

	event.add('forge:wirelessboosters','refinedstorage:range_upgrade')
	event.add('forge:wirelessboosters','ae2:wireless_booster')

	event.add('forge:dusts/obsidian','mekanism:dust_obsidian')
	event.add('forge:gems/ender_pearl','minecraft:ender_pearl')
	event.add('forge:gems/soul_sand','minecraft:soul_sand')

	event.add('forge:tier1seeds', ['mysticalagriculture:water_seeds', 'mysticalagriculture:ice_seeds', 'mysticalagriculture:deepslate_seeds', 'mysticalagriculture:wood_seeds', 'mysticalagriculture:stone_seeds', 'mysticalagriculture:dirt_seeds', 'mysticalagriculture:earth_seeds', 'mysticalagriculture:fire_seeds', 'mysticalagriculture:air_seeds'])
	event.add('forge:tier1essences',['mysticalagriculture:water_essence', 'mysticalagriculture:ice_essence', 'mysticalagriculture:deepslate_essence', 'mysticalagriculture:wood_essence', 'mysticalagriculture:stone_essence', 'mysticalagriculture:dirt_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:fire_essence', 'mysticalagriculture:air_essence'])

	event.add('forge:tier2seeds', ['mysticalagriculture:nature_seeds', 'mysticalagriculture:menril_seeds', 'mysticalagriculture:limestone_seeds', 'mysticalagriculture:mystical_flower_seeds', 'mysticalagriculture:apatite_seeds', 'mysticalagriculture:saltpeter_seeds', 'mysticalagriculture:aluminum_seeds', 'mysticalagriculture:sulfur_seeds', 'mysticalagriculture:silicon_seeds', 'mysticalagriculture:rubber_seeds', 'mysticalagriculture:turtle_seeds', 'mysticalagriculture:slime_seeds', 'mysticalagriculture:squid_seeds', 'mysticalagriculture:fish_seeds', 'mysticalagriculture:sheep_seeds', 'mysticalagriculture:cow_seeds', 'mysticalagriculture:chicken_seeds', 'mysticalagriculture:pig_seeds', 'mysticalagriculture:amethyst_seeds', 'mysticalagriculture:honey_seeds', 'mysticalagriculture:coral_seeds', 'mysticalagriculture:coal_seeds', 'mysticalagriculture:nether_seeds', 'mysticalagriculture:dye_seeds'])
	event.add('forge:tier2essences', ['mysticalagriculture:nature_essence', 'mysticalagriculture:menril_essence', 'mysticalagriculture:limestone_essence', 'mysticalagriculture:mystical_flower_essence', 'mysticalagriculture:apatite_essence', 'mysticalagriculture:saltpeter_essence', 'mysticalagriculture:aluminum_essence', 'mysticalagriculture:sulfur_essence', 'mysticalagriculture:silicon_essence', 'mysticalagriculture:rubber_essence', 'mysticalagriculture:turtle_essence', 'mysticalagriculture:slime_essence', 'mysticalagriculture:squid_essence', 'mysticalagriculture:fish_essence', 'mysticalagriculture:sheep_essence', 'mysticalagriculture:cow_essence', 'mysticalagriculture:chicken_essence', 'mysticalagriculture:pig_essence', 'mysticalagriculture:amethyst_essence', 'mysticalagriculture:honey_essence', 'mysticalagriculture:coral_essence', 'mysticalagriculture:coal_essence', 'mysticalagriculture:nether_essence', 'mysticalagriculture:dye_essence'])

	event.add('forge:tier3seeds', ['mysticalagriculture:glowstone_seeds', 'mysticalagriculture:blitz_seeds', 'mysticalagriculture:rabbit_seeds', 'mysticalagriculture:brass_seeds', 'mysticalagriculture:steeleaf_seeds', 'mysticalagriculture:tin_seeds', 'mysticalagriculture:redstone_seeds', 'mysticalagriculture:iron_seeds', 'mysticalagriculture:spider_seeds', 'mysticalagriculture:prismarine_seeds', 'mysticalagriculture:nether_quartz_seeds', 'mysticalagriculture:silver_seeds', 'mysticalagriculture:graphite_seeds', 'mysticalagriculture:copper_seeds', 'mysticalagriculture:bronze_seeds', 'mysticalagriculture:certus_quartz_seeds', 'mysticalagriculture:skeleton_seeds', 'mysticalagriculture:obsidian_seeds', 'mysticalagriculture:sky_stone_seeds', 'mysticalagriculture:lead_seeds', 'mysticalagriculture:manasteel_seeds', 'mysticalagriculture:blizz_seeds', 'mysticalagriculture:zombie_seeds', 'mysticalagriculture:quartz_enriched_iron_seeds', 'mysticalagriculture:zinc_seeds', 'mysticalagriculture:ironwood_seeds', 'mysticalagriculture:basalz_seeds'])
	event.add('forge:tier3essences', ['mysticalagriculture:glowstone_essence', 'mysticalagriculture:blitz_essence', 'mysticalagriculture:rabbit_essence', 'mysticalagriculture:brass_essence', 'mysticalagriculture:steeleaf_essence', 'mysticalagriculture:tin_essence', 'mysticalagriculture:redstone_essence', 'mysticalagriculture:iron_essence', 'mysticalagriculture:spider_essence', 'mysticalagriculture:prismarine_essence', 'mysticalagriculture:nether_quartz_essence', 'mysticalagriculture:silver_essence', 'mysticalagriculture:graphite_essence', 'mysticalagriculture:copper_essence', 'mysticalagriculture:bronze_essence', 'mysticalagriculture:certus_quartz_essence', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:obsidian_essence', 'mysticalagriculture:sky_stone_essence', 'mysticalagriculture:lead_essence', 'mysticalagriculture:manasteel_essence', 'mysticalagriculture:blizz_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:quartz_enriched_iron_essence', 'mysticalagriculture:zinc_essence', 'mysticalagriculture:ironwood_essence', 'mysticalagriculture:basalz_essence'])

	event.add('forge:tier4seeds', ['mysticalagriculture:sapphire_seeds', 'mysticalagriculture:ruby_seeds', 'mysticalagriculture:hop_graphite_seeds', 'mysticalagriculture:compressed_iron_seeds', 'mysticalagriculture:elementium_seeds', 'mysticalagriculture:signalum_seeds', 'mysticalagriculture:constantan_seeds', 'mysticalagriculture:steel_seeds', 'mysticalagriculture:knightmetal_seeds', 'mysticalagriculture:refined_obsidian_seeds', 'mysticalagriculture:blazing_crystal_seeds', 'mysticalagriculture:enderman_seeds', 'mysticalagriculture:invar_seeds', 'mysticalagriculture:ghast_seeds', 'mysticalagriculture:blaze_seeds', 'mysticalagriculture:nickel_seeds', 'mysticalagriculture:gold_seeds', 'mysticalagriculture:fluix_seeds', 'mysticalagriculture:end_seeds', 'mysticalagriculture:uranium_seeds', 'mysticalagriculture:refined_glowstone_seeds', 'mysticalagriculture:lapis_lazuli_seeds', 'mysticalagriculture:electrum_seeds', 'mysticalagriculture:flux_infused_ingot_seeds', 'mysticalagriculture:energized_steel_seeds', 'mysticalagriculture:experience_seeds', 'mysticalagriculture:lumium_seeds', 'mysticalagriculture:osmium_seeds', 'mysticalagriculture:fluorite_seeds', 'mysticalagriculture:fiery_ingot_seeds','mysticalagriculture:sapphire_seeds', 'mysticalagriculture:ruby_seeds', 'mysticalagriculture:hop_graphite_seeds'])
	event.add('forge:tier4essences', ['mysticalagriculture:sapphire_essence', 'mysticalagriculture:ruby_essence', 'mysticalagriculture:hop_graphite_essence', 'mysticalagriculture:compressed_iron_essence', 'mysticalagriculture:elementium_essence', 'mysticalagriculture:signalum_essence', 'mysticalagriculture:constantan_essence', 'mysticalagriculture:steel_essence', 'mysticalagriculture:knightmetal_essence', 'mysticalagriculture:refined_obsidian_essence', 'mysticalagriculture:blazing_crystal_essence', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:invar_essence', 'mysticalagriculture:ghast_essence', 'mysticalagriculture:blaze_essence', 'mysticalagriculture:nickel_essence', 'mysticalagriculture:gold_essence', 'mysticalagriculture:fluix_essence', 'mysticalagriculture:end_essence', 'mysticalagriculture:uranium_essence', 'mysticalagriculture:refined_glowstone_essence', 'mysticalagriculture:lapis_lazuli_essence', 'mysticalagriculture:electrum_essence', 'mysticalagriculture:flux_infused_ingot_essence', 'mysticalagriculture:energized_steel_essence', 'mysticalagriculture:experience_essence', 'mysticalagriculture:lumium_essence', 'mysticalagriculture:osmium_essence', 'mysticalagriculture:fluorite_essence', 'mysticalagriculture:fiery_ingot_essence','mysticalagriculture:sapphire_essence', 'mysticalagriculture:ruby_essence', 'mysticalagriculture:hop_graphite_essence'])

	event.add('forge:tier5seeds',['mysticalagriculture:yellorium_seeds', 'mysticalagriculture:niotic_crystal_seeds', 'mysticalagriculture:iridium_seeds', 'mysticalagriculture:enderium_seeds', 'mysticalagriculture:wither_skeleton_seeds', 'mysticalagriculture:uwuterium_seeds', 'mysticalagriculture:uraninite_seeds', 'mysticalagriculture:platinum_seeds', 'mysticalagriculture:flux_infused_gem_seeds', 'mysticalagriculture:diamond_seeds', 'mysticalagriculture:terrasteel_seeds', 'mysticalagriculture:spirited_crystal_seeds', 'mysticalagriculture:emerald_seeds', 'mysticalagriculture:cyanite_seeds', 'mysticalagriculture:netherite_seeds'])
	event.add('forge:tier5essences',['mysticalagriculture:yellorium_essence', 'mysticalagriculture:niotic_crystal_essence', 'mysticalagriculture:iridium_essence', 'mysticalagriculture:enderium_essence', 'mysticalagriculture:wither_skeleton_essence', 'mysticalagriculture:uwuterium_essence', 'mysticalagriculture:uraninite_essence', 'mysticalagriculture:platinum_essence', 'mysticalagriculture:flux_infused_gem_essence', 'mysticalagriculture:diamond_essence', 'mysticalagriculture:terrasteel_essence', 'mysticalagriculture:spirited_crystal_essence', 'mysticalagriculture:emerald_essence', 'mysticalagriculture:cyanite_essence', 'mysticalagriculture:netherite_essence'])

	event.add('forge:tier6seeds',['mysticalagriculture:nitro_crystal_seeds', 'mysticalagriculture:gaia_spirit_seeds', 'mysticalagriculture:nether_star_seeds', 'mysticalagriculture:dragon_egg_seeds'])
	event.add('forge:tier6essences',['mysticalagriculture:nitro_crystal_essence', 'mysticalagriculture:gaia_spirit_essence', 'mysticalagriculture:nether_star_essence', 'mysticalagriculture:dragon_egg_essence'])


	event.add('forge:gems/soul_sand','ironjetpacks:wood')
	event.get('forge:speedup1').add('industrialforegoing:speed_addon_1')

	event.get('forge:crynetherrack').add('exnihilosequentia:crushed_netherrack')

	event.get('curios:curio').add('botania:mana_mirror')

	event.add('forge:storage_blocks/darksteel','kubejs:darksteel_block')

	event.get('forge:plates/antimatter').add('ftbic:antimatter')
	event.get('forge:rods/antimatter').add('kubejs:antimatter_rod')
	
	event.removeAllTagsFrom(['ftbic:uranium_plate', 'ftbic:aluminum_plate'])

	event.remove('forge:dusts/quartz','mekanism:dust_quartz')
	event.remove('forge:dusts/diamond','ftbic:diamond_dust')
	event.remove('forge:dusts/emerald','mekanism:dust_emerald')
	event.remove('forge:dusts/steel','mekanism:dust_steel')
	event.remove('forge:dusts/steel','immersiveengineering:dust_steel')

	event.add('forge:ingots/amethyst','minecraft:amethyst_shard')
	event.add('forge:gaiaauraband','botanicadds:aura_ring_gaia')

	event.get('forge:ingots/emerald').add('minecraft:emerald')
	event.get('forge:ingots/diamond').add('minecraft:diamond')
	event.get('forge:rods').add('kubejs:diamond_rod')
	event.get('forge:rods/diamond').add('kubejs:diamond_rod')

	event.get('forge:rods').add('kubejs:emerald_rod')
	event.get('forge:rods/emerald').add('kubejs:emerald_rod')

	event.get('thermal:crafting/dies').add('immersiveengineering:mold_wire')
	event.get('thermal:crafting/dies').add('kubejs:large_plate_cast')
	event.get('thermal:crafting/dies').add('thermal:chiller_rod_cast')
	event.get('forge:storage_blocks/aquamarine').add('kubejs:aquamarine_block')

	event.get('forge:storage_blocks/cobblestone').add('compressium:cobblestone_1')
	event.remove('forge:storage_blocks/cobblestone','cyclic:compressed_cobblestone')

	event.remove('forge:storage_blocks/cobblestone','cyclic:compressed_cobblestone')
	event.add('forge:wires/enderium','ftbic:enderium_wire')
	event.remove('forge:dusts/uranium','ftbic:uranium_dust')
	event.remove('forge:dusts/uranium','bigreactors:yellorium_dust')
})


ServerEvents.tags('fluid', event => {

	event.get('forge:only_water').add('minecraft:water')
	event.get('forge:starlight').add('kubejs:starlight')
	event.get('forge:blazing_pyro').add('kubejs:blazing_pyro')
	event.get('forge:blazing_cryo').add('kubejs:blazing_cryo')

	event.get('forge:fluid_xp').add('cofh_core:experience')
	event.get('forge:fluid_xp').add('industrialforegoing:essence')
	event.get('forge:fluid_xp').add('experienceobelisk:cognitium')
	event.get('forge:fluid_xp').add('mob_grinding_utils:fluid_xp')
	event.get('forge:fluid_xp').add('cyclic:xpjuice')
	event.get('forge:fluid_xp').add('reliquary:xp_juice_still')

	event.get('create:bottomless/allow').remove('minecraft:water')

})



ServerEvents.tags('block', event => {

	event.get('minecraft:beacon_base_blocks').add('kubejs:uwuterium_block')

	event.get('minecraft:wither_immune').add('kubejs:reinforced_obsidian')
	event.get('minecraft:dragon_immune').add('kubejs:reinforced_obsidian')

	event.get('forge:ores/arcane').add('kubejs:arcane_ore')





})




















