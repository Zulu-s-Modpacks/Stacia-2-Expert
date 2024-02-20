WorldgenEvents.add(event => {
    // use the anchors helper from the event
    const { anchors } = event
  
    event.addOre(ore => {
  
      // examples on how to use targets
      ore.addTarget('#minecraft:stone_ore_replaceables', 'kubejs:arcane_ore') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone
      ore.addTarget('minecraft:deepslate', 'kubejs:arcane_ore')       // replace Deepslate with Nether Wart Blocks
  
      ore.count([45])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
          anchors.aboveBottom(32),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
          anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
  
      // more, optional parameters (default values are shown here)
      ore.size = 5                          // max. vein size
      ore.noSurface = 0.5                     // chance to discard if the ore would be exposed to air
      ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
      ore.chance = 0							            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })
  

  })

//

WorldgenEvents.remove(event => {
  // print all features for a given biome filter
  event.printFeatures('', 'minecraft:plains')

  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'underground_ores'
    // ...and by biome
    props.biomes = [
      { category: 'icy' },
      { category: 'savanna' },
      { category: 'mesa' }
    ]

    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = ['mekanism:tin_ore', 'mekanism:lead_ore', 'ftbic:tin_ore', 'ftbic:uranium_ore', 'ftbic:lead_ore', 'immersiveengineering:ore_lead', 'immersiveengineering:ore_uranium', 'farmersdelight:rich_soil','farmersdelight:rich_soil_farmland']

    //ftb
    props.blocks = ['ftbic:tin_ore', 'ftbic:lead_ore', 'ftbic:uranium_ore', 'ftbic:aluminum_ore', 'ftbic:deepslate_tin_ore', 'ftbic:deepslate_lead_ore', 'ftbic:deepslate_uranium_ore', 'ftbic:deepslate_aluminum_ore']
    //immersive
    props.blocks = ['immersiveengineering:ore_lead', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:ore_silver', 'immersiveengineering:deepslate_ore_silver', 'immersiveengineering:ore_nickel', 'immersiveengineering:deepslate_ore_nickel', 'immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium']
    //occultism
    props.blocks = ['occultism:silver_ore', 'occultism:silver_ore_deepslate']
    //mekanism
    props.blocks = ['mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:lead_ore', 'mekanism:deepslate_lead_ore']

   
  })

  // remove features by their id (first argument is a generation step)
})
  