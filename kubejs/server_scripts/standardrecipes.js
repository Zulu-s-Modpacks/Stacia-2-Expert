priority: 1000

ServerEvents.recipes(event => {




//Gears
var materials = [
    "steel",
    "iron",
    "gold",
    "copper",
    "netherite",
    "lapis",
    "diamond",
    "emerald",
    "quartz",
    "signalum",
    "lumium",
    "enderium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "rose_gold"
];

materials.forEach(function(material) {
  var recipe = {
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " A ",
      "ABA",
      " A "
    ],
    "key": {
      "A": {
        "tag": "forge:plates/" + material
      },
      "B": {
        "tag": "forge:nuggets/" + material
      }
    },
    "result": {
      "item": "thermal:" + material + "_gear"
    }
  };

  event.custom(recipe);
});

materials.forEach(function(material) {
  event.remove({id: "thermal:parts/" + material + "_gear"});
});

materials = ["soul_infused","shellite","twinite","dragonsteel"];
materials.forEach(function(material) {
  event.remove({id: "thermal_extra:parts/" + material + "_gear"});
});

materials.forEach(function(material) {
    var recipe = {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        " A ",
        "ABA",
        " A "
      ],
      "key": {
        "A": {
          "tag": "forge:plates/" + material
        },
        "B": {
          "tag": "forge:nuggets/" + material
        }
      },
      "result": {
        "item": "thermal_extra:" + material + "_gear"
      }
    };
  
    event.custom(recipe);
  });




  //gear via ftb
  var materials4 = ["soul_infused","shellite","twinite","dragonsteel"];
  materials4.forEach(function(material) {
    
    event.custom({
      "type": "ftbic:extruding",
      "inputItems": [
        {
          "count": 4,
          "ingredient": {
            "tag": "forge:plates/" + material
          }
        }
      ],
      "outputItems": [
        {
          "item": "thermal_extra:" + material + "_gear"
        }
      ]
    });
  });

  var materials5 = ["constantan", "invar", "electrum", "nickel", "silver", "lumium", "signalum", "quartz", "emerald", "diamond", "lapis", "netherite", "rose_gold", "steel"];
  materials5.forEach(function(material) {
    
    event.custom({
      "type": "ftbic:extruding",
      "inputItems": [
        {
          "count": 4,
          "ingredient": {
            "tag": "forge:plates/" + material
          }
        }
      ],
      "outputItems": [
        {
          "item": "thermal:" + material + "_gear"
        }
      ]
    });
  });

  event.remove({id:'industrialforegoing:diamond_gear'})

  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:metal_rods'})

  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:rods/aluminum'})
  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:rods/steel'})
  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:rods/iron'})

    var materials8 = ["brass", "copper", "tin", "lead", "uranium", "iridium", "enderium", "bronze", "gold", "iron", "steel", "aluminum","diamond", "emerald"];
    materials8.forEach(function(material) {
    event.shaped('4x #forge:rods/' + material, [
      'A',
      'A'
    ], {
      A: '#forge:plates/' + material
    });
  });

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A",
      "A"
    ],
    "key": {
      "A": {
        "tag": "forge:plates/iron"
      },
    },
    "result": {
      "item": "immersiveengineering:stick_iron",
      "count": 4
    }
  })


  //create additions rod

  var materials9 = [
    'uranium',
    'tin',
    'lead',
    'iridium',
    'gold',
    'enderium',
    'copper',
    'bronze'
  ];
  
  materials9.forEach(function(material) {
    event.remove({output: 'minecraft:' + material + '_rod'});
  
    event.custom({
      "type":"createaddition:rolling",
      "input": {
          "tag": "forge:ingots/" + material
      },
      "result": {
          "item": "ftbic:" + material + "_rod",
          "count": 2
      }
    });
  });

  event.custom({
    "type": "ftbic:extruding",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/diamond"
        }
      }
    ],
    "outputItems": [
      {
        "count": 2,
        "item": "kubejs:diamond_rod"
      }
    ]
  })

  event.custom({
    "type": "ftbic:extruding",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/emerald"
        }
      }
    ],
    "outputItems": [
      {
        "count": 2,
        "item": "kubejs:emerald_rod"
      }
    ]
  })
  
event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:ingots/steel"
      }
    }
  ],
  "outputItems": [
    {
      "count": 2,
      "item": "immersiveengineering:stick_steel"
    }
  ]
})

var materials11 = ["constantan", "invar", "electrum", "nickel", "silver", "lumium", "signalum", "quartz", "emerald", "diamond", "lapis", "netherite", "rose_gold", "steel"];
materials11.forEach(function(material) {
  
  event.remove({type: 'minecraft:crafting_shaped', output: '#forge:gears/' + material })
});

var trees = [
'oak',
'spruce',
'birch',
'jungle',
'acacia',
'dark_oak'];

trees.forEach(function(tree) {
  var plankId = 'minecraft:' + tree + '_planks';

  event.remove({ id: plankId });

  event.shapeless(
    Item.of(plankId, 2),
    ['minecraft:' + tree + '_log']
  );
});

event.remove({id:'ars_nouveau:archwood_planks'})

