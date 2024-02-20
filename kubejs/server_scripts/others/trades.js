// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
MoreJSEvents.villagerTrades((event) => {
    
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 3);
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 2);
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 1);
});
