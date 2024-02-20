// priority: 0

function replaceMaterial(originalText) {
  let replacements = {
    'ftbic:electronic_circuit': '#forge:ingots/iron'
  };

  for (let key in replacements) {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    originalText = originalText.replace(regex, replacements[key]);
  }

  return originalText;
}



ServerEvents.recipes(event => {

  event.remove({ output: 'ftbic:machine_block' });

  event.shaped('ftbic:machine_block', [
    'ABA',
    'CEC',
    'CDC'
  ], {
    A: '#forge:plates/iron',
    B: '#forge:plates/aluminum',
    C: 'ftbic:fuse',
    D: '#forge:gears/silver',
    E: 'ftbic:electronic_circuit'
  });
  
  event.shaped('kubejs:stone_mechanism', [
    'AB',
    'BA'
  ], {
    A: 'kubejs:stone_nugget',
    B: 'minecraft:andesite'
  });
  
  event.remove({ output: 'minecraft:furnace' });
  event.shaped('minecraft:furnace', [
    'AAA',
    'B B',
    'AAA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'kubejs:stone_mechanism'
  });
  

  event.shapeless(Item.of('kubejs:stone_nugget', 9), ['minecraft:cobblestone']);

  event.shaped('ftbic:advanced_machine_block', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: '#forge:plates/iron',
    B: '#forge:plates/aluminum',
    C: 'ftbic:fuse',
    D: '#forge:gears/silver'
  });
  
  event.remove({ output: 'cyclic:uncrafter' });
  event.remove({ output: 'ars_nouveau:sourcestone_large_bricks' });
  event.shaped('ars_nouveau:sourcestone_large_bricks', [
    'AA',
    'AA'
  ], {
    A: 'ars_nouveau:sourcestone'
  });
  
  event.shaped('2x kubejs:magical_casing', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:stone_bricks',
    B: 'kubejs:stone_mechanism',
    C: 'ars_nouveau:source_gem'
  });
  
  event.remove({ id: 'botania:mana_pool' });
  event.shaped('botania:mana_pool', [
    'ACA',
    'BAB'
  ], {
    A: 'botania:livingrock',
    B: 'kubejs:glimmering_livingrock',
    C: 'kubejs:glowing_mechanism'
  });
  

event.remove({output:'exnihilosequentia:fired_crucible'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "exnihilosequentia:porcelain_clay"
    },
    "B": {
      "item": "ftbic:reinforced_stone"
    },
    "C": {
      "type": "forge:nbt",
      "item": "ftbic:heat_exchanger",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": "exnihilosequentia:fired_crucible"
  }
})

event.remove({output:'botania:mana_spreader'})
event.shaped('botania:mana_spreader', [
  'ABA',
  'CD ',
  'ABA'
], {
  A: 'botania:livingwood_planks',
  B: 'botania:glimmering_livingwood_log',
  C: 'create:brass_casing',
  D: 'kubejs:golden_electron_tube'
});

event.remove({output:'thermal:machine_pulverizer'})
event.shaped('thermal:machine_pulverizer', [
  ' A ',
  'BCB',
  'DED'
], {
  A: 'thermal:rf_coil',
  B: 'kubejs:golden_electron_tube',
  C: 'thermal:machine_frame',
  D: 'thermal:copper_gear',
  E: 'create_sa:hydraulic_engine'
});

event.remove({output:'mekanism:crusher'})
event.shaped('mekanism:crusher', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'thermal_extra:shellite_ingot',
  B: 'ars_nouveau:glyph_crush',
  C: 'mekanism:energy_tablet',
  D: 'mekanism:steel_casing',
  E: 'ironjetpacks:advanced_coil',
  F: 'integrateddynamics:mechanical_squeezer'
});


event.remove({output:'mekanism:enrichment_chamber'})
event.shaped('mekanism:enrichment_chamber', ['ABA', 'CDC', 'EBE'], {
  A: 'ftbic:hv_battery',
  B: 'mekanism:energy_tablet',
  C: 'mekanism:enriched_redstone',
  D: 'ftbic:advanced_machine_block',
  E: 'thermal_extra:twinite_plate'
});

event.remove({ output: 'industrialforegoing:hydroponic_bed' });
event.shaped('industrialforegoing:hydroponic_bed', ['ABA', 'CDC', 'EFE'], {
  A: 'mysticalagriculture:prudentium_growth_accelerator',
  B: 'botania:vivid_grass',
  C: 'powah:capacitor_hardened',
  D: 'botanypotstiers:elite_terracotta_botany_pot',
  E: 'thermal:rf_coil',
  F: 'industrialforegoing:machine_frame_simple'
});

event.remove({ output: 'create:empty_blaze_burner' });
event.shaped('create:empty_blaze_burner', ['A A', 'ABA', 'CDC'], {
  A: 'minecraft:chain',
  B: 'exnihilosequentia:blaze_doll',
  C: 'ars_nouveau:blaze_fiber',
  D: 'rftoolsbase:machine_base'
});

event.remove({ output: 'thermal:machine_crucible' });
event.shaped('thermal:machine_crucible', ['ABA', 'CDC', 'EFE'], {
  A: 'minecraft:nether_bricks',
  B: 'integrateddynamics:drying_basin',
  C: 'ars_nouveau:fire_essence',
  D: 'thermal:machine_frame',
  E: 'thermal_extra:twinite_gear',
  F: 'create:empty_blaze_burner'
});


event.remove({output:'thermal:machine_frame'})
event.shaped('thermal:machine_frame', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'ftbic:advanced_alloy',
  B: 'create:precision_mechanism',
  C: 'kubejs:slate_2',
  D: 'thermal:energy_cell_frame',
  E: 'ftbic:aluminum_gear',
  F: 'thermal:redstone_servo'
});

event.shaped('thermal:machine_crafter', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'immersiveengineering:component_electronic',
  B: 'occultism:golden_sacrificial_bowl',
  C: 'create:mechanical_crafter',
  D: 'industrialforegoing:machine_frame_simple',
  E: 'thermal:silver_gear',
  F: 'create:large_cogwheel'
});


event.remove({output:'functionalstorage:storage_controller'})
event.shaped('functionalstorage:storage_controller', [
  'ABA',
  'ACA',
  'DED'
], {
  A: 'immersiveengineering:sheetmetal_iron',
  B: '#forge:gears/silver',
  C: 'reliquary:eye_of_the_storm',
  D: 'kubejs:lp_steel',
  E: 'rftoolscontrol:graphics_card'
});

event.remove({output:'minecraft:hopper'})
event.shaped('2x minecraft:hopper', [
  'A A',
  'BCB',
  ' D '
], {
  A: 'immersiveengineering:component_iron',
  B: 'kubejs:iron_aluminum_ingot',
  C: 'cyclic:hopper',
  D: '#forge:rods/iron'
});

event.remove({output:'cyclic:hopper_gold'})
event.shaped('2x cyclic:hopper_gold', [
  'A A',
  'BCB',
  ' D '
], {
  A: 'kubejs:golden_electron_tube',
  B: 'thermal:electrum_ingot',
  C: 'cyclic:hopper',
  D: '#forge:rods/gold'
});

event.remove({output:'mekanism:metallurgic_infuser'})
event.shaped('mekanism:metallurgic_infuser', [
  ' A ',
  'BCB',
  'DED'
], {
  A: 'create_sa:small_fueling_tank',
  B: 'immersiveengineering:heavy_engineering',
  C: 'rftoolsbase:machine_frame',
  D: 'kubejs:darksteel_gear',
  E: 'thermal:redstone_servo'
});


event.remove({output:'mob_grinding_utils:saw'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "minecraft:netherite_sword",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "B": {
      "item": "mob_grinding_utils:spikes"
    },
    "C": {
      "item": "pneumaticcraft:transfer_gadget"
    },
    "D": {
      "item": "kubejs:reinforced_obsidian"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw"
  }
})

event.remove({output:'thermal:lightning_charge'})
event.shaped('3x thermal:lightning_charge', [
  'AB',
  'C '
], {
  A: 'minecraft:gunpowder',
  B: 'minecraft:lightning_rod',
  C: '#minecraft:coals'
});


event.remove({output:'sophisticatedbackpacks:backpack'})
event.shaped('sophisticatedbackpacks:backpack', [
  'ABA',
  'CDC',
  'CEC'
], {
  A: 'sophisticatedbackpacks:upgrade_base',
  B: 'immersiveengineering:wirecoil_structure_rope',
  C: 'minecraft:leather',
  D: 'immersiveengineering:crate',
  E: 'cyclic:tile_transporter_empty'
});


event.remove({output:'thermal:redstone_servo'})
event.shaped('thermal:redstone_servo', [
  'A',
  'B',
  'A'
], {
  A: 'thermal:redstone_mushroom_spores',
  B: '#forge:rods/steel'
});


event.remove({output:'thermal:charge_bench'})
event.shaped('2x thermal:charge_bench', [
  'ABA',
  'CDC',
  'ECE'
], {
  A: 'kubejs:lp_electrum',
  B: 'createaddition:tesla_coil',
  C: 'thermal:rf_coil',
  D: 'minecraft:redstone_block',
  E: '#forge:ingots/lead'
});


event.remove({output:'exnihilosequentia:spruce_sieve'})
event.remove({output:'exnihilosequentia:crimson_sieve'})
event.remove({output:'exnihilosequentia:oak_sieve'})
event.remove({output:'exnihilosequentia:jungle_sieve'})
event.remove({output:'exnihilosequentia:dark_oak_sieve'})
event.remove({output:'exnihilosequentia:acacia_sieve'})
event.remove({output:'exnihilosequentia:birch_sieve'})
event.remove({output:'exnihilosequentia:warped_sieve'})

event.shaped('exnihilosequentia:oak_sieve', [
  'A A',
  'ABA',
  'CDC'
], {
  A: 'botania:glimmering_livingwood',
  B: 'thermal:saw_blade',
  C: 'immersiveengineering:stick_treated',
  D: 'mekanism:alloy_infused'
});


event.remove({output:'refinedstorage:grid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DEC",
    "FGC"
  ],
  "key": {
    "A": {
      "item": "rftoolscontrol:advanced_network_card"
    },
    "B": {
      "item": "refinedstorage:advanced_processor"
    },
    "C": {
      "item": "thermal:lumium_glass"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "type": "forge:nbt",
      "item": "computercraft:turtle_normal",
      "count": 1,
      "nbt": "{RightUpgrade:\"minecraft:crafting_table\"}"
    },
    "F": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "G": {
      "item": "refinedstorage:improved_processor"
    }
  },
  "result": {
    "item": "refinedstorage:grid"
  }
})

event.shaped('6x kubejs:single_use_ingot_cast', [
  ' A ',
  'ABA',
  ' A '
], {
  A: 'minecraft:sand',
  B: 'minecraft:brick'
});


//-----Checked Kontrol Edildi


event.remove({output:'exnihilosequentia:string_mesh'})

event.shaped('exnihilosequentia:string_mesh', [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'supplementaries:rope',
  B: 'immersiveengineering:hemp_fabric',
  C: 'thermal_extra:machine_output_augment_1'
});


event.remove({output:'exnihilosequentia:flint_mesh'})
event.shaped('exnihilosequentia:flint_mesh', [
  'ABA',
  'BCB',
  'ABA'
], {
  'A': 'ftbic:coal_ball',
  'B': 'minecraft:flint',
  'C': 'exnihilosequentia:string_mesh'
});

event.remove({output: 'exnihilosequentia:iron_mesh'});
event.shaped('exnihilosequentia:iron_mesh', [
  'ABA',
  'BCB',
  'ABA'
], {
  'A': 'create:minecart_coupling',
  'B': 'refinedstorage:quartz_enriched_iron',
  'C': 'exnihilosequentia:flint_mesh'
});

event.remove({output: 'exnihilosequentia:diamond_mesh'});
event.shaped('exnihilosequentia:diamond_mesh', [
  'ABA',
  'CDC',
  'AEA'
], {
  'A': 'botanicadds:mana_lapis',
  'B': 'mekanism:alloy_reinforced',
  'C': 'botania:tangleberry',
  'D': 'exnihilosequentia:iron_mesh',
  'E': 'functionalstorage:diamond_upgrade'
});


event.remove({output:'exnihilosequentia:emerald_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "powah:capacitor_spirited"
    },
    "B": {
      "item": "botania:terrasteel_ingot"
    },
    "C": {
      "item": "botanicadds:gaia_shard"
    },
    "D": {
      "item": "exnihilosequentia:diamond_mesh"
    }
  },
  "result": {
    "item": "exnihilosequentia:emerald_mesh"
  }
})

event.remove({output:'exnihilosequentia:netherite_mesh'})
event.custom({"type":"minecraft:smithing",
"addition":{"item":"pneumaticcraft:unassembled_netherite_drill_bit"},
"base":{"item":"exnihilosequentia:emerald_mesh"},
"result":{"item":"exnihilosequentia:netherite_mesh"}})

event.remove({output:'industrialforegoing:mob_crusher'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "FGF"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "redstone_arsenal:flux_sword"
    },
    "C": {
      "item": "redstone_arsenal:flux_wrench"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "redstone_arsenal:flux_hammer"
    },
    "F": {
      "item": "ftbic:hv_battery"
    },
    "G": {
      "item": "twilightforest:carminite"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_crusher"
  }
})

event.remove({output:'industrialforegoing:mob_duplicator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "thermal:upgrade_augment_3"
    },
    "B": {
      "item": "kubejs:catal_ender"
    },
    "C": {
      "item": "extendedcrafting:enhanced_redstone_catalyst"
    },
    "D": {
      "type": "forge:nbt",
      "item": "thermal:energy_cell",
      "count": 1,
      "nbt": "{BlockEntityTag:{Energy:0,EnergyMax:1000000,EnergyRecv:1000,EnergySend:1000}}"
    },
    "E": {
      "item": "kubejs:de_draconic_core"
    },
    "F": {
      "item": "botania:conjuration_catalyst"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_duplicator"
  }
})

