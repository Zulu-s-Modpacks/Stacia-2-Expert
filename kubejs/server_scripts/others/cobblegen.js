ServerEvents.recipes(event => {

    let blockOut = [
        'minecraft:granite',
        'minecraft:diorite',
        'minecraft:andesite',
        'minecraft:deepslate',
        'minecraft:tuff',
        'quark:permafrost',
        'quark:limestone',
        'quark:jasper',
        'quark:shale',
        'quark:myalite',
        'minecraft:calcite',
        'minecraft:dripstone_block',
        'create:veridium',
        'create:scorchia',
        'create:scoria',
        'create:ochrum',
        'create:crimsite',
        'create:limestone',
        'create:asurine',
        'ad_astra:sky_stone',
        'ad_astra:moon_stone',
        'ad_astra:moon_cobblestone',
        'ad_astra:mars_stone',
        'ad_astra:mars_cobblestone',
        'ad_astra:venus_sandstone',
        'ad_astra:venus_stone',
        'ad_astra:mercury_stone',
        'ad_astra:mercury_cobblestone',
        'ad_astra:glacio_stone',
        'ad_astra:glacio_cobblestone',
        'byg:dacite_cobblestone',
        'byg:mossy_stone',
        'byg:rocky_stone',
        'byg:scoria_stone',
        'byg:scoria_cobblestone',
        'byg:soapstone',
        'byg:purpur_stone',
        'byg:ether_stone',
        'byg:cryptic_stone',
        'ae2:sky_stone_block',
        'blue_skies:turquoise_stone',
        'blue_skies:turquoise_cobblestone',
        'blue_skies:lunar_stone',
        'blue_skies:lunar_cobblestone',
        'deeperdarker:sculk_stone',
        'mysticalagriculture:soulstone',
        'mysticalagriculture:soulstone_cobble',
        'blue_skies:mossy_turquoise_cobblestone',
        'byg:cobbled_ether_stone',
        'blue_skies:mossy_lunar_cobblestone'
    ]

    blockOut.forEach(blockOut => {
        event.custom({
            "type": "thermal:rock_gen",
            "adjacent": "minecraft:water",
            "below": blockOut,
            "result": {
                "item": blockOut
            }
        });
    })
})