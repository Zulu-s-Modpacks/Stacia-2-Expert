
ServerEvents.recipes(event => {

	
	
	event.remove({output:'botania:pure_daisy'})
	event.custom({
		"type": "lychee:item_inside",
		"item_in": [
			{
				"item": "botania:white_petal"
			},
			{
				"item": "botania:white_petal"
			},
			{
				"item": "botania:white_petal"
			},
			{
				"item": "botania:white_petal"
			},
			{
				"tag": "forge:seeds"
			}
		],
		"block_in": {
			"blocks": ["minecraft:water"]
		},
        "post": [
            {
                "type": "drop_item",
                "item": "botania:pure_daisy",
            }
        ]
	})

	event.remove({output:'ars_nouveau:sourcestone'})
  event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": "kubejs:magical_casing"
	},
	"output": {
	  "name": "ars_nouveau:sourcestone"
	}
  })

  event.remove({id:'botania:pure_daisy/livingrock'})
  event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": "ars_nouveau:sourcestone_large_bricks"
	},
	"output": {
	  "name": "botania:livingrock"
	}
  })

event.custom({"type":"exnihilosequentia:crucible","amount":1000,
				"crucibleType":"fired",
				"fluidResult":{"fluid":"thermal:glowstone"},
				"input":{"item":"minecraft:glowstone"}})

event.custom({"type":"exnihilosequentia:crucible","amount":250,
				"crucibleType":"fired",
				"fluidResult":{"fluid":"thermal:glowstone"},
				"input":{"item":"minecraft:glowstone_dust"}})

event.custom({"type":"exnihilosequentia:fluid_item",
"fluid":{"fluid":"thermal:glowstone"},
"input":{"item":"kubejs:stone_mechanism"},
"result":{"item":"kubejs:glowing_mechanism"}})

	event.custom({
	"type": "create:item_application",
	"ingredients": [
	  {
		"item": "botania:livingrock"
	  },
	  {
		"item": "kubejs:glowing_mechanism"
	  }
	],
	"results": [
	  {
		"item": "kubejs:glimmering_livingrock"
	  }
	]
})

event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
		" A ",
		"BAB",
		"AAA"
	],
	"key": {
		"A": {
			"item": "minecraft:gold_ingot"
		},
		"B": {
			"item": "minecraft:redstone"
		}
	},
	"result": {
		"item": "kubejs:golden_electron_tube",
		"count": 4
	}
})

event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
		" A ",
		"BAB",
		"AAA"
	],
	"key": {
		"A": {
			"item": "kubejs:aquamarine"
		},
		"B": {
			"item": "mekanism:enriched_redstone"
		}
	},
	"result": {
		"item": "kubejs:aquamarine_electron_tube",
		"count": 4
	}
})

event.custom({
  "type": "spirit:soul_engulfing",
  "input": {
    "ingredient": {
      "item": "ars_nouveau:water_essence"
    },
    "multiblock": {
      "pattern": [
        [
          "   ",
          " @ ",
          "   "
        ],
        [
          " S ",
          "S&S",
          " S "
        ]
      ],
      "keys": {
        "S": {
          "block": "cyclic:terra_preta"
        }
      }
    }
  },
  "duration": 40,
  "outputItem": "kubejs:allay_fertilizer",
  "outputAmount": 4
})

event.remove({output:'ars_nouveau:water_essence'})
event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "ars_nouveau:source_gem"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:water_bucket"}},
	  {"item": {"item": "minecraft:kelp"}},
	  {"item": {"item": "exnihilosequentia:sea_water_bucket"}},
	  {"item": {"item": "minecraft:kelp"}}
	],
	"output": {
	  "item": "ars_nouveau:water_essence"
	},
	"sourceCost": 0,
	"keepNbtOfReagent": false
  })

  event.remove({output:'botania:apothecary_livingrock'})
  event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
		"AA AA",
		" ABA ",
		"  A  ",
		" CAC ",
		"AADAA"
	],
	"key": {
		"A": {
			"item": "botania:livingrock"
		  },
		  "B": {
			"item": "kubejs:allay_fertilizer"
		  },
		  "C": {
			"item": "kubejs:glimmering_livingrock"
		  },
		  "D": {
			"item": "kubejs:golden_electron_tube"
		  }
	},
	"result": {
		"item": "botania:apothecary_livingrock",
		"count": 1
	}
})

event.remove({output:'mekanism:advanced_control_circuit'})
event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "mekanism:enriched_redstone"
		},
		{
			"item": "mekanism:enriched_redstone"
		},
		{
			"item": "mekanism:enriched_redstone"
		},
		{
			"item": "mekanism:enriched_redstone"
		},
		{
			"item": "mekanism:alloy_infused"
		},
		{
			"item": "mekanism:alloy_infused"
		},
		{
			"item": "mekanism:alloy_infused"
		},
		{
			"item": "mekanism:alloy_infused"
		},
		{
			"item": "mekanism:basic_control_circuit"
		}
	],
	"block_in": {
		"blocks": ["create:honey"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "mekanism:advanced_control_circuit"
		}
	]
})

event.remove({output:'mekanism:elite_control_circuit'})
event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "mekanism:enriched_diamond"
		},
		{
			"item": "mekanism:enriched_diamond"
		},
		{
			"item": "mekanism:enriched_diamond"
		},
		{
			"item": "mekanism:enriched_diamond"
		},
		{
			"item": "mekanism:alloy_reinforced"
		},
		{
			"item": "mekanism:alloy_reinforced"
		},
		{
			"item": "mekanism:alloy_reinforced"
		},
		{
			"item": "mekanism:alloy_reinforced"
		},
		{
			"item": "mekanism:advanced_control_circuit"
		}
	],
	"block_in": {
		"blocks": ["exnihilosequentia:witch_water"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "mekanism:elite_control_circuit"
		}
	]
})

event.remove({output:'mekanism:ultimate_control_circuit'})
event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "mekanism:enriched_refined_obsidian"
		},
		{
			"item": "mekanism:enriched_refined_obsidian"
		},
		{
			"item": "mekanism:enriched_refined_obsidian"
		},
		{
			"item": "mekanism:enriched_refined_obsidian"
		},
		{
			"item": "mekanism:alloy_atomic"
		},
		{
			"item": "mekanism:alloy_atomic"
		},
		{
			"item": "mekanism:alloy_atomic"
		},
		{
			"item": "mekanism:alloy_atomic"
		},
		{
			"item": "mekanism:elite_control_circuit"
		}
	],
	"block_in": {
		"blocks": ["create_confectionery:black_chocolate"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "mekanism:ultimate_control_circuit"
		}
	]
})

event.remove({output:'mekanism:steel_casing'})
event.custom({
    "input": [
      {
        "item": "ad_astra:steel_plating"
      },
      {
        "item": "mekanism:advanced_control_circuit"
      },
      {
        "item": "ad_astra:steel_plating"
      },
      {
        "item": "create:sturdy_sheet"
      },
      {
        "item": "create:sturdy_sheet"
      },
      {
        "item": "ad_astra:steel_plating"
      },
      {
        "item": "ftbic:advanced_machine_block"
      },
      {
        "item": "ad_astra:steel_plating"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:molten_steel\",Amount:576}",
    "processingTime": 60,
    "output": {
      "item": "mekanism:steel_casing",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.replaceInput({}, 'laserio:logic_chip', 'ftbic:electronic_circuit')

event.custom({"type":"exnihilosequentia:sieve",
"input":{"item":"mekanism:steel_casing"},
"result":{"item":"immersiveengineering:component_steel"},
"rolls":[{"chance":1.0,"mesh":"emerald"},{"chance":1.0,"mesh":"emerald"},{"chance":1.0,"mesh":"emerald"},
{"chance":0.1,"mesh":"emerald"}]
})

event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "minecraft:redstone_block"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_redstone",
		"count": 1
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "minecraft:diamond_block"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_diamond",
		"count": 1
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "compressium:redstone_1"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_redstone",
		"count": 9
	  }
	]
  })

event.custom({"type":"immersiveengineering:fermenter",
"energy":6400,"fluid":{"amount":250,"fluid":"kubejs:dimensional_shard_sap"},
"input":{"item":"rftoolsbase:dimensionalshard"}})


event.remove({output:'infused_crystals:redstonium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:redstone').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:redstonium_crystal').toJson()
})

event.remove({output:'infused_crystals:lapisium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:lapis_lazuli').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:lapisium_crystal').toJson()
})

event.remove({output:'infused_crystals:emeraldium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('thermal:emerald_dust').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:emeraldium_crystal').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('kubejs:emerald_dust_pile').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_emeraldium').toJson()
})

event.remove({output:'infused_crystals:diamondium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('thermal:diamond_dust').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:diamondium_crystal').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('kubejs:diamond_dust_pile').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_diamondium').toJson()
})

event.remove({output:'infused_crystals:coalium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:coal').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:coalium_crystal').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:coal_block').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_coalium').toJson()
})

event.remove({output:'infused_crystals:ironium_crystal'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:iron_ingot').toJson()
    ],
    energy: '1000000',
    result: Item.of('infused_crystals:ironium_crystal').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:iron_block').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_ironium').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:redstone_block').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_redstonium').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:lapis_block').toJson()
    ],
    energy: '5000000',
    result: Item.of('infused_crystals:block_of_lapisium').toJson()
})


event.custom({
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
	{
		"amount": 500,
		"fluid": "industrialforegoing:biofuel"
	},
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "naturesaura:gold_fiber"
    },
	{
		"item": "infused_crystals:lapisium_crystal"
	},
	{
	  "item": "botania:mana_pearl"
	}
  ],
  "results": [
    {
      "amount": 500,
      "fluid": "kubejs:mana"
    }
  ]
})

event.remove({output:'thermal:rf_coil'})

event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": "forge:storage_blocks/silver"
    }
  ],
  "results": [
    {
      "item": "kubejs:lp_silver"
    }
  ]
})

event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/copper"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_copper"
	  }
	]
  })
  
  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/steel"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_steel"
	  }
	]
  })
  
  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/tin"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_tin"
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/electrum"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_electrum"
	  }
	]
  })
  
  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "kubejs:aquamarine_block"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_aquamarine"
	  }
	]
  })
  
  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "extendedcrafting:redstone_ingot_block"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_redstone"
	  }
	]
  })
  
  event.remove({output:'powah:dielectric_paste'})
event.custom({"type":"mekanism:metallurgic_infusing",
"chemicalInput":{"amount":80,"tag":"mekanism:carbon"},
"itemInput":{"ingredient":{"item":"thermal:rosin"}},
"output":{"item":"powah:dielectric_paste"}})

event.custom({"type":"mekanism:metallurgic_infusing",
"chemicalInput":{"amount":720,"tag":"mekanism:carbon"},
"itemInput":{"ingredient":{"item":"thermal:rosin_block"}},
"output":{"count":9,"item":"powah:dielectric_paste"}})

event.remove({output:'rsrequestify:requester'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:logistics_frame_requester"
    },
    "B": {
      "item": "thermal_extra:dragonsteel_gear"
    },
    "C": {
      "item": "create:mechanical_crafter"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "evilcraft:exalted_crafter_wooden"
    }
  },
  "result": {
    "item": "rsrequestify:requester"
  }
})

event.custom({
	"type": "create:item_application",
	"ingredients": [
	  {
		"item": "minecraft:obsidian"
	  },
	  {
		"item": "minecraft:iron_bars"
	  }
	],
	"results": [
	  {
		"item": "kubejs:reinforced_obsidian"
	  }
	]
})

event.remove({output:'refinedstorage:crafter'})
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
      "item": "immersiveengineering:component_electronic"
    },
    "C": {
      "item": "refinedstorage:advanced_processor"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "thermal:rf_potato"
    }
  },
  "result": {
    "item": "refinedstorage:crafter"
  }
})

event.remove({output:'thermal:rf_potato'})
event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:potato"
    },
    {
      "fluid": "thermal:redstone",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:rf_potato"
    }
  ]
})

event.remove({output:'refinedstorage:network_transmitter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:component_electronic_adv"
    },
    "B": {
      "item": "powah:ender_core"
    },
    "C": {
      "item": "kubejs:catal_ender"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "create:linked_controller"
    },
    "F": {
      "item": "powah:ender_cell_hardened"
    }
  },
  "result": {
    "item": "refinedstorage:network_transmitter"
  }
})

event.remove({output:'extendedcrafting:compressor'})
event.custom({
	"type": "botania:terra_plate",
	"ingredients": [
	  {
		"item": "powah:ender_gate_niotic"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  },
	  {
		"item": "spirit:soul_steel_block"
	  },
	  {
		"item": "pneumaticcraft:electrostatic_compressor"
	  },
	  {
		"item": "sophisticatedbackpacks:advanced_compacting_upgrade"
	  },
	  {
		"item": "pneumaticcraft:etching_tank"
	  },
	  {
		"item": "spirit:soul_steel_block"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  }
	],
	"mana": 25000,
	"result": {
	  "item": "extendedcrafting:compressor"
	}
  })

event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 1000000,
  "inputCount": 128,
  "ingredient": {
    "item": "minecraft:ender_pearl"
  },
  "catalyst": {
    "item": "spirit:crude_soul_crystal"
  },
  "result": {
    "item": "kubejs:catal_ender"
  }
})

event.remove({output:'refinedstorage:network_receiver'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "create:linked_controller"
    },
    "B": {
      "item": "powah:ender_cell_hardened"
    },
    "C": {
      "item": "kubejs:catal_ender"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "immersiveengineering:component_electronic_adv"
    },
    "F": {
      "item": "powah:ender_core"
    }
  },
  "result": {
    "item": "refinedstorage:network_receiver"
  }
})

event.remove({output:'ftbic:antimatter_constructor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "ftbic:iridium_neutron_reflector"
    },
    "B": {
      "item": "rftoolspower:dimensionalcell_advanced"
    },
    "C": {
      "item": "ftbic:advanced_machine_block"
    },
    "D": {
      "item": "kubejs:de_draconic_core"
    },
    "E": {
      "item": "rftoolsutility:matter_receiver"
    }
  },
  "result": {
    "item": "ftbic:antimatter_constructor"
  }
})

event.remove({output:''})
event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "thermal:lightning_charge"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:ender_pearl"}},
	  {"item": {"item": "minecraft:ender_pearl"}},
	  {"item": {"item": "minecraft:ender_pearl"}},
	  {"item": {"item": "minecraft:ender_pearl"}}
	],
	"output": {
	  "item": "reliquary:eye_of_the_storm",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

event.remove({output:'thermal:redstone_mushroom_spores'})

  event.custom({"type":"exnihilosequentia:sieve",
"input":{"item":"mekanism:block_refined_glowstone"},
"result":{"item":"twilightforest:torchberries"},
"rolls":[
	{"chance":1.0,"mesh":"emerald"},{"chance":1.0,"mesh":"netherite"},{"chance":0.5,"mesh":"netherite"},

    {"chance":1.0,"mesh":"diamond"}, {"chance":1.0,"mesh":"diamond"}, {"chance":0.5,"mesh":"diamond"}, 
]})

event.custom({"type":"immersiveengineering:mixer","energy":1600,
"fluid":{"amount":1000,"tag":"forge:starlight"},
"inputs":[{"item":"botania:light_relay"},{"item":"kubejs:starmetal_ingot"}],
"result":{"amount":500,"fluid":"kubejs:molten_starmetal"}})

event.remove({id:'create_confectionery:white_chocolate_recipe_2'})
event.remove({id:'create_confectionery:white_chocolate_recipe_3'})
event.remove({id:'create_confectionery:white_chocolate_recipe_4'})
event.remove({id:'create_confectionery:white_chocolate_recipe_5'})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:iron_ore').toJson(),
	  Ingredient.of('powah:crystal_niotic').toJson(),
    ],
    energy: '3000000',
    result: Item.of('kubejs:starmetal_ore').toJson()
})

event.custom({
	"type": "botania:mana_infusion",
	"catalyst": {
	  "type": "block",
	  "block": "naturesaura:conversion_catalyst"
	},
	"input": {
	  "item": "minecraft:sand"
	},
	"mana": 5000,
	"output": {
	  "item": "kubejs:mana_sand"
	}
  })

event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"item": "kubejs:aquamarine"
	  },
	  {
		"fluid": "kubejs:starlight",
		"amount": 1000
	  }
	],
	"result": [
	  {
		"item": "kubejs:resonating_gem"
	  }
	]
  })

event.remove({output:'mekanism:electrolytic_core'})
event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "mekanism:energy_tablet"
	},
	"ingredients": [
	  {
		"tag": "forge:dusts/osmium"
	  },
	  {
		"item": "twilightforest:carminite"
	  },
	  {
		"tag": "forge:dusts/gold"
	  },
	  {
		"tag": "forge:dusts/osmium"
	  },
	  {
		"item": "twilightforest:carminite"
	  },
	  {
		"tag": "forge:dusts/iron"
	  }
	],
	"result": {
	  "item": "mekanism:electrolytic_core",
	  "count": 2
	}
  })
  
  event.custom({
	  "type": "ars_nouveau:enchanting_apparatus",
	  "reagent": [
		{"item": "mekanism:energy_tablet"}
	  ],
	  "pedestalItems": [
		{"item": {"tag": "forge:dusts/osmium"}},
		{"item": {"item": "twilightforest:carminite"}},
		{"item": {"tag": "forge:dusts/gold"}},
		{"item": {"tag": "forge:dusts/osmium"}},
		{"item": {"item": "twilightforest:carminite"}},
		{"item": {"tag": "forge:dusts/iron"}}
	  ],
	  "output": {
		"item": "mekanism:electrolytic_core",
		"count": 1
	  },
	  "sourceCost": 2000,
	  "keepNbtOfReagent": false
	})

event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:conjuration_catalyst"
  },
  "input": {
    "item": "twilightforest:naga_scale"
  },
  "mana": 20000,
  "output": {
    "count": 2,
    "item": "twilightforest:naga_scale"
  }
})

event.custom({
  "type": "evilcraft:blood_infuser",
  "item": "botania:livingrock",
  "fluid": {
    "fluid": "evilcraft:blood",
    "amount": 1000
  },
  "result": {
    "item": "kubejs:slate_1"
  },
  "duration": 200,
  "xp": 1.0
})

event.custom({
	"type": "evilcraft:blood_infuser",
	"item": "kubejs:slate_1",
	"fluid": {
	  "fluid": "evilcraft:blood",
	  "amount": 5000
	},
	"result": {
	  "item": "kubejs:slate_2"
	},
	"duration": 200,
	"xp": 1.0
  })


event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
	{
		"item": "kubejs:slate_2"
	},
	{
      "item": "mekanism:elite_control_circuit"
    },
	{
		"item": "botania:manasteel_ingot"
	},
	{
		"item": "refinedstorage:advanced_processor"
	}
  ],
  "output": [
    {
      "item": "kubejs:slate_3"
    }
  ]
})

event.custom({
    "input": [
      {
        "item": "occultism:wormhole_frame"
      },
      {
        "item": "kubejs:slate_3"
      },
      {
        "item": "occultism:wormhole_frame"
      },
      {
        "item": "botanicadds:gaiasteel_ingot"
      },
      {
        "item": "botanicadds:gaiasteel_ingot"
      },
      {
        "item": "occultism:wormhole_frame"
      },
      {
        "item": "kubejs:slate_3"
      },
      {
        "item": "occultism:wormhole_frame"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:molten_uwuterium\",Amount:576}",
    "processingTime": 60,
    "output": {
      "item": "kubejs:slate_uwuterium",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({
	"type": "botania:mana_infusion",
	"catalyst": {
	  "type": "block",
	  "block": "botania:conjuration_catalyst"
	},
	"input": {
	  "item": "minecraft:echo_shard"
	},
	"mana": 100000,
	"output": {
	  "count": 2,
	  "item": "minecraft:echo_shard"
	}
  })



  event.shapeless(
	Item.of('kubejs:uwuterium_nugget', 9), // output
	[ 'kubejs:uwuterium_ingot'] //input
	)

   event.shapeless(
    Item.of('kubejs:uwuterium_ingot', 9), // output
    [ 'kubejs:uwuterium_block'] //input
    )


	
event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "kubejs:uwuterium_ingot"
  },
  "result": [
    {
      "fluid": "kubejs:molten_uwuterium",
      "amount": 144
    }
  ],
  "energy": 200000
})

event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "kubejs:uwuterium_block"
	},
	"result": [
	  {
		"fluid": "kubejs:molten_uwuterium",
		"amount": 1296
	  }
	],
	"energy": 200000
  })

event.custom({
	"type": "create:mixing",
	"heatRequirement": "superheated",
	"ingredients": [
	  {
		  "amount": 576,
		  "fluid": "kubejs:molten_uwuterium"
	  },
	  {
		"item": "kubejs:catal_ender"
	  },
	  {
		"item": "ars_nouveau:abjuration_essence"
	  },
	  {
		"item": "botania:third_eye"
	  }
	],
	"results": [
		{
			"item": "kubejs:uwuterium_pearl"
		}
	]
  })

  event.remove({output:'thermal:fluid_cell_frame'})
  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "deepresonance:tank"}
	],
	"pedestalItems": [
	  {"item": {"item": "kubejs:lp_copper"}},
	  {"item": {"item": "thermal:signalum_glass"}},
	  {"item": {"item": "immersiveengineering:wire_copper"}},
	  {"item": {"item": "create:fluid_tank"}}
	],
	"output": {
	  "item": "thermal:fluid_cell_frame",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "deepresonance:tank"
	},
	"ingredients": [
	  {
		"item": "kubejs:lp_copper"
	  },
	  {
		"item": "thermal:signalum_glass"
	  },
	  {
		"item": "immersiveengineering:wire_copper"
	  },
	  {
		"item": "create:fluid_tank"
	  }
	],
	"result": {
	  "item": "thermal:fluid_cell_frame",
	  "count": 2
	}
  })

