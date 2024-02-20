const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')




INFUSETYPE.register('aquamarine', 0x7afdff)
INFUSETYPE.register('enderium', 0x0a2f56)
INFUSETYPE.register('black_quartz', 0x191716)



INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())
ClientEvents.lang('en_us', event => {
    event.add('infuse_type.kubejs.aquamarine', "Aquamarine")
    event.add('infuse_type.kubejs.enderium', "Enderium")
    event.add('infuse_type.kubejs.black_quartz', "Black Quartz")
})

