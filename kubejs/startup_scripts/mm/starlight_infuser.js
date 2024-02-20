// Add Controllers
MMEvents.controllerRegistry(event => {
    event.create("starlight_controller").name("Starlight Infuser Controller").build()
})

// Add Port Blocks
MMEvents.portRegistry(event => {
    event.create("starlight_i_input").name("Starlight Infuser Item").input(true).port("mm:item").config({
        slotRows: 3,
        slotCols: 3
    }).build();
    
    event.create("starlight_i_output").name("Starlight Infuser Item").input(false).port("mm:item").config({
        slotRows: 2,
        slotCols: 2
    }).build();

    event.create("starlight_f_input").name("Starlight Infuser Fluid").input(true).port("mm:fluid").config({
        capacity: 32000
    }).build();







})