event.shapeless(
	Item.of('ars_nouveau:archwood_planks', 2), // output
	[ '#forge:logs/archwood'])

  event.remove({id:'ad_astra:recipes/glacian_planks'})
  event.remove({id:'ad_astra:recipes/stophar_planks'})
  event.remove({id:'ad_astra:recipes/aeronos_planks'})

  event.shapeless(
    Item.of('ad_astra:aeronos_planks', 2), // output
    [ '#ad_astra:aeronos_caps'])

    event.shapeless(
      Item.of('ad_astra:strophar_planks', 2), // output
      ['#ad_astra:strophar_caps'])

      event.shapeless(
        Item.of('ad_astra:glacian_planks', 2), // output
        [ '#ad_astra:glacian_logs'])


var woodTypes = [
  'aspen',
  'baobab',
  'blue_enchanted',
  'bulbis',
  'cherry',
  'cika',
  'cypress',
  'ebony',
  'ether',
  'fir',
  'green_enchanted',
  'holly',
  'imparius',
  'lament',
  'jacaranda',
  'mahogany',
  'white_mangrove',
  'maple',
  'nightshade',
  'palm',
  'pine',
  'rainbow_eucalyptus',
  'redwood',
  'skyris',
  'willow',
  'witch_hazer',
  'zelkova',
  'sythian',
  'embur'
];

woodTypes.forEach(function(woodType) {
  var plankId = 'byg:' + woodType + '_planks';

  event.remove({ id: plankId });

});


var materials15 = [
  "aluminum",
  "iridium",
  "uranium"
];
materials15.forEach(function(material) {
var recipe = {
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/" + material
    },
    "B": {
      "tag": "forge:nuggets/" + material
    }
  },
  "result": {
    "item": "ftbic:" + material + "_gear"
  }
};

event.custom(recipe);
});

event.shapeless(Item.of('byg:aspen_planks', 2), ['#byg:aspen_logs']);
event.shapeless(Item.of('byg:baobab_planks', 2), ['#byg:baobab_logs']);
event.shapeless(Item.of('byg:blue_enchanted_planks', 2), ['#byg:blue_enchanted_logs']);
event.shapeless(Item.of('byg:bulbis_planks', 2), ['#byg:bulbis_logs']);
event.shapeless(Item.of('byg:cherry_planks', 2), ['#byg:cherry_logs']);
event.shapeless(Item.of('byg:cika_planks', 2), ['#byg:cika_logs']);
event.shapeless(Item.of('byg:cypress_planks', 2), ['#byg:cypress_logs']);
event.shapeless(Item.of('byg:ebony_planks', 2), ['#byg:ebony_logs']);
event.shapeless(Item.of('byg:ether_planks', 2), ['#byg:ether_logs']);
event.shapeless(Item.of('byg:fir_planks', 2), ['#byg:fir_logs']);
event.shapeless(Item.of('byg:green_enchanted_planks', 2), ['#byg:green_enchanted_logs']);
event.shapeless(Item.of('byg:holly_planks', 2), ['#byg:holly_logs']);
event.shapeless(Item.of('byg:imparius_planks', 2), ['#byg:imparius_logs']);
event.shapeless(Item.of('byg:lament_planks', 2), ['#byg:lament_logs']);
event.shapeless(Item.of('byg:jacaranda_planks', 2), ['#byg:jacaranda_logs']);
event.shapeless(Item.of('byg:mahogany_planks', 2), ['#byg:mahogany_logs']);
event.shapeless(Item.of('byg:white_mangrove_planks', 2), ['#byg:white_mangrove_logs']);
event.shapeless(Item.of('byg:maple_planks', 2), ['#byg:maple_logs']);
event.shapeless(Item.of('byg:nightshade_planks', 2), ['#byg:nightshade_logs']);
event.shapeless(Item.of('byg:palm_planks', 2), ['#byg:palm_logs']);
event.shapeless(Item.of('byg:pine_planks', 2), ['#byg:pine_logs']);
event.shapeless(Item.of('byg:rainbow_eucalyptus_planks', 2), ['#byg:rainbow_eucalyptus_logs']);
event.shapeless(Item.of('byg:redwood_planks', 2), ['#byg:redwood_logs']);
event.shapeless(Item.of('byg:skyris_planks', 2), ['#byg:skyris_logs']);
event.shapeless(Item.of('byg:willow_planks', 2), ['#byg:willow_logs']);
event.shapeless(Item.of('byg:zelkova_planks', 2), ['#byg:zelkova_logs']);
event.shapeless(Item.of('byg:sythian_planks', 2), ['#byg:sythian_logs']);
event.shapeless(Item.of('byg:embur_planks', 2), ['#byg:embur_logs']);



var materials20 = [
  "tin",
  "constantan",
  "invar",
  "signalum",
  "copper",
  "gold",
  "netherite",
  "enderium",
  "bronze",
  "lead",
  "silver",
  "nickel",
  "rose_gold",
  "iron",
  "lumium",
  "electrum"
];

materials20.forEach(function(material) {
  event.shaped('thermal:' + material + '_plate', [
    'BA',
    'A '
    ], {
    A: Item.of('#forge:ingots/' + material),
    B: 'immersiveengineering:hammer'})
});

var materials50 = [
  "steel"
];

materials50.forEach(function(material) {
  event.shaped('thermal:' + material + '_plate', [
    'BA',
    'A '
    ], {
    A: Item.of('#forge:ingots/' + material),
    B: 'immersiveengineering:hammer'})
});

