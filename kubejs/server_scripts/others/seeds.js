ServerEvents.recipes(event => {

 event.remove({ type: 'mysticalagriculture:infusion' })

//--------Tier 1
  let pottingtier1 = (output, pottedInput) => {
    event.custom({
      "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
      "input": {"item": "mysticalagriculture:prosperity_seed_base"},
      "ingredients": [
        {"item": pottedInput },
        {"item": "mysticalagriculture:inferium_essence"},
        {"item": pottedInput },
        {"item": "mysticalagriculture:inferium_essence"},
        {"item": pottedInput },
        {"item": "mysticalagriculture:inferium_essence"},
        {"item": pottedInput },
        {"item": "mysticalagriculture:inferium_essence"},],
      "result": {"item": "mysticalagriculture:" + output + "_seeds"}
    })
  }

  pottingtier1('air', 'mysticalagriculture:air_agglomeratio')
  pottingtier1('deepslate', 'minecraft:deepslate')
  pottingtier1('dirt', 'minecraft:dirt')
  pottingtier1('earth', 'mysticalagriculture:earth_agglomeratio')
  pottingtier1('fire', 'mysticalagriculture:fire_agglomeratio')
  pottingtier1('ice', 'minecraft:ice')
  pottingtier1('stone', 'minecraft:stone')
  pottingtier1('water', 'mysticalagriculture:water_agglomeratio')
  pottingtier1('wood', 'minecraft:oak_log')

//-------Tier 2
let pottingtier2 = (output, pottedInput) => {
  event.custom({
    "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
    "input": {"item": "kubejs:tier2_crafting_seed"},
    "ingredients": [
      {"item": pottedInput },
      {"item": "mysticalagriculture:prudentium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:prudentium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:prudentium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:prudentium_essence"},],
    "result": {"item": "mysticalagriculture:" + output + "_seeds"}
  })
}

pottingtier2('nature', 'mysticalagriculture:nature_agglomeratio')
pottingtier2('dye', 'mysticalagriculture:dye_agglomeratio')
pottingtier2('nether', 'mysticalagriculture:nether_agglomeratio')
pottingtier2('coal', 'minecraft:coal')
pottingtier2('coral', 'mysticalagriculture:coral_agglomeratio')
pottingtier2('honey', 'mysticalagriculture:honey_agglomeratio')
pottingtier2('amethyst', 'waystones:warp_dust')
pottingtier2('rubber', 'industrialforegoing:plastic')
pottingtier2('silicon', 'refinedstorage:silicon')
pottingtier2('sulfur', 'thermal:sulfur')
pottingtier2('aluminum', 'immersiveengineering:ingot_aluminum')
pottingtier2('saltpeter', 'thermal:niter')
pottingtier2('apatite', 'thermal:apatite')
pottingtier2('mystical_flower', 'mysticalagriculture:mystical_flower_agglomeratio')
pottingtier2('limestone', 'create:limestone')
pottingtier2('menril', 'integrateddynamics:menril_berries')


//-------Tier3
let pottingtier3 = (output, pottedInput) => {
  event.custom({
    "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
    "input": {"item": "kubejs:tier3_crafting_seed"},
    "ingredients": [
      {"item": pottedInput },
      {"item": "mysticalagriculture:tertium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:tertium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:tertium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:tertium_essence"},],
    "result": {"item": "mysticalagriculture:" + output + "_seeds"}
  })
}

pottingtier3('iron', 'minecraft:iron_block')
pottingtier3('copper', 'minecraft:copper_block')
pottingtier3('nether_quartz', 'minecraft:quartz_block')
pottingtier3('glowstone', 'minecraft:glowstone')
pottingtier3('redstone', 'minecraft:redstone_block')
pottingtier3('obsidian', 'minecraft:obsidian')
pottingtier3('prismarine', 'mysticalagriculture:prismarine_agglomeratio')
pottingtier3('rubber', 'industrialforegoing:plastic')
pottingtier3('tin', 'thermal:tin_block')
pottingtier3('bronze', 'thermal:bronze_block')
pottingtier3('zinc', 'create:zinc_block')
pottingtier3('brass', 'create:brass_block')
pottingtier3('saltpeter', 'thermal:niter')
pottingtier3('silver', 'thermal:silver_block')
pottingtier3('lead', 'thermal:lead_block')
pottingtier3('graphite', 'bigreactors:graphite_block')
pottingtier3('manasteel', 'botania:manasteel_block')
pottingtier3('steeleaf', 'twilightforest:steeleaf_block')
pottingtier3('ironwood', 'twilightforest:ironwood_block')
pottingtier3('sky_stone', 'ae2:sky_stone_block')
pottingtier3('certus_quartz', 'ae2:quartz_block')
pottingtier3('quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron_block')

//-------Tier4
let pottingtier4 = (output, pottedInput) => {
  event.custom({
    "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
    "input": {"item": "kubejs:tier4_crafting_seed"},
    "ingredients": [
      {"item": pottedInput },
      {"item": "mysticalagriculture:imperium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:imperium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:imperium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:imperium_essence"},],
    "result": {"item": "mysticalagriculture:" + output + "_seeds"}
  })
}

pottingtier4('gold', 'minecraft:gold_block')
pottingtier4('lapis_lazuli', 'minecraft:lapis_block')
pottingtier4('end', 'mysticalagriculture:end_agglomeratio')
pottingtier4('experience', 'create_sa:heap_of_experience')
pottingtier4('steel', 'thermal:steel_block')
pottingtier4('nickel', 'thermal:nickel_block')
pottingtier4('constantan', 'thermal:constantan_block')
pottingtier4('electrum', 'thermal:electrum_block')
pottingtier4('invar', 'thermal:invar_block')
pottingtier4('nickel', 'thermal:nickel_block')
pottingtier4('uranium', 'mekanism:block_uranium')
pottingtier4('ruby', 'thermal:ruby')
pottingtier4('lumium', 'thermal:lumium_block')
pottingtier4('flux_infused_ingot', 'redstone_arsenal:flux_metal_block')
pottingtier4('hop_graphite', 'immersiveengineering:ingot_hop_graphite')
pottingtier4('elementium', 'botania:elementium_block')
pottingtier4('osmium', 'mekanism:block_osmium')
pottingtier4('fluorite', 'mekanism:block_fluorite')
pottingtier4('refined_glowstone', 'mekanism:block_refined_glowstone')
pottingtier4('refined_obsidian', 'mekanism:block_refined_obsidian')
pottingtier4('knightmetal', 'twilightforest:knightmetal_block')
pottingtier4('fiery_ingot', 'twilightforest:fiery_block')
pottingtier4('compressed_iron', 'pneumaticcraft:compressed_iron_block')
pottingtier4('fluix', 'ae2:fluix_block')
pottingtier4('energized_steel', 'powah:energized_steel_block')
pottingtier4('blazing_crystal', 'powah:blazing_crystal_block')

//-------Tier5
let pottingtier5 = (output, pottedInput) => {
  event.custom({
    "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
    "input": {"item": "kubejs:tier5_crafting_seed"},
    "ingredients": [
      {"item": pottedInput },
      {"item": "mysticalagriculture:supremium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:supremium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:supremium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagriculture:supremium_essence"},],
    "result": {"item": "mysticalagriculture:" + output + "_seeds"}
  })
}

pottingtier5('diamond', 'minecraft:diamond_block')
pottingtier5('emerald', 'minecraft:emerald_block')
pottingtier5('netherite', 'minecraft:netherite_block')
pottingtier5('platinum', 'exnihilosequentia:platinum_ingot')
pottingtier5('iridium', 'ftbic:iridium_block')
pottingtier5('enderium', 'thermal:enderium_block')
pottingtier5('flux_infused_gem', 'redstone_arsenal:flux_gem_block')
pottingtier5('terrasteel', 'botania:terrasteel_block')
pottingtier5('cyanite', 'bigreactors:cyanite_block')
pottingtier5('niotic_crystal', 'powah:niotic_crystal_block')
pottingtier5('spirited_crystal', 'powah:niotic_crystal_block')
pottingtier5('uraninite', 'powah:uraninite_block')

//-------Tier6
let pottingtier6 = (output, pottedInput) => {
  event.custom({
    "type": "mysticalagriculture:infusion","conditions": [{"type": "mysticalagriculture:augment_enabled","augment": "kubejs:tier2_crafting_seed"},{"type": "mysticalagriculture:augment_enabled","augment": "mysticalagriculture:nature_seeds"}],
    "input": {"item": "kubejs:tier6_crafting_seed"},
    "ingredients": [
      {"item": pottedInput },
      {"item": "mysticalagradditions:insanium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagradditions:insanium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagradditions:insanium_essence"},
      {"item": pottedInput },
      {"item": "mysticalagradditions:insanium_essence"},],
    "result": {"item": "mysticalagriculture:" + output + "_seeds"}
  })
}

pottingtier6('nether_star', 'extendedcrafting:nether_star_block')
pottingtier6('dragon_egg', 'mysticalagradditions:dragon_egg_crux')
pottingtier6('gaia_spirit', 'botania:gaia_ingot')
pottingtier6('nitro_crystal', 'powah:nitro_crystal_block')

  
})