event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "tag": "forge:plates/brass"
	},
	"transitionalItem": {
	  "item": "create_sa:incomplete_hydraulic_engine"
	},
	"sequence": [
	   {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  },
		  {
			"fluid": "kubejs:molten_electrum",
			"nbt": {},
			"amount": 576
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  },
		  {
			"item": "ftbic:advanced_circuit"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  },
		  {
			"item": "kubejs:chip2"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  }
		]
	  },
	  {
		"type": "create:pressing",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_hydraulic_engine"
		  }
		]
	  }
	],
	"results": [
	  {
		"item": "create_sa:hydraulic_engine",
		"chance": 1
	  }
	],
	"loops": 3
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:lapisium_crystal"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:prismarine_shard"}},
	  {"item": {"tag": "minecraft:fishes"}},
	  {"item": {"item": "minecraft:clay_ball"}},
	  {"item": {"item": "kubejs:aquamarine"}}
	],
	"output": {
	  "item": "infused_crystals:infused_lapisium_crystal",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:lapisium_crystal"
	},
	"ingredients": [
	  {
		"item": "minecraft:prismarine_shard"
	  },
	  {
		"tag": "minecraft:fishes"
	  },
	  {
		"item": "minecraft:clay_ball"
	  },
	  {
		"item": "kubejs:aquamarine"
	  }
	],
	"result": {
	  "item": "infused_crystals:infused_lapisium_crystal",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:block_of_lapisium"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:prismarine_shard"}},
	  {"item": {"tag": "minecraft:fishes"}},
	  {"item": {"item": "minecraft:clay_ball"}},
	  {"item": {"item": "kubejs:aquamarine"}}
	],
	"output": {
	  "item": "infused_crystals:block_of_infused_lapisium",
	  "count": 1
	},
	"sourceCost": 9000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "infused_crystals:block_of_lapisium"
	},
	"ingredients": [
	  {
		"item": "minecraft:prismarine_shard"
	  },
	  {
		"tag": "minecraft:fishes"
	  },
	  {
		"item": "minecraft:clay_ball"
	  },
	  {
		"item": "kubejs:aquamarine"
	  }
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_lapisium",
	  "count": 1
	}
  })

  let multiSmelt = (output, input, includeBlasting) => {
    event.smelting(output, input)
    
    if (includeBlasting) {
      event.blasting(output, input)
    }
  }
  
  multiSmelt('kubejs:draconium_ingot', 'kubejs:draconium_dust', true)
  multiSmelt('create:dough', 'minecraft:wheat', true)
  multiSmelt('kubejs:seared_brick', 'kubejs:grout', true)
  multiSmelt('kubejs:aquamarine', 'kubejs:mana_sand', true)
  multiSmelt('kubejs:raw_arcane', 'kubejs:arcane_ore', true)
  multiSmelt('ars_nouveau:source_gem', 'kubejs:raw_arcane', true)
  multiSmelt('9x ars_nouveau:source_gem', 'kubejs:raw_arcane_block', true)
  multiSmelt('9x minecraft:glass', 'compressium:sand_1', true)


  event.custom({"type":"exnihilosequentia:sieve",
  "input":{"item":"minecraft:purpur_block"},
  "result":{"item":"kubejs:draconium_dust"},
  "rolls":[{"chance":0.5,"mesh":"diamond"},{"chance":1.0,"mesh":"emerald"},{"chance":1.0,"mesh":"netherite"},
  {"chance":0.1,"mesh":"netherite"}]
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "kubejs:draconium_block"
	},
	"ingredients": [
	  {
		"item": "kubejs:draconium_block"
	  }
	],
	"result": {
	  "item": "kubejs:charged_draconium_block",
	  "count": 2
	}
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "thermal_extra:upgrade_augment"
	},
	"ingredients": [
	  {
		"item": "kubejs:charged_draconium_block"
	  },
	  {
		"item": "infused_crystals:infused_redstonium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_diamondium_crystal"
	  },
	  {
		"item": "kubejs:charged_draconium_block"
	  },
	  {
		"item": "infused_crystals:infused_lapisium_crystal"
	  },
	  {
		"item": "kubejs:charged_draconium_block"
	  },
	  {
		"item": "infused_crystals:infused_emeraldium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_coalium_crystal"
	  },
	  {
		"item": "kubejs:charged_draconium_block"
	  },
	  {
		"item": "infused_crystals:infused_ironium_crystal"
	  }
	],
	"result": {
	  "item": "kubejs:de_draconic_core",
	  "count": 1
	}
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "kubejs:charged_draconium_block"
	},
	"ingredients": [
	  {
		"item": "kubejs:de_draconic_core"
	  },
	  {
		"item": "kubejs:de_draconic_core"
	  },
	  {
		"item": "deeperdarker:heart_of_the_deep"
	  },
	  {
		"item": "kubejs:de_draconic_core"
	  },
	  {
		"item": "kubejs:de_draconic_core"
	  }
	],
	"result": {
	  "item": "kubejs:awakened_draconium_block",
	  "count": 1
	}
  })

  event.custom({
	"type": "botania:mana_infusion",
	"catalyst": {
	  "type": "block",
	  "block": "botania:conjuration_catalyst"
	},
	"input": {
	  "item": "deeperdarker:heart_of_the_deep"
	},
	"mana": 50000,
	"output": {
	  "count": 2,
	  "item": "deeperdarker:heart_of_the_deep"
	}
  })

event.remove({id:'extendedcrafting:black_iron_ingot'})
event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {
	  "fluid_tag": "forge:crude_oil",
	  "amount": 1000
    },
    {
      "item": "reaper:soul_catalyst"
    },
	{
	  "item": "thermal_extra:dragonsteel_ingot"
	}
  ],
  "result": [
    {
      "item": "extendedcrafting:black_iron_ingot"
    }
  ],
  "energy": 5000
})

//

event.custom({
	"type": "extendedcrafting:compressor",
	"powerCost": 1000000,
	"inputCount": 512,
	"ingredient": {
	  "item": "minecraft:glowstone_dust"
	},
	"catalyst": {
	  "item": "spirit:crude_soul_crystal"
	},
	"result": {
	  "item": "kubejs:catal_glowstone"
	}
  })

  event.remove({id:'extendedcrafting:luminessence'})

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "kubejs:awakened_draconium_ingot"}
	],
	"pedestalItems": [
	  {"item": {"item": "infused_crystals:infused_coalium_crystal"}},
	  {"item": {"item": "infused_crystals:infused_ironium_crystal"}},
	  {"item": {"item": "infused_crystals:infused_lapisium_crystal"}},
	  {"item": {"item": "infused_crystals:infused_emeraldium_crystal"}},
	  {"item": {"item": "infused_crystals:infused_diamondium_crystal"}},
	  {"item": {"item": "infused_crystals:infused_redstonium_crystal"}},
	  {"item": {"item": "kubejs:infused_goldium"}}
	],
	"output": {
	  "item": "extendedcrafting:the_ultimate_ingot"
	},
	"sourceCost": 10000,
	"keepNbtOfReagent": false
  })

  event.custom({
    "input": [
      {
        "item": "kubejs:de_wyvern_core"
      },
      {
        "item": "ad_astra:desh_plate"
      },
      {
        "item": "kubejs:de_wyvern_core"
      },
      {
        "item": "kubejs:awakened_draconium_block"
      },
      {
        "item": "kubejs:awakened_draconium_block"
      },
      {
        "item": "kubejs:de_wyvern_core"
      },
      {
        "item": "ad_astra:desh_plate"
      },
      {
        "item": "kubejs:de_wyvern_core"
      }
    ],
    "inputFluid": "{FluidName:\"mysticalagradditions:molten_supremium\",Amount:4000}",
    "processingTime": 60,
    "output": {
      "item": "kubejs:de_awakened_core",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({output:'industrialforegoing:mycelial_reactor'})
  event.custom({
    "input": [
      {
        "item": "powah:reactor_nitro"
      },
      {
        "tag": "forge:storage_blocks/fiery"
      },
      {
        "item": "powah:reactor_nitro"
      },
      {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      {
        "item": "kubejs:de_awakened_core"
      },
      {
        "item": "industrialforegoing:machine_frame_supreme"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:solus_essence\",Amount:4000}",
    "processingTime": 360,
    "output": {
      "item": "industrialforegoing:mycelial_reactor",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

event.remove({output:'thermal:energy_cell_frame'})
event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"tag": "forge:gears/electrum"}
	],
	"pedestalItems": [
	  {"item": {"item": "powah:capacitor_hardened"}},
	  {"item": {"item": "kubejs:dense_lead_plate"}},
	  {"item": {"item": "powah:capacitor_hardened"}},
	  {"item": {"item": "kubejs:dense_lead_plate"}}
	],
	"output": {
	  "item": "thermal:energy_cell_frame"
	},
	"sourceCost": 0,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "tag": "forge:gears/electrum"
	},
	"ingredients": [
	  {
		"item": "powah:capacitor_hardened"
	  },
	  {
		"item": "kubejs:dense_lead_plate"
	  },
	  {
		"item": "powah:capacitor_hardened"
	  },
	  {
		"item": "kubejs:dense_lead_plate"
	  }
	],
	"result": {
	  "item": "thermal:energy_cell_frame",
	  "count": 2
	}
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "minecraft:gold_block"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_gold",
		"count": 1
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "compressium:gold_1"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_gold",
		"count": 9
	  }
	]
  })

event.custom({
  "type": "pneumaticcraft:explosion_crafting",
  "input": {
    "item": "minecraft:coal"
  },
  "loss_rate": 25,
  "results": [
    {
      "item": "immersiveengineering:coal_coke"
    }
  ]
})

event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "minecraft:coal_block"
	},
	"loss_rate": 25,
	"results": [
	  {
		"item": "immersiveengineering:coke"
	  }
	]
  })


  event.remove({output:'create:copper_sheet'})
  event.remove({output:'immersiveengineering:plate_copper'})


  event.custom({
	"type": "thermal:crystallizer",
	"ingredients": [
	  {
		"fluid_tag": "forge:only_water",
		"amount": 1000
	  },
	  {
		"tag": "minecraft:fishes"
	  },
	  {
		"item": "reliquary:squid_beak"
	  }
	],
	"result": [
		{
			"type": "forge:nbt",
			"item": "reliquary:potion_essence",
			"count": 1,
			"nbt": "{effects:[{duration:750,name:\"minecraft:water_breathing\",potency:0}]}"
		  }
	],
	"energy": 5000
  })

  event.custom({
	"type": "botania:elven_trade",
	"ingredients": [
	  {
		"item": "kubejs:manasteel_processor"
	  },
	  {
		"item": "kubejs:manasteel_processor"
	  }
	],
	"output": [
	  {
		"item": "kubejs:raw_elementium_processor"
	  }
	]
  })

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('kubejs:de_draconic_core').toJson(),
	  Ingredient.of('kubejs:charged_draconium_block').toJson(),
	  Ingredient.of('kubejs:elementium_processor').toJson(),
	  Ingredient.of('#forge:gears/shellite').toJson(),
    ],
    energy: '50000000',
    result: Item.of('kubejs:de_wyvern_core').toJson()
})

event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "refinedstorage:quartz_enriched_iron"
		},
		{
			"item": "infused_crystals:infused_ironium_crystal"
		},
		{
			"tag": "forge:dusts/quartz"
		}
	],
	"block_in": {
		"blocks": ["kubejs:starlight"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "kubejs:charged_enriched_iron"
		}
	]
})

event.remove({output:'mekanism:ultimate_tier_installer'})
event.custom({
	"type": "botania:runic_altar",
	"ingredients": [
	  {
		"item": "mekanism:elite_tier_installer"
	  },
	  {
		"item": "mekanism:alloy_atomic"
	  },
	  {
		"item": "kubejs:stacium_ingot"
	  },
	  {
		"item": "kubejs:darksteel_gear"
	  }
	],
	"mana": 25000,
	"output": {
	  "item": "mekanism:ultimate_tier_installer"
	}
  })

  event.custom({
    "input": [
		{
			"tag": "forge:plates/enderium"
		},
      {
        "item": "mekanism:advanced_tier_installer"
      },
	  {
		"tag": "forge:plates/enderium"
	  },
      {
        "item": "infused_crystals:infused_lapisium_crystal"
      },
      {
        "item": "infused_crystals:infused_lapisium_crystal"
      },
      {
        "item": "mekanism:alloy_reinforced"
      },
      {
        "item": "kubejs:solus_ingot"
      },
      {
        "item": "mekanism:alloy_reinforced"
      }
    ],
    "inputFluid": "{FluidName:\"integrateddynamics:menril_resin\",Amount:4000}",
    "processingTime": 320,
    "output": {
      "item": "mekanism:elite_tier_installer",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })


  event.smithing(
	'functionalstorage:diamond_upgrade',  // arg 1: output
	'functionalstorage:gold_upgrade', // arg 2: the item to be upgraded
	'#forge:gems/mana_diamond'   // arg 3: the upgrade item 
	)

	event.remove({output:'infused_crystals:chargerblock'})
event.remove({output:'functionalstorage:diamond_upgrade'})
event.remove({output:'functionalstorage:netherite_upgrade'})
event.smithing(
	'functionalstorage:netherite_upgrade',  // arg 1: output
	'functionalstorage:diamond_upgrade', // arg 2: the item to be upgraded
	'mekanism:dirty_netherite_scrap'   // arg 3: the upgrade item 
	)

	event.custom({
	"type":"createaddition:rolling",
	"input": {
	"item": "kubejs:darksteel_ingot"
	},
	"result": {
	"item": "kubejs:darksteel_bars",
	"count": 3
	}
	})

	event.custom({
		"type":"createaddition:rolling",
		"input": {
		"item": "minecraft:diamond"
		},
		"result": {
		"item": "kubejs:diamond_rod",
		"count": 2
		}
	})

	event.custom({
		"type":"createaddition:rolling",
		"input": {
		"item": "minecraft:emerald"
		},
		"result": {
		"item": "kubejs:emerald_rod",
		"count": 2
		}
	})

	event.custom({
		"type":"createaddition:rolling",
		"input": {
		"item": "kubejs:endsteel_ingot"
		},
		"result": {
		"item": "kubejs:endsteel_bars",
		"count": 3
		}
		})


event.custom({
	"output": "{FluidName:\"kubejs:stacia_essence\",Amount:50}",
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"ad_astra:lunar_wastelands"
		  ]
		},
		"blacklist": {},
		"depth_min": 0,
		"depth_max": 256,
		"weight": 8
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens2"
	},
	"entity": "minecraft:empty",
	"type": "industrialforegoing:laser_drill_fluid"
  })

  event.custom({
	"output": "{FluidName:\"kubejs:solus_essence\",Amount:50}",
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"minecraft:the_end",
			"minecraft:end_highlands"
		  ]
		},
		"blacklist": {},
		"depth_min": 0,
		"depth_max": 256,
		"weight": 8
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens3"
	},
	"entity": "minecraft:empty",
	"type": "industrialforegoing:laser_drill_fluid"
  })

  event.custom({
	"output": "{FluidName:\"kubejs:terraria_essence\",Amount:50}",
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"ad_astra:lunar_wastelands"
		  ]
		},
		"blacklist": {},
		"depth_min": 0,
		"depth_max": 256,
		"weight": 8
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens13"
	},
	"entity": "minecraft:empty",
	"type": "industrialforegoing:laser_drill_fluid"
  })

  event.custom({
	"output": "{FluidName:\"kubejs:lunaria_essence\",Amount:50}",
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"ad_astra:lunar_wastelands"
		  ]
		},
		"blacklist": {},
		"depth_min": 0,
		"depth_max": 256,
		"weight": 8
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens10"
	},
	"entity": "minecraft:empty",
	"type": "industrialforegoing:laser_drill_fluid"
  })

event.remove({output:'projecte:repair_talisman'})
event.custom({
    "input": [
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "kubejs:slate_uwuterium"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "reaper:rune_block_efficacia"
      },
      {
        "item": "reaper:rune_block_efficacia"
      },
      {
        "item": "create_sa:heap_of_experience"
      },
      {
        "item": "thermal:xp_storage_augment"
      },
      {
        "item": "create_sa:heap_of_experience"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:solus_essence\",Amount:4000}",
    "processingTime": 360,
    "output": {
      "item": "projecte:repair_talisman",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({output:'rftoolsbase:machine_frame'})
  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "industrialforegoing:machine_frame_simple"}
	],
	"pedestalItems": [
	  {"item": {"item": "kubejs:lp_steel"}},
	  {"item": {"item": "immersiveengineering:wirecoil_steel"}},
	  {"item": {"item": "create:metal_girder"}},
	  {"item": {"item": "create_sa:hydraulic_engine"}}
	],
	"output": {
	  "item": "rftoolsbase:machine_frame",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })
  
  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "industrialforegoing:machine_frame_simple"
	},
	"ingredients": [
	  {
		"item": "kubejs:lp_steel"
	  },
	  {
		"item": "immersiveengineering:wirecoil_steel"
	  },
	  {
		"item": "create:metal_girder"
	  },
	  {
		"item": "create_sa:hydraulic_engine"
	  }
	],
	"result": {
	  "item": "rftoolsbase:machine_frame",
	  "count": 2
	}
  })




  event.remove({output:'thermal:upgrade_augment_1'})
  event.remove({output:'thermal:upgrade_augment_2'})
  event.remove({output:'thermal:upgrade_augment_3'})
  
  event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_ingot"
    },
    "B": {
      "item": "ftbic:electronic_circuit"
    },
    "C": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "D": {
      "item": "thermal:gold_gear"
    },
    "E": {
      "item": "kubejs:slate_1"
    }
  },
  "result": {
    "item": "thermal:upgrade_augment_1"
  }
})

  event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "EFE"
	],
	"key": {
	  "A": {
		"item": "thermal:rosin"
	  },
	  "B": {
		"item": "powah:crystal_blazing"
	  },
	  "C": {
		"item": "immersiveengineering:wirecoil_electrum"
	  },
	  "D": {
		"item": "thermal:upgrade_augment_1"
	  },
	  "E": {
		"item": "ironjetpacks:advanced_coil"
	  },
	  "F": {
		"item": "thermal_extra:sticky_ball"
	  }
	},
	"result": {
	  "item": "thermal:upgrade_augment_2",
	  "count": 2
	}
  })

  event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "EFE"
	],
	"key": {
	  "A": {
		"item": "thermal:enderium_dust"
	  },
	  "B": {
		"item": "thermal:basalz_powder"
	  },
	  "C": {
		"item": "thermal:enderium_gear"
	  },
	  "D": {
		"item": "thermal:upgrade_augment_2"
	  },
	  "E": {
		"item": "thermal:apatite_dust"
	  },
	  "F": {
		"item": "kubejs:catal_ender"
	  }
	},
	"result": {
	  "item": "thermal:upgrade_augment_3",
	  "count": 2
	}
  })

  event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "kubejs:stacia_essence",
      "amount": 1000
    },
    {
      "item": "thermal:chiller_ingot_cast"
    }
  ],
  "result": [
    {
      "item": "kubejs:stacium_ingot",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
	"type": "thermal:chiller",
	"ingredients": [
	  {
		"fluid": "kubejs:solus_essence",
		"amount": 1000
	  },
	  {
		"item": "thermal:chiller_ingot_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:solus_ingot",
		"count": 1
	  }
	],
	"energy": 20000
  })

  event.custom({
	"type": "thermal:chiller",
	"ingredients": [
	  {
		"fluid": "kubejs:terraria_essence",
		"amount": 1000
	  },
	  {
		"item": "thermal:chiller_ingot_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:terrarium_ingot",
		"count": 1
	  }
	],
	"energy": 20000
  })

  event.custom({
	"type": "thermal:chiller",
	"ingredients": [
	  {
		"fluid": "kubejs:lunaria_essence",
		"amount": 1000
	  },
	  {
		"item": "thermal:chiller_ingot_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:lunaria_ingot",
		"count": 1
	  }
	],
	"energy": 20000
  })

  event.remove({output:'unusualend:gilded_pearl'})
  event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "unusualend:gilded_pearl"
  }
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "tag": "forge:ingots/steel"
  },
  "result": [
    {
      "fluid": "kubejs:molten_steel",
      "amount": 144
    }
  ],
  "energy": 20000
})

event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "tag": "forge:storage_blocks/steel"
	},
	"result": [
	  {
		"fluid": "kubejs:molten_steel",
		"amount": 1296
	  }
	],
	"energy": 20000
})


event.remove({output:'ae2:calculation_processor'})
event.remove({output:'ae2:logic_processor'})
event.remove({output:'ae2:engineering_processor'})

event.replaceInput({}, 'ae2:logic_processor', 'refinedstorage:improved_processor')
event.replaceInput({}, 'ae2:calculation_processor', 'refinedstorage:basic_processor')
event.replaceInput({}, 'ae2:engineering_processor', 'refinedstorage:advanced_processor')

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:gold_ingot').toJson()
    ],
    energy: '1000000',
    result: Item.of('kubejs:goldium').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('minecraft:gold_block').toJson()
    ],
    energy: '5000000',
    result: Item.of('kubejs:goldium_block').toJson()
})

event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "kubejs:goldium"}
	],
	"pedestalItems": [
	  {"item": {"item": "redstone_arsenal:flux_ingot"}},
	  {"item": {"item": "thermal:gold_dust"}},
	  {"item": {"item": "ars_nouveau:blaze_fiber"}},
	  {"item": {"item": "exnihilosequentia:blaze_doll"}}
	],
	"output": {
	  "item": "kubejs:infused_goldium",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "kubejs:goldium"
	},
	"ingredients": [
	  {
		"item": "redstone_arsenal:flux_ingot"
	  },
	  {
		"item": "thermal:gold_dust"
	  },
	  {
		"item": "ars_nouveau:blaze_fiber"
	  },
	  {
		"item": "exnihilosequentia:blaze_doll"
	  }
	],
	"result": {
	  "item": "kubejs:infused_goldium",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "kubejs:goldium_block"}
	],
	"pedestalItems": [
	  {"item": {"item": "redstone_arsenal:flux_ingot"}},
	  {"item": {"item": "thermal:gold_dust"}},
	  {"item": {"item": "ars_nouveau:blaze_fiber"}},
	  {"item": {"item": "exnihilosequentia:blaze_doll"}}
	],
	"output": {
	  "item": "kubejs:infused_goldium_block",
	  "count": 1
	},
	"sourceCost": 9000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "kubejs:goldium_block"
	},
	"ingredients": [
	  {
		"item": "redstone_arsenal:flux_ingot"
	  },
	  {
		"item": "thermal:gold_dust"
	  },
	  {
		"item": "ars_nouveau:blaze_fiber"
	  },
	  {
		"item": "exnihilosequentia:blaze_doll"
	  }
	],
	"result": {
	  "item": "kubejs:infused_goldium_block",
	  "count": 1
	}
  })

  event.remove({id:'industrialforegoing:iron_gear'})
  event.remove({id:'ftbic:shaped/ingots/iron_to_iron_gear'})
  event.remove({id:'industrialforegoing:gold_gear'})
  event.remove({id:'ftbic:shaped/ingots/gold_to_gold_gear'})
  event.remove({id:'ftbic:shaped/ingots/copper_to_copper_gear'})
  event.remove({id:'ftbic:shaped/ingots/enderium_to_enderium_gear'})
  event.remove({id:'ftbic:shaped/ingots/tin_to_tin_gear'})
  event.remove({id:'ftbic:shaped/ingots/lead_to_lead_gear'})
  event.remove({id:'ftbic:shaped/ingots/bronze_to_bronze_gear'})
  event.remove({id:'ftbic:shaped/ingots/iridium_to_iridium_gear'})
  event.remove({id:'ftbic:shaped/ingots/aluminum_to_aluminum_gear'})
  event.remove({id:'ftbic:shaped/ingots/uranium_to_uranium_gear'})
  event.remove({id:'ftbic:rolling/ingots/copper_to_copper_plate'})



  event.remove({output:'rftoolsbuilder:builder'})
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "ABCBA",
    "DEFGD",
    "HIJIH",
    "DKLMD",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "kubejs:catal_ender"
    },
    "C": {
      "item": "kubejs:darksteel_bars"
    },
    "D": {
      "item": "kubejs:darksteel_gear"
    },
    "E": {
      "item": "kubejs:terrarium_ingot"
    },
    "F": {
      "item": "mekanism:elite_control_circuit"
    },
    "G": {
      "item": "kubejs:lunaria_ingot"
    },
    "H": {
		"type": "forge:nbt",
		"item": "industrialforegoing:range_addon10",
		"count": 1,
		"nbt": "{TitaniumAugment:{Range:10.0f}}"
	  },
    "I": {
      "item": "thermal:rf_coil"
    },
    "J": {
      "item": "rftoolsbase:machine_frame"
    },
    "K": {
      "item": "kubejs:solus_ingot"
    },
    "L": {
      "item": "create_sa:steam_engine"
    },
    "M": {
      "item": "kubejs:stacium_ingot"
    }
  },
  "result": {
    "item": "rftoolsbuilder:builder"
  }
})