event.remove({output:'industrialforegoing:stasis_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "spirit:compressed_soul_sand"
    },
    "B": {
      "item": "immersiveengineering:circuit_board"
    },
    "C": {
      "item": "twilightforest:carminite"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "solarflux:twilightforest/twilight_cell_1"
    },
    "F": {
      "item": "kubejs:advanced_capacitor"
    }
  },
  "result": {
    "item": "industrialforegoing:stasis_chamber"
  }
})

event.remove({output:'industrialforegoing:sewer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "cyclic:biomass"
    },
    "B": {
      "item": "immersiveengineering:conveyor_dropper"
    },
    "C": {
      "item": "cyclic:peat_unbaked"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "mekanism:electrolytic_core"
    },
    "F": {
      "item": "botania:rune_greed"
    }
  },
  "result": {
    "item": "industrialforegoing:sewer"
  }
})

event.remove({output:'industrialforegoing:plant_sower'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "naturesaura:break_prevention"
    },
    "C": {
      "item": "naturesaura:token_joy"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "E": {
      "item": "naturesaura:gold_leaf"
    },
    "F": {
      "type": "forge:nbt",
      "item": "aiotbotania:terra_hoe",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": "industrialforegoing:plant_sower"
  }
})

event.remove({output:'cookingforblockheads:sink'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "item": "minecraft:terracotta"
    },
    "C": {
      "item": "thermal:device_water_gen"
    },
    "D": {
      "type": "forge:nbt",
      "item": "reliquary:potion_essence",
      "count": 1,
      "nbt": "{effects:[{duration:750,name:\"minecraft:water_breathing\",potency:0}]}"
    }
  },
  "result": {
    "item": "cookingforblockheads:sink"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:uwuterium_ingot"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_block"
  }
})

event.remove({output:'thermal:machine_bottler'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "create:smart_chute"
    },
    "B": {
      "item": "create:fluid_valve"
    },
    "C": {
      "item": "thermal:machine_frame"
    },
    "D": {
      "item": "kubejs:slate_1"
    },
    "E": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "thermal:machine_bottler"
  }
})

event.remove({output:'evilcraft:blood_infuser'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:rose_gold_ingot"
    },
    "B": {
      "item": "ftbic:powered_furnace"
    },
    "C": {
      "item": "kubejs:soulsteel_block"
    },
    "D": {
      "tag": "evilcraft:gems/dark_power"
    }
  },
  "result": {
    "item": "evilcraft:blood_infuser"
  }
})

event.remove({output:'mekanismgenerators:heat_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "kubejs:osmium_gear"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "D": {
      "item": "laserio:logic_chip"
    },
    "E": {
      "item": "create_sa:heat_engine"
    }
  },
  "result": {
    "item": "mekanismgenerators:heat_generator"
  }
})

event.remove({output:'thermal:dynamo_magmatic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "hexerei:blood_sigil"
    },
    "B": {
      "item": "immersiveengineering:furnace_heater"
    },
    "C": {
      "type": "forge:nbt",
      "item": "ftbic:heat_vent",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "D": {
      "item": "thermal:rf_coil"
    },
    "E": {
      "item": "create_sa:heat_engine"
    }
  },
  "result": {
    "item": "thermal:dynamo_magmatic"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:uwuterium_nugget"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_ingot"
  }
})

event.remove({output:'botania:terra_plate'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DEF"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:block_of_infused_lapisium"
    },
    "B": {
      "item": "minecraft:echo_shard"
    },
    "C": {
      "item": "reaper:rune_block_duplici"
    },
    "D": {
      "item": "botania:rune_spring"
    },
    "E": {
      "item": "botania:rune_earth"
    },
    "F": {
      "item": "botania:rune_summer"
    }
  },
  "result": {
    "item": "botania:terra_plate"
  }
})

event.shapeless(
  Item.of('infused_crystals:lapisium_crystal', 9),
  [ 'infused_crystals:block_of_lapisium'])

  event.shapeless(
    Item.of('kubejs:draconium_ingot', 9),
    [ 'kubejs:draconium_block'])
  
event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "AAA",
        "AAA"
      ],
      "key": {
        "A": {
          "item": "kubejs:draconium_ingot"
        }
      },
      "result": {
        "item": "kubejs:draconium_block"
      }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:awakened_draconium_ingot"
    }
  },
  "result": {
    "item": "kubejs:awakened_draconium_block"
  }
})

event.shapeless(
  Item.of('kubejs:awakened_draconium_ingot', 9),
  [ 'kubejs:awakened_draconium_block'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DCD",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:awakened_supremium_gemstone"
    },
    "B": {
      "item": "mysticalagriculture:awakened_supremium_block"
    },
    "C": {
      "item": "kubejs:de_awakened_core"
    },
    "D": {
      "item": "kubejs:awakened_draconium_block"
    }
  },
  "result": {
    "item": "mysticalagradditions:awakened_draconium_crux",
    "count": 2
  }
})

event.remove({output:'extendedcrafting:crafting_core'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:elite_catalyst"
    },
    "B": {
      "item": "bhc:soul_heart_crystal"
    },
    "C": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "D": {
      "item": "extendedcrafting:frame"
    },
    "E": {
      "item": "twilightforest:carminite"
    }
  },
  "result": {
    "item": "extendedcrafting:crafting_core"
  }
})

event.remove({output:'reliquary:apothecary_mortar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "create:hand_crank"
    }
  },
  "result": {
    "item": "reliquary:apothecary_mortar"
  }
})

event.remove({output:'create:basin'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "B": {
      "item": "immersiveengineering:hempcrete_brick"
    },
    "C": {
      "item": "reliquary:apothecary_mortar"
    }
  },
  "result": {
    "item": "create:basin"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "kubejs:uwuterium_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_uwuterium_processor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "botania:terrasteel_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_terrasteel_processor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_manasteel_processor"
  }
})

event.remove({id:'immersiveengineering:crafting/conveyor_basic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "create:belt_connector"
    },
    "B": {
      "item": "immersiveengineering:ersatz_leather"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "immersiveengineering:conveyor_basic",
    "count": 8
  }
})

event.remove({output:'powah:capacitor_basic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "B": {
      "item": "evilcraft:dark_gem"
    },
    "C": {
      "item": "create:electron_tube"
    }
  },
  "result": {
    "item": "powah:capacitor_basic",
    "count": 4
  }
})

event.remove({output:'cyclic:wireless_energy'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "utilitix:linked_crystal"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    }
  },
  "result": {
    "item": "cyclic:wireless_energy",
    "count": 2
  }
})

event.remove({output:'cyclic:wireless_fluid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "laserio:card_fluid"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    }
  },
  "result": {
    "item": "cyclic:wireless_fluid",
    "count": 2
  }
})

event.remove({output:'cyclic:wireless_item'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "integratedtunnels:part_importer_item"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    },
    "E": {
      "item": "integratedtunnels:part_exporter_item"
    }
  },
  "result": {
    "item": "cyclic:wireless_item",
    "count": 2
  }
})

event.remove({output:'mekanism:basic_tier_installer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_plate"
    },
    "B": {
      "item": "kubejs:darksteel_gear"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "E": {
      "item": "mekanism:crafting_formula"
    }
  },
  "result": {
    "item": "mekanism:basic_tier_installer"
  }
})

event.remove({output:'mekanism:advanced_tier_installer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    },
    "D": {
      "item": "mekanism:basic_tier_installer"
    },
    "E": {
      "item": "kubejs:slate_1"
    }
  },
  "result": {
    "item": "mekanism:advanced_tier_installer"
  }
})

event.remove({output:'mekanism:elite_tier_installer'})

event.remove({output:'functionalstorage:void_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:obsidian"
    },
    "B": {
      "item": "thermal:machine_null_augment"
    }
  },
  "result": {
    "item": "functionalstorage:void_upgrade"
  }
})

event.remove({output:'functionalstorage:copper_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "ftbic:dense_copper_plate"
    },
    "C": {
      "item": "naturesaura:gold_leaf"
    },
    "D": {
      "tag": "functionalstorage:drawer"
    },
    "E": {
      "item": "kubejs:lp_copper"
    }
  },
  "result": {
    "item": "functionalstorage:copper_upgrade"
  }
})

event.remove({output:'functionalstorage:gold_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:gold_plate"
    },
    "C": {
      "item": "createaddition:gold_spool"
    },
    "D": {
      "item": "functionalstorage:copper_upgrade"
    },
    "E": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "functionalstorage:gold_upgrade"
  }
})

event.remove({output:'waystones:waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:stone_bricks"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "unusualend:teleportation_anchor"
    }
  },
  "result": {
    "item": "waystones:waystone"
  }
})

event.remove({output:'waystones:mossy_waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:mossy_stone_bricks"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "unusualend:teleportation_anchor"
    }
  },
  "result": {
    "item": "waystones:mossy_waystone"
  }
})

event.remove({output:'waystones:sandy_waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:chiseled_sandstone"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "unusualend:teleportation_anchor"
    }
  },
  "result": {
    "item": "waystones:sandy_waystone"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:darksteel_bars",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:endsteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:endsteel_bars",
    "count": 12
  }
})

event.remove({output:'industrialforegoing:wither_builder'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "powah:reactor_blazing"
    },
    "B": {
      "item": "extendedcrafting:flux_star"
    },
    "C": {
      "item": "extradisks:withering_processor"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "E": {
      "item": "unusualend:gilded_pearl"
    },
    "F": {
      "item": "kubejs:lunaria_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:wither_builder"
  }
})

event.remove({output:'thermal:dynamo_stirling'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ironjetpacks:advanced_coil"
    },
    "B": {
      "item": "immersiveengineering:wirecoil_redstone"
    },
    "C": {
      "item": "thermal:iron_gear"
    },
    "D": {
      "item": "spirit:soul_slate"
    },
    "E": {
      "item": "create:steam_engine"
    }
  },
  "result": {
    "item": "thermal:dynamo_stirling"
  }
})

event.remove({output:''})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:aquamarine"
    }
  },
  "result": {
    "item": "kubejs:aquamarine_block"
  }
})

event.shapeless(
	Item.of('kubejs:aquamarine', 9), // output
	[ 'kubejs:aquamarine_block'] //input
	)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/steel"
    },
    "B": {
      "item": "kubejs:lp_silver"
    }
  },
  "result": {
    "item": "kubejs:large_plate_cast"
  }
})

event.remove({output:'cyclic:anvil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " C ",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "mekanism:enriched_diamond"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "projecte:repair_talisman"
    },
    "D": {
      "item": "infused_crystals:block_of_infused_ironium"
    }
  },
  "result": {
    "item": "cyclic:anvil"
  }
})

event.remove({output:'cyclic:anvil_magma'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " C ",
    "DED"
  ],
  "key": {
    "A": {
      "item": "minecraft:magma_block"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "compressium:cobblestone_3"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "projecte:repair_talisman"
    }
  },
  "result": {
    "item": "cyclic:anvil_magma"
  }
})

event.remove({output:'tiab:time_in_a_bottle'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "minecraft:clock"
    },
    "C": {
      "item": "kubejs:allay_fertilizer"
    },
    "D": {
      "item": "minecraft:glass_bottle"
    },
    "E": {
      "item": "kubejs:golden_electron_tube"
    },
    "F": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "tiab:time_in_a_bottle"
  }
})

event.remove({output:'hostilenetworks:sim_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "integratedterminals:menril_glass"
    },
    "B": {
      "item": "kubejs:slate_3"
    },
    "C": {
      "item": "kubejs:reinforced_obsidian"
    },
    "D": {
      "item": "unusualend:gilded_pearl"
    },
    "E": {
      "item": "extendedcrafting:ender_star"
    }
  },
  "result": {
    "item": "hostilenetworks:sim_chamber"
  }
})

event.remove({output:'hostilenetworks:loot_fabricator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:slate_3"
    },
    "B": {
      "type": "forge:nbt",
      "item": "productivebees:configurable_honeycomb",
      "count": 1,
      "nbt": "{EntityTag:{type:\"productivebees:blazing\"}}"
    },
    "C": {
      "item": "kubejs:reinforced_obsidian"
    },
    "D": {
      "item": "kubejs:glowing_mechanism"
    },
    "E": {
      "item": "botania:rune_greed"
    }
  },
  "result": {
    "item": "hostilenetworks:loot_fabricator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:uwuterium_essence"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_ingot"
  }
})

event.remove({output:'fluxnetworks:flux_point'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "fluxnetworks:flux_block"
    },
    "D": {
      "item": "kubejs:darksteel_gear"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_point",
    "count": 1
  }
})

event.remove({output:'fluxnetworks:flux_plug'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "fluxnetworks:flux_block"
    },
    "D": {
      "item": "kubejs:endsteel_gear"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_plug",
    "count": 1
  }
})

event.remove({output:'fluxnetworks:flux_block'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_dust"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_block"
  }
})

event.remove({output:'extradisks:raw_withering_processor'})
event.remove({output:'extradisks:withering_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "extendedcrafting:ender_star"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "extradisks:raw_withering_processor"
  }
})

event.remove({output:'refinedstorage:raw_basic_processor'})
event.remove({output:'refinedstorage:basic_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_basic_processor"
  }
})

event.remove({output:'refinedstorage:raw_improved_processor'})
event.remove({output:'refinedstorage:improved_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "kubejs:infused_goldium"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_improved_processor"
  }
})

event.remove({output:'refinedstorage:raw_advanced_processor'})
event.remove({output:'refinedstorage:advanced_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "infused_crystals:infused_diamondium_crystal"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_advanced_processor"
  }
})

event.remove({output:'extrastorage:raw_neural_processor'})
event.remove({output:'extrastorage:neural_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "BDB",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:advanced_processor"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "refinedstorage:improved_processor"
    },
    "D": {
      "item": "minecraft:crafting_table"
    },
    "E": {
      "item": "kubejs:reinforced_obsidian"
    },
    "F": {
      "item": "kubejs:chip2"
    }
  },
  "result": {
    "item": "extrastorage:raw_neural_processor"
  }
})