var materials21 = [
  "soul_infused",
  "shellite",
  "twinite",
  "dragonsteel"
];

materials21.forEach(function(material) {
  event.shaped('thermal_extra:' + material + '_plate', [
    'BA',
    'A '
    ], {
    A: Item.of('#forge:ingots/' + material),
    B: 'immersiveengineering:hammer'})
});

var materials22 = [
  "uranium",
  "aluminum"
];

materials22.forEach(function(material) {
  event.shaped('immersiveengineering:plate_' + material, [
    'BA',
    'A '
    ], {
    A: Item.of('#forge:ingots/' + material),
    B: 'immersiveengineering:hammer'})
});

event.shaped('ftbic:iridium_plate', [
  'BA',
  'A '
  ], {
  A: Item.of('#forge:ingots/iridium'),
  B: 'immersiveengineering:hammer'}).damageIngredient(Item.of('immersiveengineering:hammer'))


  event.remove({id:'immersiveengineering:crafting/plate_electrum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'});
  event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'});
  
  event.remove({ input: 'ad_astra:hammer' })

  var materials23 = [
    "ostrum",
    "desh",
    "calorite"
  ];
  
  materials23.forEach(function(material) {
    event.shaped('ad_astra:' + material + '_plate', [
      'BA',
      'A '
    ], {
      A: Item.of('#forge:ingots/' + material),
      B: 'immersiveengineering:hammer'
    })
  });
  
  var materials24 = [
    "ostrum",
    "desh",
    "calorite"
  ];
  
  materials24.forEach(function(material) {
    event.remove({id: 'immersiveengineering:crafting/plate_' + material + '_hammering'});
  });
  
  var materials25 = [
    "invar",
    "lumium",
    "rose_gold",
    "signalum",
    "tin",
    "enderium",
    "copper",
    "netherite",
    "bronze"
  ];
  
  materials25.forEach(function(material) {
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": "forge:ingots/" + material
        }
      ],
      "results": [
        {
          "item": "thermal:" + material + "_plate",
          "count": 1
        }
      ]
    });
  });
  
  var materials26 = [
    "dragonsteel",
    "shellite",
    "soul_infused",
    "twinite"
  ];
  
  materials26.forEach(function(material) {
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": "forge:ingots/" + material
        }
      ],
      "results": [
        {
          "item": "thermal_extra:" + material + "_plate",
          "count": 1
        }
      ]
    });
  });

  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
      "tag": "forge:ingots/iridium"
      }
    ],
    "results": [
      {
      "item": "ftbic:iridium_plate",
      "count": 1
      }
    ]
    })
//

var materials27 = [
  "silver",
  "nickel",
  "copper",
  "netherite",
  "electrum",
  "invar",
  "lumium",
  "rose_gold",
  "signalum",
  "constantan",
  "steel"
];

materials27.forEach(function(material) {
  event.custom({
    "type": "ftbic:rolling",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "thermal:" + material + "_plate"
      }
    ]
  });
});

var materials28 = [
  "dragonsteel",
  "shellite",
  "soul_infused",
  "twinite"
];

materials28.forEach(function(material) {
  event.custom({
    "type": "ftbic:rolling",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "thermal_extra:" + material + "_plate"
      }
    ]
  });
});

var materials29 = [
  "ostrum",
  "desh",
  "calorite"
];

materials29.forEach(function(material) {
  event.custom({
    "type": "ftbic:rolling",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "ad_astra:" + material + "_plate"
      }
    ]
  });
});

event.recipes.thermal.press('ftbic:iridium_plate', '#forge:ingots/iridium')


var materials37 = [
  "endsteel",
  "darksteel"
];

materials37.forEach(function(material) {
var recipe = {
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/" + material
    },
    "B": {
      "tag": "forge:nuggets/" + material
    }
  },
  "result": {
    "item": "kubejs:" + material + "_gear"
  }
};

event.custom(recipe);
});

var materials39 = ["endsteel", "darksteel"];
materials39.forEach(function(material) {
  
  event.custom({
    "type": "ftbic:extruding",
    "inputItems": [
      {
        "count": 4,
        "ingredient": {
          "tag": "forge:plates/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "kubejs:" + material + "_gear"
      }
    ]
  });
});

var materials40 = [
  "endsteel",
  "darksteel",
  "emerald",
  "diamond",
  "lapis",
  "quartz"
];

materials40.forEach(function(material) {
  event.shaped('kubejs:plate_' + material, [
    'BA',
    'A '
    ], {
    A: Item.of('#forge:gemingot/' + material ),
    B: 'immersiveengineering:hammer'})
});

var materials41 = [
  "endsteel",
  "darksteel",
  "emerald",
  "diamond",
  "lapis",
  "quartz"
];

materials41.forEach(function(material) {
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "tag": "forge:gemingot/" + material
      }
    ],
    "results": [
      {
        "item": "kubejs:plate_" + material ,
        "count": 1
      }
    ]
  });
});

var materials42 = [
  "endsteel",
  "darksteel",
  "emerald",
  "diamond",
  "lapis",
  "quartz"
];

materials42.forEach(function(material) {
  event.custom({
    "type": "ftbic:rolling",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:gemingot/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "kubejs:plate_" + material ,
      }
    ]
  });
});


