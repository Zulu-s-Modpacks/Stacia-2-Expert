EntityEvents.spawned((event) => {
    const { entity } = event;
    if (!entity.alive) return;
  
    entity.mergeNbt({
      ArmorDropChances: [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)],
      HandDropChances: [NBT.f(0), NBT.f(0)],
    })
});

EntityEvents.spawned((event) => {
    const { entity, entity: { nbt } } = event;
    if (!entity.alive) return;
  
    nbt.put('ArmorDropChances', NBT.listTag([NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)]));
    nbt.put('HandDropChances', NBT.listTag([NBT.f(0), NBT.f(0)]));
    entity.mergeNbt(nbt);
});