event.shapeless(
	Item.of('kubejs:goldium', 9), // output
	[ 'kubejs:goldium_block'] //input
	)

event.shapeless(
	Item.of('kubejs:goldium_block'), // output
	[ '9x kubejs:goldium'] //input
	)

event.shapeless(
	Item.of('kubejs:infused_goldium', 9), // output
	[ 'kubejs:infused_goldium_block'] //input
	)

event.shapeless(
	Item.of('kubejs:infused_goldium_block'), // output
	[ '9x kubejs:infused_goldium'] //input
	)

  event.remove({output:'gag:time_sand_pouch'})





event.remove({output:'mekanism:digital_miner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_gear"
    },
    "B": {
      "item": "infused_crystals:infused_coalium_crystal"
    },
    "C": {
      "item": "mekanism:logistical_sorter"
    },
    "D": {
      "item": "mekanism:steel_casing"
    },
    "E": {
      "item": "mekanism:teleportation_core"
    },
    "F": {
      "item": "cyclic:wireless_energy"
    }
  },
  "result": {
    "item": "mekanism:digital_miner"
  }
})

event.remove({output:'refinedstorage:cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "D": {
      "item": "powah:energy_cable_basic"
    }
  },
  "result": {
    "item": "refinedstorage:cable",
    "count": 12
  }
})

event.remove({output:'refinedstorage:disk_drive'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "mekanism:energy_tablet"
    },
    "C": {
      "item": "kubejs:charged_enriched_iron"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    }
  },
  "result": {
    "item": "refinedstorage:disk_drive"
  }
})

event.remove({output:'refinedstorage:crafting_grid'})
event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  " A ",
  "BCB",
  " A "
],
"key": {
  "A": {
    "item": "kubejs:manasteel_processor"
  },
  "B": {
    "item": "minecraft:crafting_table"
  },
  "C": {
    "item": "refinedstorage:grid"
  }
},
"result": {
  "item": "refinedstorage:crafting_grid"
}
})

event.remove({output:'refinedstorage:pattern_grid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "refinedstorage:range_upgrade"
    },
    "B": {
      "item": "refinedstorage:pattern"
    },
    "C": {
      "item": "refinedstorage:grid"
    },
    "D": {
      "item": "powah:ender_gate_niotic"
    }
  },
  "result": {
    "item": "refinedstorage:pattern_grid"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:soulsteel_nugget"
    }
  },
  "result": {
    "item": "kubejs:soulsteel_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:soulsteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:soulsteel_block"
  }
})

event.shapeless(
Item.of('kubejs:soulsteel_nugget', 9), // output
[ 'kubejs:soulsteel_ingot'] //input
)

 event.shapeless(
  Item.of('kubejs:soulsteel_ingot', 9), // output
  [ 'kubejs:soulsteel_block'] //input
  )

//

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:pigiron_nugget"
    }
  },
  "result": {
    "item": "kubejs:pigiron_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:pigiron_ingot"
    }
  },
  "result": {
    "item": "kubejs:pigiron_block"
  }
})

event.shapeless(
Item.of('kubejs:pigiron_nugget', 9), // output
[ 'kubejs:pigiron_ingot'] //input
)

 event.shapeless(
  Item.of('kubejs:pigiron_ingot', 9), // output
  [ 'kubejs:pigiron_block'] //input
  )

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "AAA",
      "AAA"
    ],
    "key": {
      "A": {
        "item": "kubejs:hepatizon_nugget"
      }
    },
    "result": {
      "item": "kubejs:hepatizon_ingot"
    }
  })
  
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "AAA",
      "AAA"
    ],
    "key": {
      "A": {
        "item": "kubejs:hepatizon_ingot"
      }
    },
    "result": {
      "item": "kubejs:hepatizon_block"
    }
  })
  
  event.shapeless(
  Item.of('kubejs:hepatizon_nugget', 9), // output
  [ 'kubejs:hepatizon_ingot'] //input
  )
  
   event.shapeless(
    Item.of('kubejs:hepatizon_ingot', 9), // output
    [ 'kubejs:hepatizon_block'] //input
    )

//

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:slimesteel_nugget"
    }
  },
  "result": {
    "item": "kubejs:slimesteel_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:slimesteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:slimesteel_block"
  }
})

event.shapeless(
Item.of('kubejs:slimesteel_nugget', 9), // output
[ 'kubejs:slimesteel_ingot'] //input
)

 event.shapeless(
  Item.of('kubejs:slimesteel_ingot', 9), // output
  [ 'kubejs:slimesteel_block'] //input
  )

event.remove({output:'thermal:flux_capacitor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    " E "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "kubejs:hepatizon_ingot"
    },
    "C": {
      "item": "infused_crystals:infused_lapisium_crystal"
    },
    "D": {
      "item": "thermal:rf_potato"
    },
    "E": {
      "item": "thermal:rf_coil"
    }
  },
  "result": {
    "item": "thermal:flux_capacitor"
  }
})

event.remove({output:'industrialforegoing:machine_frame_pity'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "botania:livingwood_log"
    },
    "C": {
      "item": "kubejs:dense_iron_plate"
    },
    "D": {
      "item": "minecraft:redstone_block"
    },
    "E": {
      "item": "thermal:cured_rubber"
    }
  },
  "result": {
    "item": "industrialforegoing:machine_frame_pity"
  }
})

event.remove({output:'exmachinis:flux_sieve'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "powah:dielectric_paste"
    },
    "B": {
      "item": "ftbic:advanced_machine_block"
    },
    "C": {
      "item": "powah:dielectric_rod"
    },
    "D": {
      "item": "exnihilosequentia:oak_sieve"
    },
    "E": {
      "item": "mekanism:elite_control_circuit"
    }
  },
  "result": {
    "item": "exmachinis:flux_sieve"
  }
})

event.remove({output:'ad_astra:coal_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "thermal:lapis_gear"
    },
    "C": {
      "item": "kubejs:stone_mechanism"
    },
    "D": {
      "item": "minecraft:furnace"
    },
    "E": {
      "item": "create:steam_engine"
    }
  },
  "result": {
    "item": "ad_astra:coal_generator"
  }
})

event.remove({output:'immersiveengineering:cloche'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "thermal:phytogro"
    },
    "C": {
      "item": "farmersdelight:fruit_salad"
    },
    "D": {
      "tag": "forge:treated_wood"
    },
    "E": {
      "item": "immersiveengineering:component_steel"
    }
  },
  "result": {
    "item": "immersiveengineering:cloche"
  }
})

event.remove({output:'hostilenetworks:deep_learner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCD",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:hepatizon_ingot"
    },
    "B": {
      "item": "immersiveengineering:dust_hop_graphite"
    },
    "C": {
      "item": "reaper:soul_catalyst"
    },
    "D": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "hostilenetworks:deep_learner"
  }
})

event.remove({output:'extendedcrafting:handheld_table'})
event.remove({output:'cyclic:crafting_stick'})
event.remove({output:'cyclic:crafting_bag'})

event.remove({output:'ftbic:electronic_circuit'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:lv_cable"
    },
    "B": {
      "item": "kubejs:plate_darksteel"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "redstone_arsenal:flux_ingot"
    }
  },
  "result": {
    "item": "ftbic:electronic_circuit",
    "count": 4
  }
})

event.remove({output:'create:mechanical_saw'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "kubejs:plate_darksteel"
    },
    "B": {
      "item": "thermal:saw_blade"
    },
    "C": {
      "item": "create:gantry_shaft"
    },
    "D": {
      "item": "create:andesite_casing"
    }
  },
  "result": {
    "item": "create:mechanical_saw"
  }
})

event.remove({output:'thermal:saw_blade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_steel"
    },
    "B": {
      "item": "ars_nouveau:glyph_crush"
    },
    "C": {
      "item": "kubejs:plate_darksteel"
    },
    "D": {
      "item": "reliquary:guardian_spike"
    }
  },
  "result": {
    "item": "thermal:saw_blade"
  }
})

event.remove({output:'exnihilosequentia:mangrove_sieve'})

event.remove({output:'ftbic:geothermal_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ftbic:reinforced_glass"
    },
    "B": {
      "item": "ftbic:fluid_cell"
    },
    "C": {
      "item": "botania:thermalily"
    },
    "D": {
      "item": "create:blaze_cake"
    },
    "E": {
      "item": "ftbic:basic_generator"
    }
  },
  "result": {
    "item": "ftbic:geothermal_generator"
  }
})

event.remove({output:'ad_astra:nasa_workbench'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:assembly_io_unit_export"
    },
    "B": {
      "item": "ftbic:iridium_circuit"
    },
    "C": {
      "item": "mininggadgets:modificationtable"
    },
    "D": {
      "item": "immersiveengineering:rs_engineering"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_supreme"
    }
  },
  "result": {
    "item": "ad_astra:nasa_workbench"
  }
})

event.remove({output:'ftbic:basic_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "ftbic:lv_battery"
    },
    "B": {
      "item": "ftbic:industrial_grade_metal"
    },
    "C": {
      "tag": "forge:gears/silver"
    },
    "D": {
      "item": "ironfurnaces:iron_furnace"
    }
  },
  "result": {
    "item": "ftbic:basic_generator"
  }
})

event.remove({id:'silentgear:bronze_ingot'})

event.remove({output:'botania:runic_altar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "kubejs:glimmering_livingrock"
    },
    "C": {
      "item": "kubejs:manasteel_processor"
    }
  },
  "result": {
    "item": "botania:runic_altar"
  }
})

event.remove({output:'torchmaster:megatorch'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EDE"
  ],
  "key": {
    "A": {
      "item": "twilightforest:torchberries"
    },
    "B": {
      "item": "ars_nouveau:magelight_torch"
    },
    "C": {
      "item": "botania:mana_diamond"
    },
    "D": {
      "item": "botania:livingwood_log"
    },
    "E": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "torchmaster:megatorch"
  }
})

event.remove({output:'torchmaster:dreadlamp'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "C": {
      "item": "glassential:glass_light"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_gear"
    }
  },
  "result": {
    "item": "torchmaster:dreadlamp"
  }
})

event.remove({ type: 'immersiveengineering:sawmill'})

event.remove({output:'infused_crystals:infusedcoaliumshovel'})

event.remove({output:'minecraft:clock'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "botania:cosmetic_clock_eye"
    }
  },
  "result": {
    "item": "minecraft:clock"
  }
})

event.remove({output:'thermal:machine_refinery'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "create:tree_fertilizer"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "D": {
      "item": "thermal:steel_gear"
    },
    "E": {
      "item": "thermal:redstone_servo"
    }
  },
  "result": {
    "item": "thermal:machine_refinery"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "kubejs:osmium_plate"
    },
    "B": {
      "item": "mekanism:nugget_osmium"
    }
  },
  "result": {
    "item": "kubejs:osmium_gear"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ae2:fluix_crystal"
    },
    "B": {
      "item": "ae2:fluix_dust"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "kubejs:slate_2"
    },
    "E": {
      "item": "ae2:formation_core"
    }
  },
  "result": {
    "item": "kubejs:slate_fluix"
  }
})

//Bucket
event.remove({output:'minecraft:bucket'})
event.shaped('minecraft:bucket', [
'ABA',
' A '
], {
A: Item.of('#forge:plates/iron'),
B: 'immersiveengineering:hammer'}).damageIngredient(Item.of('immersiveengineering:hammer'))

event.remove({id:'silentgear:iron_rod'})
event.remove({id:'ad_astra:recipes/iron_rod'})

event.remove({output:'minecraft:flint_and_steel'})
event.shapeless(
  Item.of('minecraft:flint_and_steel'), ['minecraft:iron_ingot', 'kubejs:flint_handle'])

event.remove({output:'cyclic:melter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "solarflux:furnace_upgrade"
    },
    "B": {
      "item": "solarflux:blazing_coating"
    },
    "C": {
      "item": "ironfurnaces:silver_furnace"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "minecraft:shroomlight"
    }
  },
  "result": {
    "item": "cyclic:melter"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B ",
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/aluminum"
    }
  },
  "result": {
    "item": "immersiveengineering:plate_aluminum"
  }
})

event.remove({output:'utilitix:linked_crystal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "utilitix:linked_crystal",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "utilitix:linked_crystal",
    "count": 1
  }
})

event.remove({output:'industrialforegoing:fluid_extractor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "minecraft:light_weighted_pressure_plate"
    },
    "C": {
      "item": "ftbic:advanced_circuit"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "E": {
      "item": "thermal:device_tree_extractor"
    }
  },
  "result": {
    "item": "industrialforegoing:fluid_extractor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "thermal:lapis_gear"
    },
    "B": {
      "item": "kubejs:blue_plastic"
    },
    "C": {
      "item": "minecraft:slime_ball"
    },
    "D": {
      "item": "ftbic:advanced_circuit"
    }
  },
  "result": {
    "item": "pneumaticcraft:capacitor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "pneumaticcraft:plastic"
    }
  },
  "result": {
    "item": "pneumaticcraft:transistor"
  }
})

event.remove({output:'ae2:security_station'})
event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "CEC"
],
"key": {
  "A": {
  "item": "ae2:memory_card_orange"
  },
  "B": {
  "item": "ae2:chest"
  },
  "C": {
  "item": "kubejs:charged_enriched_iron"
  },
  "D": {
  "item": "ae2:cell_component_256k"
  },
  "E": {
  "item": "pneumaticcraft:network_io_port"
  }
},
"result": {
  "item": "ae2:security_station"
}
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "BB",
  ],
  "key": {
    "A": {
      "item": "minecraft:brown_mushroom"
    },
    "B": {
      "item": "create:tree_fertilizer"
    }
  },
  "result": {
    "item": "minecraft:brown_mushroom",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "BB",
  ],
  "key": {
    "A": {
      "item": "minecraft:red_mushroom"
    },
    "B": {
      "item": "create:tree_fertilizer"
    }
  },
  "result": {
    "item": "minecraft:red_mushroom",
    "count": 4
  }
})

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:acacia_log"
	  },
	  "B": {
		"item": "minecraft:acacia_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:acacia_crucible"
	}
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
      "item": "minecraft:birch_log"
      },
      "B": {
      "item": "minecraft:birch_planks"
      },
      "C": {
      "item": "exnihilosequentia:fired_crucible"
      }
    },
    "result": {
      "item": "exnihilosequentia:birch_crucible"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
        "item": "minecraft:oak_log"
        },
        "B": {
        "item": "minecraft:oak_planks"
        },
        "C": {
        "item": "exnihilosequentia:fired_crucible"
        }
      },
      "result": {
        "item": "exnihilosequentia:oak_crucible"
      }
      })

