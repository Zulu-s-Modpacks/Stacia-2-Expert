// priority: 0


Platform.getInfo('kubejs').name = 'Stacia 2: Expert'


StartupEvents.registry('item', event => {
	event.create('stone_mechanism')
	event.create('glowing_mechanism')
	event.create('allay_fertilizer')
	event.create('madeline_strawberry')
	event.create('aquamarine')
	event.create('resonating_gem')
	event.create('uwuterium_pearl')
	event.create('bloody_mechanism')
	event.create('endsteel_bars')
	event.create('darksteel_bars')
	event.create('charged_enriched_iron')
	event.create('blue_slime')
	event.create('seared_brick')
	event.create('devilish_horn')
	event.create('blue_plastic')
	event.create('netherrack_piece')
	event.create('flint_handle')
	event.create('raw_arcane')

	event.create('hdpe_rod_hori')


	//Infused Crystals
	event.create('goldium')
	event.create('infused_goldium').glow(true)

	//EnderIO
	event.create('basic_capacitor')
	event.create('advanced_capacitor')
	event.create('ultimate_capacitor')

	//Electron Tubes
	event.create('golden_electron_tube').texture("kubejs:item/tubes/golden")
	event.create('aquamarine_electron_tube').texture("kubejs:item/tubes/aquamarine")

	event.create('enriched_aquamarine').texture("kubejs:item/tubes/enriched_aquamarine")

	//Plates
	event.create('plate_endsteel').texture("kubejs:item/plates/plate_endsteel")
	event.create('plate_darksteel').texture("kubejs:item/plates/plate_darksteel")
	event.create('plate_diamond').texture("kubejs:item/plates/plate_diamond")
	event.create('plate_emerald').texture("kubejs:item/plates/plate_emerald")
	event.create('plate_lapis').texture("kubejs:item/plates/plate_lapis")
	event.create('plate_quartz').texture("kubejs:item/plates/plate_quartz")
	event.create('osmium_plate').texture("kubejs:item/plates/osmium_plate")
	event.create('dense_lead_plate').texture("kubejs:item/plates/dense_lead_plate")
	event.create('dense_iron_plate').texture("kubejs:item/plates/dense_iron_plate")

	//Nuggets
	event.create('stone_nugget').texture("kubejs:item/nuggets/stone_nugget")
	event.create('endsteel_nugget').texture("kubejs:item/nuggets/endsteel_nugget")
	event.create('darksteel_nugget').texture("kubejs:item/nuggets/darksteel_nugget")
	event.create('pigiron_nugget').texture("kubejs:item/nuggets/pigiron_nugget")
	event.create('soulsteel_nugget').texture("kubejs:item/nuggets/soulsteel_nugget")
	event.create('hepatizon_nugget').texture("kubejs:item/nuggets/hepatizon_nugget")
	event.create('slimesteel_nugget').texture("kubejs:item/nuggets/slimesteel_nugget")
	event.create('nugget_lapis').texture("kubejs:item/nuggets/nugget_lapis")
	event.create('nugget_quartz').texture("kubejs:item/nuggets/nugget_quartz")
	event.create('uwuterium_nugget').texture("kubejs:item/nuggets/uwuterium_nugget")

	//Large Plates
	event.create('lp_steel').texture("kubejs:item/largeplates/lp_steel")
	event.create('lp_copper').texture("kubejs:item/largeplates/lp_copper")
	event.create('lp_aquamarine').texture("kubejs:item/largeplates/lp_aquamarine")
	event.create('lp_redstone').texture("kubejs:item/largeplates/lp_redstone")
	event.create('lp_silver').texture("kubejs:item/largeplates/lp_silver")
	event.create('lp_tin').texture("kubejs:item/largeplates/lp_tin")
	event.create('lp_electrum').texture("kubejs:item/largeplates/lp_electrum")
	event.create('lp_refined_glowstone').texture("kubejs:item/largeplates/lp_refined_glowstone")
	event.create('lp_iron').texture("kubejs:item/largeplates/lp_iron")
	event.create('large_plate_cast').texture("kubejs:item/largeplates/large_plate_cast")

	//DE
	event.create('de_draconic_core')
	event.create('de_wyvern_core')
	event.create('de_awakened_core')

	//Incomplete
	event.create('in_rf_coil')
	event.create('in_bloody_mechanism')
	event.create('in_creative_blaze_cake')
	event.create('in_starmetal_ingot').texture("kubejs:item/ingots/in_starmetal_ingot")
	event.create('in_enriched_iron').texture("kubejs:item/ingots/in_enriched_iron")

	//RS Processors
	event.create('manasteel_processor')
	event.create('terrasteel_processor')
	event.create('elementium_processor')
	event.create('uwuterium_processor')

	event.create('raw_manasteel_processor').texture("kubejs:item/rsprocessors/raw_manasteel_processor")
	event.create('raw_terrasteel_processor').texture("kubejs:item/rsprocessors/raw_terrasteel_processor")
	event.create('raw_elementium_processor').texture("kubejs:item/rsprocessors/raw_elementium_processor")
	event.create('raw_uwuterium_processor').texture("kubejs:item/rsprocessors/raw_uwuterium_processor")

	//Blood Magic Slates
	event.create('slate_1').texture("kubejs:item/slates/slate_1")
	event.create('slate_2').texture("kubejs:item/slates/slate_2")
	event.create('slate_3').texture("kubejs:item/slates/slate_3")
	event.create('slate_fluix').texture("kubejs:item/slates/slate_fluix")
	event.create('slate_uwuterium').texture("kubejs:item/slates/slate_uwuterium")

	//Dusts
	event.create('diamond_dust_pile').texture("kubejs:item/piles/diamond_dust_pile")
	event.create('emerald_dust_pile').texture("kubejs:item/piles/emerald_dust_pile")
	event.create('gold_dust_pile').texture("kubejs:item/piles/gold_dust_pile")

	event.create('draconium_dust')
	event.create('stardust')

	//Rods
	event.create('diamond_rod').texture("kubejs:item/rods/diamond_rod")
	event.create('emerald_rod').texture("kubejs:item/rods/emerald_rod")
	event.create('antimatter_rod').texture("kubejs:item/rods/antimatter_rod")

	//Gears
	event.create('osmium_gear')
	event.create('endsteel_gear')
	event.create('darksteel_gear')

	//Ingots
	event.create('osgloglas_ingot').texture("kubejs:item/ingots/osgloglas_ingot")
	event.create('awakened_draconium_ingot').texture("kubejs:item/ingots/awakened_draconium_ingot")
	event.create('draconium_ingot').texture("kubejs:item/ingots/draconium_ingot")
	event.create('stacium_ingot').texture("kubejs:item/ingots/stacium_ingot")
	event.create('solus_ingot').texture("kubejs:item/ingots/solus_ingot")
	event.create('terrarium_ingot').texture("kubejs:item/ingots/terrarium_ingot")
	event.create('lunaria_ingot').texture("kubejs:item/ingots/lunaria_ingot")
	event.create('starmetal_ingot').texture("kubejs:item/ingots/starmetal_ingot")
	event.create('osmiridium_ingot').texture("kubejs:item/ingots/osmiridium_ingot")
	event.create('endsteel_ingot').texture("kubejs:item/ingots/endsteel_ingot")
	event.create('darksteel_ingot').texture("kubejs:item/ingots/darksteel_ingot")
	event.create('iron_aluminum_ingot').texture("kubejs:item/ingots/iron_aluminum_ingot")
	event.create('uwuterium_ingot').texture("kubejs:item/ingots/uwuterium_ingot")
	event.create('pigiron_ingot').texture("kubejs:item/ingots/pigiron_ingot")
	event.create('soulsteel_ingot').texture("kubejs:item/ingots/soulsteel_ingot")
	event.create('hepatizon_ingot').texture("kubejs:item/ingots/hepatizon_ingot")
	event.create('slimesteel_ingot').texture("kubejs:item/ingots/slimesteel_ingot")
	event.create('single_use_ingot_cast').texture("kubejs:item/ingots/single_use_ingot_cast")

	//Catalyst
	event.create('catal_ender').texture("kubejs:item/catals/catal_ender")
	event.create('catal_glowstone').texture("kubejs:item/catals/catal_glowstone")
	event.create('catal_blood').texture("kubejs:item/catals/catal_blood")

	//Chipsets
	event.create('chipset_emerald').texture("kubejs:item/chipsets/chipset_emerald")
	event.create('chipset_iron').texture("kubejs:item/chipsets/chipset_iron")
	event.create('chipset_diamond').texture("kubejs:item/chipsets/chipset_diamond")
	event.create('chipset_gold').texture("kubejs:item/chipsets/chipset_gold")
	event.create('chipset_quartz').texture("kubejs:item/chipsets/chipset_quartz")
	event.create('chipset_redstone').texture("kubejs:item/chipsets/chipset_redstone")

	//Thermal Dusts
	event.create('aerotheum_dust').texture("kubejs:item/thermaldusts/aerotheum_dust")
	event.create('pyrotheum_dust').texture("kubejs:item/thermaldusts/pyrotheum_dust")
	event.create('cryotheum_dust').texture("kubejs:item/thermaldusts/cryotheum_dust")
	event.create('petrotheum_dust').texture("kubejs:item/thermaldusts/petrotheum_dust")


	//OC
	event.create('alu').texture("kubejs:item/oc/alu")
	event.create('angelupgrade').texture("kubejs:item/oc/angelupgrade")
	event.create('apu1').texture("kubejs:item/oc/apu1")
	event.create('apu2').texture("kubejs:item/oc/apu2")
	event.create('card').texture("kubejs:item/oc/card")
	event.create('chamelium').texture("kubejs:item/oc/chamelium")
	event.create('chip1').texture("kubejs:item/oc/chip1")
	event.create('chip2').texture("kubejs:item/oc/chip2")
	event.create('chip3').texture("kubejs:item/oc/chip3")
	event.create('componentbus1').texture("kubejs:item/oc/componentbus1")
	event.create('componentbus2').texture("kubejs:item/oc/componentbus2")
	event.create('componentbus3').texture("kubejs:item/oc/componentbus3")
	event.create('craftingupgrade').texture("kubejs:item/oc/craftingupgrade")
	event.create('cu').texture("kubejs:item/oc/cu")
	event.create('datacard1').texture("kubejs:item/oc/datacard1")
	event.create('datacard2').texture("kubejs:item/oc/datacard2")
	event.create('datacard3').texture("kubejs:item/oc/datacard3")
	event.create('diskdrivemountable').texture("kubejs:item/oc/diskdrivemountable")
	event.create('dronecase1').texture("kubejs:item/oc/dronecase1")
	event.create('dronecase2').texture("kubejs:item/oc/dronecase2")
	event.create('graphicscard1').texture("kubejs:item/oc/graphicscard1")
	event.create('graphicscard2').texture("kubejs:item/oc/graphicscard2")
	event.create('graphicscard3').texture("kubejs:item/oc/graphicscard3")
	event.create('hdd1').texture("kubejs:item/oc/hdd1")
	event.create('hdd2').texture("kubejs:item/oc/hdd2")
	event.create('hdd3').texture("kubejs:item/oc/hdd3")
	event.create('printedcircuitboard').texture("kubejs:item/oc/printedcircuitboard")
	event.create('ram1').texture("kubejs:item/oc/ram1")
	event.create('ram2').texture("kubejs:item/oc/ram2")
	event.create('ram3').texture("kubejs:item/oc/ram3")
	event.create('server1').texture("kubejs:item/oc/server1")
	event.create('server2').texture("kubejs:item/oc/server2")
	event.create('server3').texture("kubejs:item/oc/server3")
	event.create('wlancard1').texture("kubejs:item/oc/wlancard1")
	event.create('wlancard2').texture("kubejs:item/oc/wlancard2")

	//Units
	event.create('unit_empty').texture("kubejs:item/units/unit_empty")
	event.create('unit_glowstone').texture("kubejs:item/units/unit_glowstone")
	event.create('unit_cryotheum').texture("kubejs:item/units/unit_cryotheum")

	event.create('illumination_powder')

	//Crafting Seeds
	event.create('tier2_crafting_seed').texture("kubejs:item/craftingseeds/tier2_crafting_seed")
	event.create('tier3_crafting_seed').texture("kubejs:item/craftingseeds/tier3_crafting_seed")
	event.create('tier4_crafting_seed').texture("kubejs:item/craftingseeds/tier4_crafting_seed")
	event.create('tier5_crafting_seed').texture("kubejs:item/craftingseeds/tier5_crafting_seed")
	event.create('tier6_crafting_seed').texture("kubejs:item/craftingseeds/tier6_crafting_seed")

})

