let $JEIRecipeTypes = Java.loadClass('blusunrize.immersiveengineering.common.util.compat.jei.JEIRecipeTypes')

JEIAddedEvents.registerRecipeCatalysts(jei =>{
    jei.data.addRecipeCatalyst('immersiveengineering:alloybrick', $JEIRecipeTypes.ALLOY)
    jei.data.addRecipeCatalyst('immersiveengineering:blastbrick', $JEIRecipeTypes.BLAST_FURNACE)
    jei.data.addRecipeCatalyst('immersiveengineering:blastbrick_reinforced', $JEIRecipeTypes.BLAST_FURNACE)
    jei.data.addRecipeCatalyst('immersiveengineering:blastbrick', $JEIRecipeTypes.BLAST_FUEL)
    jei.data.addRecipeCatalyst('immersiveengineering:blastbrick_reinforced', $JEIRecipeTypes.BLAST_FUEL)
    jei.data.addRecipeCatalyst('immersiveengineering:cokebrick', $JEIRecipeTypes.COKE_OVEN)
})