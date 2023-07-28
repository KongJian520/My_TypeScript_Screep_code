import roleBuilderW58S14 from "./creeps/Builder"
import roleUpgraderW58S14 from "./creeps/Upgrader"
import roleHarvesterW58S14 from "./creeps/Harvester"
import roleCarrierW58S14 from "./creeps/carrier"
import roleCollectorW58S14 from "./creeps/Collector"
import roleRepairW58S14 from "./creeps/repair"
import tower from "./utils/tower"
import roletransferW58S14 from "./creeps/transfer"
import roleDismveableminer2 from "./creeps/dismoveableminer2"
import roleMinerW58S14 from "./creeps/Miner"
import roledismoveabletrasferW58S14 from "./creeps/dismoveabletrasfer"
import roleDismveableminerW58S14 from "./creeps/dismoveableminer"

import roleRemoteBuilderW58S14 from "./creeps/remoteBuilder"
import roleRemoteRepairW58S14 from "./creeps/remoteRepairer"
import roleRemoteHavsterW58S14 from "./creeps/remoteHavster"
import roleEyeW58S14 from "./creeps/eye"
import roleClaim from "./creeps/claim"

import W58S14autoSpawn from "./utils/autoSpawn"
import link from "./utils/link"


const W58S16 = {
    work: function () {
        const W58S14 = Game.rooms['W58S14']
        const W58S14Spawn = Game.spawns['Spawn2']
        if (Game.time % 2 === 0) {
            console.log('----------------W58S14-------------------')
            W58S14autoSpawn.spawn();
            if (W58S14.storage) {
                console.log('Storge-RESOURCE_ENERGY = ' + W58S14.storage.store.getUsedCapacity(RESOURCE_ENERGY))
            }
            link.run()
            console.log('Spawn2能量:' + W58S14.energyAvailable + "/" + W58S14.energyCapacityAvailable)

        }
        // console.log(Game.rooms['W58S14'].energyAvailable)
        tower.run();
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
            switch (creep.memory.role) {
                case 'HarvesterW58S14': roleHarvesterW58S14.run(creep); break;
                case 'BuilderW58S14': roleBuilderW58S14.run(creep); break;
                case 'UpgraderW58S14': roleUpgraderW58S14.run(creep); break;
                case 'CarrierW58S14': roleCarrierW58S14.run(creep); break;
                case 'CollectorW58S14': roleCollectorW58S14.run(creep); break;
                case 'RepairW58S14': roleRepairW58S14.run(creep); break;
                case 'Dismveableminer2W58S14': roleDismveableminer2.run(creep); break;
                case 'transferW58S14': roletransferW58S14.run(creep); break;
                case 'MinerW58S14': roleMinerW58S14.run(creep); break;
                case 'dismoveabletrasferW58S14': roledismoveabletrasferW58S14.run(creep); break;
                case 'RemoteBuilderW58S14': roleRemoteBuilderW58S14.run(creep); break;
                case 'RemoteRepairW58S14': roleRemoteRepairW58S14.run(creep); break;
                case 'RemoteHavsterW58S14': roleRemoteHavsterW58S14.run(creep); break;
                case 'EyeW58S14': roleEyeW58S14.run(creep); break;
                case 'claimW58S14': roleClaim.run(creep); break;
                case 'DismveableminerW58S14': roleDismveableminerW58S14.run(creep); break;
            }
        }
    }
}

export default W58S16