StartupEvents.registry('block', event => {


	event.create("reinforced_obsidian")
    .resistance(1200) // no explody
    .hardness(50)     // same mining speed as obsidian
    .tagBlock("minecraft:wither_immune") // no wither breaky
    .tagBlock("minecraft:dragon_immune") // no dragon breaky

	event.create('arcane_ore').soundType('stone').hardness(2.0).displayName('Arcane Ore').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('magical_casing').soundType('stone').hardness(2.0).displayName('Ancient Stone Bricks').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('glimmering_livingrock').soundType('stone').hardness(2.0).displayName('Glimmering Livingrock').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('aquamarine_block').soundType('stone').hardness(2.0).displayName('Block of Aquamarine').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('machine_frame_simple').soundType('stone').hardness(2.0).displayName('Endsteel Machine Frame').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

	event.create('draconium_block').displayName('§5Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('charged_draconium_block').displayName('§5Charged Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('awakened_draconium_block').displayName('§6Awakened Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

	event.create('goldium_block').displayName('Block of Goldium Crystal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('infused_goldium_block').displayName('Block of Infused Goldium Crystal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

	event.create('grout').displayName('Grout').tagBlock("mineable/shovel").tagBlock('minecraft:needs_stone_tool')

	event.create('slimesteel_block').displayName('Block of Slimesteel').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('pigiron_block').displayName('Block of Pig Iron').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('soulsteel_block').displayName('Block of Soulsteel').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('hepatizon_block').displayName('Block of Hepatizon').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

	event.create('starmetal_ore').soundType('stone').hardness(2.0).displayName('Starmetal Ore').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	event.create('mana_sand').displayName('Aquamarine Shale').soundType('sand').tagBlock("mineable/shovel").tagBlock('minecraft:needs_stone_tool')


	event.create('uwuterium_block').displayName('§dBlock Of Uwuterium').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	event.create('osgloglas_block').displayName('Block Of Osgloglas').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')

	event.create('darksteel_block').displayName('Block Of Darksteel').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	event.create('raw_arcane_block').displayName('Block Of Raw Arcane').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

})

StartupEvents.registry('fluid', e => {

    e.create('molten_steel').displayName('Molten Steel')
	.thickTexture(0xFFFFFF).bucketColor(0x3d3d3d)
	.flowingTexture('kubejs:item/molten_steel').stillTexture('kubejs:item/molten_steel')

	e.create('mana').displayName('Mana')
	.thickTexture(0x37fcf7).bucketColor(0x37fcf7)
	.flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')

	e.create('dimensional_shard_sap').displayName('Dimensional Shard Sap')
	.thickTexture(0x7cc4c2).bucketColor(0x7cc4c2)
	.flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')

	e.create('starlight').displayName('Liquid Starlight')
	.thickTexture(0xd8d7d7).bucketColor(0xd8d7d7)
	.flowingTexture('kubejs:item/liquid_starlight_still').stillTexture('kubejs:item/liquid_starlight_still')

	e.create('molten_starmetal').displayName('Molten Starmetal')
	.thickTexture(0x002c8f).bucketColor(0x002c8f)
	.flowingTexture('kubejs:item/molten_starmetal').stillTexture('kubejs:item/molten_starmetal')

	e.create('molten_uwuterium').displayName('Molten Uwuterium')
	.thickTexture(0xff66b2).bucketColor(0xff66b2)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_infused_coalium').displayName('Molten Infused Coal')
	.thickTexture(0x040e0e).bucketColor(0x040e0e)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('stacia_essence').displayName('Essence Of Lambent Light')
	.thickTexture(0x0ee0cea).bucketColor(0xee0cea)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('solus_essence').displayName('Essence Of Hecate II')
	.thickTexture(0x13eaee).bucketColor(0x13eaee)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('terraria_essence').displayName('Essence Of Joyeuse')
	.thickTexture(0x0ced1b).bucketColor(0x0ced1b)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('lunaria_essence').displayName('Essence Of Mothers Rosario')
	.thickTexture(0x561bf1).bucketColor(0x561bf1)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_obsidian').displayName('Molten Obsidian')
	.thickTexture(0x38254d).bucketColor(0x38254d)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_lapis').displayName('Molten Lapis Lazuli')
	.thickTexture(0x1c52a6).bucketColor(0x1c52a6)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_quartz').displayName('Molten Quartz')
	.thickTexture(0x1c52a6).bucketColor(0x1c52a6)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('blazing_pyro').displayName('Blazing Pyrotheum')
	.bucketColor(0xffc325)
	.flowingTexture('kubejs:block/fluids/pyrotheum_flow').stillTexture('kubejs:block/fluids/pyrotheum_still')

	e.create('molten_enriched_quartz').displayName('Molten Enriched Quartz')
	.thickTexture(0xf3f3f4).bucketColor(0xf3f3f4)
	.flowingTexture('kubejs:item/en_quartz_flow').stillTexture('kubejs:item/en_quartz_still')

	e.create('blazing_cryo').displayName('Gelid Cryotheum')
	.bucketColor(0x4bf1f5)
	.flowingTexture('kubejs:item/cryotheum_flow').stillTexture('kubejs:item/cryotheum_still')

	e.create('ender_juice').displayName('Ender Juice')
	.thickTexture(0x0a2f56).bucketColor(0x0a2f56)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_electrum').displayName('Molten Electrum')
	.thickTexture(0xf9d172).bucketColor(0xf9d172)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')
})


ItemEvents.modification(event => {
    event.modify("kubejs:uwuterium_slate", item => {
		item.rarity = 'epic'
    })
})
  