//

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:dark_oak_log"
	  },
	  "B": {
		"item": "minecraft:dark_oak_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:dark_oak_crucible"
	}
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
      "item": "minecraft:spruce_log"
      },
      "B": {
      "item": "minecraft:spruce_planks"
      },
      "C": {
      "item": "exnihilosequentia:fired_crucible"
      }
    },
    "result": {
      "item": "exnihilosequentia:spruce_crucible"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
        "item": "minecraft:mangrove_log"
        },
        "B": {
        "item": "minecraft:mangrove_planks"
        },
        "C": {
        "item": "exnihilosequentia:fired_crucible"
        }
      },
      "result": {
        "item": "exnihilosequentia:mangrove_crucible"
      }
      })

//

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:jungle_log"
	  },
	  "B": {
		"item": "minecraft:jungle_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:jungle_crucible"
	}
  })

  event.remove({output:'immersiveengineering:cokebrick'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "kubejs:seared_brick"
      },
      "B": {
        "item": "exnihilosequentia:porcelain_clay"
      },
      "C": {
        "tag": "forge:sandstone"
      }
    },
    "result": {
      "item": "immersiveengineering:cokebrick",
      "count": 3
    }
  })

  event.remove({output:'immersiveengineering:blastbrick'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:nether_bricks"
      },
      "B": {
        "item": "kubejs:netherrack_piece"
      },
      "C": {
        "item": "architects_palette:molten_nether_bricks"
      }
    },
    "result": {
      "item": "immersiveengineering:blastbrick",
      "count": 3
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:sand"
      },
      "B": {
        "item": "minecraft:gravel"
      },
      "C": {
        "item": "minecraft:clay"
      }
    },
    "result": {
      "item": "kubejs:grout",
      "count": 4
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BAB",
      "ACA",
      "BAB"
    ],
    "key": {
      "A": {
        "item": "minecraft:sand"
      },
      "B": {
        "item": "minecraft:gravel"
      },
      "C": {
        "item": "minecraft:clay"
      }
    },
    "result": {
      "item": "kubejs:grout",
      "count": 4
    }
  })

  event.remove({output:'ftbic:advanced_machine_block'})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:rubber_essence"
      }
    },
    "result": {
      "item": "industrialforegoing:plastic",
      "count": 3
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "A A",
      "AAA"
    ],
    "key": {
      "A": {
        "tag": "minecraft:planks"
      }
    },
    "result": {
      "item": "minecraft:chest"
    }
  })

  event.remove({id:'simple_recipes:oak_log_chest'})
  event.remove({id:'cyclic:crafting/chest'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "A A",
      "AAA"
    ],
    "key": {
      "A": {
        "tag": "minecraft:logs"
      }
    },
    "result": {
      "item": "minecraft:chest",
      "count": 2
    }
  })

  event.remove({id:'quark:tweaks/crafting/utility/chests/oak_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/birch_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/spruce_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/jungle_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/acacia_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/dark_oak_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/crimson_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/warped_chest_wood'})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " AB",
      "ACA",
      "BA "
    ],
    "key": {
      "A": {
        "item": "silentgear:blaze_gold_nugget"
      },
      "B": {
        "item": "fluxnetworks:flux_dust"
      },
      "C": {
        "item": "thermal:electrum_ingot"
      }
    },
    "result": {
      "item": "kubejs:basic_capacitor"
    }
  })

  event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "immersiveengineering:sheetmetal_iron"
      },
      "B": {
        "item": "ae2:quartz_vibrant_glass"
      },
      "C": {
        "item": "kubejs:advanced_capacitor"
      },
      "D": {
        "item": "rftoolsbase:machine_frame"
      }
    },
    "result": {
      "item": "ae2:energy_acceptor"
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "AAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:slime_ball"
      },
      "B": {
        "item": "minecraft:blue_dye"
      }
    },
    "result": {
      "item": "kubejs:blue_slime",
      "count": 8
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AB"
    ],
    "key": {
      "A": {
        "item": "minecraft:slime_ball"
      },
      "B": {
        "item": "minecraft:blue_dye"
      }
    },
    "result": {
      "item": "kubejs:blue_slime"
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AB"
    ],
    "key": {
      "A": {
        "item": "create:dough"
      },
      "B": {
        "item": "minecraft:blue_dye"
      }
    },
    "result": {
      "item": "kubejs:blue_slime"
    }
  })

  event.remove({output:'sophisticatedstorage:iron_chest'})
  event.remove({output:'sophisticatedstorage:gold_chest'})
  event.remove({output:'sophisticatedstorage:diamond_chest'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_iron_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "item": "minecraft:redstone_torch"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_iron_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_gold_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "sophisticatedstorage:basic_to_iron_tier_upgrade"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_gold_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "sophisticatedstorage:basic_to_gold_tier_upgrade"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_diamond_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:iron_to_gold_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "sophisticatedstorage:iron_to_gold_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:iron_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "sophisticatedstorage:iron_to_gold_tier_upgrade"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:iron_to_diamond_tier_upgrade"
  }
})


event.remove({output:'sophisticatedstorage:gold_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "thermal:gold_plate"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:gold_to_diamond_tier_upgrade"
  }
})

event.remove({id:'unusualend:end_crystal_via_chiseled_glass'})

event.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
event.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
event.remove({id:'functionalstorage:oak_drawer_alternate_x4'})

event.remove({id:'create:milling/coal'})

event.remove({output:'ae2:fluix_glass_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "ae2:fluix_crystal"
    },
    "C": {
      "item": "ae2:fluix_dust"
    },
    "D": {
      "item": "powah:energy_cable_basic"
    }
  },
  "result": {
    "item": "ae2:fluix_glass_cable",
    "count": 12
  }
})

event.remove({id:'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})

event.remove({output:'industrialforegoing:ore_laser_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DED",
    "FGF"
  ],
  "key": {
    "A": {
      "item": "ae2:annihilation_core"
    },
    "B": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "C": {
      "item": "ae2:formation_core"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "F": {
      "item": "kubejs:ultimate_capacitor"
    },
    "G": {
      "item": "kubejs:slate_3"
    }
  },
  "result": {
    "item": "industrialforegoing:ore_laser_base"
  }
})

event.remove({output:'cyclic:generator_fuel'})


event.remove({output:'botania:alfheim_portal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ADA"
  ],
  "key": {
    "A": {
      "tag": "botania:livingwood_logs"
    },
    "B": {
      "item": "kubejs:terrarium_ingot"
    },
    "C": {
      "item": "kubejs:terrasteel_processor"
    },
    "D": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "botania:alfheim_portal"
  }
})

event.remove({output:'minecraft:ender_eye'})
event.shapeless(
	Item.of('minecraft:ender_eye'), // output
	[ 'minecraft:ender_pearl', 'silentgear:blazing_dust'])

event.shapeless(
	Item.of('infused_crystals:redstonium_crystal', 9), // output
	[ 'infused_crystals:block_of_redstonium'] //input
	)

  event.shapeless(
    Item.of('infused_crystals:ironium_crystal', 9), // output
    [ 'infused_crystals:block_of_ironium'] //input
  )

  event.shapeless(
    Item.of('infused_crystals:coalium_crystal', 9), // output
    [ 'infused_crystals:block_of_coalium'] //input
    )

    event.shapeless(
      Item.of('infused_crystals:diamondium_crystal', 9), // output
      [ 'infused_crystals:block_of_diamondium'] //input
      )

event.shapeless(
	Item.of('infused_crystals:emeraldium_crystal', 9), // output
	[ 'infused_crystals:block_of_emeraldium'] //input
	)

//

event.remove({output:'mekanism:basic_enriching_factory'})
event.shapeless(
	Item.of('mekanism:basic_enriching_factory'), // output
	[ 'mekanism:enrichment_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_enriching_factory'})
event.shapeless(
	Item.of('mekanism:advanced_enriching_factory'), // output
	[ 'mekanism:basic_enriching_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_enriching_factory'})
event.shapeless(
	Item.of('mekanism:elite_enriching_factory'), // output
	[ 'mekanism:advanced_enriching_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_enriching_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_enriching_factory'), // output
	[ 'mekanism:elite_enriching_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_smelting_factory'})
event.shapeless(
	Item.of('mekanism:basic_smelting_factory'), // output
	[ 'mekanism:energized_smelter', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_smelting_factory'})
event.shapeless(
	Item.of('mekanism:advanced_smelting_factory'), // output
	[ 'mekanism:basic_smelting_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_smelting_factory'})
event.shapeless(
	Item.of('mekanism:elite_smelting_factory'), // output
	[ 'mekanism:advanced_smelting_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_smelting_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_smelting_factory'), // output
	[ 'mekanism:elite_smelting_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_crushing_factory'})
event.shapeless(
	Item.of('mekanism:basic_crushing_factory'), // output
	[ 'mekanism:crusher', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_crushing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_crushing_factory'), // output
	[ 'mekanism:basic_crushing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_crushing_factory'})
event.shapeless(
	Item.of('mekanism:elite_crushing_factory'), // output
	[ 'mekanism:advanced_crushing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_crushing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_crushing_factory'), // output
	[ 'mekanism:elite_crushing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_compressing_factory'})
event.shapeless(
	Item.of('mekanism:basic_compressing_factory'), // output
	[ 'mekanism:osmium_compressor', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_compressing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_compressing_factory'), // output
	[ 'mekanism:basic_compressing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_compressing_factory'})
event.shapeless(
	Item.of('mekanism:elite_compressing_factory'), // output
	[ 'mekanism:advanced_compressing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_compressing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_compressing_factory'), // output
	[ 'mekanism:elite_compressing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_combining_factory'})
event.shapeless(
	Item.of('mekanism:basic_combining_factory'), // output
	[ 'mekanism:combiner', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_combining_factory'})
event.shapeless(
	Item.of('mekanism:advanced_combining_factory'), // output
	[ 'mekanism:basic_combining_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_combining_factory'})
event.shapeless(
	Item.of('mekanism:elite_combining_factory'), // output
	[ 'mekanism:advanced_combining_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_combining_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_combining_factory'), // output
	[ 'mekanism:elite_combining_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_purifying_factory'})
event.shapeless(
	Item.of('mekanism:basic_purifying_factory'), // output
	[ 'mekanism:purification_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_purifying_factory'})
event.shapeless(
	Item.of('mekanism:advanced_purifying_factory'), // output
	[ 'mekanism:basic_purifying_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_purifying_factory'})
event.shapeless(
	Item.of('mekanism:elite_purifying_factory'), // output
	[ 'mekanism:advanced_purifying_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_purifying_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_purifying_factory'), // output
	[ 'mekanism:elite_purifying_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_injecting_factory'})
event.shapeless(
	Item.of('mekanism:basic_injecting_factory'), // output
	[ 'mekanism:chemical_injection_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_injecting_factory'})
event.shapeless(
	Item.of('mekanism:advanced_injecting_factory'), // output
	[ 'mekanism:basic_injecting_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_injecting_factory'})
event.shapeless(
	Item.of('mekanism:elite_injecting_factory'), // output
	[ 'mekanism:advanced_injecting_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_injecting_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_injecting_factory'), // output
	[ 'mekanism:elite_injecting_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_infusing_factory'})
event.shapeless(
	Item.of('mekanism:basic_infusing_factory'), // output
	[ 'mekanism:metallurgic_infuser', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_infusing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_infusing_factory'), // output
	[ 'mekanism:basic_infusing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_infusing_factory'})
event.shapeless(
	Item.of('mekanism:elite_infusing_factory'), // output
	[ 'mekanism:advanced_infusing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_infusing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_infusing_factory'), // output
	[ 'mekanism:elite_infusing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_sawing_factory'})
event.shapeless(
	Item.of('mekanism:basic_sawing_factory'), // output
	[ 'mekanism:precision_sawmill', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_sawing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_sawing_factory'), // output
	[ 'mekanism:basic_sawing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_sawing_factory'})
event.shapeless(
	Item.of('mekanism:elite_sawing_factory'), // output
	[ 'mekanism:advanced_sawing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_sawing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_sawing_factory'), // output
	[ 'mekanism:elite_sawing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_nugget"
    }
  },
  "result": {
    "item": "kubejs:darksteel_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/brass"
    }
  },
  "result": {
    "item": "create:brass_sheet"
  }
})

event.remove({id:'twilightforest:wood/sorting_from_wood_planks'})
event.remove({id:'twilightforest:wood/sorting_from_stripped_planks'})
event.remove({id:'twilightforest:wood/sorting_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/sorting_planks'})

event.shapeless(
	Item.of('twilightforest:sorting_planks', 2), // output
	[ '#twilightforest:sortwood_logs'] //input
)

event.remove({id:'twilightforest:wood/twilight_oak_from_wood_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_from_stripped_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_planks'})

event.shapeless(
	Item.of('twilightforest:twilight_oak_planks', 2), // output
	[ '#twilightforest:twilight_oak_logs'] //input
)

event.remove({id:'twilightforest:wood/canopy_from_wood_planks'})
event.remove({id:'twilightforest:wood/canopy_from_stripped_planks'})
event.remove({id:'twilightforest:wood/canopy_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/canopy_planks'})

event.shapeless(
	Item.of('twilightforest:canopy_planks', 2), // output
	[ '#twilightforest:canopy_logs'] //input
)

event.remove({id:'twilightforest:wood/darkwood_from_wood_planks'})
event.remove({id:'twilightforest:wood/darkwood_from_stripped_planks'})
event.remove({id:'twilightforest:wood/darkwood_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/darkwood_planks'})

event.shapeless(
	Item.of('twilightforest:dark_planks', 2), // output
	[ '#twilightforest:darkwood_logs'] //input
)

event.remove({id:'twilightforest:wood/mangrove_from_wood_planks'})
event.remove({id:'twilightforest:wood/mangrove_from_stripped_planks'})
event.remove({id:'twilightforest:wood/mangrove_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/mangrove_planks'})

event.shapeless(
	Item.of('twilightforest:mangrove_planks', 2), // output
	[ '#twilightforest:mangrove_logs'] //input
)

event.remove({id:'minecraft:mangrove_planks'})

event.shapeless(
	Item.of('minecraft:mangrove_planks', 2), // output
	[ '#minecraft:mangrove_logs'] //input
)






event.remove({id:'twilightforest:wood/transformation_from_wood_planks'})
event.remove({id:'twilightforest:wood/transformation_from_stripped_planks'})
event.remove({id:'twilightforest:wood/transformation_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/transformation_planks'})

event.shapeless(
	Item.of('twilightforest:transformation_planks', 2), // output
	[ '#twilightforest:transwood_logs'] //input
)

event.remove({id:'twilightforest:wood/mining_from_wood_planks'})
event.remove({id:'twilightforest:wood/mining_from_stripped_planks'})
event.remove({id:'twilightforest:wood/mining_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/mining_planks'})

event.shapeless(
	Item.of('twilightforest:mining_planks', 2), // output
	[ '#twilightforest:mining_logs'] //input
)

event.remove({id:'twilightforest:wood/time_from_wood_planks'})
event.remove({id:'twilightforest:wood/time_from_stripped_planks'})
event.remove({id:'twilightforest:wood/time_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/time_planks'})

event.shapeless(
	Item.of('twilightforest:time_planks', 2), // output
	[ '#twilightforest:timewood_logs'] //input
)

event.remove({output:'refinedstorage:machine_casing'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "powah:dielectric_casing"
    },
    "D": {
      "item": "kubejs:advanced_capacitor"
    }
  },
  "result": {
    "item": "refinedstorage:machine_casing"
  }
})

event.shapeless(
	Item.of('minecraft:slime_ball'), // output
	[ '#forge:crops/rice','#forge:crops/rice'] //input
)

event.remove({id:'ae2:network/blocks/pattern_providers_interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "kubejs:iron_aluminum_ingot"
    },
    "B": {
      "item": "immersiveengineering:component_electronic"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "ae2:formation_core"
    },
    "F": {
      "item": "kubejs:slate_fluix"
    }
  },
  "result": {
    "item": "ae2:pattern_provider"
  }
})

event.remove({output:'laserio:overclocker_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "laserio:overclocker_card"
  }
})

event.remove({id:'integrateddynamics:crafting/menril_planks'})
event.shapeless(
	Item.of('integrateddynamics:menril_planks', 2), // output
	[ '#integrateddynamics:menril_logs'] //input
)

event.remove({id:'evilcraft:crafting/undead_planks'})
event.shapeless(
	Item.of('evilcraft:undead_planks', 2), // output
	[ '#evilcraft:undead_logs'] //input
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "item": "mekanism:ingot_osmium"
    }
  },
  "result": {
    "item": "kubejs:osmium_plate"
  }
})