event.shapeless(
	Item.of('kubejs:nugget_lapis', 9), // output
	['thermal:lapis_dust'] //input
	)

  event.shapeless(
    Item.of('thermal:lapis_dust', 3), // output
    ['immersiveengineering:hammer', "minecraft:lapis_lazuli", "minecraft:lapis_lazuli", "minecraft:lapis_lazuli"] //input
  )

//

event.shapeless(
  Item.of('kubejs:darksteel_nugget', 9), // output
  ['kubejs:darksteel_ingot'] //input
)

event.shapeless(
  Item.of('kubejs:endsteel_nugget', 9), // output
  ['kubejs:endsteel_ingot'] //input
)

event.shapeless(
  Item.of('kubejs:nugget_quartz', 9), // output
  ['minecraft:quartz'] //input
)


event.shaped('kubejs:plate_diamond', [
  'BA',
  'A '
  ], {
  A: Item.of('#forge:gemingot/diamond' ),
  B: 'immersiveengineering:hammer'})

  var materials43 = [
    "endsteel",
    "darksteel",
    "emerald",
    "lapis",
    "quartz"
  ];
  
  materials43.forEach(function(material) {
    event.shaped('kubejs:plate_' + material, [
      'BA',
      'A '
    ], {
      A: Item.of('#forge:gemingot/' + material),
      B: 'immersiveengineering:hammer'
    })
  });
  
  event.recipes.thermal.press('kubejs:plate_endsteel', '#forge:gemingot/endsteel')
  event.recipes.thermal.press('kubejs:plate_darksteel', '#forge:gemingot/darksteel')
  event.recipes.thermal.press('kubejs:plate_emerald', '#forge:gemingot/emerald')
  event.recipes.thermal.press('kubejs:plate_diamond', '#forge:gemingot/diamond')
  event.recipes.thermal.press('kubejs:plate_lapis', '#forge:gemingot/lapis')
  event.recipes.thermal.press('kubejs:plate_quartz', '#forge:gemingot/quartz')
  event.recipes.thermal.press('kubejs:osmium_plate', '#forge:ingots/osmium')
  

  event.recipes.immersiveengineeringMetalPress('kubejs:plate_endsteel', '#forge:gemingot/endsteel', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:plate_darksteel', '#forge:gemingot/darksteel', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:plate_emerald', '#forge:gemingot/emerald', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:plate_diamond', '#forge:gemingot/diamond', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:plate_lapis', '#forge:gemingot/lapis', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:plate_quartz', '#forge:gemingot/quartz', 'immersiveengineering:mold_plate')
  event.recipes.immersiveengineeringMetalPress('kubejs:osmium_plate', '#forge:ingots/osmium', 'immersiveengineering:mold_plate')
  
  var materials2 = ["netherite","lapis","diamond","emerald","quartz","signalum","lumium","enderium"];
  materials2.forEach(function(material) {
    event.recipes.immersiveengineeringMetalPress('thermal:' + material + '_gear', '4x #forge:ingots/' + material , 'immersiveengineering:mold_gear');
  });
  
  var materials3 = ["soul_infused","shellite","twinite","dragonsteel"];
  materials3.forEach(function(material) {
    event.recipes.immersiveengineeringMetalPress('thermal_extra:' + material + '_gear', '4x #forge:ingots/' + material , 'immersiveengineering:mold_gear');
  });
  
  event.recipes.immersiveengineeringMetalPress('thermal:copper_plate', '#forge:ingots/copper', 'immersiveengineering:mold_plate')
  
  var materials30 = [
    "enderium",
    "signalum",
    "lumium",
    "netherite"
  ];
  
  materials30.forEach(function(material) {
    event.recipes.immersiveengineeringMetalPress('thermal:' + material + '_plate', '#forge:ingots/' + material, 'immersiveengineering:mold_plate');
  });
  
  event.recipes.immersiveengineeringArcFurnace(['2x kubejs:osmiridium_ingot'], 'mekanism:ingot_osmium', ['ftbic:iridium_alloy'])

  event.recipes.immersiveengineeringAlloy('2x kubejs:iron_aluminum_ingot', 'minecraft:iron_ingot', 'immersiveengineering:ingot_aluminum')


  var materials69 = [
    "brass"
  ];
  
  materials69.forEach(function(material) {
    event.custom({
      "type": "ftbic:rolling",
      "inputItems": [
        {
          "count": 1,
          "ingredient": {
            "tag": "forge:ingots/" + material
          }
        }
      ],
      "outputItems": [
        {
          "item": "create:" + material + "_sheet"
        }
      ]
    });
  });

  var materials70 = [
    "copper",
    "gold",
    "netherite",
    "signalum",
    "lumium",
    "enderium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "rose_gold"
  ];
  
  materials70.forEach(function(material) {
    event.custom({
      "type": "ad_astra:compressing",
      "input": {
        "tag": "forge:ingots/" + material
      },
      "output": {
        "id": "thermal:" + material + "_plate",
        "count": 1
      },
      "cookTime": 200
      });
  });

  var materials71 = [
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel"
  ];
  
  materials71.forEach(function(material) {
    event.custom({
      "type": "ad_astra:compressing",
      "input": {
        "tag": "forge:ingots/" + material
      },
      "output": {
        "id": "thermal_extra:" + material + "_plate",
        "count": 1
      },
      "cookTime": 200
      });
  });

  var materials72 = [
    "prismalium",
    "melodium",
    "stellarium"
  ];
  
  materials72.forEach(function(material) {
    event.custom({
      "type": "ad_astra:compressing",
      "input": {
        "tag": "forge:ingots/" + material
      },
      "output": {
        "id": "thermalendergy:" + material + "_plate",
        "count": 1
      },
      "cookTime": 200
      });
  });

  var materials73 = [
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel"
  ];
  
  materials73.forEach(function(material) {
    event.recipes.immersiveengineeringMetalPress('thermal_extra:' + material + '_plate', '#forge:ingots/'+ material, 'immersiveengineering:mold_plate');
  });

  var materials74 = [
    "prismalium",
    "melodium",
    "stellarium"
  ];
  
  materials74.forEach(function(material) {
    event.recipes.immersiveengineeringMetalPress('thermalendergy:' + material + '_plate', '#forge:ingots/'+ material, 'immersiveengineering:mold_plate');
  });

  var materials75 = [
    "prismalium",
    "melodium",
    "stellarium"
  ];
  
  materials75.forEach(function(material) {
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
        "tag": "forge:ingots/" + material
        }
      ],
      "results": [
        {
        "item": "thermalendergy:" + material + "_plate",
        "count": 1
        }
      ]
      });
  });

  var materials76 = [
    "prismalium",
    "melodium",
    "stellarium"
  ];
  
  materials76.forEach(function(material) {
    event.custom({
      "type": "ftbic:rolling",
      "inputItems": [
        {
        "count": 1,
        "ingredient": {
          "tag": "forge:ingots/" + material
        }
        }
      ],
      "outputItems": [
        {
        "item": "thermalendergy:" + material + "_plate"
        }
      ]
      });
  });

  var materials77 = [
    "copper",
    "netherite",
    "gold",
    "iron",
    "aluminum",
    "osmium",
    "uranium",
    "crimson_iron",
    "crimson_steel",
    "blaze_gold",
    "azure_silver",
    "azure_electrum",
    "tyrian_steel",
    "signalum",
    "lumium",
    "enderium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "rose_gold",
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel",
    "prismalium",
    "melodium",
    "stellarium",
    "steel",
    "iesnium",
    "refined_obsidian"

  ];
  
  materials77.forEach(function(material) {
    event.custom({
      "type": "integrateddynamics:squeezer",
      "item": {
        "tag": "forge:ingots/" + material,
      },
      "result": {
        "items": [
          {
            "tag": "forge:dusts/" + material,
            "count": 1
          }
        ]
      }
    })
    
    event.custom({
      "type": "integrateddynamics:mechanical_squeezer",
      "item": {
        "tag": "forge:ingots/" + material,
      },
      "result": {
        "items": [
          {
            "tag": "forge:dusts/" + material,
            "count": 1
          }
        ]
      },
      "duration": 40
    });
  });

  var materials78 = [
    "apatite",
    "cinnabar",
    "niter",
    "sulfur",
    "ender_pearl",
    "lapis",
    "emerald",
    "diamond",
    "quartz",
    "amethyst",
    "certus_quartz",
    "fluix",
    "soul_sand"

  ];
  
  materials78.forEach(function(material) {
    event.custom({
      "type": "integrateddynamics:squeezer",
      "item": {
        "tag": "forge:gems/" + material,
      },
      "result": {
        "items": [
          {
            "tag": "forge:dusts/" + material,
            "count": 1
          }
        ]
      }
    })
    
    event.custom({
      "type": "integrateddynamics:mechanical_squeezer",
      "item": {
        "tag": "forge:gems/" + material,
      },
      "result": {
        "items": [
          {
            "tag": "forge:dusts/" + material,
            "count": 1
          }
        ]
      },
      "duration": 40
    });
  });

  var materials79 = [
    "copper",
    "netherite",
    "gold",
    "iron",
    "aluminum",
    "osmium",
    "uranium",
    "crimson_iron",
    "crimson_steel",
    "blaze_gold",
    "azure_silver",
    "azure_electrum",
    "tyrian_steel",
    "signalum",
    "lumium",
    "enderium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "rose_gold",
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel",
    "prismalium",
    "melodium",
    "stellarium",
    "steel",
    "iesnium",
    "refined_obsidian"
  ];
  
  materials79.forEach(function(material) {
	  event.shapeless(
      Item.of('#forge:dusts/' + material),
      [ 
        '#forge:ingots/' + material, 'immersiveengineering:hammer'
      ]
      );
  });

  var materials80 = [
    "apatite",
    "cinnabar",
    "niter",
    "sulfur",
    "lapis",
    "emerald",
    "diamond",
    "quartz",

  ];
  
  materials80.forEach(function(material) {
	  event.shapeless(
      Item.of('#forge:dusts/' + material),
      [ 
        '#forge:gems/' + material, 'immersiveengineering:hammer'
      ])
      
      event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:gems/" + material},"result":{"tag":"forge:dusts/" + material},"secondaries":[]})
  
      event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:gems/" + material}},"output":{"item":"thermal:" + material + "_dust"}});
  });

  var materials81 = [
    "copper",
    "netherite",
    "gold",
    "iron",
    "aluminum",
    "osmium",
    "uranium",
    "crimson_iron",
    "crimson_steel",
    "blaze_gold",
    "azure_silver",
    "azure_electrum",
    "tyrian_steel",
    "signalum",
    "lumium",
    "enderium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "rose_gold",
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel",
    "prismalium",
    "melodium",
    "stellarium",
    "steel",
    "iesnium",
    "refined_obsidian"
  ];
  
  materials81.forEach(function(material) {
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "tag": "forge:ingots/" + material
        }
      ],
      "processingTime": 50,
      "results": [
        {
        "count": 1,
        "tag": "forge:dusts/" + material
        }
      ]
      });
  });

  var materials82 = [
    "apatite",
    "cinnabar",
    "niter",
    "sulfur",
    "lapis",
    "emerald",
    "quartz",
    "soul_sand",
    "amethyst",
  ];
  
  materials82.forEach(function(material) {
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "tag": "forge:gems/" + material
        }
      ],
      "processingTime": 50,
      "results": [
        {
        "count": 1,
        "tag": "forge:dusts/" + material
        }
      ]
      });
  });

  var materials83 = [
    "rose_gold",
    "enderium",
    "lumium",
    "signalum"
  ];
  
  materials83.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"thermal:" + material + "_dust"}});
  });

  var materials84 = [
    "prismalium",
    "melodium",
    "stellarium"
  ];

  materials84.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"thermalendergy:" + material + "_dust"}});
  });

  var materials85 = [
    "iesnium"
  ];

  materials85.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"occultism:" + material + "_dust"}});
  });

  var materials86 = [
    "soul_infused",
    "shellite",
    "twinite",
    "dragonsteel",
    "amethyst"
  ];

  materials86.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"thermal_extra:" + material + "_dust"}});
  });

  var materials87 = [
    "tyrian_steel",
    "azure_electrum",
    "azure_silver",
    "crimson_steel",
    "crimson_iron"
  ];

  materials87.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"silentgear:" + material + "_dust"}});
  });

  var materials88 = [
    "aluminum"
  ];

  materials88.forEach(function(material) {
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/" + material}},"output":{"item":"immersiveengineering:dust_" + material}});
  });

  //"fluix",
  //"soul_sand"
  //"amethyst",
  //"certus_quartz",
  //"ender",

  var materials89 = [
    "tin",
    "lead",
    "silver",
    "sulfur",
    "nickel",
    "niter",
    "cinnabar",
    "apatite"
  ];

  materials89.forEach(function(material) {
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:stone"
      },
      "output": {
        "type": "block",
        "block": "thermal:" + material + "_ore"
      },
      "weight": 7000
    });
  });

  var materials90 = [
    "tin",
    "lead",
    "silver",
    "sulfur",
    "nickel",
    "niter",
    "cinnabar",
    "apatite"
  ];

  materials90.forEach(function(material) {
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "thermal:deepslate_" + material + "_ore"
      },
      "weight": 7000
    });
  });

  var materials91 = [
    "osmium",
    "uranium",
    "fluorite"
  ];

  materials91.forEach(function(material) {
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:stone"
      },
      "output": {
        "type": "block",
        "block": "mekanism:" + material + "_ore"
      },
      "weight": 7000
    });
  });

  var materials92 = [
    "osmium",
    "uranium",
    "fluorite"
  ];

  materials92.forEach(function(material) {
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "mekanism:deepslate_" + material + "_ore"
      },
      "weight": 7000
    });
  });

  var materials100 = [
    "copper",
    "electrum",
    "aluminum",
    "steel",
    "lead",
    "iron",
    "gold",
    "enderium"
  ];

  materials100.forEach(function(material) {
    event.custom({
      "type": "thermal:press",
      "ingredients": [
        {
        "tag": "forge:ingots/" + material,
        "count": 1
        },
        {
        "item": "immersiveengineering:mold_wire"
        }
      ],
      "result": [
        {
        "tag": "forge:wires/" + material,
        "count": 2
        }
      ],
      "energy": 400
      });
  });

  var materials101 = [
    "fluix",
    "ametrine",
    "fluorite"
  ];

  materials101.forEach(function(material) {
    event.custom({
      "type": "create:mixing",
      "ingredients": [
          {
              "type": "forge:nbt",
              "item": "productivebees:configurable_honeycomb",
              "nbt": {
                  "EntityTag": {
                      "type": "productivebees:" + material
                  }
              }
          }
      ],
      "results": [
          {
              "tag": "forge:gems/" + material
          },
          {
              "item": "productivebees:wax"
          },
          {
              "fluid": "productivebees:honey",
              "amount": 100
          }
      ],
      "heatRequirement": "heated",
      "conditions": [
          {
              "type": "forge:mod_loaded",
              "modid": "create"
          },
          {
              "type": "productivebees:bee_exists",
              "bee": "productivebees:" + material
          }
      ]
  });
  });

  event.custom({
    "type": "create:mixing",
    "ingredients": [
        {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:bloody"
                }
            }
        }
    ],
    "results": [
        {
        "fluid": "evilcraft:blood",
        "amount": 100
        },
        {
            "item": "productivebees:wax"
        },

    ],
    "heatRequirement": "heated",
    "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "create"
        },
        {
            "type": "productivebees:bee_exists",
            "bee": "productivebees::bloody"
        }
    ]
})