event.remove({id:'refinedstorage:fluid_grid/fluid_grid'})
event.custom({
	"type": "thermal:crystallizer",
	"ingredients": [
	  {
		"fluid": "kubejs:mana",
		"amount": 1000
	  },
	  {
		"item": "refinedstorage:grid"
	  },
	  {
		"item": "sophisticatedbackpacks:tank_upgrade"
	  }
	],
	"result": [
	  {
		"item": "refinedstorage:fluid_grid"
	  }
	],
	"energy": 5000
  })

  event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "count": 8,
      "ingredient": {
        "tag": "forge:plates/lead"
      }
    }
  ],
  "outputItems": [
    {
      "item": "kubejs:dense_lead_plate"
    }
  ]
})

event.custom({
	"type": "ftbic:compressing",
	"inputItems": [
	  {
		"count": 8,
		"ingredient": {
		  "tag": "forge:plates/iron"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "kubejs:dense_iron_plate"
	  }
	]
  })

  event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "item": "minecraft:soul_sand"
      }
    }
  ],
  "outputItems": [
    {
      "count": 1,
      "item": "thermal_extra:soul_sand_dust"
    }
  ]
})

  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:soul_sand"}},"output":{"item":"thermal_extra:soul_sand_dust"}})

  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:soul_sand"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 1.0,
      "item": "thermal_extra:soul_sand_dust"
    },
    {
      "chance": 0.5,
      "item": "thermal_extra:soul_sand_dust"
    }
  ]
})

event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:diamondium_crystal"
	},
	"ingredients": [
	  {"item": "kubejs:aquamarine_electron_tube"},
	  {"item": "rftoolsbase:dimensionalshard"},
	  {"item": "mekanism:enriched_diamond"},
	  {"item": "minecraft:clay"}
	],
	"result": {
	  "item": "infused_crystals:infused_diamondium_crystal",
	  "count": 1
	}
  })
  
event.custom({
	  "type": "ars_nouveau:enchanting_apparatus",
	  "reagent": [
		{"item": "infused_crystals:diamondium_crystal"}
	  ],
	  "pedestalItems": [
		{"item": {"item": "kubejs:aquamarine_electron_tube"}},
		{"item": {"item": "rftoolsbase:dimensionalshard"}},
		{"item": {"item": "mekanism:enriched_diamond"}},
		{"item": {"item": "minecraft:clay"}}
	  ],
	  "output": {
		"item": "infused_crystals:infused_diamondium_crystal",
		"count": 1
	  },
	  "sourceCost": 2000,
	  "keepNbtOfReagent": false
})

event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:block_of_diamondium"
	},
	"ingredients": [
	  {"item": "kubejs:aquamarine_electron_tube"},
	  {"item": "rftoolsbase:dimensionalshard"},
	  {"item": "mekanism:enriched_diamond"},
	  {"item": "minecraft:clay"}
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_diamondium",
	  "count": 1
	}
  })
  
  event.custom({
	  "type": "ars_nouveau:enchanting_apparatus",
	  "reagent": [
		{"item": "infused_crystals:block_of_diamondium"}
	  ],
	  "pedestalItems": [
		{"item": {"item": "kubejs:aquamarine_electron_tube"}},
		{"item": {"item": "rftoolsbase:dimensionalshard"}},
		{"item": {"item": "mekanism:enriched_diamond"}},
		{"item": {"item": "minecraft:clay"}}
	  ],
	  "output": {
		"item": "infused_crystals:block_of_infused_diamondium",
		"count": 1
	  },
	  "sourceCost": 2000,
	  "keepNbtOfReagent": false
	})

	event.custom({"type":"exnihilosequentia:crucible","amount":250,
	"crucibleType":"fired",
	"fluidResult":{"fluid":"kubejs:starlight"},
	"input":{"item":"kubejs:aquamarine"}})


//
  event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "item": "kubejs:starmetal_ingot"
      }
    }
  ],
  "outputItems": [
    {
      "count": 1,
      "item": "kubejs:stardust"
    }
  ]
})

  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"kubejs:starmetal_ingot"}},"output":{"item":"kubejs:stardust"}})

  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "kubejs:starmetal_ingot"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 1.0,
      "item": "kubejs:stardust"
    },
    {
      "chance": 0.5,
      "item": "kubejs:stardust"
    }
  ]
})

  event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "farmersdelight:hamburger"
	  },
	  {
		"item": "pneumaticcraft:chips"
	  },
	  {
		"type": "pneumaticcraft:stacked_item",
		"count": 3,
		"item": "evilcraft:hardened_blood_shard"
	  },
	  {
		"item": "minecraft:skeleton_skull"
	  },
	  {
		"item": "bhc:red_heart"
	  },
	  {
		"item": "evilcraft:corrupted_tear"
	  }
	],
	"pressure": 4.0,
	"results": [
	  {
		"item": "kubejs:devilish_horn"
	  }
	]
  })

  event.remove({output:'mekanism:basic_control_circuit'})
  event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:ingots/soulsteeltinker"}},"output":{"item":"mekanism:basic_control_circuit"}})

  event.remove({output:'mekanism:alloy_infused'})
  event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"kubejs:hepatizon_ingot"}},"output":{"item":"mekanism:alloy_infused"}})


  event.custom({
	"type": "thermal:smelter",
	"ingredients": [
	  {
		"value": [
		  {"tag": "forge:gems/apatite"}
		],
		"count": 1
	  },
	  {
		"value": [
		  {"tag": "forge:ingots/steel"}
		],
		"count": 1
	  },
	  {
		"tag": "forge:dusts/soul_sand",
		"count": 1
	  }
	],
	"result": [
	  {
		"item": "kubejs:soulsteel_ingot",
		"count": 1
	  }
	],
	"energy": 12000
  })

  event.custom({
	"type": "thermal:smelter",
	"ingredients": [
	  {
		"value": [
		  {"tag": "forge:ingots/azure_silver"}
		],
		"count": 1
	  },
	  {
		"value": [
		  {"tag": "forge:obsidian"}
		],
		"count": 1
	  },
	  {
		"tag": "mekanism:shards/iron",
		"count": 1
	  }
	],
	"result": [
	  {
		"item": "kubejs:hepatizon_ingot",
		"count": 1
	  }
	],
	"energy": 12000
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"tag": "forge:gems/apatite"
	  },
	  {
		"tag": "forge:ingots/steel"
	  },
	  {
		"tag": "forge:dusts/soul_sand"
	  }
	],
	"results": [
		{
			"item": "kubejs:soulsteel_ingot",
			"count": 1
		}
	]
  })

  event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "evilcraft:dark_gem"
		}
	],
	"block_in": {
		"blocks": ["evilcraft:blood"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "evilcraft:dark_power_gem",
		}
	]
})
  
  event.remove({output:'integrateddynamics:mechanical_squeezer'})
  event.custom({
    "input": [
	  {
		"item": "thermal:enderium_glass"
	  },
      {
        "item": "integrateddynamics:logic_programmer"
      },
	  {
		"item": "thermal:enderium_glass"
	  },
      {
        "item": "ars_nouveau:glyph_crush"
      },
      {
        "item": "ars_nouveau:glyph_crush"
      },
      {
        "item": "kubejs:slimesteel_ingot"
      },
      {
        "item": "integrateddynamics:squeezer"
      },
      {
        "item": "kubejs:slimesteel_ingot"
      }
    ],
    "inputFluid": "{FluidName:\"integrateddynamics:menril_resin\",Amount:4000}",
    "processingTime": 320,
    "output": {
      "item": "integrateddynamics:mechanical_squeezer",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:dusts/iron"},"result":{"item":"mekanism:shard_iron"},"secondaries":[]})
  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"item":"kubejs:raw_arcane"},"result":{"item":"ars_nouveau:source_gem"},"secondaries":[]})
  
  event.remove({output:'projecte:watch_of_flowing_time'})
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " ABA ",
    "ABCDA",
    "BEFGB",
    "ADHBA",
    " ABA "
  ],
  "key": {
    "A": {
      "item": "projectexpansion:violet_fuel"
    },
    "B": {
      "item": "kubejs:starmetal_ingot"
    },
    "C": {
      "item": "ars_nouveau:belt_of_unstable_gifts"
    },
    "D": {
      "item": "kubejs:slate_3"
    },
    "E": {
      "item": "ars_nouveau:shapers_focus"
    },
    "F": {
      "item": "minecraft:clock"
    },
    "G": {
      "item": "ars_nouveau:enchanters_mirror"
    },
    "H": {
      "item": "ars_nouveau:jar_of_light"
    }
  },
  "result": {
    "item": "projecte:watch_of_flowing_time"
  }
})

  event.custom({
	"type": "mythicbotany:infuser",
	"fromColor": 255,
	"group": "infuser",
	"ingredients": [
	  {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:manasteel\"}"
      },
	  {
		"item": "kubejs:madeline_strawberry"
	  },
	  {
		"item": "mythicbotany:mjoellnir"
	  },
	  {
		"item": "botania:spawner_mover"
	  },
	  {
		"item": "botania:fabulous_pool"
	  },
	  {
		"item": "kubejs:stacium_ingot"
	  },
	  {
		"item": "kubejs:uwuterium_pearl"
	  }
	],
	"mana": 9000000,
	"output": {
	  "count": 1,
	  "item": "botania:creative_pool"
	},
	"toColor": 65280
  })

  event.remove({output:'createaddition:electric_motor'})
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  A  ",
    " BCB ",
    "DCECD",
    "BFHFB",
    " DGD "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "B": {
      "item": "create:brass_nugget"
    },
    "C": {
      "item": "createaddition:gold_spool"
    },
    "D": {
      "item": "create:brass_sheet"
    },
    "E": {
      "item": "powah:furnator_basic"
    },
    "F": {
      "item": "pneumaticcraft:transistor"
    },
    "G": {
      "item": "create:shaft"
    },
    "H": {
      "item": "create_sa:hydraulic_engine"
    }
  },
  "result": {
    "item": "createaddition:electric_motor"
  }
})

event.remove({output: 'ae2:controller'})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
	{"item": "rftoolsbase:machine_frame"}
  ],
  "pedestalItems": [
	{"item": {"item": "mekanism:ultimate_control_circuit"}},
	{"item": {"item": "ae2:annihilation_core"}},
	{"item": {"item": "kubejs:slate_fluix"}},
	{"item": {"item": "ae2:spatial_pylon"}}
  ],
  "output": {
	"item": "ae2:controller",
	"count": 1
  },
  "sourceCost": 1000,
  "keepNbtOfReagent": false
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 5000000,
  "input": {
	"item": "rftoolsbase:machine_frame"
  },
  "ingredients": [
	{
	  "item": "mekanism:ultimate_control_circuit"
	},
	{
	  "item": "ae2:annihilation_core"
	},
	{
	  "item": "kubejs:slate_fluix"
	},
	{
	  "item": "ae2:spatial_pylon"
	}
  ],
  "result": {
	"item": "ae2:controller",
	"count": 2
  }
})

event.remove({output: 'refinedstorage:controller'})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
	{"item": "rftoolsbase:machine_frame"}
  ],
  "pedestalItems": [
	{"item": {"item": "mekanism:elite_control_circuit"}},
	{"item": {"item": "modularrouters:energy_distributor_module"}},
	{"item": {"item": "kubejs:slate_3"}},
	{"item": {"item": "kubejs:manasteel_processor"}}
  ],
  "output": {
	"item": "refinedstorage:controller",
	"count": 1
  },
  "sourceCost": 1000,
  "keepNbtOfReagent": false
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 5000000,
  "input": {
	"item": "rftoolsbase:machine_frame"
  },
  "ingredients": [
	{
	  "item": "mekanism:elite_control_circuit"
	},
	{
	  "item": "modularrouters:energy_distributor_module"
	},
	{
	  "item": "kubejs:slate_3"
	},
	{
	  "item": "kubejs:manasteel_processor"
	}
  ],
  "result": {
	"item": "refinedstorage:controller",
	"count": 1
  }
})

  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "kubejs:raw_arcane"
	  }
	],
	"processingTime": 50,
	"results": [
	  {
		"count": 1,
		"item": "ars_nouveau:source_gem"
	  },
	  {
		"chance": 0.2,
		"item": "ars_nouveau:source_gem"
	  }
	]
  })

  event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		  "amount": 100,
		  "fluid": "minecraft:lava"
	  },
	  {
		"item": "minecraft:iron_ingot"
	  },
	  {
		"tag": "forge:dusts/coal"
	  },
	  {
		"item": "minecraft:obsidian"
	  }
	],
	"results": [
	  {
		"item": "kubejs:darksteel_ingot"
	  }
	]
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "minecraft:gold_ingot"}
	],
	"pedestalItems": [
	  {"item": {"item": "kubejs:lp_copper"}},
	  {"item": {"tag": "forge:silicon"}},
	  {"item": {"item": "immersiveengineering:wirecoil_redstone"}},
	  {"item": {"item": "ftbic:lv_cable"}}
	],
	"output": {
	  "item": "ftbic:electronic_circuit",
	  "count": 2
	},
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "create:sandpaper_polishing",
	"ingredients": [
	  {
		"item": "minecraft:flint"
	  }
	],
	"results": [
	  {
		"item": "kubejs:flint_handle"
	  }
	]
  })

  event.remove({output:''})
  event.custom( {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "minecraft:vine"
		  },
		  {
			"fluid": "minecraft:water",
			"nbt": {},
			"amount": 250
		  }
		],
		"results": [
		  {
			"item": "thermal:rubber"
		  }
		]
	})

  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "minecraft:coal"
	  }
	],
	"processingTime": 50,
	"results": [
	  {
		"count": 1,
		"item": "mekanism:dust_coal"
	  }
	]
  })

  event.remove({output:''})
  //event.custom()

  event.remove({output:'exnihilosequentia:crimson_crucible'})
  event.remove({output:'exnihilosequentia:warped_crucible'})

  event.remove({output:'botania:apothecary_default'})
event.remove({output:'botania:apothecary_forest'})
event.remove({output:'botania:apothecary_plains'})
event.remove({output:'botania:apothecary_mountain'})
event.remove({output:'botania:apothecary_fungal'})
event.remove({output:'botania:apothecary_swamp'})
event.remove({output:'botania:apothecary_desert'})
event.remove({output:'botania:apothecary_taiga'})
event.remove({output:'botania:apothecary_mesa'})
event.remove({output:'botania:apothecary_mossy'})
event.remove({output:'botania:apothecary_deepslate'})

  event.remove({id:'pneumaticcraft:pressure_chamber/transistor'})
  event.remove({id:'pneumaticcraft:pressure_chamber/capacitor'})

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		  "amount": 1000,
		  "fluid": "exnihilosequentia:sea_water"
	  },
	  {
		"item": "minecraft:obsidian"
	  },
	  {
		"item": "minecraft:obsidian"
	  },
	  {
		"item": "minecraft:obsidian"
	  },
	  {
		"item": "minecraft:obsidian"
	  }
	],
	"results": [
	  {
		"amount": 1000,
		"fluid": "kubejs:molten_obsidian"
	  }
	]
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		  "amount": 500,
		  "fluid": "kubejs:molten_lapis"
	  },
	  {
		"item": "pneumaticcraft:plastic"
	  }
	],
	"results": [
	  {
		"item": "kubejs:blue_plastic"
	  }
	]
  })

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "minecraft:lapis_lazuli"
	},
	"result": [
	  {
		"fluid": "kubejs:molten_lapis",
		"amount": 125
	  }
	],
	"energy": 20000
  })

event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:lapis_lazuli"
	  }
	],
	"results": [
	  {
		"amount": 125,
		"fluid": "kubejs:molten_lapis"
	  }
	]
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		  "amount": 500,
		  "fluid": "minecraft:water"
	  },
	  {
		"item": "utilitix:linked_crystal"
	  },
	  {
		"item": "minecraft:red_mushroom"
	  },
	  {
		"item": "minecraft:red_mushroom"
	  },
	  {
		"item": "minecraft:red_mushroom"
	  }
	],
	"results": [
	  {
		"item": "thermal:redstone_mushroom_spores",
		"count": 4
	  }
	]
  })

  event.remove({type:'exnihilosequentia:sieve'})
  event.remove({type:'exnihilosequentia:crucible'})

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "kubejs:aquamarine"
	},
	"result": [
	  {
		"fluid": "kubejs:starlight",
		"amount": 250
	  }
	],
	"energy": 200000
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "kubejs:aquamarine"
	  }
	],
	"results": [
	  {
		"amount": 250,
		"fluid": "kubejs:starlight"
	  }
	]
  })

  event.remove({output:['exnihilosequentia:unfired_crucible', 'exnihilosequentia:acacia_crucible', 'exnihilosequentia:birch_crucible', 'exnihilosequentia:dark_oak_crucible', 'exnihilosequentia:jungle_crucible', 'exnihilosequentia:mangrove_crucible', 'exnihilosequentia:oak_crucible', 'exnihilosequentia:spruce_crucible']})