event.remove({output:'ironfurnaces:iron_furnace'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:iron_ingot"
	  },
	  "B": {
		"item": "create:minecart_coupling"
	  },
	  "C": {
		"item": "immersiveengineering:stick_iron"
	  },
	  "D": {
		"item": "minecraft:furnace"
	  }
	},
	"result": {
	  "item": "ironfurnaces:iron_furnace"
	}
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:minecart_coupling"
    },
    "C": {
      "item": "ironfurnaces:copper_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:iron_furnace"
  }
})

event.remove({output:'ironfurnaces:copper_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "thermal:copper_plate"
    },
    "C": {
      "item": "minecraft:furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:copper_furnace"
  }
})

event.remove({output:'ironfurnaces:gold_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "ironfurnaces:iron_furnace"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:gold_furnace"
  }
})

event.remove({output:'ironfurnaces:diamond_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "ironfurnaces:gold_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:diamond_furnace"
  }
})

event.remove({output:'ironfurnaces:emerald_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:emerald"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "C": {
      "item": "powah:crystal_spirited"
    },
    "D": {
      "item": "ironfurnaces:diamond_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:emerald_furnace"
  }
})

event.remove({output:'ironfurnaces:obsidian_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "ironfurnaces:emerald_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:obsidian_furnace"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "ironfurnaces:crystal_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:obsidian_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_copper'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "thermal:copper_plate"
    },
    "C": {
      "item": "minecraft:cobblestone"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_copper"
  }
})

event.remove({output:'ironfurnaces:upgrade_iron'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:minecart_coupling"
    },
    "C": {
      "item": "minecraft:cobblestone"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_iron"
  }
})

event.remove({output:'ironfurnaces:upgrade_gold'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_gold"
  }
})

event.remove({output:'ironfurnaces:upgrade_diamond'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_diamond"
  }
})

event.remove({output:'ironfurnaces:upgrade_emerald'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:emerald"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "C": {
      "item": "powah:crystal_spirited"
    },
    "D": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_emerald"
  }
})

event.remove({output:'ironfurnaces:upgrade_obsidian'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_obsidian"
  }
})

event.remove({output:'ironfurnaces:crystal_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "ironfurnaces:diamond_furnace"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "ironfurnaces:crystal_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_crystal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_crystal"
  }
})

event.remove({output:'ironfurnaces:netherite_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:netherite_plate"
    },
    "B": {
      "item": "functionalstorage:netherite_upgrade"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "ironfurnaces:obsidian_furnace"
    },
    "E": {
      "item": "kubejs:soulsteel_block"
    }
  },
  "result": {
    "item": "ironfurnaces:netherite_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_netherite'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:netherite_plate"
    },
    "B": {
      "item": "functionalstorage:netherite_upgrade"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "kubejs:soulsteel_block"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_netherite"
  }
})

event.remove({id:'simple_recipes:log_stick'})
event.remove({id:'quark:tweaks/crafting/utility/misc/easy_sticks'})
event.remove({id:'minecraft:ens_ancient_debris'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "A"
  ],
  "key": {
    "A": {
      "tag": "minecraft:logs"
    }
  },
  "result": {
    "item": "minecraft:stick",
    "count": 8
  }
})

event.remove({output:'productivebees:heated_centrifuge'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:charged_enriched_iron"
    },
    "B": {
      "item": "productivebees:upgrade_comb_block"
    },
    "C": {
      "item": "exnihilosequentia:emerald_mesh"
    },
    "D": {
      "item": "kubejs:advanced_capacitor"
    },
    "E": {
      "item": "productivebees:powered_centrifuge"
    }
  },
  "result": {
    "item": "productivebees:heated_centrifuge"
  }
})

event.remove({id:'byg:witch_hazel_planks'})
event.shapeless(
	Item.of('byg:witch_hazel_planks', 2), // output
	[ '#byg:witch_hazel_logs'] //input
)

event.remove({id:'hexerei:mahogany_planks_from_stripped_log'})
event.remove({id:'hexerei:mahogany_planks_from_wood'})
event.remove({output:'hexerei:mahogany_planks'})
event.shapeless(
	Item.of('hexerei:mahogany_planks', 2), // output
	[ '#hexerei:mahogany'] //input
)

event.remove({id:'hexerei:willow_planks_from_stripped_wood'})
event.remove({id:'hexerei:willow_planks'})
event.shapeless(
	Item.of('hexerei:willow_planks', 2), // output
	[ '#hexerei:willow'] //input
)

event.remove({id:'hexerei:witch_hazel_planks_from_stripped_wood'})
event.remove({id:'hexerei:witch_hazel_planks'})
event.shapeless(
	Item.of('hexerei:witch_hazel_planks', 2), // output
	[ '#hexerei:witch_hazel'] //input
)

event.remove({id:'ecologics:coconut_planks'})
event.shapeless(
	Item.of('ecologics:coconut_planks', 2), // output
	[ '#ecologics:coconut_logs'] //input
)

event.remove({id:'ecologics:walnut_planks'})
event.shapeless(
  Item.of('ecologics:walnut_planks', 2), // output
  [ '#ecologics:walnut_logs'] //input
)

event.remove({id:'ecologics:azalea_planks'})
event.shapeless(
  Item.of('ecologics:azalea_planks', 2), // output
  [ '#ecologics:azalea_logs'] //input
)



event.remove({output:'scannable:scanner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "minecraft:iron_bars"
    },
    "C": {
      "item": "immersiveengineering:capacitor_lv"
    },
    "D": {
      "item": "thermal:quartz_gear"
    },
    "E": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "scannable:scanner"
  }
})

event.remove({output:'mininggadgets:mininggadget_simple'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:advanced_capacitor"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    },
    "F": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget_simple"
  }
})

event.remove({output:'mininggadgets:mininggadget_fancy'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:advanced_capacitor"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    },
    "F": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget_fancy"
  }
})

event.remove({output:'mininggadgets:mininggadget'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABC"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:advanced_capacitor"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget"
  }
})

event.remove({output:'mininggadgets:upgrade_empty'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:diamond"
    },
    "C": {
      "item": "thermal:steel_ingot"
    },
    "D": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "mininggadgets:upgrade_empty"
  }
})

event.remove({output:'projecte:collector_mk1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:glowstone"
    },
    "B": {
      "item": "thermal:lumium_glass"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    },
    "D": {
      "item": "kubejs:catal_glowstone"
    },
    "E": {
      "item": "kubejs:ultimate_capacitor"
    }
  },
  "result": {
    "item": "projecte:collector_mk1"
  }
})

event.remove({output:'projecte:relay_mk1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:obsidian"
    },
    "B": {
      "item": "thermal_extra:dragonsteel_gear"
    },
    "C": {
      "item": "minecraft:crying_obsidian"
    },
    "D": {
      "item": "kubejs:catal_ender"
    },
    "E": {
      "item": "kubejs:lunaria_ingot"
    }
  },
  "result": {
    "item": "projecte:relay_mk1"
  }
})

event.remove({output:'ars_nouveau:imbuement_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "ars_nouveau:archwood_planks"
    },
    "B": {
      "item": "kubejs:raw_arcane"
    },
    "C": {
      "tag": "forge:rods/gold"
    },
    "D": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "ars_nouveau:imbuement_chamber"
  }
})

event.remove({output:'thermal:machine_crafter'})
event.remove({id:'createaddition:rolling/copper_ingot'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "A"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/electrum"
    }
  },
  "result": {
    "tag": "forge:rods/electrum",
    "count": 4
  }
})

event.remove({id:'thermalendergy:prismalium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/prismalium"
    },
    "B": {
      "tag": "forge:nuggets/prismalium"
    }
  },
  "result": {
    "item": "thermalendergy:prismalium_gear"
  }
})

event.remove({id:'thermalendergy:melodium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/melodium"
    },
    "B": {
      "tag": "forge:nuggets/melodium"
    }
  },
  "result": {
    "item": "thermalendergy:melodium_gear"
  }
})

event.remove({id:'thermalendergy:stellarium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/stellarium"
    },
    "B": {
      "tag": "forge:nuggets/stellarium"
    }
  },
  "result": {
    "item": "thermalendergy:stellarium_gear"
  }
})

event.remove({output:'easy_villagers:iron_farm'})
event.remove({output:'easy_villagers:incubator'})

event.remove({output:'easy_villagers:trader'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:villager_spawn_egg"
    },
    "C": {
      "item": "infused_crystals:block_of_infused_ironium"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    }
  },
  "result": {
    "item": "easy_villagers:trader"
  }
})

event.remove({output:'easy_villagers:converter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:zombie_head"
    },
    "C": {
      "item": "infused_crystals:block_of_infused_ironium"
    },
    "D": {
      "item": "kubejs:bloody_mechanism"
    }
  },
  "result": {
    "item": "easy_villagers:converter"
  }
})

event.remove({output:'easy_villagers:breeder'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:red_bed"
    },
    "C": {
      "item": "thermal:emerald_gear"
    },
    "D": {
      "item": "productivebees:upgrade_breeding"
    }
  },
  "result": {
    "item": "easy_villagers:breeder"
  }
})

event.remove({output:'easy_villagers:farmer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_hoe"
    },
    "C": {
      "item": "kubejs:plate_emerald"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    }
  },
  "result": {
    "item": "easy_villagers:farmer"
  }
})

event.remove({output:'easy_villagers:auto_trader'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "thermal:netherite_gear"
    },
    "C": {
      "item": "kubejs:soulsteel_block"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    }
  },
  "result": {
    "item": "easy_villagers:auto_trader"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.remove({output:'sophisticatedstorage:iron_barrel'})
event.remove({output:'sophisticatedstorage:gold_barrel'})
event.remove({output:'sophisticatedstorage:diamond_barrel'})



event.remove({output:'sophisticatedstorage:limited_iron_barrel_4'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_4'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_4'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})


event.remove({output:'sophisticatedstorage:limited_iron_barrel_3'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_3'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_3'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:limited_iron_barrel_2'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_2'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_2'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:limited_iron_barrel_1'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_1'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_1'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:iron_shulker_box'})
event.remove({output:'sophisticatedstorage:gold_shulker_box'})
event.remove({output:'sophisticatedstorage:diamond_shulker_box'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:shulker_box",
    "count": 1
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:iron_shulker_box",
  "count": 1
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_shulker_box",
    "count": 1
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:gold_shulker_box",
  "count": 1
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_shulker_box",
    "count": 1
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:diamond_shulker_box",
  "count": 1
}
})

event.remove({output:'ftbic:iron_furnace'})

event.remove({id:'solarflux:mirror'})
event.remove({output:'solarflux:mirror'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    " B "
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "thermal:steel_ingot"
    }
  },
  "result": {
    "item": "solarflux:mirror",
    "count": 3
  }
})

