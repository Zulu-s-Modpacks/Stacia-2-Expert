ServerEvents.recipes(event => {
    /*event.custom({
        "type": "mekanism:enriching",
        "input":
        {
            "ingredient":
                { "item": "kubejs:aquamarine" }
        },
        "output": { "item": "mekanism:enriched_carbon" }
    })*/

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "kubejs:aquamarine" } },
        "output": { "amount": 20, "infuse_type": "kubejs:aquamarine" }
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "kubejs:enriched_aquamarine" } },
        "output": { "amount": 180, "infuse_type": "kubejs:aquamarine" }
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "thermal:enderium_ingot" } },
        "output": { "amount": 20, "infuse_type": "kubejs:enderium" }
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "thermal:enderium_block" } },
        "output": { "amount": 180, "infuse_type": "kubejs:enderium" }
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "botania:quartz_dark" } },
        "output": { "amount": 20, "infuse_type": "kubejs:black_quartz" }
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input":
            { "ingredient": { "item": "botania:dark_quartz" } },
        "output": { "amount": 80, "infuse_type": "kubejs:black_quartz" }
    })











    //

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 100, "infuse_type": "kubejs:aquamarine" },
        "itemInput":
            { "ingredient": { "item": "createaddition:capacitor" } },
        "output": { "item": "kubejs:aquamarine_electron_tube" }
    })

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 100, "tag": "mekanism:gold" },
        "itemInput":
            { "ingredient": { "item": "createaddition:capacitor" } },
        "output": { "item": "kubejs:golden_electron_tube" }
    })

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 100, "infuse_type": "kubejs:enderium" },
        "itemInput":
            { "ingredient": { "item": "minecraft:glass_bottle" } },
        "output": { "item": "botania:ender_air_bottle" }
    })

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "infuse_type": "kubejs:black_quartz" },
        "itemInput":
            {"ingredient": {"item": "minecraft:redstone"}},
        "output": {"item": "fluxnetworks:flux_dust", "count": 2}
    })
})