event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "tag": "forge:plates/gold"
	},
	"loops": 2,
	"results": [
	  {
		"chance": 1.0,
		"item": "create:precision_mechanism"
	  }
	],
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "create:cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "create:large_cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"tag": "forge:nuggets/iron"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "create:incomplete_precision_mechanism"
	}
  })

  event.remove({id:'botania:pure_daisy/livingwood'})
  event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": "immersiveengineering:treated_wood_horizontal"
	},
	"output": {
	  "name": "botania:livingwood_log"
	}
  })

  event.custom({
	"type": "extendedcrafting:compressor",
	"powerCost": 100000000,
	"inputCount": 32,
	"ingredient": {
	  "item": "kubejs:bloody_mechanism"
	},
	"catalyst": {
	  "item": "ae2:singularity"
	},
	"result": {
	  "item": "kubejs:catal_blood"
	}
  })

  event.remove({output:'extendedcrafting:black_iron_slate'})
  event.custom({
	"type": "extendedcrafting:compressor",
	"powerCost": 100000000,
	"inputCount": 8,
	"ingredient": {
	  "item": "extendedcrafting:black_iron_ingot"
	},
	"catalyst": {
	  "item": "ae2:singularity"
	},
	"result": {
	  "item": "extendedcrafting:black_iron_slate"
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:redstonium_crystal"}
	],
	"pedestalItems": [
	  {"item": {"item": "immersiveengineering:wirecoil_redstone"}},
	  {"item": {"item": "utilitix:linked_crystal"}},
	  {"item": {"tag": "mekanism:enriched/redstone"}},
	  {"item": {"item": "botania:redstone_root"}}
	],
	"output": {
	  "item": "infused_crystals:infused_redstonium_crystal",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:redstonium_crystal"
	},
	"ingredients": [
	  {
		"item": "immersiveengineering:wirecoil_redstone"
	  },
	  {
		"item": "utilitix:linked_crystal"
	  },
	  {
		"tag": "mekanism:enriched/redstone"
	  },
	  {
		"item": "botania:redstone_root"
	  }
	],
	"result": {
	  "item": "infused_crystals:infused_redstonium_crystal",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:emeraldium_crystal"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:lime_dye"}},
	  {"item": {"item": "ftbic:electronic_circuit"}},
	  {"item": {"item": "minecraft:grass"}},
	  {"item": {"item": "minecraft:lily_pad"}}
	],
	"output": {
	  "item": "infused_crystals:infused_emeraldium_crystal",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:emeraldium_crystal"
	},
	"ingredients": [
	  {
		"item": "minecraft:lime_dye"
	  },
	  {
		"item": "ftbic:electronic_circuit"
	  },
	  {
		"item": "minecraft:grass"
	  },
	  {
		"item": "minecraft:lily_pad"
	  }
	],
	"result": {
	  "item": "infused_crystals:infused_emeraldium_crystal",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:block_of_emeraldium"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:lime_dye"}},
	  {"item": {"item": "ftbic:electronic_circuit"}},
	  {"item": {"item": "minecraft:grass"}},
	  {"item": {"item": "minecraft:lily_pad"}}
	],
	"output": {
	  "item": "infused_crystals:block_of_infused_emeraldium",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:block_of_emeraldium"
	},
	"ingredients": [
	  {
		"item": "minecraft:lime_dye"
	  },
	  {
		"item": "ftbic:electronic_circuit"
	  },
	  {
		"item": "minecraft:grass"
	  },
	  {
		"item": "minecraft:lily_pad"
	  }
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_emeraldium",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:coalium_crystal"}
	],
	"pedestalItems": [
	  {"item": {"tag": "forge:coal_coke"}},
	  {"item": {"item": "immersiveengineering:dust_hop_graphite"}},
	  {"item": {"item": "minecraft:stone_button"}},
	  {"item": {"item": "minecraft:cobblestone"}}
	],
	"output": {
	  "item": "infused_crystals:infused_coalium_crystal",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:coalium_crystal"
	},
	"ingredients": [
	  {
		"tag": "forge:coal_coke"
	  },
	  {
		"item": "immersiveengineering:dust_hop_graphite"
	  },
	  {
		"item": "minecraft:stone_button"
	  },
	  {
		"item": "minecraft:cobblestone"
	  }
	],
	"result": {
	  "item": "infused_crystals:infused_coalium_crystal",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:block_of_coalium"}
	],
	"pedestalItems": [
	  {"item": {"tag": "forge:coal_coke"}},
	  {"item": {"item": "immersiveengineering:dust_hop_graphite"}},
	  {"item": {"item": "minecraft:stone_button"}},
	  {"item": {"item": "minecraft:cobblestone"}}
	],
	"output": {
	  "item": "infused_crystals:block_of_infused_coalium",
	  "count": 1
	},
	"sourceCost": 9000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:block_of_coalium"
	},
	"ingredients": [
	  {
		"tag": "forge:coal_coke"
	  },
	  {
		"item": "immersiveengineering:dust_hop_graphite"
	  },
	  {
		"item": "minecraft:stone_button"
	  },
	  {
		"item": "minecraft:cobblestone"
	  }
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_coalium",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:ironium_crystal"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:iron_ingot"}},
	  {"item": {"item": "kubejs:dense_iron_plate"}},
	  {"item": {"item": "immersiveengineering:stick_iron"}},
	  {"item": {"item": "quark:iron_button"}}
	],
	"output": {
	  "item": "infused_crystals:infused_ironium_crystal",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:ironium_crystal"
	},
	"ingredients": [
	  {
		"item": "minecraft:iron_ingot"
	  },
	  {
		"item": "kubejs:dense_iron_plate"
	  },
	  {
		"item": "immersiveengineering:stick_iron"
	  },
	  {
		"item": "quark:iron_button"
	  }
	],
	"result": {
	  "item": "infused_crystals:infused_ironium_crystal",
	  "count": 1
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:block_of_ironium"}
	],
	"pedestalItems": [
	  {"item": {"item": "minecraft:iron_ingot"}},
	  {"item": {"item": "kubejs:dense_iron_plate"}},
	  {"item": {"item": "immersiveengineering:stick_iron"}},
	  {"item": {"item": "quark:iron_button"}}
	],
	"output": {
	  "item": "infused_crystals:block_of_infused_ironium",
	  "count": 1
	},
	"sourceCost": 9000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 5000000,
	"input": {
	  "item": "infused_crystals:block_of_ironium"
	},
	"ingredients": [
	  {
		"item": "minecraft:iron_ingot"
	  },
	  {
		"item": "kubejs:dense_iron_plate"
	  },
	  {
		"item": "immersiveengineering:stick_iron"
	  },
	  {
		"item": "quark:iron_button"
	  }
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_ironium",
	  "count": 1
	}
  })


  event.remove({id:'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

  event.recipes.thermal.smelter('kubejs:slimesteel_ingot', ['#forge:ingots/steel', 'kubejs:blue_slime', 'thermal_extra:soul_sand_dust']).energy(50000)

  event.recipes.thermal.smelter('2x kubejs:iron_aluminum_ingot', ['#forge:ingots/aluminum', '#forge:ingots/iron']).energy(50000)

  event.recipes.thermal.smelter('kubejs:darksteel_ingot', ['#forge:ingots/steel', 'minecraft:obsidian']).energy(50000)

  event.remove({ input: 'mysticalagriculture:rubber_essence' })

  event.custom({
    "input": [
      {
        "item": "kubejs:iron_aluminum_ingot"
      },
      {
        "item": "ironjetpacks:advanced_coil"
      },
      {
        "item": "kubejs:iron_aluminum_ingot"
      },
      {
        "item": "kubejs:basic_capacitor"
      },
      {
        "item": "kubejs:basic_capacitor"
      },
      {
        "item": "kubejs:iron_aluminum_ingot"
      },
      {
        "item": "ironjetpacks:advanced_coil"
      },
      {
        "item": "kubejs:iron_aluminum_ingot"
      }
    ],
    "inputFluid": "{FluidName:\"thermal:redstone\",Amount:500}",
    "processingTime": 60,
    "output": {
      "item": "kubejs:advanced_capacitor",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:redstone"
	  }
	],
	"results": [
	  {
		"amount": 100,
		"fluid": "thermal:redstone"
	  }
	]
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:redstone_block"
	  }
	],
	"results": [
	  {
		"amount": 900,
		"fluid": "thermal:redstone"
	  }
	]
  })

  event.custom({
    "input": [
      {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      {
        "item": "thermalendergy:vibrating_core"
      },
      {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      {
        "item": "kubejs:advanced_capacitor"
      },
      {
        "item": "kubejs:advanced_capacitor"
      },
      {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      {
        "item": "thermalendergy:vibrating_core"
      },
      {
        "item": "extendedcrafting:enhanced_ender_ingot"
      }
    ],
    "inputFluid": "{FluidName:\"integrateddynamics:liquid_chorus\",Amount:500}",
    "processingTime": 60,
    "output": {
      "item": "kubejs:ultimate_capacitor",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"tag": "forge:ingots/iron"
	  },
	  {
		"tag": "forge:ingots/aluminum"
	  }
	],
	"results": [
		{
			"item": "kubejs:iron_aluminum_ingot",
			"count": 2
		}
	]
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"tag": "forge:ingots/iron"
	  },
	  {
		"tag": "forge:dusts/coal"
	  },
	  {
		"item": "minecraft:obsidian"
	  },
	],
	"results": [
		{
			"item": "kubejs:darksteel_ingot",
			"count": 1
		}
	]
  })

event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:flux_infused_ingot_seeds","mysticalagriculture:flux_infused_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:flux_infused_ingot_seeds"},"categories":["tertium"],"growthTicks":1500,"display":{"type":"botanypots:aging","block":"mysticalagriculture:flux_infused_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:flux_infused_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:flux_infused_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:flux_infused_gem_seeds","mysticalagriculture:flux_infused_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:flux_infused_gem_seeds"},"categories":["tertium"],"growthTicks":1500,"display":{"type":"botanypots:aging","block":"mysticalagriculture:flux_infused_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:flux_infused_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:flux_infused_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "evilcraft:dark_gem"
	},
	"result": [
	  {
		"item": "evilcraft:dark_gem_crushed",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "tag": "forge:gems/certus_quartz"
	},
	"result": [
	  {
		"item": "ae2:certus_quartz_dust",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "ae2:sky_stone_block"
	},
	"result": [
	  {
		"item": "ae2:sky_dust",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "ae2:fluix_crystal"
	},
	"result": [
	  {
		"item": "ae2:fluix_dust",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "evilcraft:dark_ore"
	},
	"result": [
	  {
		"item": "evilcraft:dark_gem_crushed",
		"count": 2
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"item":"evilcraft:dark_gem"},"result":{"item":"evilcraft:dark_gem_crushed"},"secondaries":[]})
  
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"evilcraft:dark_gem"}},"output":{"item":"evilcraft:dark_gem_crushed"}})

  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "evilcraft:dark_gem"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 1.0,
      "item": "evilcraft:dark_gem_crushed"
    }
  ]
})

event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"evilcraft:dark_ore"}},"output":{"item":"evilcraft:dark_gem_crushed"}})

event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "item": "evilcraft:dark_ore"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 2,
		"item": "evilcraft:dark_gem_crushed"
	  }
	]
  })

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "item": "evilcraft:dark_gem"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "evilcraft:dark_gem_crushed"
	  }
	]
  })

  event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "redstone_arsenal:flux_obsidian_rod"
	},
	"transitionalItem": {
	  "item": "kubejs:in_rf_coil"
	},
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "immersiveengineering:component_electronic"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "thermal:turbo_servo_attachment"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  },
	  {
		"type": "create:filling",
		"ingredients": [
		  {"item": "create:incomplete_precision_mechanism"},
		  {"amount": 500,"fluid": "thermal:redstone","nbt": {}}],
		  "results": [{"item": "create:incomplete_precision_mechanism"}]}
	],
	"results": [
	  {
		"item": "thermal:rf_coil"
	  }
	],
	"loops": 1
  })

  event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "kubejs:starmetal_ore"
	},
	"transitionalItem": {
	  "item": "kubejs:in_starmetal_ingot"
	},
	"sequence": [
		{
			"type": "create:filling",
			"ingredients": [
			  {"item": "create:incomplete_precision_mechanism"},
			  {"amount": 1000,"fluid": "kubejs:mana","nbt": {}}],
			  "results": [{"item": "create:incomplete_precision_mechanism"}]},
		{
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "kubejs:single_use_ingot_cast"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  }
	],
	"results": [
	  {
		"item": "kubejs:starmetal_ingot"
	  }
	],
	"loops": 1
  })

  event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "create:precision_mechanism"
	},
	"transitionalItem": {
	  "item": "kubejs:in_bloody_mechanism"
	},
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "evilcraft:blood_infusion_core"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  },
	  {
		"type": "create:filling",
		"ingredients": [
		  {"item": "create:incomplete_precision_mechanism"},
		  {"amount": 1000,"fluid": "evilcraft:blood","nbt": {}}],
		  "results": [{"item": "create:incomplete_precision_mechanism"}]},
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  },
		  {
			"item": "evilcraft:hardened_blood_shard"
		  }
		],
		"results": [
		  {
			"item": "create:incomplete_precision_mechanism"
		  }
		]
	  }
	],
	"results": [
	  {
		"item": "kubejs:bloody_mechanism"
	  }
	],
	"loops": 3
  })



  event.remove({id:'botania:mana_infusion/manasteel'})
  event.custom({
	"type": "botania:mana_infusion",
	"input": {
	  "item": "kubejs:slimesteel_ingot"
	},
	"mana": 3000,
	"output": {
	  "item": "botania:manasteel_ingot"
	}
  })

  event.remove({id:'botania:mana_infusion/manasteel_block'})
  event.custom({
	"type": "botania:mana_infusion",
	"input": {
	  "item": "kubejs:slimesteel_block"
	},
	"mana": 27000,
	"output": {
	  "item": "botania:manasteel_block"
	}
  })

  event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "kubejs:blue_slime"
	  },
	  {
		"tag": "forge:ingots/steel"
	  },
	  {
		  "item": "thermal_extra:soul_sand_dust"
	  }
	],
	"results": [
		{
			"item": "kubejs:slimesteel_ingot"
		}
	]
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "minecraft:coal"
	},
	"result": [
	  {
		"item": "mekanism:dust_coal",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "mekanism:ingot_osmium"
	},
	"result": [
	  {
		"item": "mekanism:dust_osmium",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.recipes.immersiveengineeringMetalPress('kubejs:endsteel_gear', '4x kubejs:endsteel_ingot', 'immersiveengineering:mold_gear')
  event.recipes.immersiveengineeringMetalPress('kubejs:darksteel_gear', '4x kubejs:darksteel_ingot', 'immersiveengineering:mold_gear')
  event.recipes.immersiveengineeringMetalPress('kubejs:osmium_gear', '4x mekanism:ingot_osmium', 'immersiveengineering:mold_gear')
  event.recipes.immersiveengineeringMetalPress('#forge:wires/enderium', '#forge:ingots/enderium', 'immersiveengineering:mold_wire')

event.custom({
	"type": "ftbic:extruding",
	"inputItems": [
	  {
		"count": 4,
		"ingredient": {
		  "item": "kubejs:osmium_plate"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "kubejs:osmium_gear"
	  }
	]
  })


  event.remove({output:'mysticalagriculture:infusion_pedestal'})
  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "spirit:pedestal"
	},
	"ingredients": [
	  {
		"item": "kubejs:uwuterium_ingot"
	  },
	  {
		"item": "kubejs:slate_3"
	  },
	  {
		"item": "kubejs:uwuterium_ingot"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  },
	  {
		"item": "kubejs:stardust"
	  },
	  {
		"tag": "forge:ingots/the_ultimate"
	  },
	  {
		"item": "kubejs:stardust"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  }
	],
	"result": {
	  "item": "mysticalagriculture:infusion_pedestal",
	  "count": 1
	}
  })

  event.remove({output:'mysticalagriculture:infusion_altar'})
  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "extendedcrafting:crafting_core"
	},
	"ingredients": [
	  {
		"item": "kubejs:stacium_ingot"
	  },
	  {
		"item": "kubejs:solus_ingot"
	  },
	  {
		"item": "kubejs:slate_uwuterium"
	  },
	  {
		"item": "kubejs:terrarium_ingot"
	  },
	  {
		"item": "kubejs:lunaria_ingot"
	  },
	  {
		"item": "kubejs:slate_uwuterium"
	  }
	],
	"result": {
	  "item": "mysticalagriculture:infusion_altar",
	  "count": 1
	}
  })

  event.remove({output:'mysticalagriculture:awakening_altar'})
  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "mysticalagriculture:infusion_altar"
	},
	"ingredients": [
	  {
		"item": "kubejs:de_awakened_core"
	  },
	  {
		"item": "kubejs:de_awakened_core"
	  },
	  {
		"item": "kubejs:de_awakened_core"
	  },
	  {
		"item": "kubejs:de_awakened_core"
	  }
	],
	"result": {
	  "item": "mysticalagriculture:awakening_altar",
	  "count": 1
	}
  })

  event.remove({output:'mysticalagriculture:awakening_pedestal'})
  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "mysticalagriculture:infusion_pedestal"
	},
	"ingredients": [
	  {
		"item": "kubejs:de_wyvern_core"
	  },
	  {
		"item": "kubejs:de_wyvern_core"
	  },
	  {
		"item": "kubejs:de_wyvern_core"
	  },
	  {
		"item": "kubejs:de_wyvern_core"
	  }
	],
	"result": {
	  "item": "mysticalagriculture:awakening_pedestal",
	  "count": 1
	}
  })

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "mysticalagriculture:supremium_ingot"
	},
	"result": [
	  {
		"fluid": "mysticalagradditions:molten_supremium",
		"amount": 144
	  }
	],
	"energy": 200000
  })

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "mysticalagriculture:supremium_ingot_block"
	},
	"result": [
	  {
		"fluid": "mysticalagradditions:molten_supremium",
		"amount": 1296
	  }
	],
	"energy": 200000
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "mysticalagriculture:supremium_ingot"
	  }
	],
	"results": [
	  {
		"amount": 144,
		"fluid": "mysticalagradditions:molten_supremium"
	  }
	]
  })

  event.remove({id:'productivebees:stone_chip_rich_soil'})
  event.remove({id:'productivebees:stone_chip_block_hive_rich_soil'})

  event.remove({id:'ae2:misc/vanilla_daylight_detector'})
  event.remove({id:'minecraft:comparator'})

event.custom({"type":"immersiveengineering:alloy","input0":{"tag":"forge:ingots/steel"},"input1":{"item":"minecraft:obsidian"},"result":{"base_ingredient":{"item":"kubejs:darksteel_ingot"},"count":1},"time":200})

event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "infused_crystals:block_of_redstonium"}
	],
	"pedestalItems": [
	  {"item": {"item": "immersiveengineering:wirecoil_redstone"}},
	  {"item": {"item": "utilitix:linked_crystal"}},
	  {"item": {"tag": "mekanism:enriched/redstone"}},
	  {"item": {"item": "botania:redstone_root"}}
	],
	"output": {
	  "item": "infused_crystals:block_of_infused_redstonium",
	  "count": 1
	},
	"sourceCost": 1000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 500000,
	"input": {
	  "item": "infused_crystals:block_of_redstonium"
	},
	"ingredients": [
	  {
		"item": "immersiveengineering:wirecoil_redstone"
	  },
	  {
		"item": "utilitix:linked_crystal"
	  },
	  {
		"tag": "mekanism:enriched/redstone"
	  },
	  {
		"item": "botania:redstone_root"
	  }
	],
	"result": {
	  "item": "infused_crystals:block_of_infused_redstonium",
	  "count": 1
	}
  })

event.custom({
	"type": "thermal:press",
	"ingredient": {
	  "tag": "forge:ingots/brass"
	},
	"result": [
	  {
		"item": "create:brass_sheet"
	  }
	]
  })

  event.remove({id:'minecraft:cake'})
  event.remove({id:'occultism:crushing/obsidian_dust'})
  event.remove({id:'ftbic:macerating/obsidian_dust'})

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "item": "minecraft:obsidian"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "mekanism:dust_obsidian"
	  }
	]
  })

  event.custom({
	"type": "occultism:crushing",
	"ingredient": {
	  "tag": "forge:obsidian"
	},
	"result": {
	  "item": "mekanism:dust_obsidian",
	  "count": 1
	},
	"crushing_time": 400,
	"ignore_crushing_multiplier": true
  })

  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:obsidian"}},"output":{"item":"mekanism:dust_obsidian"}})

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "tag": "forge:obsidian"
	},
	"result": [
	  {
		"item": "mekanism:dust_obsidian",
		"count": 2
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:obsidian"}},"output":{"item":"mekanism:dust_obsidian", "count": 4}})

  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:obsidian"},"result":{"item":"mekanism:dust_obsidian", "count": 2},"secondaries":[]})

  event.custom({
	"type": "create:crushing",
	"ingredients": [
	  {
		"tag": "forge:obsidian"
	  }
	],
	"processingTime": 250,
	"results": [
	  {
		"chance": 1.0,
		"item": "mekanism:dust_obsidian"
	  }
	]
  })

  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"tag": "forge:obsidian"
	  }
	],
	"processingTime": 50,
	"results": [
	  {
		"count": 1,
		"item": "mekanism:dust_obsidian"
	  }
	]
  })

  event.remove({id:'mekanism:processing/emerald/to_dust'})
  event.remove({id:'ftbic:macerating/gems/diamond_to_dust'})
  event.remove({id:'ftbic:macerating/ingots/tin_to_dust'})
  event.remove({id:'ftbic:macerating/raw_materials/tin_to_dust'})
  event.remove({id:'ftbic:macerating/ores/tin_to_dust'})

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:ingots/tin"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "thermal:tin_dust"
	  }
	]
  })

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:raw_materials/tin"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 2,
		"item": "thermal:tin_dust"
	  }
	]
  })

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:ores/tin"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 2,
		"item": "thermal:tin_dust"
	  }
	]
  })

  event.remove({id:'ftbic:macerating/ender_dust'})

event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "minecraft:ender_pearl"
	},
	"result": [
	  {
		"item": "ae2:ender_dust",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "item": "minecraft:ender_pearl"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "ae2:ender_dust"
	  }
	]
  })

event.custom({
	"type": "minecraft:crafting_shapeless",
	"ingredients": [
	  {
		"item": "minecraft:ender_pearl"
	  },
	  {
		"item": "thermal:earth_charge"
	  }
	],
	"result": {
	  "count": 1,
	  "item": "ae2:ender_dust"
	}
  })

  event.remove({id:'thermal:machines/pulverizer/pulverizer_ender_pearl'})
  event.remove({id:'thermal:earth_charge/ender_pearl_dust_from_ender_pearl'})

  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:ender_pearl"}},"output":{"item":"ae2:ender_dust"}})

  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "minecraft:ender_pearl"
	  }
	],
	"processingTime": 50,
	"results": [
	  {
		"count": 1,
		"item": "ae2:ender_dust"
	  }
	]
  })

  event.custom({
	"type": "create:crushing",
	"ingredients": [
	  {
		"item": "minecraft:ender_pearl"
	  }
	],
	"processingTime": 250,
	"results": [
	  {
		"chance": 1.0,
		"item": "ae2:ender_dust"
	  }
	]
  })

  event.replaceInput({}, '#forge:dusts/obsidian', 'mekanism:dust_obsidian')
  event.replaceOutput({}, '#forge:dusts/obsidian', 'mekanism:dust_obsidian')

event.remove({id:'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'})
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:diamond"},"itemInput":{"ingredient":{"item":"mekanism:dust_obsidian"}},"output":{"item":"mekanism:dust_refined_obsidian"}})

event.remove({id:'mekanism:combining/obsidian'})
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"tag":"forge:cobblestone/deepslate"}},"mainInput":{"amount":4,"ingredient":{"item":"mekanism:dust_obsidian"}},"output":{"item":"minecraft:obsidian"}})

event.remove({id:'ftbic:shaped/enderium_ingot'})
event.remove({id:'ftbic:shaped/enderium_dust'})
event.remove({id:'ftbic:shaped/enderium_dust_2'})

event.remove({output:'projecte:philosophers_stone'})
event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "  ABA  ",
	  " ACDCA ",
	  "ACEFECA",
	  "BGHIHJB",
	  "ACEFECA",
	  " ACKCA ",
	  "  ABA  "
	],
	"key": {
	  "A": {
		"item": "kubejs:awakened_draconium_ingot"
	  },
	  "B": {
		"item": "kubejs:awakened_draconium_block"
	  },
	  "C": {
		"item": "extendedcrafting:the_ultimate_component"
	  },
	  "D": {
		"item": "kubejs:stacium_ingot"
	  },
	  "E": {
		"item": "kubejs:de_awakened_core"
	  },
	  "F": {
		"item": "kubejs:uwuterium_processor"
	  },
	  "G": {
		"item": "kubejs:solus_ingot"
	  },
	  "H": {
		"item": "kubejs:ultimate_capacitor"
	  },
	  "I": {
		"item": "kubejs:slate_uwuterium"
	  },
	  "J": {
		"item": "kubejs:terrarium_ingot"
	  },
	  "K": {
		"item": "kubejs:lunaria_ingot"
	  }
	},
	"result": {
	  "item": "projecte:philosophers_stone"
	}
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "superheated",
	"ingredients": [
	  {
		  "amount": 1000,
		  "fluid": "kubejs:starlight"
	  },
	  {
		"item": "createaddition:electric_motor",
		"count": 16
	  },
	  {
		"item": "kubejs:catal_ender"
	  },
	  {
		"item": "kubejs:devilish_horn"
	  },
	  {
		  "item": "kubejs:madeline_strawberry"
	  },
	  {
		"item": "mysticalagradditions:creative_essence",
		"count": 8
	  },
	  {
		"item": "extendedcrafting:ultimate_singularity"
	  }
	],
	"results": [
		{
			"item": "create:creative_motor"
		}
	]
  })

  event.custom({
	"type": "extendedcrafting:compressor",
	"powerCost": 100000000,
	"inputCount": 8,
	"ingredient": {
	  "item": "mysticalagradditions:insanium_essence"
	},
	"catalyst": {
	  "item": "kubejs:de_awakened_core"
	},
	"result": {
	  "item": "mysticalagradditions:creative_essence"
	}
  })

  event.custom({
	"type": "ars_nouveau:enchanting_apparatus",
	"reagent": [
	  {"item": "ars_nouveau:source_jar"}
	],
	"pedestalItems": [
	  {"item": {"item": "kubejs:madeline_strawberry"}},
	  {"item": {"item": "mysticalagradditions:creative_essence"}},
	  {"item": {"item": "kubejs:devilish_horn"}},
	  {"item": {"item": "ars_nouveau:glyph_hex"}},
	  {"item": {"item": "kubejs:uwuterium_pearl"}},
	  {"item": {"item": "ars_nouveau:thread_magic_capacity"}},
	  {"item": {"item": "extendedcrafting:ultimate_singularity"}}
	],
	"output": {
	  "item": "ars_nouveau:creative_source_jar"
	},
	"sourceCost": 10000,
	"keepNbtOfReagent": false
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "superheated",
	"ingredients": [
	  {
		  "amount": 576,
		  "fluid": "mysticalagradditions:molten_supremium"
	  },
	  {
		"item": "thermal:strawberry"
	  },
	  {
		"item": "kubejs:slate_uwuterium"
	  },
	  {
		"item": "kubejs:devilish_horn"
	  },
	  {
		  "item": "mysticalagriculture:awakened_supremium_essence"
	  },
	  {
		"item": "extendedcrafting:the_ultimate_ingot"
	  }
	],
	"results": [
		{
			"item": "kubejs:madeline_strawberry"
		}
	]
  })

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('mekanism:ultimate_energy_cube').toJson(),
	  Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
	  Ingredient.of('mysticalagradditions:creative_essence').toJson(),
	  Ingredient.of('kubejs:devilish_horn').toJson(),
	  Ingredient.of('kubejs:madeline_strawberry').toJson(),
	  Ingredient.of('powah:reactor_nitro').toJson()
    ],
    energy: '500000000',
    result:     Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}').toJson()
})

