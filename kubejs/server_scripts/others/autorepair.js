const repairUpdateFrequency = 200 //in ticks.
const repairChance = 0.66 //1-repairChance = % so this is 33%
const repairAmount = 2
const xpCost = 2 //NOT levels.

PlayerEvents.tick(event => {
    let player = event.player
    let xpLevel = player.getXpLevel()
    let totalXp = player.getXp()

    if (event.level.time % repairUpdateFrequency !== 0) { return } //clever way to reduce frequency I saw from amerryelk's weight system script.

    let repair = true

    player.inventory.allItems.forEach(item => {
        //check if the item is not air, is enchanted with mending, is damaged, the player has enough xp, and is not mining a block.
        if (item.id != "air" && repair == true && item.isEnchanted() && item.hasEnchantment('mending', 1) && item.isDamaged() && (totalXp > 0 || (xpLevel > 0 && totalXp == 0) && Math.random() > repairChance) && !player.isMiningBlock()) {
            item.damageValue = item.damageValue - repairAmount
            player.giveExperiencePoints(-xpCost)
            repair = false
        }
    })
})