var materials102 = [
  "ostrum",
  "calorite",
  "desh"
];

materials102.forEach(function(material) {
  event.custom({
    "type": "create:mixing",
    "ingredients": [
        {
            "type": "forge:nbt",
            "item": "productivebees:configurable_honeycomb",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:" + material
                }
            }
        }
    ],
    "results": [
        {
            "tag": "forge:raw_materials/" + material
        },
        {
            "item": "productivebees:wax"
        },
        {
            "fluid": "productivebees:honey",
            "amount": 100
        }
    ],
    "heatRequirement": "heated",
    "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "create"
        },
        {
            "type": "productivebees:bee_exists",
            "bee": "productivebees:" + material
        }
    ]
});
});

event.custom({
  "type": "create:mixing",
  "ingredients": [
      {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
              "EntityTag": {
                  "type": "productivebees:rose_gold"
              }
          }
      }
  ],
  "results": [
      {
      "tag": "forge:nuggets/rose_gold",
      "count": 3
      },
      {
          "item": "productivebees:wax"
      },
      {
        "fluid": "productivebees:honey",
        "amount": 100
      }
  ],
  "heatRequirement": "heated",
  "conditions": [
      {
          "type": "forge:mod_loaded",
          "modid": "create"
      },
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees::rose_gold"
      }
  ]
})