event.remove({output:'angelring:leadstone_angel_ring'})
event.remove({output:'angelring:hardened_angel_ring'})
event.remove({output:'angelring:reinforced_angel_ring'})
event.remove({output:'angelring:resonant_angel_ring'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/stellarium"
    }
  },
  "result": {
    "tag": "forge:plates/stellarium"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/melodium"
    }
  },
  "result": {
    "tag": "forge:plates/melodium"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/prismalium"
    }
  },
  "result": {
    "tag": "forge:plates/prismalium"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "B "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "tag": "forge:ingots/zinc"
    }
  },
  "result": {
    "tag": "forge:plates/zinc"
  }
})

event.remove({output:'pamhc2foodcore:fruitsaladitem'})
event.remove({output:'utilitix:experience_crystal'})

event.remove({output:'entangled:item'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    " BA",
    "C  "
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_core"
    },
    "B": {
      "item": "create:wrench"
    },
    "C": {
      "item": "kubejs:darksteel_gear"
    }
  },
  "result": {
    "item": "entangled:item"
  }
})

event.remove({output:'entangled:block'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "tag": "forge:wirelessboosters"
    },
    "C": {
      "item": "thermal_extra:twinite_gear"
    },
    "D": {
      "item": "unusualend:gilded_pearl"
    },
    "E": {
      "item": "fluxnetworks:flux_core"
    }
  },
  "result": {
    "item": "entangled:block"
  }
})

event.shapeless(
  Item.of('kubejs:diamond_dust_pile'),
  [ 
    '9x #forge:dusts/diamond'
  ]
  )

  event.shapeless(
    Item.of('kubejs:emerald_dust_pile'),
    [ 
      '9x #forge:dusts/emerald'
    ]
  )

  event.remove({id:'simple_recipes:gravel_flint'})

  event.shapeless(
    Item.of('minecraft:flint'),
    [ 
      '3x minecraft:gravel'
    ]
  )

  event.shapeless(
    Item.of('kubejs:endsteel_ingot'),
    [ 
      '9x kubejs:endsteel_nugget'
    ]
  )

  event.remove({output:'quark:deepslate_furnace'})
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "B B",
    "AAA"
  ],
  "key": {
    "A": {
    "tag": "forge:cobblestone/deepslate"
    },
    "B": {
    "item": "kubejs:stone_mechanism"
    }
  },
  "result": {
    "item": "quark:deepslate_furnace"
  }
  })

  event.shapeless(
    Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:elite_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.shapeless(
    Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:ultra_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.shapeless(
    Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:creative_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.remove({id:'bigreactors:yellorium_component_to_storage'})
  event.replaceInput({}, '#forge:storage_blocks/yellorium', '#forge:storage_blocks/uranium')
  event.replaceInput({}, 'bigreactors:yellorium_block', '#forge:storage_blocks/uranium')

  event.replaceInput({}, 'bigreactors:yellorium_ingot', 'mekanism:ingot_uranium')
  event.replaceInput({}, '#forge:ingots/yellorium', 'mekanism:ingot_uranium')


  event.remove({id:'comforts:sleeping_bag_black'})
  event.remove({id:'comforts:sleeping_bag_blue'})
  event.remove({id:'comforts:sleeping_bag_brown'})
  event.remove({id:'comforts:sleeping_bag_cyan'})
  event.remove({id:'comforts:sleeping_bag_gray'})
  event.remove({id:'comforts:sleeping_bag_green'})
  event.remove({id:'comforts:sleeping_bag_light_blue'})
  event.remove({id:'comforts:sleeping_bag_light_gray'})
  event.remove({id:'comforts:sleeping_bag_lime'})
  event.remove({id:'comforts:sleeping_bag_magenta'})
  event.remove({id:'comforts:sleeping_bag_orange'})
  event.remove({id:'comforts:sleeping_bag_pink'})
  event.remove({id:'comforts:sleeping_bag_purple'})
  event.remove({id:'comforts:sleeping_bag_red'})
  event.remove({id:'comforts:sleeping_bag_white'})
  event.remove({id:'comforts:sleeping_bag_yellow'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CAC"
  ],
  "key": {
    "A": {
      "item": "minecraft:white_wool"
    },
    "B": {
      "tag": "forge:string"
    },
    "C": {
      "tag": "forge:rods/wooden"
    }
  },
  "result": {
    "item": "comforts:sleeping_bag_white"
  }
})

event.remove({output:'#forge:gaiaauraband'})
event.remove({output:'botanicadds:aura_ring_gaia'})
event.remove({id:'botanicadds:aura_ring_gaia'})
event.custom({"type":"minecraft:smithing",
"addition":{"item":"botanicadds:gaiasteel_ingot"},
"base":{"item":"mythicbotany:aura_ring_greatest"},
"result":{"item":"botanicadds:aura_ring_gaia"}})

event.remove({ mod: 'botanicalmachinery', not: { output: [ 'botanicalmachinery:mechanical_apothecary', 'botanicalmachinery:mechanical_runic_altar', 'botanicalmachinery:mana_battery'] }})

event.remove({id:'pamhc2crops:paper_x2_paper_plants'})
event.remove({output:'cyclic:crafter'})
















//chestler
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })

//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })

//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })

    



event.remove({output:'ironjetpacks:elite_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/diamond"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_diamond"
    }
  },
  "result": {
    "item": "ironjetpacks:elite_coil"
  }
})

event.remove({output:'ironjetpacks:basic_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/iron"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_iron"
    }
  },
  "result": {
    "item": "ironjetpacks:basic_coil"
  }
})

event.remove({output:'ironjetpacks:advanced_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/gold"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_gold"
    }
  },
  "result": {
    "item": "ironjetpacks:advanced_coil"
  }
})

event.remove({output:'ironjetpacks:ultimate_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/emerald"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_emerald"
    }
  },
  "result": {
    "item": "ironjetpacks:ultimate_coil"
  }
})

event.remove({output:'thermal:chiller_rod_cast'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/steel"
    },
    "B": {
      "item": "minecraft:blaze_rod"
    }
  },
  "result": {
    "item": "thermal:chiller_rod_cast"
  }
})

event.remove({output:'ae2:interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_aluminum"
    },
    "B": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "ae2:formation_core"
    },
    "F": {
      "item": "kubejs:chipset_quartz"
    }
  },
  "result": {
    "item": "ae2:interface"
  }
})

event.remove({output:'refinedstorage:interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "C": {
      "item": "refinedstorage:importer"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "refinedstorage:exporter"
    },
    "F": {
      "item": "kubejs:chipset_quartz"
    }
  },
  "result": {
    "item": "refinedstorage:interface"
  }
})

event.remove({output:'modularrouters:modular_router'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "EFE"
	],
	"key": {
	  "A": {
		"item": "thermal:lumium_gear"
	  },
	  "B": {
		"item": "kubejs:advanced_capacitor"
	  },
	  "C": {
		"item": "kubejs:starmetal_ingot"
	  },
	  "D": {
		"item": "cyclic:user"
	  },
	  "E": {
		"item": "mekanism:alloy_reinforced"
	  },
	  "F": {
		"item": "kubejs:chipset_diamond"
	  }
	},
	"result": {
	  "item": "modularrouters:modular_router"
	}
  })

  event.remove({output:'#projecte:alchemical_bags'})
  event.remove({output:'#projectexpansion:advanced_alchemical_chest'})


event.remove({output:'mekanism:basic_fluid_tank'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_structure_steel"
    },
    "B": {
      "item": "pneumaticcraft:logistics_core"
    },
    "C": {
      "item": "engineersdecor:straight_pipe_valve"
    },
    "D": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "mekanism:basic_fluid_tank"
  }
})

event.remove({output:'#pneumaticcraft:fluid_tanks'})
event.remove({output:'mekanism:basic_fluid_tank'})
event.remove({output:'mekanism:advanced_fluid_tank'})
event.remove({output:'mekanism:elite_fluid_tank'})
event.remove({output:'mekanism:ultimate_fluid_tank'})

event.shapeless(Item.of('mekanism:advanced_fluid_tank'),[ 'mekanism:basic_fluid_tank', 'mekanism:advanced_tier_installer'])
event.shapeless(Item.of('mekanism:elite_fluid_tank'),[ 'mekanism:advanced_fluid_tank', 'mekanism:elite_tier_installer'])
event.shapeless(Item.of('mekanism:ultimate_fluid_tank'),[ 'mekanism:elite_fluid_tank', 'mekanism:ultimate_tier_installer'])

event.remove({output:'pneumaticcraft:etching_tank'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:circuit_board"
    },
    "B": {
      "item": "kubejs:osmiridium_ingot"
    },
    "C": {
      "type": "forge:nbt",
      "item": "immersiveengineering:graphite_electrode",
      "count": 1,
      "nbt": "{graphDmg:0}"
    },
    "D": {
      "item": "mekanism:basic_fluid_tank"
    },
    "E": {
      "item": "pneumaticcraft:reinforced_bricks"
    },
    "F": {
      "item": "thermal:bitumen"
    }
  },
  "result": {
    "item": "pneumaticcraft:etching_tank"
  }
})

event.shapeless(
  Item.of('kubejs:osgloglas_ingot', 9),
['kubejs:osgloglas_block'])

event.shapeless(
  Item.of('kubejs:osgloglas_block'),
['9x kubejs:osgloglas_ingot'])

event.remove({output:'minecraft:sticky_piston'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B"
  ],
  "key": {
    "A": {
      "tag": "forge:slimeballs"
    },
    "B": {
      "item": "minecraft:piston"
    }
  },
  "result": {
    "item": "minecraft:sticky_piston"
  }
})

event.remove({output:'minecraft:piston'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "minecraft:piston"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "tag": "forge:ingots/bronze"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "minecraft:piston",
    "count": 2
  }
})

event.remove({output:'ae2:drive'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_ingot"
    },
    "B": {
      "item": "extrastorage:neural_processor"
    },
    "C": {
      "item": "kubejs:slate_fluix"
    },
    "D": {
      "item": "powah:dielectric_casing"
    },
    "E": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    }
  },
  "result": {
    "item": "ae2:drive"
  }
})

event.remove({output:'botanicalmachinery:mechanical_apothecary'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "botania:elementium_ingot"
    },
    "B": {
      "item": "kubejs:elementium_processor"
    },
    "C": {
      "tag": "botania:petals"
    },
    "D": {
      "item": "botanicadds:aura_ring_gaia"
    },
    "E": {
      "item": "botania:apothecary_livingrock"
    }
  },
  "result": {
    "item": "botanicalmachinery:mechanical_apothecary"
  }
})

event.remove({output:'botanicalmachinery:mechanical_runic_altar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "botania:elementium_ingot"
    },
    "B": {
      "item": "kubejs:elementium_processor"
    },
    "C": {
      "tag": "botania:petals"
    },
    "D": {
      "item": "botanicadds:aura_ring_gaia"
    },
    "E": {
      "item": "botanicadds:elven_altar"
    }
  },
  "result": {
    "item": "botanicalmachinery:mechanical_runic_altar"
  }
})

event.shapeless(
  Item.of('9x #forge:dusts/diamond'),
['kubejs:diamond_dust_pile'])

event.shapeless(
  Item.of('9x #forge:dusts/emerald'),
['kubejs:emerald_dust_pile'])

event.remove({output:'sophisticatedstorage:upgrade_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CAC",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "C": {
      "item": "kubejs:lp_steel"
    }
  },
  "result": {
    "item": "sophisticatedstorage:upgrade_base"
  }
})

event.remove({output:'sophisticatedbackpacks:upgrade_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:string"
    },
    "B": {
      "item": "immersiveengineering:ersatz_leather"
    },
    "C": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "D": {
      "item": "stevescarts:component_hardened_mesh"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:upgrade_base"
  }
})

event.remove({output:'ae2:advanced_card'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AB ",
	  "CDB",
	  "AB "
	],
	"key": {
	  "A": {
		"item": "infused_crystals:infused_diamondium_crystal"
	  },
	  "B": {
		"item": "minecraft:iron_ingot"
	  },
	  "C": {
		"item": "kubejs:datacard3"
	  },
	  "D": {
		"item": "kubejs:manasteel_processor"
	  }
	},
	"result": {
	  "item": "ae2:advanced_card",
	  "count": 2
	}
  })

event.remove({output:'ae2:basic_card'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AB ",
	  "CDB",
	  "AB "
	],
	"key": {
	  "A": {
		"item": "kubejs:infused_goldium"
	  },
	  "B": {
		"item": "minecraft:iron_ingot"
	  },
	  "C": {
		"item": "kubejs:datacard2"
	  },
	  "D": {
		"item": "refinedstorage:improved_processor"
	  }
	},
	"result": {
	  "item": "ae2:basic_card",
	  "count": 2
	}
  })

event.remove({output:'refinedstorage:upgrade'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  " A ",
	  "ABA",
	  "CA "
	],
	"key": {
	  "A": {
		"item": "kubejs:charged_enriched_iron"
	  },
	  "B": {
		"item": "refinedstorage:basic_processor"
	  },
	  "C": {
		"item": "kubejs:infused_goldium"
	  }
	},
	"result": {
	  "item": "refinedstorage:upgrade"
	}
  })


  event.remove({output:'ae2:fluix_pearl'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
      "item": "ae2:fluix_dust"
      },
      "B": {
      "item": "ae2:fluix_crystal"
      },
      "C": {
      "item": "stevescarts:component_eye_of_galgador"
      },
      "D": {
      "item": "kubejs:slate_fluix"
      }
    },
    "result": {
      "item": "ae2:fluix_pearl"
    }
    })
  
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "BBB",
      "AAA"
    ],
    "key": {
      "A": {
      "tag": "forge:glass"
      },
      "B": {
      "item": "thermal:quartz_dust"
      }
    },
    "result": {
      "item": "ae2:quartz_fiber",
      "count": 3
    }
    })

event.remove({id:'minecraft:iron_bars'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "forge:rods/iron"
    }
  },
  "result": {
    "item": "minecraft:iron_bars",
    "count": 8
  }
})

