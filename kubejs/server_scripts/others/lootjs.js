LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const stickWhenFortune = LootEntry.of("kubejs:raw_arcane")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const appleWhenSilkTouch = LootEntry.of("kubejs:arcane_ore").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const ironIngot = "kubejs:raw_arcane";

    event
        .addBlockLootModifier("kubejs:arcane_ore")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, ironIngot);
});

LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const sticka = LootEntry.of("kubejs:aquamarine")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const applea = LootEntry.of("kubejs:mana_sand").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const irona = "kubejs:aquamarine";

    event
        .addBlockLootModifier("kubejs:mana_sand")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(sticka, applea, irona);
});