event.custom({
  "type": "create:mixing",
  "ingredients": [
      {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
              "EntityTag": {
                  "type": "productivebees:radioactive"
              }
          }
      }
  ],
  "results": [
      {
      "tag": "forge:dusts/uranium"
      },
      {
          "item": "productivebees:wax"
      },
      {
        "fluid": "productivebees:honey",
        "amount": 100
      }
  ],
  "heatRequirement": "heated",
  "conditions": [
      {
          "type": "forge:mod_loaded",
          "modid": "create"
      },
      {
          "type": "productivebees:bee_exists",
          "bee": "productivebees::radioactive"
      }
  ]
})

var materials103 = [
  "white",
  "orange",
  "magenta",
  "yellow",
  "lime",
  "pink",
  "gray",
  "light_gray",
  "cyan",
  "purple",
  "blue",
  "brown",
  "green",
  "red",
  "black"
];

materials103.forEach(function(material) {
  event.remove({id: "refinedstorage:pattern_grid/" + material + "_pattern_grid"});
});

materials103.forEach(function(material) {
  event.remove({id: "refinedstorage:fluid_grid/" + material + "_fluid_grid"});
});

materials103.forEach(function(material) {
  event.remove({id: "refinedstorage:crafting_grid/" + material + "_crafting_grid"});
});


