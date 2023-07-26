import roleBuilder from "./creeps/Builder";
import roleHarvester from './creeps/Harvester'
import roleUpgrader from "./creeps/Upgrader";
import roleminer from "./creeps/miner";
import roleCarrier from "./creeps/carrier";
import roleRepair from "./creeps/repair";
import roleCollector from "./creeps/Collector";
import roleDismveableminer from "./creeps/dismoveableminer";
import roleDismveableminer2 from "./creeps/dismoveableminer2";
import roleAttacker from "./creeps/attacker";
import roleClaim from "./creeps/claim";
import autoSpawn from "./utils/autoSpawn";
import roleChaiQian from "./creeps/remoteChaiQian";
import roleRemoteHavster from "./creeps/remoteHavster";
import roletransfer from "./creeps/transfer";
import roleRemoteBuilder from "./creeps/remoteBuilder";
import tower from "./utils/tower";
import roleThief from "./creeps/thief";
import roleremoteAttacker from "./creeps/remoteattacker";
import roleRemoteUpgrader from "./creeps/remoteUpgrader";

import roleRemoteRepair from "./creeps/remoteRepairer";
import roleEye from "./creeps/eye";

import link from "./utils/link";
import roledismoveabletrasfer from './creeps/dismoveabletrasfer'
import roleRemoteHavster2 from "./creeps/remoteHavster2";

const W58S16 = {

    work: function () {
        if (Game.time % 2 === 0) {
            console.log('----------------W58S16-------------------')
            autoSpawn.spawn();
            if (Game.rooms['W58S16'].storage) {
                console.log('Storge-RESOURCE_ENERGY = ' + Game.rooms['W58S16'].storage.store.getUsedCapacity(RESOURCE_ENERGY))
            }
            for (var name in Memory.creeps) {
                if (!Game.creeps[name]) {
                    delete Memory.creeps[name];
                    // console.log('Clearing non-existing creep memory:', name);
                }
            }
            link.run();
        }
        tower.run();
        if (Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                { align: 'left', opacity: 0.8 });
        }
        for (var name in Game.creeps) {
            {
                var creep = Game.creeps[name]
                if (creep.memory.role == 'harvester') {
                    roleHarvester.run(creep);
                }
                if (creep.memory.role == 'upgrader') {
                    roleUpgrader.run(creep);
                }
                if (creep.memory.role == 'builder') {
                    roleBuilder.run(creep);
                }
                if (creep.memory.role == 'miner') {
                    roleminer.run(creep);
                }
                if (creep.memory.role == 'carrier') {
                    roleCarrier.run(creep);
                }
                if (creep.memory.role == 'repair') {
                    roleRepair.run(creep)
                }
                if (creep.memory.role == 'collector') {
                    roleCollector.run(creep)
                }
                if (creep.memory.role == 'dismoveableminer') {
                    roleDismveableminer.run(creep);
                }
                if (creep.memory.role == 'dismoveableminer2') {
                    roleDismveableminer2.run(creep);
                }
                if (creep.memory.role == 'attacker') {
                    roleAttacker.run(creep);
                }
                if (creep.memory.role == 'claim') {
                    roleClaim.run(creep);
                }
                if (creep.memory.role == 'Chaiqiang') {
                    roleChaiQian.run(creep);
                }
                if (creep.memory.role == 'remoteHavster') {
                    roleRemoteHavster.run(creep);
                }
                if (creep.memory.role == 'RemoteHavster2') {
                    roleRemoteHavster2.run(creep);
                }
                if (creep.memory.role == 'remoteBuilder') {
                    roleRemoteBuilder.run(creep);
                }
                if (creep.memory.role == 'transfer') {
                    roletransfer.run(creep);
                }
                if (creep.memory.role == 'thief') {
                    // creep.suicide()
                    roleThief.run(creep);
                }
                if (creep.memory.role == 'remoteAttacker') {
                    roleremoteAttacker.run(creep);
                }
                if (creep.memory.role == 'ChaiQian') {
                    roleRemoteUpgrader.run(creep);
                }
                if (creep.memory.role == 'eye') {
                    roleEye.run(creep);
                }
                if (creep.memory.role == 'dismoveabletrasfer') {
                    roledismoveabletrasfer.run(creep);
                }
                if (creep.memory.role == 'RemoteUpgrader') {
                    roleRemoteUpgrader.run(creep);
                }
                if (creep.memory.role == 'RemoteRepair') {
                    roleRemoteRepair.run(creep);
                }
            }
        }
    }
}
export default W58S16