event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "minecraft:wheat"
		},
		{
			"item": "minecraft:wheat"
		},
		{
			"item": "minecraft:wheat"
		}
	],
	"block_in": {
		"blocks": ["minecraft:water"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "farmersdelight:wheat_dough",
			"count": 3
		}
	]
})

event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		  "amount": 1000,
		  "fluid": "thermal:redstone"
	  },
	  {
		"item": "minecraft:potato"
	  }
	],
	"results": [
		{
			"item": "thermal:rf_potato"
		}
	]
  })

event.remove({output:'extendedcrafting:ultimate_singularity'})
event.custom({
	"type": "extendedcrafting:shapeless_table",
	"ingredients": [
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:gold\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:livingwood\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:lead\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:copper\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:bronze\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:iron\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:emerald\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:coal\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:diamond\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:invar\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:electrum\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:steel\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:glowstone\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:manasteel\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:tin\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:redstone\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:silver\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:nickel\"}"
	  },
	  {
		"type": "forge:nbt",
		"item": "extendedcrafting:singularity",
		"count": 1,
		"nbt": "{Id:\"extendedcrafting:aluminum\"}"
	  },
	  {
		"item": "kubejs:madeline_strawberry"
	  }
	],
	"result": {
	  "item": "extendedcrafting:ultimate_singularity"
	}
  })

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "silentgear:blaze_gold_ingot"
	},
	"result": [
	  {
		"item": "silentgear:blaze_gold_dust",
		"count": 1
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"item":"silentgear:blaze_gold_ingot"},"result":{"item":"silentgear:blaze_gold_dust"},"secondaries":[]})
  
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"silentgear:blaze_gold_ingot"}},"output":{"item":"silentgear:blaze_gold_dust"}})

  event.custom({
	"type": "create:crushing",
	"ingredients": [
	  {
		"item": "silentgear:blaze_gold_ingot"
	  }
	],
	"processingTime": 250,
	"results": [
	  {
		"chance": 1.0,
		"item": "silentgear:blaze_gold_dust"
	  }
	]
  })

  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "silentgear:blaze_gold_ingot"
	  }
	],
	"processingTime": 50,
	"results": [
	  {
		"count": 1,
		"item": "silentgear:blaze_gold_dust"
	  }
	]
  })

  event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "item": "silentgear:blaze_gold_ingot"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "silentgear:blaze_gold_dust"
	  }
	]
  })

event.remove({output:'industrialforegoing:machine_frame_simple'})
event.custom({
	"input": [
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "industrialforegoing:machine_frame/pity"
	  },
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "forge:ingots/darksteel"
	  },
	  {
		"tag": "forge:ingots/darksteel"
	  },
	  {
		"item": "kubejs:basic_capacitor"
	  },
	  {
		"tag": "forge:gears/electrum"
	  },
	  {
		"item": "kubejs:basic_capacitor"
	  }
	],
	"inputFluid": "{FluidName:\"kubejs:molten_steel\",Amount:576}",
	"processingTime": 300,
	"output": {
	  "item": "industrialforegoing:machine_frame_simple",
	  "count": 1
	},
	"type": "industrialforegoing:dissolution_chamber"
  })

event.remove({output:'industrialforegoing:machine_frame_advanced'})
event.custom({
	"input": [
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "industrialforegoing:machine_frame/simple"
	  },
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "forge:ingots/melodium"
	  },
	  {
		"tag": "forge:ingots/melodium"
	  },
	  {
		"item": "kubejs:advanced_capacitor"
	  },
	  {
		"tag": "forge:gears/endsteel"
	  },
	  {
		"item": "kubejs:advanced_capacitor"
	  }
	],
	"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
	"processingTime": 300,
	"output": {
	  "item": "industrialforegoing:machine_frame_advanced",
	  "count": 1
	},
	"type": "industrialforegoing:dissolution_chamber"
  })

event.remove({output:'industrialforegoing:machine_frame_supreme'})
event.custom({
	"input": [
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "industrialforegoing:machine_frame/advanced"
	  },
	  {
		"tag": "forge:plastic"
	  },
	  {
		"tag": "forge:ingots/dragonsteel"
	  },
	  {
		"tag": "forge:ingots/dragonsteel"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  },
	  {
		"tag": "forge:gears/stellarium"
	  },
	  {
		"item": "kubejs:ultimate_capacitor"
	  }
	],
	"inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:135}",
	"processingTime": 300,
	"output": {
	  "item": "industrialforegoing:machine_frame_supreme",
	  "count": 1
	},
	"type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({output:'projecte:condenser_mk1'})
  event.remove({output:'projecte:condenser_mk2'})

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('projecte:alchemical_chest').toJson(),
	  Ingredient.of('mekanism:ultimate_induction_provider').toJson(),
	  Ingredient.of('kubejs:lunaria_ingot').toJson(),
	  Ingredient.of('kubejs:de_wyvern_core').toJson(),
	  Ingredient.of('kubejs:ultimate_capacitor').toJson(),
    ],
    energy: '50000000',
    result: Item.of('projecte:condenser_mk1').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('projecte:condenser_mk1').toJson(),
	  Ingredient.of('kubejs:slate_uwuterium').toJson(),
	  Ingredient.of('extendedcrafting:the_ultimate_catalyst').toJson(),
	  Ingredient.of('kubejs:catal_blood').toJson(),
	  Ingredient.of('thermalendergy:endergy_upgrade_3').toJson(),
    ],
    energy: '50000000',
    result: Item.of('projecte:condenser_mk2').toJson()
})

event.custom({
	"type": "ftbic:rolling",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:ingots/osmium"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "kubejs:osmium_plate"
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:ingots/osmium"
	  }
	],
	"results": [
	  {
		"item": "kubejs:osmium_plate",
		"count": 1
	  }
	]
  })

  event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "create:blaze_cake_base"
	},
	"loops": 32,
	"results": [
	  {
		"chance": 1.0,
		"item": "create:creative_blaze_cake"
	  }
	],
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"item": "mysticalagradditions:creative_essence"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"item": "reliquary:molten_core"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"item": "create:blaze_cake"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"item": "create:blaze_cake"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"item": "create:blaze_cake"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  },
	  {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  },
		  {
			"fluid": "kubejs:stacia_essence",
			"nbt": {},
			"amount": 500
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_creative_blaze_cake"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "kubejs:in_creative_blaze_cake"
	}
  })

  event.remove({id:'ars_nouveau:imbuement_water_essence'})



//event.remove({output:''})
event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/iron",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"item": "immersiveengineering:stick_iron",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/electrum",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/electrum",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"item": "minecraft:emerald",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/emerald",
		"count": 2
	  }
	],
	"energy": 400
  })


  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/enderium",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/enderium",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/iridium",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/iridium",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/copper",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/copper",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/lead",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/lead",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/tin",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/tin",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/bronze",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/bronze",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/gold",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/gold",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/aluminum",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/aluminum",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/brass",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/brass",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/uranium",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/uranium",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/steel",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/steel",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/diamond",
		"count": 1
	  },
	  {
		"item": "thermal:chiller_rod_cast"
	  }
	],
	"result": [
	  {
		"tag": "forge:rods/diamond",
		"count": 2
	  }
	],
	"energy": 400
  })

  event.recipes.immersiveengineeringMetalPress('2x #forge:rods/iridium', '#forge:ingots/iridium', 'immersiveengineering:mold_rod')
  event.recipes.immersiveengineeringMetalPress('2x #forge:rods/enderium', '#forge:ingots/enderium', 'immersiveengineering:mold_rod')
  event.recipes.immersiveengineeringMetalPress('2x #forge:rods/diamond', '#forge:ingots/diamond', 'immersiveengineering:mold_rod')
  event.recipes.immersiveengineeringMetalPress('2x #forge:rods/emerald', '#forge:ingots/emerald', 'immersiveengineering:mold_rod')

  event.custom({
	"type": "ftbic:rolling",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:ingots/electrum"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "createaddition:electrum_rod",
		"count": 2
	  }
	]
  })

  event.custom({
	"type": "ftbic:rolling",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:ingots/brass"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "createaddition:brass_rod",
		"count": 2
	  }
	]
  })

  event.recipes.immersiveengineeringMetalPress('#forge:gears/prismalium', '4x #forge:ingots/prismalium', 'immersiveengineering:mold_gear')
  event.recipes.immersiveengineeringMetalPress('#forge:gears/melodium', '4x #forge:ingots/melodium', 'immersiveengineering:mold_gear')
  event.recipes.immersiveengineeringMetalPress('#forge:gears/stellarium', '4x #forge:ingots/stellarium', 'immersiveengineering:mold_gear')

  event.custom({
	"type": "ftbic:extruding",
	"inputItems": [
	  {
		"count": 4,
		"ingredient": {
		  "tag": "forge:ingots/prismalium"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "thermalendergy:prismalium_gear"
	  }
	]
  })

  event.custom({
	"type": "ftbic:extruding",
	"inputItems": [
	  {
		"count": 4,
		"ingredient": {
		  "tag": "forge:ingots/melodium"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "thermalendergy:melodium_gear"
	  }
	]
  })

  event.custom({
	"type": "ftbic:extruding",
	"inputItems": [
	  {
		"count": 4,
		"ingredient": {
		  "tag": "forge:ingots/stellarium"
		}
	  }
	],
	"outputItems": [
	  {
		"item": "thermalendergy:stellarium_gear"
	  }
	]
  })

  event.remove({id:'occultism:miner/ores/niter_ore'})
  event.remove({id:'occultism:miner/ores/prosperity_ore'})
  event.remove({id:'occultism:miner/ores/inferium_ore'})

  event.replaceInput({}, 'ae2:silicon', 'refinedstorage:silicon')
  event.replaceOutput({}, 'ae2:silicon', 'refinedstorage:silicon')

  event.replaceInput({}, '#forge:silicon', 'refinedstorage:silicon')
  event.replaceOutput({}, '#forge:silicon', 'refinedstorage:silicon')

  event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:silicon"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "item": "refinedstorage:silicon"
            },
            "chance": 50
        },
        {
            "item": {
                "tag": "forge:wax"
            }
        },
        {
            "fluid": {
                "fluid": "productivebees:honey"
            },
            "amount": 50
        }
    ],
    "conditions": [
        {
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "item": "refinedstorage:silicon"
            }
        }
    ]
})

event.remove({id:'productivebees:centrifuge/ae2/honeycomb_silicon'})
event.remove({id:'occultism:crushing/azure_silver_dust_from_raw'})

event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:raw_materials/azure_silver"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/azure_silver"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:raw_materials/azure_silver"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/azure_silver"
	}
  })

  event.remove({id:'occultism:crushing/iesnium_dust'})
  event.remove({id:'occultism:crushing/iesnium_dust_from_ingot'})
  event.remove({id:'occultism:crushing/iesnium_dust_from_raw'})

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ores/iesnium"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/iesnium"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:ores/iesnium"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/iesnium"
	}
  })

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ingots/iesnium"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/iesnium"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": true,
	"ingredient": {
	  "tag": "forge:ingots/iesnium"
	},
	"result": {
	  "count": 1,
	  "tag": "forge:dusts/iesnium"
	}
  })

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:raw_materials/iesnium"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/iesnium"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:raw_materials/iesnium"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/iesnium"
	}
  })

  event.remove({id:'occultism:crushing/crimson_iron_dust'})
  event.remove({id:'occultism:crushing/crimson_iron_dust_from_ingot'})
  event.remove({id:'occultism:crushing/crimson_iron_dust_from_raw'})

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ores/crimson_iron"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/crimson_iron"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:ores/crimson_iron"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/crimson_iron"
	}
  })

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ingots/crimson_iron"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/crimson_iron"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": true,
	"ingredient": {
	  "tag": "forge:ingots/crimson_iron"
	},
	"result": {
	  "count": 1,
	  "tag": "forge:dusts/crimson_iron"
	}
  })

  event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:raw_materials/crimson_iron"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/crimson_iron"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:raw_materials/crimson_iron"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/crimson_iron"
	}
  })

event.remove({output:'angelring:angel_ring'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "A     A",
	  "BA   AB",
	  "  CCC  ",
	  " CDEDC ",
	  " CFGFC ",
	  " CDHDC ",
	  "  CCC  "
	],
	"key": {
	  "A": {
		"item": "botania:tornado_rod"
	  },
	  "B": {
		"type": "forge:nbt",
		"item": "cyclic:charm_world",
		"count": 1,
		"nbt": "{Damage:0}"
	  },
	  "C": {
		"item": "kubejs:infused_goldium_block"
	  },
	  "D": {
		"item": "kubejs:aerotheum_dust"
	  },
	  "E": {
		"item": "extendedcrafting:flux_star"
	  },
	  "F": {
		"item": "kubejs:devilish_horn"
	  },
	  "G": {
		"type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:emerald\",Throttle:1.0d}"
	  },
	  "H": {
		"item": "mysticalagriculture:flight_augment"
	  }
	},
	"result": {
	  "item": "angelring:angel_ring"
	}
  })

  event.custom({
	"type": "ad_astra:compressing",
	"input": {
	  "item": "minecraft:quartz"
	},
	"output": {
	  "id": "kubejs:plate_quartz",
	  "count": 1
	},
	"cookTime": 200
	})

	event.custom({
	"type": "ad_astra:compressing",
	"input": {
	 "item": "minecraft:lapis_lazuli"
	},
	"output": {
	  "id": "kubejs:plate_lapis",
	  "count": 1
	},
	"cookTime": 200
	})

//

	event.custom({
	"type": "ad_astra:compressing",
	"input": {
	"item": "minecraft:emerald"
		},
	"output": {
	"id": "kubejs:plate_emerald",
	"count": 1
	},
	"cookTime": 200
	})

event.custom({
"type": "ad_astra:compressing",
"input": {
"item": "minecraft:diamond"
},
"output": {
"id": "kubejs:plate_diamond",
"count": 1
},
"cookTime": 200
})

event.custom({
	"type": "ad_astra:compressing",
	"input": {
	"item": "kubejs:darksteel_ingot"
	},
	"output": {
	"id": "kubejs:plate_darksteel",
	"count": 1
	},
	"cookTime": 200
	})

	event.custom({
		"type": "ad_astra:compressing",
		"input": {
		"item": "kubejs:endsteel_ingot"
		},
		"output": {
		"id": "kubejs:plate_endsteel",
		"count": 1
		},
		"cookTime": 200
	})

	event.custom({
		"type": "ad_astra:compressing",
		"input": {
		"tag": "forge:ingots/brass"
		},
		"output": {
		"id": "create:brass_sheet",
		"count": 1
		},
		"cookTime": 200
	})

	event.custom({
		"type": "ad_astra:compressing",
		"input": {
		"tag": "forge:ingots/zinc"
		},
		"output": {
		"id": "createaddition:zinc_sheet",
		"count": 1
		},
		"cookTime": 200
	})

	event.custom({
		"type": "ad_astra:compressing",
		"input": {
		"tag": "forge:ingots/iridium"
		},
		"output": {
		"id": "ftbic:iridium_plate",
		"count": 1
		},
		"cookTime": 200
	})

	event.recipes.immersiveengineeringMetalPress('ftbic:iridium_plate', '#forge:ingots/iridium', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('#forge:plates/zinc', '#forge:ingots/zinc', 'immersiveengineering:mold_plate')

	event.custom({
		"type": "ftbic:rolling",
		"inputItems": [
		  {
			"count": 1,
			"ingredient": {
			  "tag": "forge:ingots/zinc"
			}
		  }
		],
		"outputItems": [
		  {
			"item": "createaddition:zinc_sheet",
			"count": 2
		  }
		]
	  })

	event.custom({
		"type": "thermal:press",
		"ingredient": {
		  "tag": "forge:ingots/zinc"
		},
		"result": [
		  {
			"item": "createaddition:zinc_sheet"
		  }
		]
	})

//

event.remove({id:'create:crushing/obsidian'})
event.remove({id:'mekanism:processing/quartz/to_dust'})
event.remove({id:'integrateddynamics:squeezer/ore/dust_obsidian'})
event.remove({id:'integrateddynamics:mechanical_squeezer/ore/dust_obsidian'})
event.remove({id:'productivebees:centrifuge/honeycomb_obsidian_dust'})
event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:obsidian"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "item": "mekanism:dust_obsidian"
            },
            "min": 1,
            "max": 5,
            "chance": 50
        },
        {
            "item": {
                "tag": "forge:wax"
            }
        },
        {
            "fluid": {
                "fluid": "productivebees:honey"
            },
            "amount": 50
        }
    ],
    "conditions": [
        {
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "item": "mekanism:dust_obsidian"
            }
        }
    ]
})

event.custom({
	"type": "integrateddynamics:squeezer",
	"item": {
		"tag": "forge:obsidian",
	},
	"result": {
	  "items": [
		{
		  "item": "mekanism:dust_obsidian",
		  "count": 2
		}
	  ]
	}
  })
  
  event.custom({
	"type": "integrateddynamics:mechanical_squeezer",
	"item": {
	  "tag": "forge:obsidian",
	},
	"result": {
	  "items": [
		{
		  "item": "mekanism:dust_obsidian",
		  "count": 4
		}
	  ]
	},
	"duration": 40
  })

  event.custom({
	"type": "create:crushing",
	"ingredients": [
	  {
		"tag": "forge:ingots/steel"
	  }
	],
	"processingTime": 250,
	"results": [
	  {
		"chance": 1.0,
		"tag": "forge:dusts/steel"
	  }
	]
  })
  event.remove({id:'createaddition:compat/immersiveengineering/crushing/steel_ingot'})
  event.remove({id:'mekanism:processing/steel/ingot_to_dust'})
  event.remove({id:'mekanism:processing/steel/enriched_iron_to_dust'})

  event.replaceInput({}, 'mekanism:dust_steel', 'thermal:steel_dust')
  event.replaceOutput({}, 'mekanism:dust_steel', 'thermal:steel_dust')
  event.replaceInput({}, '#forge:dusts/steel', 'thermal:steel_dust')
  event.replaceOutput({}, '#forge:dusts/steel', 'thermal:steel_dust')

  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/steel"}},"output":{"item":"thermal:steel_dust"}})

  event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:carbon"},"itemInput":{"ingredient":{"item":"mekanism:enriched_iron"}},"output":{"item":"thermal:steel_dust"}})


  event.remove({id:'powah:energizing/energized_steel'})
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('#forge:ingots/steel').toJson(),
	  Ingredient.of('#forge:ingots/electrum').toJson()
    ],
    energy: '40000',
    result: Item.of('2x powah:steel_energized').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('#forge:storage_blocks/steel').toJson(),
	  Ingredient.of('#forge:storage_blocks/electrum').toJson()
    ],
    energy: '350000',
    result: Item.of('2x powah:energized_steel_block').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('botania:blaze_block').toJson()
    ],
    energy: '800000',
    result: Item.of('powah:blazing_crystal_block').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('#forge:storage_blocks/diamond').toJson()
    ],
    energy: '2500000',
    result: Item.of('powah:niotic_crystal_block').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('#forge:storage_blocks/emerald').toJson()
    ],
    energy: '8500000',
    result: Item.of('powah:spirited_crystal_block').toJson()
})