var materials104 = [
  "desh",
  "ostrum",
  "calorite"

];

materials104.forEach(function(material) {
  event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:raw_materials/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "ad_astra:" + material + "_nugget",
        "count": 9
      },
      {
        "chance": 0.35,
        "item": "ad_astra:" + material + "_nugget"
        ,
        "count": 9
      }
    ]
  });
});

var materials105 = [
  "falsite",
  "ventium",
  "horizonite"

];

materials105.forEach(function(material) {
  event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "blue_skies:raw_materials/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "blue_skies:" + material + "_nugget",
        "count": 9
      },
      {
        "chance": 0.35,
        "item": "blue_skies:" + material + "_nugget"
        ,
        "count": 9
      }
    ]
  });
});

var materials106 = [
  "zinc"

];

materials106.forEach(function(material) {
  event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:raw_materials/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "create:" + material + "_nugget",
        "count": 9
      },
      {
        "chance": 0.35,
        "item": "create:" + material + "_nugget",
        "count": 9
      }
    ]
  });
});

var materials107 = [
  "osmium"

];

materials107.forEach(function(material) {
  event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:raw_materials/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "mekanism:dust_" + material,
        "count": 1
      },
      {
        "chance": 0.35,
        "item": "mekanism:dust_" + material,
        "count": 1
      }
    ]
  });
});

var materials108 = [
  "crimson_iron",
  "azure_silver"

];

materials108.forEach(function(material) {
  event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:raw_materials/" + material
        }
      }
    ],
    "outputItems": [
      {
        "item": "silentgear:" + material + "_dust",
        "count": 1
      },
      {
        "chance": 0.35,
        "item": "silentgear:" + material + "_dust",
        "count": 1
      }
    ]
  });
});

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "item": "mythicbotany:raw_elementium"
      }
    }
  ],
  "outputItems": [
    {
      "item": "botania:elementium_nugget",
      "count": 9
    },
    {
      "chance": 0.35,
      "item": "botania:elementium_nugget",
      "count": 9
    }
  ]
})

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:raw_materials/arcane"
      }
    }
  ],
  "outputItems": [
    {
      "item": "ars_nouveau:source_gem",
      "count": 1
    },
    {
      "chance": 0.35,
      "item": "ars_nouveau:source_gem",
      "count": 1
    }
  ]
})

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:raw_materials/nickel"
      }
    }
  ],
  "outputItems": [
    {
      "item": "thermal:nickel_dust",
      "count": 1
    },
    {
      "chance": 0.35,
      "item": "thermal:nickel_dust",
      "count": 1
    }
  ]
})

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:raw_materials/silver"
      }
    }
  ],
  "outputItems": [
    {
      "item": "thermal:silver_dust",
      "count": 1
    },
    {
      "chance": 0.35,
      "item": "thermal:silver_dust",
      "count": 1
    }
  ]
})

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:raw_materials/platinum"
      }
    }
  ],
  "outputItems": [
    {
      "item": "exnihilosequentia:platinum_nugget",
      "count": 9
    },
    {
      "chance": 0.35,
      "item": "exnihilosequentia:platinum_nugget",
      "count": 9
    }
  ]
})

