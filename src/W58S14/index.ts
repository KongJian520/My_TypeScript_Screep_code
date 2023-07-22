import roleBuilderW58S14 from "./creeps/Builder"
import roleUpgraderW58S14 from "./creeps/Upgrader"
import roleHarvesterW58S14 from "./creeps/Harvester"
import roleCarrierW58S14 from "./creeps/carrier"
import roleCollectorW58S14 from "./creeps/Collector"
import roleRepairW58S14 from "./creeps/repair"
import tower from "./utils/tower"

import roleDismveableminer2 from "./creeps/dismoveableminer2"

import W58S14autoSpawn from "./utils/autoSpawn"
const W58S16 = {
    work: function () {
        const W58S14 = Game.rooms['W58S14']
        const W58S14Spawn = Game.spawns['Spawn2']
        console.log('----------------W58S14-------------------')
        W58S14autoSpawn.spawn();
        tower.run();
        if (W58S14.storage) {
            console.log('Storge-RESOURCE_ENERGY = ' + W58S14.storage.store.getUsedCapacity(RESOURCE_ENERGY))
        }
        if (W58S14Spawn.spawning) {
            var spawningCreep = Game.creeps[W58S14Spawn.spawning.name];
            W58S14Spawn.room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                W58S14Spawn.pos.x + 1,
                W58S14Spawn.pos.y,
                { align: 'left', opacity: 0.8 });
        }

        for (var name in Game.creeps) {
            var creep = Game.creeps[name]
            if (creep.memory.role == 'HarvesterW58S14') {
                roleHarvesterW58S14.run(creep)
            } if (creep.memory.role == 'BuilderW58S14') {
                roleUpgraderW58S14.run(creep)
            } if (creep.memory.role == 'UpgraderW58S14') {
                roleUpgraderW58S14.run(creep)
            } if (creep.memory.role == 'CarrierW58S14') {
                roleCarrierW58S14.run(creep)
            } if (creep.memory.role == 'CollectorW58S14') {
                roleCollectorW58S14.run(creep)
            } if (creep.memory.role == 'RepairW58S14') {
                roleRepairW58S14.run(creep)
            } if (creep.memory.role == 'Dismveableminer2W58S14') {
                roleDismveableminer2.run(creep)
            }
        }
    }
}

export default W58S16
