ItemEvents.modification(event => {
    event.modify('rftoolscontrol:ram_chip', item => {
      item.maxStackSize = 64
    })

    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })

    event.modify('minecraft:bucket', item => {
      item.maxStackSize = 64
    })

    event.modify('minecraft:snowball', item => {
      item.maxStackSize = 64
    })

    event.modify('infused_crystals:infused_redstonium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:infused_diamondium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:infused_emeraldium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:infused_coalium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:infused_ironium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:infused_lapisium_crystal', item => {
      item.rarity = "RARE"
    })

    event.modify('kubejs:infused_goldium', item => {
      item.rarity = "RARE"
    })

    //

    event.modify('infused_crystals:block_of_infused_redstonium', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:block_of_infused_lapisium', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:block_of_infused_ironium', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:block_of_infused_diamondium', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:block_of_infused_emeraldium', item => {
      item.rarity = "RARE"
    })

    event.modify('infused_crystals:block_of_infused_coalium', item => {
      item.rarity = "RARE"
    })

    event.modify('kubejs:infused_goldium_block', item => {
      item.rarity = "RARE"
    })



//    event.modify('minecraft:ancient_debris', item => {
//     item.rarity = "RARE"
//      item.burnTime = 16000
//    })
//    event.modify('minecraft:turtle_helmet', item => {
//      item.rarity = "EPIC"
//      item.maxDamage = 481
//      item.craftingRemainder = Item.of('minecraft:scute').item
//    })
  })