event.remove({id:'thermal:machines/refinery/refinery_resin'})
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
	  "fluid": "thermal:resin",
	  "amount": 200
	},
	"result": [
	  {
		"fluid": "thermal:tree_oil",
		"amount": 100
	  },
	  {
		"item": "thermal:rosin"
	  }
	],
	"energy": 4000
  })

  event.remove({mod:'botanypotstiers'})

  event.remove({type:'mekanism:combining'})

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "ars_nouveau:blank_parchment"
	},
	"ingredients": [
	  {
		"item": "ars_nouveau:earth_essence"
	  },
	  {
		"item": "minecraft:grindstone"
	  },
	  {
		"item": "create:mechanical_piston"
	  }
	],
	"result": {
	  "item": "ars_nouveau:glyph_crush",
	  "count": 1
	}
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:end_stone"
	  },
	  {
		"item": "kubejs:darksteel_ingot"
	  },
	  {
	    "item": "minecraft:obsidian"
	  }
	],
	"results": [
	{
		"item": "kubejs:endsteel_ingot"
	}
	]
  })

  event.custom({
    "input": [
      {
        "tag": "forge:gears/invar"
      },
      {
        "item": "botanypots:terracotta_botany_pot"
      },
      {
        "tag": "forge:gears/invar"
      },
      {
        "item": "infused_crystals:block_of_infused_ironium"
      },
      {
        "item": "infused_crystals:block_of_infused_ironium"
      },
      {
        "item": "kubejs:basic_capacitor"
      },
      {
        "item": "powah:capacitor_basic_large"
      },
      {
        "item": "kubejs:basic_capacitor"
      }
    ],
	"inputFluid": "{FluidName:\"mekanism:heavy_water\",Amount:2000}",
    "processingTime": 60,
    "output": {
      "item": "botanypotstiers:elite_terracotta_botany_pot",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({
    "input": [
      {
        "item": "kubejs:slate_3"
      },
      {
        "item": "botanypotstiers:elite_terracotta_botany_pot"
      },
      {
        "item": "kubejs:slate_3"
      },
      {
        "item": "kubejs:solus_ingot"
      },
      {
        "item": "kubejs:solus_ingot"
      },
      {
        "item": "kubejs:advanced_capacitor"
      },
      {
        "item": "powah:capacitor_niotic"
      },
      {
        "item": "kubejs:advanced_capacitor"
      }
    ],
	"inputFluid": "{FluidName:\"kubejs:solus_essence\",Amount:576}",
    "processingTime": 60,
    "output": {
      "item": "botanypotstiers:ultra_terracotta_botany_pot",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.custom({
    "input": [
		{
			"item": "kubejs:slate_uwuterium"
		},
		{
			"item": "botanypotstiers:ultra_terracotta_botany_pot"
		},
		{
			"item": "kubejs:slate_uwuterium"
		},
		{
			"item": "extendedcrafting:the_ultimate_ingot"
		},
		{
			"item": "extendedcrafting:the_ultimate_ingot"
		},
		{
			"item": "kubejs:ultimate_capacitor"
		},
		{
			"item": "mysticalagradditions:creative_essence"
		},
		{
			"item": "kubejs:ultimate_capacitor"
		}
    ],
	"inputFluid": "{FluidName:\"kubejs:stacia_essence\",Amount:576}",
    "processingTime": 60,
    "output": {
      "item": "botanypotstiers:creative_terracotta_botany_pot",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'bigreactors:fluidizer/solidmixing/verderium9_1'})
  event.remove({id:'bigreactors:fluidizer/solidmixing/verderium9_2'})
  event.remove({id:'bigreactors:fluidizer/solidmixing/verderium_1'})
  event.remove({id:'bigreactors:fluidizer/solidmixing/verderium_2'})

event.custom({
	"type": "bigreactors:fluidizersolidmixing",
	"ingredient1": {
	  "ingredient": {
		"tag": "forge:storage_blocks/uranium"
	  },
	  "count": 2
	},
	"ingredient2": {
	  "ingredient": {
		"item": "bigreactors:blutonium_block"
	  },
	  "count": 1
	},
	"result": {
	  "fluid": "bigreactors:verderium",
	  "count": 18000
	}
  })

event.custom({
	"type": "bigreactors:fluidizersolidmixing",
	"ingredient1": {
	  "ingredient": {
		"item": "bigreactors:blutonium_block"
	  },
	  "count": 1
	},
	"ingredient2": {
	  "ingredient": {
		"tag": "forge:storage_blocks/uranium"
	  },
	  "count": 2
	},
	"result": {
	  "fluid": "bigreactors:verderium",
	  "count": 18000
	}
  })

event.custom({
	"type": "bigreactors:fluidizersolidmixing",
	"ingredient1": {
	  "ingredient": {
		"item": "bigreactors:blutonium_ingot"
	  },
	  "count": 1
	},
	"ingredient2": {
	  "ingredient": {
		"tag": "forge:ingots/uranium"
	  },
	  "count": 2
	},
	"result": {
	  "fluid": "bigreactors:verderium",
	  "count": 2000
	}
  })

event.custom({
	"type": "bigreactors:fluidizersolidmixing",
	"ingredient1": {
	  "ingredient": {
		"tag": "forge:ingots/uranium"
	  },
	  "count": 2
	},
	"ingredient2": {
	  "ingredient": {
		"item": "bigreactors:blutonium_ingot"
	  },
	  "count": 1
	},
	"result": {
	  "fluid": "bigreactors:verderium",
	  "count": 2000
	}
  })

event.custom({
	"type": "bigreactors:fluidizersolid",
	"ingredient": {
	  "ingredient": {
		"tag": "forge:storage_blocks/uranium"
	  },
	  "count": 1
	},
	"result": {
	  "fluid": "bigreactors:yellorium",
	  "count": 9000
	}
  })

event.custom({
	"type": "forge:conditional",
	"recipes": [
	  {
		"conditions": [
		  {
			"value": {
			  "tag": "forge:raw_materials/azure_silver",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"recipe": {
		  "output": {
			"tag": "forge:raw_materials/azure_silver"
		  },
		  "rarity": [
			{
			  "whitelist": {
				"type": "minecraft:worldgen/biome",
				"values": [
				  "minecraft:the_end",
				  "minecraft:the_void",
				  "minecraft:small_end_islands",
				  "minecraft:end_barrens",
				  "minecraft:end_highlands",
				  "minecraft:end_midlands"
				]
			  },
			  "blacklist": {},
			  "depth_min": 5,
			  "depth_max": 68,
			  "weight": 8
			},
			{
			  "whitelist": {},
			  "blacklist": {
				"type": "minecraft:worldgen/biome",
				"values": [
				  "minecraft:the_end",
				  "minecraft:the_void",
				  "minecraft:small_end_islands",
				  "minecraft:end_barrens",
				  "minecraft:end_highlands",
				  "minecraft:end_midlands"
				]
			  },
			  "depth_min": 0,
			  "depth_max": 255,
			  "weight": 1
			}
		  ],
		  "pointer": 0,
		  "catalyst": {
			"item": "industrialforegoing:laser_lens10"
		  },
		  "type": "industrialforegoing:laser_drill_ore"
		}
	  }
	]
  })

event.custom({
	"output": {
	"tag": "forge:raw_materials/crimson_iron"
	},
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"minecraft:nether_wastes",
			"minecraft:basalt_deltas",
			"minecraft:warped_forest",
			"minecraft:crimson_forest",
			"minecraft:soul_sand_valley"
		  ]
		},
		"blacklist": {},
		"depth_min": 7,
		"depth_max": 117,
		"weight": 12
	  },
	  {
		"whitelist": {
			"type": "minecraft:worldgen/biome",
			"values": [
			  "minecraft:the_end",
			  "minecraft:the_void",
			  "minecraft:small_end_islands",
			  "minecraft:end_barrens",
			  "minecraft:end_highlands",
			  "minecraft:end_midlands"
			]
		  },
		"blacklist": {},
		"depth_min": 0,
		"depth_max": 255,
		"weight": 1
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens14"
	},
	"type": "industrialforegoing:laser_drill_ore"
  })

event.custom({
	"type": "occultism:miner",
	"ingredient": {
	  "tag": "occultism:miners/ores"
	},
	"result": {
	  "item": "silentgear:crimson_iron_ore"
	},
	"weight": 560
  })

  event.custom({
	"type": "occultism:miner",
	"ingredient": {
	  "tag": "occultism:miners/ores"
	},
	"result": {
	  "item": "silentgear:azure_silver_ore"
	},
	"weight": 560
  })



  //compactmachines
  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 5,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W", "W", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "-", "E", "-", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "W", "W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:emerald_block"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_maximum",
		"Count": 1
	  }
	]
  })


  event.remove({output:'appbot:fluix_mana_pool'})
  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 5,
	"layers": [
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["Q", "Q", "A", "Q", "Q"],
		  ["Q", "-", "-", "-", "Q"],
		  ["A", "-", "-", "-", "A"],
		  ["Q", "-", "-", "-", "Q"],
		  ["Q", "Q", "A", "Q", "Q"]
		]
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "kubejs:starmetal_ingot",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "botania:livingrock"
	  },
	  "Q": {
		"type": "compactcrafting:block",
		"block": "botania:livingrock_slab"
	  },
  
	  "A": {
		"type": "compactcrafting:block",
		"block": "ae2:interface"
	  }
	},
  
	"outputs": [
	  {
		"id": "appbot:fluix_mana_pool",
		"Count": 1
	  }
	]
  })












  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 5,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W", "W", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "-", "E", "-", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "W", "W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:diamond_block"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_giant",
		"Count": 1
	  }
	]
  })

  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 5,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W", "W", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "-", "E", "-", "W"],
		  ["W", "-", "-", "-", "W"],
		  ["W", "W", "W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:hollow",
		"wall": "W"
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:obsidian"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_large",
		"Count": 1
	  }
	]
  })

  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 3,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W"],
		  ["W", "E", "W"],
		  ["W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:gold_block"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_normal",
		"Count": 1
	  }
	]
  })

  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 3,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W"],
		  ["W", "E", "W"],
		  ["W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:iron_block"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_small",
		"Count": 1
	  }
	]
  })

  event.custom({
	"type": "compactcrafting:miniaturization",
	"recipeSize": 3,
	"layers": [
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  },
	  {
		"type": "compactcrafting:mixed",
		"pattern": [
		  ["W", "W", "W"],
		  ["W", "E", "W"],
		  ["W", "W", "W"]
		]
	  },
	  {
		"type": "compactcrafting:filled",
		"component": "W"
	  }
	],
  
	"catalyst": {
	  "id": "minecraft:ender_pearl",
	  "Count": 1
	},
  
	"components": {
	  "W": {
		"type": "compactcrafting:block",
		"block": "compactmachines:wall"
	  },
  
	  "E": {
		"type": "compactcrafting:block",
		"block": "minecraft:copper_block"
	  }
	},
  
	"outputs": [
	  {
		"id": "compactmachines:machine_tiny",
		"Count": 1
	  }
	]
  })

event.remove({output:'compactmachines:machine_tiny'})
event.remove({output:'compactmachines:machine_small'})
event.remove({output:'compactmachines:machine_normal'})
event.remove({output:'compactmachines:machine_large'})
event.remove({output:'compactmachines:machine_giant'})
event.remove({output:'compactmachines:machine_maximum'})

event.remove({id:'createaddition:rolling/gold_ingot'})

event.remove({id:'thermal:fire_charge/lumium_ingot_4'})
event.remove({id:'thermal:fire_charge/enderium_ingot_2'})
event.remove({id:'thermal:fire_charge/signalum_ingot_4'})
event.remove({id:'thermal:lumium_dust_4'})
event.remove({id:'thermal:enderium_dust_2'})
event.remove({id:'thermal:signalum_dust_4'})

event.remove({output:'integrateddynamics:part_connector_mono_directional'})
event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('integrateddynamics:variable_transformer_output').toJson(),
	  Ingredient.of('kubejs:advanced_capacitor').toJson(),
	  Ingredient.of('ftbic:advanced_circuit').toJson(),
	  Ingredient.of('kubejs:advanced_capacitor').toJson(),
	  Ingredient.of('integrateddynamics:variable_transformer_input').toJson(),
    ],
    energy: '50000000',
    result: Item.of('integrateddynamics:part_connector_mono_directional', 2).toJson()
})

event.remove({id:'integrateddynamics:special/part_connector_omni_directional_copy'})
event.remove({id:'integrateddynamics:special/part_connector_omni_directional'})
event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "integrateddynamics:logic_director"
        },
        {
            "item": "integrateddynamics:logic_director"
        },
        {
            "item": "integrateddynamics:part_connector_mono_directional"
        },
        {
            "item": "integrateddynamics:part_connector_mono_directional"
        },
        {
            "item": "extendedcrafting:flux_star"
        },
        {
            "item": "extendedcrafting:flux_star"
        },
		{
            "item": "kubejs:golden_electron_tube"
        },
		{
            "item": "kubejs:golden_electron_tube"
        }
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "integrateddynamics:part_connector_omni_directional",
        "count": 2
    },
    "time": 200
})
event.remove({id:'thermal_extra:dragonsteel_dust'})

event.remove({id:'occultism:crushing/redstone_dust'})
event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ores/redstone"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/redstone"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:ores/redstone"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/redstone"
	}
  })

event.remove({id:'occultism:crushing/iridium_dust_from_ingot'})
event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:ingots/iridium"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/iridium"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": true,
	"ingredient": {
	  "tag": "forge:ingots/iridium"
	},
	"result": {
	  "count": 1,
	  "tag": "forge:dusts/iridium"
	}
  })

event.remove({id:'occultism:crushing/iridium_dust_from_raw'})
event.custom({
	"type": "occultism:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:raw_materials/iridium"
		}
	  },
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:dusts/iridium"
		}
	  }
	],
	"crushing_time": 200,
	"ignore_crushing_multiplier": false,
	"ingredient": {
	  "tag": "forge:raw_materials/iridium"
	},
	"result": {
	  "count": 2,
	  "tag": "forge:dusts/iridium"
	}
  })

event.remove({id:'occultism:crushing/azure_silver_dust'})
event.custom({
  "type": "occultism:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ores/azure_silver"
      }
    },
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:dusts/azure_silver"
      }
    }
  ],
  "crushing_time": 200,
  "ignore_crushing_multiplier": false,
  "ingredient": {
    "tag": "forge:ores/azure_silver"
  },
  "result": {
    "count": 2,
    "tag": "forge:dusts/azure_silver"
  }
})

event.remove({id:'occultism:crushing/quartz_dust'})
event.custom({
  "type": "occultism:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ores/quartz"
      }
    },
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:dusts/quartz"
      }
    }
  ],
  "crushing_time": 200,
  "ignore_crushing_multiplier": false,
  "ingredient": {
    "tag": "forge:ores/quartz"
  },
  "result": {
    "count": 2,
    "tag": "forge:dusts/quartz"
  }
})

event.remove({id:'occultism:crushing/azure_silver_dust_from_ingot'})
event.custom({
  "type": "occultism:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingots/azure_silver"
      }
    },
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:dusts/azure_silver"
      }
    }
  ],
  "crushing_time": 200,
  "ignore_crushing_multiplier": true,
  "ingredient": {
    "tag": "forge:ingots/azure_silver"
  },
  "result": {
    "count": 1,
    "tag": "forge:dusts/azure_silver"
  }
})

event.remove({id:'occultism:crushing/graphite_dust_from_ingot'})
event.custom({
  "type": "occultism:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingots/graphite"
      }
    },
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:dusts/graphite"
      }
    }
  ],
  "crushing_time": 200,
  "ignore_crushing_multiplier": true,
  "ingredient": {
    "tag": "forge:ingots/graphite"
  },
  "result": {
    "count": 1,
    "tag": "forge:dusts/graphite"
  }
})

event.remove({id:'occultism:crushing/iridium_dust'})
event.custom({
  "type": "occultism:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ores/iridium"
      }
    },
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:dusts/iridium"
      }
    }
  ],
  "crushing_time": 200,
  "ignore_crushing_multiplier": false,
  "ingredient": {
    "tag": "forge:ores/iridium"
  },
  "result": {
    "count": 2,
    "tag": "forge:dusts/iridium"
  }
})

event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/copper",
		"count": 9
	  },
	  {
		"item": "kubejs:large_plate_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:lp_copper"
	  }
	],
	"energy": 400
  }).keepIngredient('kubejs:large_plate_cast')

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/refined_glowstone",
		"count": 9
	  },
	  {
		"item": "kubejs:large_plate_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:lp_refined_glowstone"
	  }
	],
	"energy": 400
  }).keepIngredient('kubejs:large_plate_cast')

event.remove({id:'mekanism:processing/tin/dust/from_ingot'})
event.remove({id:'mekanism:processing/tin/dust/from_ore'})
event.remove({id:'mekanism:processing/tin/dust/from_dirty_dust'})
event.remove({id:'mekanism:processing/tin/dust/from_raw_block'})
event.remove({id:'mekanism:processing/tin/dust/from_raw_ore'})

	event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/tin"}},"output":{"item":"thermal:tin_dust"}})

	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/tin"}},"output":{"count":2,"item":"thermal:tin_dust"}})

	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"mekanism:dirty_dusts/tin"}},"output":{"item":"thermal:tin_dust"}})

	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:storage_blocks/raw_tin"}},"output":{"count":12,"item":"thermal:tin_dust"}})

	event.custom({"type":"mekanism:enriching","input":{"amount":3,"ingredient":{"tag":"forge:raw_materials/tin"}},"output":{"count":4,"item":"thermal:tin_dust"}})

	event.shapeless(
		Item.of('thermal:tin_dust'), // output
		[ 'mekanism:dust_tin'] //input
	)

event.remove({output:'thermalendergy:endergy_upgrade_1'})
event.remove({output:'thermalendergy:endergy_upgrade_2'})
event.remove({output:'thermalendergy:endergy_upgrade_3'})
event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "thermalendergy:prismalium_ingot"
	  },
	  "B": {
		"item": "botania:quartz_lavender"
	  },
	  "C": {
		"item": "thermal:enderium_gear"
	  },
	  "D": {
		"item": "thermal_extra:upgrade_augment"
	  },
	  "E": {
		"item": "powah:ender_core"
	  }
	},
	"result": {
	  "item": "thermalendergy:endergy_upgrade_1"
	}
  })

event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "thermalendergy:melodium_ingot"
	  },
	  "B": {
		"item": "thermal_extra:shellite_gear"
	  },
	  "C": {
		"item": "minecraft:shulker_shell"
	  },
	  "D": {
		"item": "thermalendergy:endergy_upgrade_1"
	  },
	  "E": {
		"item": "architects_palette:oracle_jelly"
	  }
	},
	"result": {
	  "item": "thermalendergy:endergy_upgrade_2"
	}
  })

event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "thermalendergy:stellarium_ingot"
	  },
	  "B": {
		"item": "kubejs:ultimate_capacitor"
	  },
	  "C": {
		"item": "thermalendergy:melodium_gear"
	  },
	  "D": {
		"item": "thermalendergy:endergy_upgrade_2"
	  },
	  "E": {
		"item": "mekanism:teleportation_core"
	  }
	},
	"result": {
	  "item": "thermalendergy:endergy_upgrade_3"
	}
  })

event.custom({
	"type": "mythicbotany:infuser",
	"fromColor": 255,
	"group": "infuser",
	"ingredients": [
		{
			"item": "botania:elementium_ingot"
		  },
		  {
			"item": "botania:corporea_spark"
		  },
		  {
			"type": "forge:nbt",
			"item": "productivebees:configurable_honeycomb",
			"count": 1,
			"nbt": "{EntityTag:{type:\"productivebees:elementium\"}}"
		  },
		  {
			"item": "botania:pixie_dust"
		  },
		  {
			"item": "reaper:rune_obitus"
		  }
	],
	"mana": 500000,
	"output": {
	  "count": 1,
	  "item": "kubejs:uwuterium_ingot"
	},
	"toColor": 65280
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:stone"
    },
    "output": {
      "type": "block",
      "block": "create:zinc_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:deepslate"
    },
    "output": {
      "type": "block",
      "block": "create:deepslate_zinc_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:stone"
    },
    "output": {
      "type": "block",
      "block": "immersiveengineering:ore_aluminum"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:deepslate"
    },
    "output": {
      "type": "block",
      "block": "immersiveengineering:deepslate_ore_aluminum"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:stone"
    },
    "output": {
      "type": "block",
      "block": "mysticalagriculture:inferium_ore"
    },
    "weight": 7000
  })
  
  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:deepslate"
    },
    "output": {
      "type": "block",
      "block": "mysticalagriculture:deepslate_inferium_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:stone"
    },
    "output": {
      "type": "block",
      "block": "mysticalagriculture:prosperity_ore"
    },
    "weight": 7000
  })
  
  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:deepslate"
    },
    "output": {
      "type": "block",
      "block": "mysticalagriculture:deepslate_prosperity_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:end_stone"
    },
    "output": {
      "type": "block",
      "block": "silentgear:azure_silver_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:netherrack"
    },
    "output": {
      "type": "block",
      "block": "silentgear:crimson_iron_ore"
    },
    "weight": 7000
  })

  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:stone"
    },
    "output": {
      "type": "block",
      "block": "evilcraft:dark_ore"
    },
    "weight": 7000
  })
  
  event.custom({
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:deepslate"
    },
    "output": {
      "type": "block",
      "block": "evilcraft:dark_ore_deepslate"
    },
    "weight": 7000
  })

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:diamond').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_diamond').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:gold_ingot').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_gold').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:emerald').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_emerald').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:quartz').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_quartz').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:redstone').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_redstone').toJson()
})

event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('rftoolscontrol:ram_chip').toJson(),
	  Ingredient.of('mekanism:alloy_infused').toJson(),
	  Ingredient.of('minecraft:iron_ingot').toJson()
    ],
    energy: '2000000',
    result: Item.of('kubejs:chipset_iron').toJson()
})


event.recipes.createMixing('create:chromatic_compound', [
	'#forge:dusts/glowstone',
	'#forge:dusts/glowstone',
	'#forge:dusts/glowstone',
	'create:powdered_obsidian',
	'create:powdered_obsidian',
	'create:powdered_obsidian',
	'create:polished_rose_quartz'
  ]).superheated()

  event.recipes.immersiveengineeringArcFurnace(['kubejs:slimesteel_ingot'], '#forge:ingots/steel', ['kubejs:blue_slime','#forge:dusts/soul_sand'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:soulsteel_ingot'], '#forge:ingots/steel', ['#forge:gems/apatite','#forge:dusts/soul_sand'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:iron_aluminum_ingot'], '#forge:ingots/iron', ['#forge:ingots/aluminum'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:endsteel_ingot'], '#forge:ingots/darksteel', ['minecraft:end_stone','minecraft:obsidian'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:darksteel_ingot'], '#forge:ingots/iron', ['#forge:dusts/coal','minecraft:obsidian'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:hepatizon_ingot'], 'silentgear:azure_silver_ingot', ['minecraft:obsidian','#mekanism:shards/iron'])
  event.recipes.immersiveengineeringArcFurnace(['kubejs:darksteel_ingot'], '#forge:ingots/steel', ['minecraft:obsidian'])

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "thermal:rubber"
	},
	"result": [
	  {
		"fluid": "thermal:resin",
		"amount": 25
	  }
	],
	"energy": 200000
  })

  event.custom({
	"type": "thermal:crucible",
	"ingredient": {
	  "item": "thermal:rubber_block"
	},
	"result": [
	  {
		"fluid": "thermal:resin",
		"amount": 100
	  }
	],
	"energy": 200000
  })
  
event.remove({output:'thermal_extra:upgrade_augment'})
event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "mekanism:dirty_netherite_scrap"
	  },
	  "B": {
		"item": "thermal:blizz_powder"
	  },
	  "C": {
		"item": "thermal_extra:dragonsteel_gear"
	  },
	  "D": {
		"item": "thermal:upgrade_augment_3"
	  },
	  "E": {
		"item": "kubejs:chipset_diamond"
	  }
	},
	"result": {
	  "item": "thermal_extra:upgrade_augment"
	}
  })

event.remove({id:'ftbic:separating/silicon_from_quartz'})
event.remove({id:'ftbic:separating/silicon_from_sand'})