event.custom({
  "type": "ftbic:macerating",
  "inputItems": [
    {
      "count": 1,
      "ingredient": {
        "tag": "forge:raw_materials/iesnium"
      }
    }
  ],
  "outputItems": [
    {
      "item": "occultism:iesnium_dust",
      "count": 1
    },
    {
      "chance": 0.35,
      "item": "occultism:iesnium_dust",
      "count": 1
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "count": 2,
      "ingredient": {
        "item": "ftbic:antimatter"
      }
    }
  ],
  "outputItems": [
    {
      "item": "kubejs:antimatter_rod"
    }
  ]
})

event.recipes.immersiveengineeringMetalPress('kubejs:antimatter_rod', '#forge:plates/antimatter', 'immersiveengineering:mold_rod')

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
    "tag": "forge:plates/antimatter"
    },
    {
    "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
    "tag": "forge:rods/antimatter"
    }
  ],
  "energy": 400
  })

  event.custom({
    "type": "ftbic:extruding",
    "inputItems": [
      {
        "count": 4,
        "ingredient": {
          "item": "mekanism:hdpe_pellet"
        }
      }
    ],
    "outputItems": [
      {
        "item": "mekanism:hdpe_rod"
      }
    ]
  })
  
  event.recipes.immersiveengineeringMetalPress('mekanism:hdpe_rod', '4x mekanism:hdpe_pellet', 'immersiveengineering:mold_rod')
  
  event.custom({
    "type": "thermal:press",
    "ingredients": [
      {
      "item": "mekanism:hdpe_pellet",
      "count": 2
      },
      {
      "item": "thermal:chiller_rod_cast"
      }
    ],
    "result": [
      {
      "item": "mekanism:hdpe_rod"
      }
    ],
    "energy": 400
    })








    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:storage_blocks/diamond"}},"output":{"count":9, "item":"mekanism:enriched_diamond"}})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:storage_blocks/coal"}},"output":{"count":9, "item":"mekanism:enriched_carbon"}})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:storage_blocks/redstone"}},"output":{"count":9, "item":"mekanism:enriched_redstone"}})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"kubejs:aquamarine_block"}},"output":{"count":9, "item":"kubejs:enriched_aquamarine"}})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"kubejs:gold_dust_pile"}},"output":{"count":9, "item":"mekanism:enriched_gold"}})







    var materials109 = [
      "oak",
      "spruce",
      "birch",
      "jungle",
      "acacia",
      "dark_oak",
      "crimson",
      "warped"
    ];

    materials109.forEach(function(material) {
      event.remove({output:'productivebees:expansion_box_' + material});
    });
    
    materials109.forEach(function(material) {
      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "tag": "chipped:" + material + "_planks"
          },
          "B": {
            "item": "minecraft:honeycomb"
          },
          "C": {
            "item": "kubejs:tier4_crafting_seed"
          }
        },
        "result": {
          "item": "productivebees:expansion_box_" + material
        }
      });
    });

    var materials110 = [
      "aspen",
      "willow",
      "maple"
    ];

    materials110.forEach(function(material) {
      event.remove({output:'productivebees:expansion_box_' + material});
    });
    
    materials110.forEach(function(material) {
      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "byg:" + material + "_planks"
          },
          "B": {
            "item": "minecraft:honeycomb"
          },
          "C": {
            "item": "kubejs:tier4_crafting_seed"
          }
        },
        "result": {
          "item": "productivebees:expansion_box_" + material
        }
      });
    });

    var materials111 = [
      "fir",
      "palm",
      "cherry",
      "redwood",
      "mahogany",
      "jacaranda"
    ];

    materials111.forEach(function(material) {
      event.remove({output:'productivebees:expansion_box_bop_' + material});
    });
    
    materials111.forEach(function(material) {
      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "byg:" + material + "_planks"
          },
          "B": {
            "item": "minecraft:honeycomb"
          },
          "C": {
            "item": "kubejs:tier4_crafting_seed"
          }
        },
        "result": {
          "item": "productivebees:expansion_box_bop_" + material
        }
      });
    });

    event.remove({output:'productivebees:expansion_box_bop_magic'})


    var materials112 = [
      "iron",
      "gold",
      "copper",
      "netherite",
      "signalum",
      "lumium",
      "enderium",
      "aluminum",
      "uranium",
      "soul_infused", "shellite", "twinite", "dragonsteel", "darksteel", "diamond", "lapis", "quartz", "tin", "lead", "silver", "nickel", "bronze", "electrum", "invar", "constantan", "zinc", "iridium", "steel", "rose_gold", "prismalium", "melodium", "stellarium", "desh", "ostrum", "calorite", "brass",
    ];
    
    materials112.forEach(function(material) {
      event.custom({
        "type": "thermal:press",
        "ingredients": [
          {
          "tag": "forge:storage_blocks/" + material
          }
        ],
        "result": [
          {
          "tag": "forge:plates/" + material,
          "count": 9
          }
        ],
        "energy": 25000
        });
    });






})