event.remove({output:'refinedstorage:range_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "extendedcrafting:ender_ingot"
    },
    "C": {
      "item": "refinedstorage:upgrade"
    },
    "D": {
      "item": "stevescarts:component_eye_of_galgador"
    }
  },
  "result": {
    "item": "refinedstorage:range_upgrade"
  }
})

event.remove({output:'ae2:wireless_booster'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DBD"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:ender_ingot"
    },
    "B": {
      "item": "thermal:steel_ingot"
    },
    "C": {
      "item": "ae2:fluix_dust"
    },
    "D": {
      "item": "thermal:steel_dust"
    }
  },
  "result": {
    "item": "ae2:wireless_booster",
    "count": 2
  }
})

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABC",
	  " D "
	],
	"key": {
	  "A": {
		"item": "mekanism:enriched_gold"
	  },
	  "B": {
		"item": "kubejs:apu1"
	  },
	  "C": {
		"item": "kubejs:chip3"
	  },
	  "D": {
		"item": "kubejs:card"
	  }
	},
	"result": {
	  "item": "kubejs:datacard2"
	}
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:diamondium_crystal"
    },
    "B": {
      "item": "immersiveengineering:electron_tube"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:chip3"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:ironium_crystal"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "kubejs:chip1"
    },
    "D": {
      "item": "kubejs:cu"
    },
    "E": {
      "item": "kubejs:alu"
    }
  },
  "result": {
    "item": "kubejs:apu1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:rose_gold_nugget"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "immersiveengineering:electron_tube"
    },
    "D": {
      "item": "minecraft:clock"
    },
    "E": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:cu"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:ironium_crystal"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:chip1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_nugget"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "C": {
      "item": "pneumaticcraft:transistor"
    },
    "D": {
      "item": "kubejs:chip1"
    }
  },
  "result": {
    "item": "kubejs:alu"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A ",
    "AB",
    "AC"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_nugget"
    },
    "B": {
      "item": "immersiveengineering:circuit_board"
    },
    "C": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "kubejs:card"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "   ",
    "ABA",
    " C "
  ],
  "key": {
    "A": {
      "item": "kubejs:chip3"
    },
    "B": {
      "item": "infused_crystals:ironium_crystal"
    },
    "C": {
      "item": "immersiveengineering:circuit_board"
    }
  },
  "result": {
    "item": "kubejs:ram3"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    " D "
  ],
  "key": {
    "A": {
      "item": "infused_crystals:diamondium_crystal"
    },
    "B": {
      "item": "kubejs:apu2"
    },
    "C": {
      "item": "kubejs:ram3"
    },
    "D": {
      "item": "kubejs:card"
    }
  },
  "result": {
    "item": "kubejs:datacard3"
  }
})

event.shaped('kubejs:apu2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:diamondium_crystal',
  B: 'minecraft:redstone',
  C: 'kubejs:chip3',
  D: 'kubejs:cu',
  E: 'kubejs:alu'
});

event.shaped('4x kubejs:chip2', [
  'AAA',
  'BCB',
  'AAA'
], {
  A: 'minecraft:gold_nugget',
  B: 'infused_crystals:redstonium_crystal',
  C: 'pneumaticcraft:transistor'
});

event.shaped('kubejs:chip2', [
  'AAA',
  'BCB',
  'AAA'
], {
  A: 'minecraft:gold_nugget',
  B: 'minecraft:redstone',
  C: 'pneumaticcraft:transistor'
});

event.replaceInput({}, 'refinedstorage:processor_binding', 'kubejs:chip2')


event.remove({output:'ironfurnaces:augment_factory'})
event.shaped('ironfurnaces:augment_factory', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'botania:livingrock',
  B: 'minecraft:redstone',
  C: 'stevescarts:component_hardened_mesh',
  D: 'thermal:iron_gear',
  E: 'immersiveengineering:furnace_heater'
});


event.shapeless(
  Item.of('#forge:wires/enderium'),
['#forge:plates/enderium', 'immersiveengineering:wirecutter'])

event.shapeless(
  Item.of('#forge:wires/iron'),
['#forge:plates/iron', 'immersiveengineering:wirecutter'])

event.shapeless(
  Item.of('#forge:wires/gold'),
['#forge:plates/gold', 'immersiveengineering:wirecutter'])

event.remove({id:'architects_palette:unobtanium'})
event.shapeless(
  Item.of('4x architects_palette:unobtanium'),
['architects_palette:unobtanium_block'])

event.replaceInput({}, '#pneumaticcraft:fluid_tanks', 'mekanism:basic_fluid_tank')

event.shaped('2x kubejs:pyrotheum_dust', [
  'AA',
  'BC'
], {
  A: 'powah:crystal_blazing',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/sulfur'
});

event.shaped('2x kubejs:cryotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:blizz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: 'powah:charged_snowball'
});

event.shaped('2x kubejs:aerotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:blitz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/niter'
});

event.shaped('2x kubejs:petrotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:basalz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/refined_obsidian'
});

event.remove({output:'jamd:mine_portal_block'})
event.shaped('jamd:mine_portal_block', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'compressium:cobblestone_3',
  B: 'infused_crystals:block_of_infused_diamondium',
  C: 'compressium:cobblestone_4',
  D: 'infused_crystals:infused_redstonium_pickaxe',
  E: 'infused_crystals:block_of_infused_emeraldium'
});

event.remove({output:'sophisticatedstorage:stack_upgrade_tier_1'})
event.shaped('sophisticatedstorage:stack_upgrade_tier_1', [
  'ABA',
  'BCB',
  'ADA'
], {
  A: '#forge:treated_wood',
  B: '#botania:livingwood_logs',
  C: 'sophisticatedstorage:upgrade_base',
  D: 'kubejs:lp_silver'
});

event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_2' });
event.shaped('sophisticatedstorage:stack_upgrade_tier_2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_ironium',
  B: 'minecraft:iron_ingot',
  C: 'kubejs:darksteel_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_1',
  E: 'minecraft:anvil'
});

event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' });
event.shaped('sophisticatedstorage:stack_upgrade_tier_3', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'kubejs:infused_goldium_block',
  B: 'minecraft:gold_ingot',
  C: 'thermalendergy:melodium_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_2',
  E: 'ars_nouveau:starbuncle_shards'
});


event.remove({output:'sophisticatedstorage:stack_upgrade_tier_4'})
event.shaped('sophisticatedstorage:stack_upgrade_tier_4', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_diamondium',
  B: 'naturesaura:sky_ingot',
  C: 'thermalendergy:stellarium_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_3',
  E: 'powah:capacitor_niotic'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_ironium',
  B: 'minecraft:iron_ingot',
  C: 'kubejs:darksteel_gear',
  D: 'sophisticatedbackpacks:upgrade_base',
  E: 'minecraft:anvil'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'kubejs:infused_goldium_block',
  B: 'minecraft:gold_ingot',
  C: 'thermalendergy:melodium_gear',
  D: 'sophisticatedbackpacks:stack_upgrade_tier_1',
  E: 'ars_nouveau:starbuncle_shards'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_diamondium',
  B: 'naturesaura:sky_ingot',
  C: 'thermalendergy:stellarium_gear',
  D: 'sophisticatedbackpacks:stack_upgrade_tier_2',
  E: 'powah:capacitor_niotic'
});


event.remove({output:'cyclic:soundproofing_ghost'})

event.shapeless(
Item.of('minecraft:cobblestone'),
[ '9x kubejs:stone_nugget'])

event.remove({id:'ftbic:shapeless/lv_cable'})
event.remove({id:'ftbic:shapeless/mv_cable'})
event.remove({id:'ftbic:shapeless/hv_cable'})

event.shapeless(
Item.of('ftbic:lv_cable'),
['#forge:wires/copper', 'ftbic:rubber'])

event.shapeless(
Item.of('ftbic:mv_cable'),
['#forge:wires/aluminum', 'ftbic:rubber'])

event.shapeless(
Item.of('ftbic:hv_cable'),
['#forge:wires/gold', 'ftbic:rubber'])

event.remove({output:'ftbic:copper_coil'})
event.shaped('ftbic:copper_coil', [
  'AAA',
  'ABA',
  'AAA'
], {
  A: '#forge:wires/copper',
  B: '#forge:rods/iron'
});


event.remove({id:'mysticalagriculture:essence/minecraft/string'})
event.shapeless(
  Item.of('minecraft:string', 8),
  ['3x mysticalagriculture:spider_essence'])

event.remove({id:'create:crafting/kinetics/shaft'})
event.shaped('4x create:shaft', [
  'A',
  'B',
  'A'
], {
  A: 'create:andesite_alloy',
  B: 'kubejs:stone_mechanism'
});

event.remove({ output: 'create:mechanical_press' });
event.shaped('create:mechanical_press', [
  'A',
  'B',
  'C'
], {
  A: 'create:shaft',
  B: 'create:gearshift',
  C: 'minecraft:iron_block'
});

event.remove({ id: 'minecraft:anvil' });
event.shaped('minecraft:anvil', [
  'AAA',
  ' B ',
  'BBB'
], {
  A: 'kubejs:darksteel_block',
  B: 'kubejs:darksteel_ingot'
});

event.shapeless('kubejs:darksteel_block', ['9x kubejs:darksteel_ingot']);

event.shapeless(
  Item.of('kubejs:darksteel_ingot', 9),
  ['kubejs:darksteel_block'])

  event.shapeless(
  Item.of('kubejs:raw_arcane', 9),
  ['kubejs:raw_arcane_block'])

  event.shapeless(
  Item.of('kubejs:raw_arcane_block'),
  ['9x kubejs:raw_arcane'])

event.remove({output:'minecraft:cauldron'})
event.shaped('minecraft:cauldron', [
  'A A',
  'A A',
  'AAA'
], {
  A: '#forge:ingots/steel'
});

event.replaceInput({}, 'ftbic:iron_furnace', 'ironfurnaces:iron_furnace')
event.remove({output:'constructionwand:stone_wand'})
event.remove({output:'constructionwand:iron_wand'})
event.remove({output:'constructionwand:diamond_wand'})
event.remove({output:'constructionwand:infinity_wand'})


event.shaped('constructionwand:iron_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: '#forge:plates/iron',
  B: '#forge:rods/wooden'
});

event.shaped('constructionwand:diamond_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: '#forge:plates/diamond',
  B: '#forge:rods/wooden'
});

event.shaped('constructionwand:infinity_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: 'extendedcrafting:ender_star',
  B: '#forge:rods/wooden'
});

event.shaped('exmachinis:flux_hammer', [
  'AAA',
  'ABA',
  'CDC'
], {
  A: 'ae2:quartz_vibrant_glass',
  B: 'exnihilosequentia:netherite_hammer',
  C: 'infused_crystals:block_of_infused_ironium',
  D: 'immersiveengineering:logic_circuit'
});

event.remove({output:'exmachinis:flux_compactor'})

event.remove({id:'create:andesite_alloy'})
event.shaped('2x create:andesite_alloy', [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'minecraft:iron_nugget',
  B: 'minecraft:andesite',
  C: 'minecraft:raw_iron'
});

event.remove({output:'sophisticatedbackpacks:iron_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "item": "minecraft:iron_bars"
    },
    "D": {
      "item": "mekanism:enriched_iron"
    },
    "E": {
      "item": "sophisticatedbackpacks:backpack"
    }
  },
  "pattern": [
    "ABA",
    "CEC",
    "ADA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

event.remove({output:'sophisticatedbackpacks:gold_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "kubejs:infused_goldium"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "thermal:gold_plate"
    },
    "D": {
      "item": "sophisticatedbackpacks:iron_backpack"
    },
    "E": {
      "item": "powah:energized_steel_block"
    }
  },
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:gold_backpack"
  }
})

event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_diamondium_crystal"
    },
    "B": {
      "item": "kubejs:chipset_diamond"
    },
    "C": {
      "item": "mekanism:alloy_reinforced"
    },
    "D": {
      "item": "sophisticatedbackpacks:gold_backpack"
    },
    "E": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:diamond_backpack"
  }
})

event.remove({output:'pipez:item_pipe'})
event.shaped('8x pipez:item_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:steel_ingot',
  B: '#forge:plates/invar',
  C: 'ftbic:electronic_circuit',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:fluid_pipe'});
event.shaped('8x pipez:fluid_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'kubejs:slimesteel_ingot',
  B: 'kubejs:plate_lapis',
  C: 'integrateddynamics:crystalized_menril_chunk',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:energy_pipe'});
event.shaped('8x pipez:energy_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:rose_gold_ingot',
  B: 'thermal:electrum_plate',
  C: 'immersiveengineering:electron_tube',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:wrench'});
event.shaped('pipez:wrench', [
  ' AB',
  ' CA',
  'C  '
], {
  A: 'kubejs:iron_aluminum_ingot',
  B: 'kubejs:osmium_gear',
  C: '#forge:rods/wooden'
});

event.remove({output:'pipez:universal_pipe'});
event.shaped('5x pipez:universal_pipe', [
  'ABA',
  'CDE',
  'AFA'
], {
  A: 'create:sturdy_sheet',
  B: 'pipez:energy_pipe',
  C: 'pipez:item_pipe',
  D: 'infused_crystals:infused_coalium_crystal',
  E: 'pipez:gas_pipe',
  F: 'pipez:fluid_pipe'
});

event.remove({output:'pipez:gas_pipe'});
event.shaped('8x pipez:gas_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:steel_ingot',
  B: 'kubejs:endsteel_ingot',
  C: 'mekanism:alloy_infused',
  D: 'infused_crystals:emeraldium_crystal'
});

event.remove({output:'pipez:infinity_upgrade'})
event.shaped('pipez:infinity_upgrade', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'kubejs:petrotheum_dust',
  B: 'kubejs:lunaria_ingot',
  C: 'mekanism:ultimate_control_circuit',
  D: 'extendedcrafting:the_ultimate_ingot'
});

event.remove({id:'byg:palo_verde_planks'})
event.shapeless(
  Item.of('2x minecraft:birch_planks'),['#byg:palo_verde_logs'])

event.remove({id:'blue_skies:anvil_compat'})
event.remove({output:'cyclic:obsidian_pressure_plate'})
event.remove({output:'quark:gold_bars'})

event.remove({id:'cyclic:gold_bars'})
event.shaped('cyclic:gold_bars', [
  'AAA',
  'AAA'
], {
  A: '#forge:rods/gold'
});

event.remove({output: 'integrateddynamics:squeezer'});
event.shaped('integrateddynamics:squeezer', [
  'ABA',
  'A A',
  'CDC'
], {
  A: 'immersiveengineering:stick_steel',
  B: 'thermal:steel_plate',
  C: 'create:sturdy_sheet',
  D: 'kubejs:hepatizon_block'
});

event.shaped('kubejs:unit_empty', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'thermalendergy:stellarium_plate',
  B: 'cyclic:wireless_fluid',
  C: 'thermal:signalum_ingot',
  D: 'thermal:signalum_glass',
  E: 'thermal:redstone_servo'
});