event.remove({id:'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
event.recipes.createFilling('redstone_arsenal:flux_ingot', [
	'#forge:ingots/electrum',
	Fluid.of('thermal:redstone', 900)
  ])

  event.remove({id:'redstone_arsenal:materials/flux_dust'})
event.recipes.createFilling('redstone_arsenal:flux_dust', [
	'#forge:dusts/electrum',
	Fluid.of('thermal:redstone', 900)
  ])

  event.remove({id:'redstone_arsenal:materials/flux_gem'})
  event.recipes.createFilling('redstone_arsenal:flux_gem', [
	  '#forge:gems/diamond',
	  Fluid.of('thermal:redstone', 900)
	])

	event.remove({output:'botania:rune_water'})	
	event.recipes.botania.runic_altar("2x botania:rune_water", ['botania:manasteel_ingot', 'botania:mana_powder', 'kubejs:slate_1', 'exnihilosequentia:sea_water_bucket', 'exnihilosequentia:guardian_doll', 'ars_nouveau:water_essence'], 5000)

	event.remove({output:'botania:rune_fire'})	
	event.recipes.botania.runic_altar("2x botania:rune_fire", ['botania:manasteel_ingot', 'botania:mana_powder', 'kubejs:slate_1', 'minecraft:shroomlight', 'cyclic:gem_amber', 'ars_nouveau:fire_essence'], 5000)

	event.remove({output:'botania:rune_earth'})	
	event.recipes.botania.runic_altar("2x botania:rune_earth", ['botania:manasteel_ingot', 'botania:mana_powder', 'kubejs:slate_1', 'infused_crystals:block_of_coalium', 'naturesaura:infused_iron', 'ars_nouveau:earth_essence'], 5000)

	event.remove({output:'botania:rune_air'})	
	event.recipes.botania.runic_altar("2x botania:rune_air", ['botania:manasteel_ingot', 'botania:mana_powder', 'kubejs:slate_1', 'kubejs:resonating_gem', 'naturesaura:sky_ingot', 'cyclic:charm_world'], 5000)

	event.remove({output:'botania:rune_spring'})	
	event.recipes.botania.runic_altar("botania:rune_spring", ['kubejs:manasteel_processor', 'botania:mana_powder', 'kubejs:slate_2', 'kubejs:allay_fertilizer', 'kubejs:allay_fertilizer', 'ars_nouveau:air_essence'], 5000)

	event.remove({output:'botania:rune_summer'})	
	event.recipes.botania.runic_altar("botania:rune_summer", ['kubejs:manasteel_processor', 'botania:mana_powder', 'kubejs:slate_2', 'pamhc2foodextended:vanillaicecreamitem', 'botania:rune_earth', 'botania:rune_air'], 5000)

	event.remove({output:'botania:rune_autumn'})	
	event.recipes.botania.runic_altar("botania:rune_autumn", ['kubejs:manasteel_processor', 'botania:mana_powder', 'kubejs:slate_2', 'pamhc2foodextended:pumpkinoatsconesitem', 'pamhc2foodcore:pumpkincheesecakeitem', 'botania:rune_air', 'botania:rune_fire'], 5000)

	event.remove({output:'botania:rune_winter'})	
	event.recipes.botania.runic_altar("botania:rune_winter", ['kubejs:manasteel_processor', 'botania:mana_powder', 'kubejs:slate_2', 'powah:dry_ice', 'powah:charged_snowball', 'infused_crystals:infused_diamondium_crystal', 'botania:rune_earth', 'botania:rune_water'], 5000)

	event.remove({output:'botania:rune_mana'})	
	event.recipes.botania.runic_altar("botania:rune_mana", ['botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond', 'botania:manaweave_cloth', 'botania:mana_powder', 'botania:quartz_mana', 'kubejs:aquamarine', 'kubejs:slate_3'], 10000)

	event.remove({output:'botania:rune_lust'})	
	event.recipes.botania.runic_altar("botania:rune_lust", ['#forge:crops/eggplant', 'kubejs:devilish_horn', 'botania:mana_diamond', 'botania:mana_diamond', 'botania:rune_air', 'botania:rune_summer', 'kubejs:slate_3'], 10000)

	event.remove({output:'botania:rune_pride'})	
	event.recipes.botania.runic_altar("botania:rune_pride", ['botania:rune_summer', 'botania:rune_fire', 'minecraft:red_dye', 'minecraft:orange_dye', 'minecraft:yellow_dye', 'minecraft:green_dye', 'minecraft:blue_dye', 'minecraft:purple_dye', 'kubejs:slate_3', 'botania:mana_diamond', 'botania:mana_diamond'], 10000)











	event.custom( {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "kubejs:aquamarine"
		  },
		  {
			"fluid": "kubejs:starlight",
			"nbt": {},
			"amount": 750
		  }
		],
		"results": [
		  {
			"item": "kubejs:resonating_gem"
		  }
		]
	})

event.remove({output:'reliquary:rending_gale'})
event.remove({output:'notenoughwands:acceleration_wand'})
event.remove({output:'reliquary:rending_gale'})
event.remove({id:'apotheosis:potion_charm'})
event.remove({output:'cyclic:chorus_flight'})

event.remove({output:'projecte:alchemical_chest'})


event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
		"ABCBA",
		"BDEDB",
		"BFGFB",
		"BHIHB",
		"ABJBA"
	  ],
	  "key": {
		"A": {
		  "item": "projecte:dark_matter"
		},
		"B": {
		  "item": "projecte:dark_matter_block"
		},
		"C": {
		  "item": "kubejs:madeline_strawberry"
		},
		"D": {
		  "item": "kubejs:de_awakened_core"
		},
		"E": {
		  "item": "kubejs:bloody_mechanism"
		},
		"F": {
		  "item": "kubejs:uwuterium_pearl"
		},
		"G": {
		  "item": "kubejs:slate_uwuterium"
		},
		"H": {
		  "item": "kubejs:awakened_draconium_block"
		},
		"I": {
		  "item": "botanicadds:terra_catalyst"
		},
		"J": {
		  "item": "thermalendergy:endergy_upgrade_3"
		}
	},
	"result": {
		"item": "projecte:alchemical_chest",
		"count": 1
	}
})

event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"refinedstorage:raw_basic_processor"},"results":[{"item":"refinedstorage:basic_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"refinedstorage:raw_improved_processor"},"results":[{"item":"refinedstorage:improved_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"refinedstorage:raw_advanced_processor"},"results":[{"item":"refinedstorage:advanced_processor"}],"time":200})

event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"extradisks:raw_withering_processor"},"results":[{"item":"extradisks:withering_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"extrastorage:raw_neural_processor"},"results":[{"item":"extrastorage:neural_processor"}],"time":200})

event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"kubejs:raw_manasteel_processor"},"results":[{"item":"kubejs:manasteel_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"kubejs:raw_terrasteel_processor"},"results":[{"item":"kubejs:terrasteel_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"kubejs:raw_elementium_processor"},"results":[{"item":"kubejs:elementium_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"kubejs:raw_uwuterium_processor"},"results":[{"item":"kubejs:uwuterium_processor"}],"time":200})
event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":2000,"input":{"item":"kubejs:raw_arcane"},"results":[{"item":"ars_nouveau:source_gem"}],"time":200})



event.remove({id:'ars_nouveau:imbuement_lapis'})
event.remove({id:'ars_nouveau:imbuement_amethyst'})

event.remove({output:''})
event.custom({"type":"immersiveengineering:mixer","energy":5000,
"fluid":{"amount":144,"tag":"forge:blazing_cryo"},
"inputs":[{"base_ingredient":{"tag":"forge:plates/quartz"},"count":3},{"item":"kubejs:iron_aluminum_ingot"}],
"result":{"amount":144,"fluid":"kubejs:molten_enriched_quartz"}})


event.remove({id:'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron'})
event.remove({id:'refinedstorage:quartz_enriched_iron'})

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "kubejs:cryotheum_dust"
	  }
	],
	"results": [
	  {
		"amount": 72,
		"fluid": "kubejs:blazing_cryo"
	  }
	]
  })

event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "kubejs:pyrotheum_dust"
	  }
	],
	"results": [
	  {
		"amount": 250,
		"fluid": "kubejs:blazing_pyro"
	  }
	]
  })

  event.recipes.thermal.crucible(Fluid.of('kubejs:blazing_cryo', 72), 'kubejs:cryotheum_dust')
  event.recipes.thermal.crucible(Fluid.of('kubejs:blazing_pyro', 250), 'kubejs:pyrotheum_dust')

  event.replaceInput({}, 'cyclic:compressed_cobblestone', 'compressium:cobblestone_1')
  event.remove({output:'cyclic:compressed_cobblestone'})

event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_coal'})
event.custom({
	"type": "thermal:pyrolyzer",
	"ingredient": {
	  "item": "minecraft:coal"
	},
	"result": [
	  {
		"item": "immersiveengineering:coal_coke"
	  },
	  {
		"item": "thermal:tar",
		"chance": 0.25
	  },
	  {
		"fluid": "immersiveengineering:creosote",
		"amount": 250
	  }
	],
	"experience": 0.15
  })

event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_bitumen'})
event.custom({
	"type": "thermal:pyrolyzer",
	"ingredient": {
	  "item": "thermal:bitumen"
	},
	"result": [
	  {
		"item": "immersiveengineering:coal_coke"
	  },
	  {
		"item": "thermal:tar",
		"chance": 0.50
	  },
	  {
		"fluid": "thermal:heavy_oil",
		"amount": 50
	  }
	],
	"energy": 4000,
	"experience": 0.15
  })

event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_logs'})
event.custom({
	"type": "thermal:pyrolyzer",
	"ingredient": {
	  "tag": "minecraft:logs"
	},
	"result": [
	  {
		"item": "minecraft:charcoal"
	  },
	  {
		"fluid": "immersiveengineering:creosote",
		"amount": 125
	  }
	],
	"experience": 0.15
  })

event.remove({id:'extendedcrafting:ender_ingot'})
event.custom({
	"input": {
	  "tag": "forge:storage_blocks/enderium"
	},
	"result": "minecraft:air",
	"breakChance": 0.005,
	"output": "{FluidName:\"kubejs:ender_juice\",Amount:2}",
	"defaultRecipe": false,
	"type": "industrialforegoing:fluid_extractor"
  })

event.custom({
    "input": [
      {
        "item": "kubejs:soulsteel_ingot"
      },
      {
        "item": "botania:ender_air_bottle"
      },
      {
        "item": "botania:ender_air_bottle"
      },
      {
        "item": "botania:ender_air_bottle"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:ender_juice\",Amount:576}",
    "processingTime": 60,
    "output": {
      "item": "extendedcrafting:ender_ingot",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'ftbic:extruding/rods/enderium_to_enderium_wire'})
  event.remove({id:'ftbic:extruding/rods/aluminum_to_aluminum_wire'})
  event.remove({id:'ftbic:extruding/rods/copper_to_copper_wire'})
  event.remove({output:'ftbic:gold_wire'})
  event.remove({id:'ftbic:shaped/enderium_wire'})
  event.remove({output:'ftbic:copper_wire'})
  event.remove({output:'ftbic:aluminum_wire'})

//
event.remove({id:'extendedcrafting:redstone_ingot'})
event.custom({
    "input": [
      {
        "item": "thermal_extra:twinite_ingot"
      },
      {
        "item": "infused_crystals:redstonium_crystal"
      },
      {
        "item": "infused_crystals:redstonium_crystal"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
	  {
        "item": "infused_crystals:infused_redstonium_crystal"
      }
    ],
    "inputFluid": "{FluidName:\"thermal:redstone\",Amount:2000}",
    "processingTime": 60,
    "output": {
      "item": "extendedcrafting:redstone_ingot",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'thermal:machine/pulverizer_yellorite_ore_to_dust'})
  event.remove({id:'thermal:machine/pulverizer_yellorite_ingot_to_dust'})
	
  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:glowstone_dust"
	  }
	],
	"results": [
	  {
		"amount": 250,
		"fluid": "thermal:glowstone"
	  }
	]
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"item": "minecraft:glowstone"
	  }
	],
	"results": [
	  {
		"amount": 1000,
		"fluid": "thermal:glowstone"
	  }
	]
  })


event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"item": "powah:charged_snowball",
		"count": 4
	  },
	  {
		"fluid_tag": "forge:fluid_xp",
		"amount": 250
	  }
	],
	"result": [
	  {
		"item": "thermal:blizz_powder"
	  }
	]
  })

  event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"tag": "forge:dusts/niter",
		"count": 4
	  },
	  {
		"fluid_tag": "forge:fluid_xp",
		"amount": 250
	  }
	],
	"result": [
	  {
		"item": "thermal:blitz_powder"
	  }
	]
  })

  event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"tag": "forge:dusts/refined_obsidian",
		"count": 4
	  },
	  {
		"fluid_tag": "forge:fluid_xp",
		"amount": 250
	  }
	],
	"result": [
	  {
		"item": "thermal:basalz_powder"
	  }
	]
  })

  event.replaceOutput({}, 'mekanism:dust_tin', 'thermal:tin_dust')
  event.replaceOutput({}, 'forge:nuggets/tin', 'thermal:tin_nugget')
  event.replaceInput({}, 'forge:nuggets/tin', 'thermal:tin_nugget')
  event.replaceOutput({}, 'ftbic:silicon', 'refinedstorage:silicon')
  event.replaceInput({}, 'ftbic:silicon', 'refinedstorage:silicon')

  event.remove({id:'industrialforegoing:dissolution_chamber/speed_addon_1'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "thermal:machine_speed_augment"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_pyro\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:speed_addon_1",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'industrialforegoing:dissolution_chamber/speed_addon_2'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "thermal:machine_speed_augment"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_cryo\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:speed_addon_2",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'industrialforegoing:dissolution_chamber/efficiency_addon_1'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "redstone_arsenal:flux_obsidian_rod"
      },
      {
        "item": "thermal:machine_efficiency_augment"
      },
      {
        "item": "redstone_arsenal:flux_obsidian_rod"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_pyro\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:efficiency_addon_1",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'industrialforegoing:dissolution_chamber/efficiency_addon_2'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "redstone_arsenal:flux_obsidian_rod"
      },
      {
        "item": "thermal:machine_efficiency_augment"
      },
      {
        "item": "redstone_arsenal:flux_obsidian_rod"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_cryo\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:efficiency_addon_2",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'industrialforegoing:dissolution_chamber/processing_addon_1'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_redstone"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "kubejs:infused_goldium"
      },
      {
        "item": "kubejs:chip3"
      },
      {
        "item": "thermal:machine_output_augment"
      },
      {
        "item": "kubejs:chip3"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_pyro\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:processing_addon_1",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

  event.remove({id:'industrialforegoing:dissolution_chamber/processing_addon_2'})
  event.custom({
    "input": [
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_redstonium_crystal"
      },
      {
        "item": "kubejs:chipset_diamond"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "infused_crystals:infused_diamondium_crystal"
      },
      {
        "item": "kubejs:chip3"
      },
      {
        "item": "thermal:machine_output_augment"
      },
      {
        "item": "kubejs:chip3"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:blazing_cryo\",Amount:750}",
    "processingTime": 150,
    "output": {
      "item": "industrialforegoing:processing_addon_2",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_4'})
event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 50000000,
	"input": {
	  "item": "sophisticatedbackpacks:stack_upgrade_tier_3"
	},
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  },
	  {
		"tag": "forge:storage_blocks/netherite"
	  }
	],
	"result": {
	  "item": "sophisticatedbackpacks:stack_upgrade_tier_4",
	  "count": 1
	}
  })

  event.custom({
	"type":"createaddition:rolling",
	"input": {
	"tag": "forge:plates/enderium"
	},
	"result": {
	"item": "ftbic:enderium_wire",
	"count": 2
	}})

//

event.custom({
  "output": {
    "item": "kubejs:arcane_ore"
  },
  "rarity": [
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 5,
      "depth_max": 68,
      "weight": 15
    },
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 0,
      "depth_max": 255,
      "weight": 3
    }
  ],
  "pointer": 0,
  "catalyst": {
    "item": "industrialforegoing:laser_lens10"
  },
  "type": "industrialforegoing:laser_drill_ore"
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "kubejs:raw_arcane_block"
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": "kubejs:raw_arcane",
      "count": 9
    }
  ],
  "energy": 400
})


event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "minecraft:iron_ingot"
	},
	"loops": 1,
	"results": [
	  {
		"item": "refinedstorage:quartz_enriched_iron"
	  }
	],
	"sequence": [
	  {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "kubejs:in_enriched_iron"
		  },
		  {
			"amount": 144,
			"fluid": "kubejs:molten_enriched_quartz",
			"nbt": {}
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_enriched_iron"
		  }
		]
	  },
	  {
		"type": "create:pressing",
		"ingredients": [
		  {
			"item": "kubejs:in_enriched_iron"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_enriched_iron"
		  }
		]
	  },
	  {
		"type": "create:pressing",
		"ingredients": [
		  {
			"item": "kubejs:in_enriched_iron"
		  }
		],
		"results": [
		  {
			"item": "kubejs:in_enriched_iron"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "kubejs:in_enriched_iron"
	}
  })

  event.custom({
	"type": "integrateddynamics:squeezer",
	"item": {
		"item": "kubejs:arcane_ore",
	},
	"result": {
	  "items": [
		{
		  "item": "kubejs:raw_arcane",
		  "count": 2
		}
	  ]
	}
  })
  
  event.custom({
	"type": "integrateddynamics:mechanical_squeezer",
	"item": {
		"item": "kubejs:arcane_ore",
	},
	"result": {
	  "items": [
		{
		  "item": "kubejs:raw_arcane",
		  "count": 4
		}
	  ]
	},
	"duration": 40
  })

  event.remove({id:'industrialforegoing:laser_drill_ore/ores/arcane'})

  event.custom({
	"type": "thermal:pulverizer",
	"ingredient": {
	  "item": "kubejs:arcane_ore"
	},
	"result": [
	  {
		"item": "ars_nouveau:source_gem",
		"count": 2
	  }
	],
	"energy_mod": 0.5
  })

  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "ABCDE",
	  "FGHGI",
	  "JKLKJ",
	  "IGHGF",
	  "EDCBA"
	],
	"key": {
	  "A": {
		"item": "kubejs:pyrotheum_dust"
	  },
	  "B": {
		"item": "thermal:lightning_tnt"
	  },
	  "C": {
		"item": "kubejs:unit_glowstone"
	  },
	  "D": {
		"item": "botania:life_essence"
	  },
	  "E": {
		"item": "occultism:chalk_gold_impure"
	  },
	  "F": {
		"item": "powah:steel_energized"
	  },
	  "G": {
		"item": "kubejs:infused_goldium"
	  },
	  "H": {
		"item": "kubejs:lp_refined_glowstone"
	  },
	  "I": {
		"item": "thermal:phytogro"
	  },
	  "J": {
		"item": "ad_astra:desh_plate"
	  },
	  "K": {
		"item": "kubejs:illumination_powder"
	  },
	  "L": {
		"item": "mythicbotany:alfsteel_ingot"
	  }
	},
	"result": {
	  "item": "extendedcrafting:luminessence",
	  "count": 8
	}
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/refined_glowstone"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_refined_glowstone"
	  }
	]
  })

event.remove({output:'powah:energizing_orb'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  " ABA ",
	  "ACDCA",
	  "AEFEA",
	  "ACGCA",
	  "HIIIH"
	],
	"key": {
	  "A": {
		"item": "botania:mana_glass"
	  },
	  "B": {
		"item": "powah:energizing_rod_basic"
	  },
	  "C": {
		"item": "kubejs:slate_1"
	  },
	  "D": {
		"item": "hexerei:crystal_ball"
	  },
	  "E": {
		"item": "hexerei:moon_dust"
	  },
	  "F": {
		"item": "powah:dielectric_casing"
	  },
	  "G": {
		"item": "occultism:storage_stabilizer_tier1"
	  },
	  "H": {
		"item": "powah:dielectric_rod_horizontal"
	  },
	  "I": {
		"item": "pneumaticcraft:compressed_stone"
	  }
	},
	"result": {
	  "item": "powah:energizing_orb"
	}
  })

event.custom({
	"type": "create:crushing",
	"conditions": [
	  {
		"type": "forge:not",
		"value": {
		  "type": "forge:tag_empty",
		  "tag": "forge:crynetherrack"
		}
	  }
	],
	"ingredients": [
	  {
		"tag": "forge:crynetherrack"
	  }
	],
	"processingTime": 400,
	"results": [
	  {
		"item": "kubejs:netherrack_piece",
		"count": 2
	  }
	]
  })

event.remove({id:'productivebees:cofh/machine/smelter/redstone_bee_to_destabilized_redstone_bee'})

event.remove({id:'immersiveengineering:jei_bucket_lava'})
event.remove({id:'create:milling/lapis_lazuli'})

event.custom({
	"type": "lychee:item_inside",
	"item_in": [
		{
			"item": "minecraft:glowstone_dust"
		},
		{
			"item": "minecraft:glowstone_dust"
		},
		{
			"item": "minecraft:glowstone_dust"
		},
		{
			"item": "minecraft:glowstone_dust"
		},
		{
			"item": "kubejs:enriched_aquamarine"
		}
	],
	"block_in": {
		"blocks": ["kubejs:starlight"]
	},
	"post": [
		{
			"type": "drop_item",
			"item": "kubejs:illumination_powder",
		}
	]
})

event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:uwuterium_seeds","mysticalagriculture:flux_uwuterium_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:uwuterium_seeds"},"categories":["supremium"],"growthTicks":1500,"display":{"type":"botanypots:aging","block":"mysticalagriculture:uwuterium_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:uwuterium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:uwuterium_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"kubejs:aquamarine"}},"output":{"item":"kubejs:enriched_aquamarine"}})

event.custom({
	"output": "{FluidName:\"immersiveengineering:creosote\",Amount:50}",
	"rarity": [
	  {
		"whitelist": {
		  "type": "minecraft:worldgen/biome",
		  "values": [
			"minecraft:soul_sand_valley"
		  ]
		},
		"blacklist": {},
		"depth_min": 5,
		"depth_max": 20,
		"weight": 8
	  }
	],
	"pointer": 0,
	"catalyst": {
	  "item": "industrialforegoing:laser_lens12"
	},
	"entity": "minecraft:empty",
	"type": "industrialforegoing:laser_drill_fluid"
  })

  event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"item": "kubejs:unit_empty"
	  },
	  {
		"fluid": "thermal:glowstone",
		"amount": 4000
	  }
	],
	"result": [
	  {
		"item": "kubejs:unit_glowstone"
	  }
	]
  })

  event.custom({
	"type": "thermal:bottler",
	"ingredients": [
	  {
		"item": "kubejs:unit_empty"
	  },
	  {
		"fluid": "kubejs:blazing_cryo",
		"amount": 4000
	  }
	],
	"result": [
	  {
		"item": "kubejs:unit_cryotheum"
	  }
	]
  })



  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"tag": "chipped:obsidian"
	  },
	  {
		"tag": "forge:ingots/azure_silver"
	  },
	  {
		"tag": "mekanism:shards/iron"
	  }
	],
	"results": [
		{
			"item": "kubejs:hepatizon_ingot",
			"count": 1
		}
	]
  })

  event.recipes.thermal.smelter('18x create:andesite_alloy', ['compressium:andesite_1', 'minecraft:iron_ingot', 'minecraft:raw_iron_block']).energy(50000)
  event.recipes.thermal.smelter('2x create:andesite_alloy', ['minecraft:andesite', 'minecraft:iron_nugget', 'minecraft:raw_iron']).energy(50000)

  event.shapeless(
	Item.of('create:andesite_alloy', 9), // output
	['create:andesite_alloy_block'])

	event.custom({
		"type": "thermal:crucible",
		"ingredient": {
		  "tag": "forge:ingots/electrum"
		},
		"result": [
		  {
			"fluid": "kubejs:molten_electrum",
			"amount": 144
		  }
		],
		"energy": 20000
	  })

	  event.custom({
		"type": "thermal:crucible",
		"ingredient": {
		  "tag": "forge:storage_blocks/electrum"
		},
		"result": [
		  {
			"fluid": "kubejs:molten_electrum",
			"amount": 1296
		  }
		],
		"energy": 20000
	  })
	
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [
		  {
			"tag": "forge:ingots/electrum"
		  }
		],
		"results": [
		  {
			"amount": 144,
			"fluid": "kubejs:molten_electrum"
		  }
		]
	  })
	