event.remove({output: 'minecraft:armor_stand'});
event.shaped('minecraft:armor_stand', [
  ' A ',
  ' B ',
  'CDC'
], {
  A: '#forge:rods/wooden',
  B: 'create:mechanical_piston',
  C: 'minecraft:smooth_stone_slab',
  D: 'industrialforegoing:machine_frame_pity'
});

event.remove({output:'cyclic:packager'})
event.remove({output:'create:andesite_alloy'})

event.remove({output:'fluxnetworks:flux_controller'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "EFE"
	],
	"key": {
	  "A": {
		"item": "infused_crystals:infused_redstonium_crystal"
	  },
	  "B": {
		"item": "fluxnetworks:flux_core"
	  },
	  "C": {
		"type": "forge:nbt",
		"item": "immersiveengineering:graphite_electrode",
		"count": 1,
		"nbt": "{graphDmg:0}"
	  },
	  "D": {
		"item": "thermal:charge_bench"
	  },
	  "E": {
		"tag": "forge:wirelessboosters"
	  },
	  "F": {
		"item": "kubejs:darksteel_block"
	  }
	},
	"result": {
	  "item": "fluxnetworks:flux_controller"
	}
  })

  event.remove({id:'ftbic:shaped/bronze_dust'})
  event.remove({id:'thermal:bronze_dust_4'})
  event.remove({id:'immersiveengineering:crafting/electrum_mix'})
  event.remove({id:'thermal:invar_dust_3'})
  event.remove({id:'immersiveengineering:crafting/constantan_mix'})

  event.remove({id:'silentgear:azure_silver_dust'})
  event.remove({id:'silentgear:blaze_gold_dust'})
  event.remove({id:'silentgear:crimson_iron_dust'})
  event.remove({id:'silentgear:crimson_steel_dust'})
  event.remove({id:'silentgear:tyrian_steel_dust'})
  event.remove({id:'silentgear:azure_electrum_dust'})

  event.remove({id:'minecraft:beehive'})

event.remove({output:'extrastorage:iron_crafter'})
event.shaped('extrastorage:iron_crafter', [
  'ABA',
  'CDC',
  'EFE'
], {
  'A': 'infused_crystals:infused_ironium_crystal',
  'B': '#forge:chests/wooden',
  'C': 'kubejs:lp_iron',
  'D': '#refinedstorage:crafter',
  'E': 'kubejs:chip1',
  'F': 'refinedstorage:basic_processor'
});

event.remove({output: 'extrastorage:gold_crafter'});
event.shaped('extrastorage:gold_crafter', [
  'ABA',
  'CDC',
  'EFE'
], {
  'A': 'mekanism:shard_gold',
  'B': 'kubejs:golden_electron_tube',
  'C': 'mekanism:enriched_gold',
  'D': 'extrastorage:iron_crafter',
  'E': 'kubejs:datacard2',
  'F': 'refinedstorage:improved_processor'
});


event.remove({output:'extrastorage:diamond_crafter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "naturesaura:effect_powder",
      "count": 1,
      "nbt": "{effect:\"naturesaura:ore_spawn\"}"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "mekanism:enriched_diamond"
    },
    "D": {
      "item": "extrastorage:gold_crafter"
    },
    "E": {
      "item": "naturesaura:sky_ingot"
    },
    "F": {
      "item": "refinedstorage:advanced_processor"
    }
  },
  "result": {
    "item": "extrastorage:diamond_crafter"
  }
})

event.remove({output:'mob_grinding_utils:gm_chicken_feed_cursed'})

event.remove({id:'mysticalagriculture:prosperity_gemstone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "occultism:spirit_attuned_gem"
    },
    "B": {
      "item": "mysticalagriculture:prosperity_shard"
    },
    "C": {
      "item": "botania:dragonstone"
    }
  },
  "result": {
    "item": "mysticalagriculture:prosperity_gemstone"
  }
})

event.remove({id:'mysticalagriculture:prosperity_ingot'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "occultism:spirit_attuned_gem"
    },
    "B": {
      "item": "mysticalagriculture:prosperity_shard"
    },
    "C": {
      "item": "botania:elementium_ingot"
    }
  },
  "result": {
    "item": "mysticalagriculture:prosperity_ingot"
  }
})

event.remove({output:'capsule:capsulemarker'})

event.remove({output:'simplemagnets:basicmagnet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "tag": "forge:rods/iron"
    },
    "C": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "F": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "simplemagnets:basicmagnet"
  }
})

event.remove({output:'simplemagnets:advancedmagnet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "CD ",
    " AB"
  ],
  "key": {
    "A": {
      "item": "mekanism:enriched_gold"
    },
    "B": {
      "tag": "forge:rods/gold"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "simplemagnets:basicmagnet"
    }
  },
  "result": {
    "item": "simplemagnets:advancedmagnet"
  }
})

event.remove({output:'sophisticatedbackpacks:magnet_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DEF"
  ],
  "key": {
    "A": {
      "item": "minecraft:ender_pearl"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "simplemagnets:basicmagnet"
    },
    "D": {
      "item": "minecraft:redstone"
    },
    "E": {
      "item": "sophisticatedbackpacks:upgrade_base"
    },
    "F": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:magnet_upgrade"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_beheading'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ADA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "tag": "forge:heads"
    },
    "C": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "D": {
      "item": "redstone_arsenal:flux_helmet"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_beheading"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_looting'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "kubejs:plate_lapis"
    },
    "C": {
      "item": "compressium:lapis_1"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_looting"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_sharpness'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "redstone_arsenal:flux_sword"
    },
    "C": {
      "item": "minecraft:netherite_sword"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_sharpness"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "ftbic:medium_coolant_cell"
    },
    "B": {
      "item": "ftbic:lv_cable"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:overclocker_upgrade",
    "count": 3
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "ftbic:large_coolant_cell"
    },
    "B": {
      "item": "ftbic:lv_cable"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:overclocker_upgrade",
    "count": 6
  }
})

event.remove({output:'mekanism:dynamic_tank'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "ACA"
	],
	"key": {
	  "A": {
		"item": "kubejs:plate_darksteel"
	  },
	  "B": {
		"item": "kubejs:lp_steel"
	  },
	  "C": {
		"item": "kubejs:soulsteel_ingot"
	  },
	  "D": {
		"item": "thermal:fluid_tank_augment"
	  }
	},
	"result": {
	  "item": "mekanism:dynamic_tank",
    "count": 4
	}
  })

event.remove({output:'functionalstorage:fluid_1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_1"
  }
})

event.remove({output:'functionalstorage:fluid_2'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_2",
    "count": 2
  }
})

event.remove({output:'functionalstorage:fluid_4'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "CBC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_4",
    "count": 4
  }
})

event.remove({output:'ae2:quartz_glass'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BAB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ae2:certus_quartz_dust"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "ae2:quartz_glass",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BAB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:quartz_dust"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "ae2:quartz_glass",
    "count": 4
  }
})

event.remove({output:'aeinfinitybooster:infinity_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "naturesaura:animal_container"
    },
    "B": {
      "item": "ae2:wireless_booster"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "minecraft:netherite_ingot"
    },
    "E": {
      "item": "kubejs:darksteel_block"
    }
  },
  "result": {
    "item": "aeinfinitybooster:infinity_card"
  }
})

event.remove({output:'aeinfinitybooster:dimension_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:petrotheum_dust"
    },
    "B": {
      "item": "aeinfinitybooster:infinity_card"
    },
    "C": {
      "item": "extendedcrafting:flux_star"
    },
    "D": {
      "item": "kubejs:lunaria_ingot"
    },
    "E": {
      "item": "extendedcrafting:the_ultimate_block"
    }
  },
  "result": {
    "item": "aeinfinitybooster:dimension_card"
  }
})

event.remove({output:'rsinfinitybooster:dimension_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:petrotheum_dust"
    },
    "B": {
      "item": "rsinfinitybooster:infinity_card"
    },
    "C": {
      "item": "extendedcrafting:flux_star"
    },
    "D": {
      "item": "kubejs:lunaria_ingot"
    },
    "E": {
      "item": "extendedcrafting:the_ultimate_block"
    }
  },
  "result": {
    "item": "rsinfinitybooster:dimension_card"
  }
})

event.remove({output:'rsinfinitybooster:infinity_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "naturesaura:animal_container"
    },
    "B": {
      "item": "refinedstorage:range_upgrade"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "minecraft:netherite_ingot"
    },
    "E": {
      "item": "kubejs:darksteel_block"
    }
  },
  "result": {
    "item": "rsinfinitybooster:infinity_card"
  }
})

event.remove({output:'cyclic:user'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EEE"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "minecraft:tripwire_hook"
    },
    "C": {
      "item": "thermal:rose_gold_gear"
    },
    "D": {
      "item": "compressium:cobblestone_2"
    },
    "E": {
      "tag": "chipped:obsidian"
    }
  },
  "result": {
    "item": "cyclic:user"
  }
})

event.shapeless(
  Item.of('mekanism:hdpe_rod'),
  ['kubejs:hdpe_rod_hori'])

  event.shapeless(
    Item.of('kubejs:hdpe_rod_hori'),
    ['mekanism:hdpe_rod'])

//

event.remove({output:'mekanism:hdpe_rod'})
event.remove({output:'ad_astra:compressor'})
event.remove({id:'compressium:soulsand_1'})
event.remove({output:'compressium:soulsand_2'})

event.shapeless(
Item.of('compressium:soulsand_2'), ['9x spirit:compressed_soul_sand'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "D D"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:compressed_stone"
    },
    "B": {
      "item": "create_sa:hydraulic_engine"
    },
    "C": {
      "item": "powah:battery_starter"
    },
    "D": {
      "item": "ad_astra:steel_engine"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "ironjetpacks:jetpack",
    "count": 1,
    "nbt": "{Id:\"ironjetpacks:stone\",Throttle:1.0d}"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:chipset_iron"
    },
    "B": {
      "item": "immersiveengineering:heavy_engineering"
    },
    "C": {
      "item": "powah:energy_hopper_basic"
    },
    "D": {
      "type": "forge:nbt",
      "item": "ironjetpacks:jetpack",
      "count": 1,
      "nbt": "{Id:\"ironjetpacks:stone\",Throttle:1.0d}"
    },
    "E": {
      "type": "forge:nbt",
      "item": "ironjetpacks:thruster",
      "count": 1,
      "nbt": "{Id:\"ironjetpacks:iron\"}"
    },
    "F": {
      "item": "powah:battery_basic"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "ironjetpacks:jetpack",
    "count": 1,
    "nbt": "{Id:\"ironjetpacks:iron\",Throttle:1.0d}"
  }
})

event.remove({output:'powah:battery_starter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "powah:dielectric_paste"
    },
    "B": {
      "item": "thermal:rf_coil_storage_augment"
    },
    "C": {
      "item": "powah:capacitor_basic"
    },
    "D": {
      "item": "infused_crystals:block_of_redstonium"
    },
    "E": {
      "item": "thermal:flux_capacitor"
    }
  },
  "result": {
    "item": "powah:battery_starter"
  }
})

event.replaceInput({}, 'botanicalmachinery:mana_emerald_block', 'botania:terrasteel_block')

event.remove({output:'#pipez:upgrades'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "mekanism:enriched_redstone"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "kubejs:lp_iron"
    },
    "E": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "pipez:basic_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:crushed_raw_gold"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "pipez:basic_upgrade"
    }
  },
  "result": {
    "item": "pipez:improved_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_ingot"
    },
    "B": {
      "item": "mekanism:alloy_reinforced"
    },
    "C": {
      "item": "kubejs:cryotheum_dust"
    },
    "D": {
      "item": "pipez:improved_upgrade"
    }
  },
  "result": {
    "item": "pipez:advanced_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "kubejs:hepatizon_ingot"
    },
    "C": {
      "item": "mekanism:dust_refined_obsidian"
    },
    "D": {
      "item": "pipez:advanced_upgrade"
    }
  },
  "result": {
    "item": "pipez:ultimate_upgrade"
  }
})

event.remove({output:'mekanism:energy_tablet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    },
    "D": {
      "item": "kubejs:golden_electron_tube"
    }
  },
  "result": {
    "item": "mekanism:energy_tablet"
  }
})

event.shapeless(Item.of('kubejs:gold_dust_pile'), ['9x #forge:dusts/gold'])
event.shapeless(Item.of('9x #forge:dusts/gold'), ['kubejs:gold_dust_pile'])

event.remove({output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ae2:quartz_glass"
    },
    "B": {
      "item": "ae2:cell_component_1k"
    },
    "C": {
      "item": "cookingforblockheads:sink"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    },
    "E": {
      "item": "ae2:fluid_cell_housing"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "expatternprovider:infinity_cell",
    "count": 1,
    "nbt": "{record:{\"#c\":\"ae2:f\",id:\"minecraft:water\"}}"
  }
})

event.remove({output:'twilightforest:uncrafting_table'})

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()





































})