//

event.recipes.botania.runic_altar("kubejs:tier2_crafting_seed", ['mysticalagriculture:prosperity_seed_base',
'mysticalagriculture:deepslate_essence',
'mysticalagriculture:dirt_essence',
'mysticalagriculture:earth_essence',
'mysticalagriculture:fire_essence',
'mysticalagriculture:ice_essence',
'mysticalagriculture:stone_essence',
'mysticalagriculture:water_essence',
'mysticalagriculture:wood_essence'], 20000)

event.recipes.botania.runic_altar("kubejs:tier3_crafting_seed", ['#forge:seeds', "mysticalagriculture:aluminum_essence",
"mysticalagriculture:amethyst_essence",
"mysticalagriculture:apatite_essence",
"mysticalagriculture:chicken_essence",
"mysticalagriculture:coal_essence",
"mysticalagriculture:coral_essence",
"mysticalagriculture:cow_essence",
"mysticalagriculture:dye_essence",
"mysticalagriculture:fish_essence"], 20000)

event.recipes.botania.runic_altar("kubejs:tier4_crafting_seed", ['#forge:seeds', "mysticalagriculture:basalz_essence",
"mysticalagriculture:blitz_essence",
"mysticalagriculture:blizz_essence",
"mysticalagriculture:brass_essence",
"mysticalagriculture:bronze_essence",
"mysticalagriculture:certus_quartz_essence",
"mysticalagriculture:copper_essence",
"mysticalagriculture:glowstone_essence",
"mysticalagriculture:graphite_essence"], 20000)

event.recipes.botania.runic_altar("kubejs:tier5_crafting_seed", ['#forge:seeds', "mysticalagriculture:blaze_essence",
"mysticalagriculture:blazing_crystal_essence",
"mysticalagriculture:compressed_iron_essence",
"mysticalagriculture:constantan_essence",
"mysticalagriculture:electrum_essence",
"mysticalagriculture:elementium_essence",
"mysticalagriculture:end_essence",
"mysticalagriculture:enderman_essence",
"mysticalagriculture:energized_steel_essence"], 20000)

event.recipes.botania.runic_altar("kubejs:tier6_crafting_seed", ['#forge:seeds', "mysticalagriculture:diamond_essence",
"mysticalagriculture:emerald_essence",
"mysticalagriculture:enderium_essence",
"mysticalagriculture:niotic_crystal_essence",
"mysticalagriculture:spirited_crystal_essence",
"mysticalagriculture:terrasteel_essence",
"mysticalagriculture:uraninite_essence",
"mysticalagriculture:uwuterium_essence",
"mysticalagriculture:wither_skeleton_essence"], 20000)


  event.remove({id:'powah:crafting/dielectric_rod'})
event.recipes.immersiveengineeringMetalPress('powah:dielectric_rod', '2x powah:dielectric_paste', 'immersiveengineering:mold_rod')

event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "create:andesite_alloy"
	},
	"transitionalItem": {
	  "item": "create_sa:incomplete_heat_engine"
	},
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  },
		  {
			"item": "create:cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  },
		  {
			"item": "create:large_cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  },
		  {
			"tag": "forge:nuggets/zinc"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  }
		]
	  },
	   {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  },
		  {
			 "tag": "forge:nuggets/copper"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_heat_engine"
		  }
		]
	  }
	],
	"results": [
	  {
		"item": "create_sa:heat_engine",
		"chance": 180.0
	  },
	  {
		"item": "create:copper_sheet",
		"chance": 8.0
	  },
	  {
		"item": "create:andesite_alloy",
		"chance": 8.0
	  },
	  {
		"item": "create:cogwheel",
		"chance": 5.0
	  },
	  {
		"item": "create:shaft",
		"chance": 2.0
	  },
	  {
		"item": "create:crushed_zinc_ore",
		"chance": 2.0
	  },
	  {
		"item": "minecraft:copper_nugget",
		"chance": 2.0
	  },
	  {
		"item": "minecraft:iron_ingot"
	  },
	  {
		"item": "minecraft:compass"
	  }
	],
	"loops": 3
  })

event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "tag": "forge:plates/brass"
	},
	"transitionalItem": {
	  "item": "create_sa:incomplete_steam_engine"
	},
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  },
		  {
			"item": "create:cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  },
		  {
			"item": "create:large_cogwheel"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  },
		  {
			"item": "create:propeller"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  },
		  {
			"item": "create:andesite_alloy"
		  }
		],
		"results": [
		  {
			"item": "create_sa:incomplete_steam_engine"
		  }
		]
	  }
	],
	"results": [
	  {
		"item": "create_sa:steam_engine",
		"chance": 180.0
	  },
	  {
		"item": "create:brass_sheet",
		"chance": 8.0
	  },
	  {
		"item": "create:andesite_alloy",
		"chance": 8.0
	  },
	  {
		"item": "create:cogwheel",
		"chance": 5.0
	  },
	  {
		"item": "create:shaft",
		"chance": 2.0
	  },
	  {
		"item": "create:crushed_brass_ore",
		"chance": 2.0
	  },
	  {
		"item": "minecraft:brass_nugget",
		"chance": 2.0
	  },
	  {
		"item": "minecraft:iron_ingot"
	  },
	  {
		"item": "minecraft:compass"
	  }
	],
	"loops": 3
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"tag": "forge:storage_blocks/iron"
	  }
	],
	"results": [
	  {
		"item": "kubejs:lp_iron"
	  }
	]
  })

  event.custom({
	"type": "thermal:press",
	"ingredients": [
	  {
		"tag": "forge:ingots/iron",
		"count": 9
	  },
	  {
		"item": "kubejs:large_plate_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:lp_iron"
	  }
	],
	"energy": 400
  }).keepIngredient('kubejs:large_plate_cast')

event.remove({output:'powah:dielectric_casing'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/steel"
    },
    "B": {
      "item": "powah:dielectric_rod_horizontal"
    },
    "C": {
      "item": "powah:dielectric_rod"
    }
  },
  "result": {
    "item": "powah:dielectric_casing"
  }
})

event.remove({output:'mysticalagriculture:prosperity_seed_base'})
event.recipes.botania.runic_altar("mysticalagriculture:prosperity_seed_base", ['#forge:seeds', 'mysticalagriculture:prosperity_gemstone', 'mysticalagriculture:prosperity_ingot', 'mysticalagriculture:prosperity_gemstone', 'mysticalagriculture:prosperity_ingot'], 20000)

event.remove({output:'mysticalagriculture:soulium_seed_base'})
event.recipes.botania.runic_altar("mysticalagriculture:soulium_seed_base", ['kubejs:tier2_crafting_seed', 'mysticalagriculture:soulium_gemstone', 'mysticalagriculture:soulium_ingot', 'mysticalagriculture:soulium_gemstone', 'mysticalagriculture:soulium_ingot'], 20000)


event.remove({output:'mob_grinding_utils:absorption_hopper'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  " A ",
	  " B ",
	  "BCB"
	],
	"key": {
	  "A": {
		"item": "minecraft:ender_eye"
	  },
	  "B": {
		"item": "minecraft:obsidian"
	  },
	  "C": {
		"item": "simplemagnets:basicmagnet"
	  }
	},
	"result": {
	  "item": "mob_grinding_utils:absorption_hopper"
	}
  })

event.remove({output:'thermal:device_collector'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "thermal:tin_ingot"
	  },
	  "B": {
		"item": "minecraft:ender_eye"
	  },
	  "C": {
		"item": "thermal:steel_plate"
	  },
	  "D": {
		"item": "simplemagnets:basicmagnet"
	  },
	  "E": {
		"item": "thermal:redstone_servo"
	  }
	},
	"result": {
	  "item": "thermal:device_collector"
	}
  })

event.remove({output:'modularrouters:vacuum_module'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  " A ",
	  "BCB",
	  " D "
	],
	"key": {
	  "A": {
		"item": "minecraft:hopper"
	  },
	  "B": {
		"item": "minecraft:ender_eye"
	  },
	  "C": {
		"item": "modularrouters:blank_module"
	  },
	  "D": {
		"item": "simplemagnets:basicmagnet"
	  }
	},
	"result": {
	  "item": "modularrouters:vacuum_module"
	}
  })

event.remove({output:'modularrouters:xp_vacuum_augment'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  " A ",
	  "BCB",
	  " A "
	],
	"key": {
	  "A": {
		"item": "create:experience_nugget"
	  },
	  "B": {
		"item": "mob_grinding_utils:solid_xp_baby"
	  },
	  "C": {
		"item": "modularrouters:augment_core"
	  }
	},
	"result": {
	  "item": "modularrouters:xp_vacuum_augment"
	}
  })

event.remove({output:'itemcollectors:basic_collector'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  " A ",
	  "BCB",
	  "CDC"
	],
	"key": {
	  "A": {
		"item": "minecraft:ender_pearl"
	  },
	  "B": {
		"item": "framedblocks:framed_reinforcement"
	  },
	  "C": {
		"item": "minecraft:obsidian"
	  },
	  "D": {
		"item": "simplemagnets:basicmagnet"
	  }
	},
	"result": {
	  "item": "itemcollectors:basic_collector"
	}
  })

  event.remove({output:'itemcollectors:advanced_collector'})
  event.custom({
	  "type": "lychee:item_inside",
	  "item_in": [
		  {
			  "item": "itemcollectors:basic_collector"
		  }
	  ],
	  "block_in": {
		  "blocks": ["kubejs:ender_juice"]
	  },
	  "post": [
		  {
			  "type": "drop_item",
			  "item": "itemcollectors:advanced_collector",
		  },
		  {
			"type": "place",
			"block": "*"
		}
	  ]
  })

  event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"energy":200201,"input":{"item":"kubejs:raw_arcane_block"},"results":[{"item":"ars_nouveau:source_gem", "count": 13}],"time":200})
  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"item":"kubejs:raw_arcane_block"},"result":{"item":"ars_nouveau:source_gem", "count": 12},"secondaries":[]})

  event.custom({
	"type": "create:crushing",
	"ingredients": [
	  {
		"item": "kubejs:raw_arcane_block"
	  }
	],
	"processingTime": 250,
	"results": [
	  {
		"item": "ars_nouveau:source_gem",
		"count": 9
	  },
	  {
		"chance": 0.75,
		"item": "create:experience_nugget",
		"count": 9
	  }
	]
  })

  event.remove({output:'mob_grinding_utils:mob_swab'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "   AB",
    "   CA",
    "  C  ",
    "AC   ",
    "BA   "
  ],
  "key": {
    "A": {
      "item": "mekanism:hdpe_sheet"
    },
    "B": {
      "item": "thermal:white_rockwool"
    },
    "C": {
      "item": "kubejs:antimatter_rod"
    }
  },
  "result": {
    "item": "mob_grinding_utils:mob_swab"
  }
})

event.remove({output:'mekanism:dynamic_valve'})
event.custom({
	"type": "pneumaticcraft:assembly_laser",
	"input": {
	  "type": "pneumaticcraft:stacked_item",
	  "count": 4,
	  "item": "mekanism:dynamic_tank"
	},
	
	"program": "laser",
	"result": {
	  "count": 2,
	  "item": "mekanism:dynamic_valve"
	}
  })

  event.remove({id:'mythicbotany:wither_aconite_petal_apothecary'})
  event.custom({
	"type": "botania:petal_apothecary",
	"ingredients": [
	  {
		"item": "mysticalagradditions:nether_star_crux"
	  },
	  {
		"item": "mysticalagradditions:nether_star_crux"
	  },
	  {
		"item": "mekanism:hdpe_sheet"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"item": "minecraft:wither_rose"
	  },
	],
	"output": {
	  "item": "mythicbotany:wither_aconite"
	},
	"reagent": {
	  "tag": "botania:seed_apothecary_reagent"
	}
  })

  event.remove({id:'mekanism:enriching/conversion/obsidian_to_obsidian_dust'})

  event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 90000000,
	"input": {
	  "item": "kubejs:awakened_draconium_ingot"
	},
	"ingredients": [
	  {
		"item": "infused_crystals:infused_coalium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_ironium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_lapisium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_emeraldium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_diamondium_crystal"
	  },
	  {
		"item": "infused_crystals:infused_redstonium_crystal"
	  },
	  {
		"item": "kubejs:infused_goldium"
	  },
	],
	"result": {
	  "item": "extendedcrafting:the_ultimate_ingot",
	  "count": 1
	}
  })

event.remove({output:'extendedcrafting:basic_component'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "DB",
    "CA"
  ],
  "key": {
    "A": {
      "item": "mekanism:hdpe_rod"
    },
    "B": {
      "item": "kubejs:illumination_powder"
    },
    "C": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "D": {
      "item": "kubejs:hdpe_rod_hori"
    }
  },
  "result": {
    "item": "extendedcrafting:basic_component"
  }
})

event.remove({output:'extendedcrafting:advanced_component'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "AB",
    "CA"
  ],
  "key": {
    "A": {
      "tag": "forge:rods/gold"
    },
    "B": {
      "item": "kubejs:illumination_powder"
    },
    "C": {
      "item": "extendedcrafting:basic_component"
    }
  },
  "result": {
    "item": "extendedcrafting:advanced_component"
  }
})

event.remove({output:'extendedcrafting:elite_component'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "AB",
    "CA"
  ],
  "key": {
    "A": {
		"tag": "forge:rods/diamond"
    },
    "B": {
      "item": "extendedcrafting:luminessence"
    },
    "C": {
      "item": "extendedcrafting:advanced_component"
    }
  },
  "result": {
    "item": "extendedcrafting:elite_component"
  }
})

event.remove({output:'extendedcrafting:ultimate_component'})
event.custom({
	"type": "create:mixing",
	"heatRequirement": "superheated",
	"ingredients": [
	  {
		"item": "extendedcrafting:elite_component"
	  },
	  {
		"tag": "forge:rods/emerald",
		"count": 2
	  },
	  {
		  "item": "mob_grinding_utils:solid_xp_baby",
		  "count": 16
	  },
	  {
		"item": "extendedcrafting:luminessence"
	  }
	],
	"results": [
	  {
		"item": "extendedcrafting:ultimate_component"
	  }
	]
  })

event.remove({output:'extendedcrafting:redstone_component'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "AB",
	  "CA"
	],
	"key": {
	  "A": {
		"item": "extendedcrafting:redstone_ingot"
	  },
	  "B": {
		"item": "extendedcrafting:luminessence"
	  },
	  "C": {
		"item": "extendedcrafting:black_iron_slate"
	  }
	},
	"result": {
	  "item": "extendedcrafting:redstone_component"
	}
  })

  event.remove({output:'extendedcrafting:enhanced_redstone_component'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "AB",
	  "CA"
	],
	"key": {
	  "A": {
		"item": "extendedcrafting:enhanced_redstone_ingot"
	  },
	  "B": {
		"item": "extendedcrafting:luminessence"
	  },
	  "C": {
		"item": "extendedcrafting:redstone_component"
	  }
	},
	"result": {
	  "item": "extendedcrafting:enhanced_redstone_component"
	}
  })

  event.remove({output:'extendedcrafting:enhanced_ender_component'})
  event.custom({
	  "type": "create:mechanical_crafting",
	  "pattern": [
		"AB",
		"CA"
	  ],
	  "key": {
		"A": {
		  "item": "extendedcrafting:enhanced_ender_ingot"
		},
		"B": {
		  "item": "extendedcrafting:luminessence"
		},
		"C": {
		  "item": "extendedcrafting:ender_component"
		}
	  },
	  "result": {
		"item": "extendedcrafting:enhanced_ender_component"
	  }
	})

	event.remove({output:'extendedcrafting:ender_component'})
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "AB",
	  "CA"
	],
	"key": {
	  "A": {
		"item": "extendedcrafting:ender_ingot"
	  },
	  "B": {
		"item": "extendedcrafting:luminessence"
	  },
	  "C": {
		"item": "extendedcrafting:black_iron_slate"
	  }
	},
	"result": {
	  "item": "extendedcrafting:ender_component"
	}
  })

  event.remove({output:'extendedcrafting:crystaltine_component'})
  event.custom({
	  "type": "create:mechanical_crafting",
	  "pattern": [
		"AB",
		"CA"
	  ],
	  "key": {
		"A": {
		  "item": "extendedcrafting:crystaltine_ingot"
		},
		"B": {
		  "item": "extendedcrafting:luminessence"
		},
		"C": {
		  "item": "extendedcrafting:elite_component"
		}
	  },
	  "result": {
		"item": "extendedcrafting:crystaltine_component"
	  }
	})

	event.remove({output:'extendedcrafting:the_ultimate_component'})
	event.custom({
		"type": "create:mechanical_crafting",
		"pattern": [
		  "AB",
		  "CA"
		],
		"key": {
		  "A": {
			"item": "extendedcrafting:the_ultimate_ingot"
		  },
		  "B": {
			"item": "extendedcrafting:luminessence"
		  },
		  "C": {
			"item": "extendedcrafting:ultimate_component"
		  }
		},
		"result": {
		  "item": "extendedcrafting:the_ultimate_component"
		}
	  })

event.remove({output:'extendedcrafting:crystaltine_ingot'})
event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "    AA ",
	  "   ABCA",
	  "  ADEBA",
	  " AFGFA ",
	  "ABEDA  ",
	  "ACBA   ",
	  " AA    "
	],
	"key": {
	  "A": {
		"item": "kubejs:solus_ingot"
	  },
	  "B": {
		"item": "botania:manasteel_ingot"
	  },
	  "C": {
		"item": "extendedcrafting:the_ultimate_ingot"
	  },
	  "D": {
		"item": "ironjetpacks:elite_coil"
	  },
	  "E": {
		"item": "kubejs:catal_ender"
	  },
	  "F": {
		"item": "mekanism:elite_control_circuit"
	  },
	  "G": {
		"item": "extendedcrafting:ender_star"
	  }
	},
	"result": {
	  "item": "extendedcrafting:crystaltine_ingot",
	  "count": 4
	}
  })

  event.custom({
	"type": "create:mixing",
	"heatRequirement": "heated",
	"ingredients": [
	  {
		"tag": "forge:ingots/steel"
	  }
	],
	"results": [
	  {
		"amount": 144,
		"fluid": "kubejs:molten_steel"
	  }
	]})

	event.custom({
		"type": "create:mechanical_crafting",
		"pattern": [
		  "  A  ",
		  " BCB ",
		  "BDEDB",
		  "FBGBF",
		  "H   H"
		],
		"key": {
		  "A": {
			"item": "kubejs:advanced_capacitor"
		  },
		  "B": {
			"item": "kubejs:infused_goldium"
		  },
		  "C": {
			"item": "create:encased_fan"
		  },
		  "D": {
			"item": "kubejs:datacard2"
		  },
		  "E": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:iron\",Throttle:1.0d}"
		  },
		  "F": {
			"item": "create_sa:heat_engine"
		  },
		  "G": {
			"item": "powah:battery_hardened"
		  },
		  "H": {
			"type": "forge:nbt",
			"item": "ironjetpacks:thruster",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:gold\"}"
		  }
		},
		"result": {
		  "type": "forge:nbt",
		  "item": "ironjetpacks:jetpack",
		  "count": 1,
		  "nbt": "{Id:\"ironjetpacks:gold\",Throttle:1.0d}"
		}
	  })

event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "  A  ",
	  " BCB ",
	  "BDEDB",
	  "FBGBF",
	  "H   H"
	],
	"key": {
	  "A": {
		"item": "reaper:rune_block_efficacia"
	  },
	  "B": {
		"item": "infused_crystals:infused_diamondium_crystal"
	  },
	  "C": {
		"item": "botania:rune_air"
	  },
	  "D": {
		"item": "kubejs:cryotheum_dust"
	  },
	  "E": {
		"type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:gold\",Throttle:1.0d}"
	  },
	  "F": {
		"item": "kubejs:unit_cryotheum"
	  },
	  "G": {
		"item": "powah:battery_niotic"
	  },
	  "H": {
		"type": "forge:nbt",
		"item": "ironjetpacks:thruster",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:diamond\"}"
	  }
	},
	"result": {
		"type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:diamond\",Throttle:1.0d}"
	  }
  })

event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "  A  ",
	  " BCB ",
	  "BDEDB",
	  "FBGBF",
	  "H   H"
	],
	"key": {
	  "A": {
		"item": "kubejs:terrasteel_processor"
	  },
	  "B": {
		"item": "infused_crystals:block_of_infused_emeraldium"
	  },
	  "C": {
		"item": "powah:energy_hopper_spirited"
	  },
	  "D": {
		"item": "powah:capacitor_spirited"
	  },
	  "E": {
		"type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:diamond\",Throttle:1.0d}"
	  },
	  "F": {
		"item": "kubejs:unit_glowstone"
	  },
	  "G": {
		"item": "powah:battery_spirited"
	  },
	  "H": {
		"type": "forge:nbt",
		"item": "ironjetpacks:thruster",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:emerald\"}"
	  }
	},
	"result": {
		"type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:emerald\",Throttle:1.0d}"
	  }
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "compressium:diamond_1"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_diamond",
		"count": 9
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "compressium:iron_1"
	  }
	],
	"results": [
	  {
		"item": "mekanism:enriched_iron",
		"count": 9
	  }
	]
  })

  event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "kubejs:aquamarine_block"
	  }
	],
	"results": [
	  {
		"item": "kubejs:enriched_aquamarine",
		"count": 1
	  }
	]
  })


event.remove({output:'botania:quartz_dark'})
event.custom({
	"type": "botania:mana_infusion",
	"catalyst": {
	  "type": "block",
	  "block": "fluxnetworks:flux_block"
	},
	"input": {
	  "item": "minecraft:quartz"
	},
	"mana": 2000,
	"output": {
	  "item": "botania:quartz_dark"
	}
  })

  event.custom({
	"type": "botania:mana_infusion",
	"catalyst": {
	  "type": "block",
	  "block": "fluxnetworks:flux_block"
	},
	"input": {
	  "item": "minecraft:quartz_block"
	},
	"mana": 8000,
	"output": {
	  "item": "botania:dark_quartz"
	}
  })

  event.shapeless(
	Item.of('botania:quartz_dark', 4), // output
	['botania:dark_quartz'])

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













