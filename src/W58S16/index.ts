import roleBuilder from "./creeps/Builder";
import roleHarvester from './creeps/Harvester'
import roleUpgrader from "./creeps/Upgrader";
import roleminer from "./creeps/miner";
import roleCarrier from "./creeps/carrier";
import roleRepair from "./creeps/repair";
import roleCollector from "./creeps/Collector";
import roleDismveableminer from "./creeps/dismoveableminer";
import roleDismveableminer2 from "./creeps/dismoveableminer2";
import roleDismveableminer3 from "./creeps/dismoveableminer3";
import roledismoveabletrasfer from './creeps/dismoveabletrasfer'
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
import roleremoteAttackerW57S13 from "./creeps/remoteattacker2";
import roleRemoteUpgrader from "./creeps/remoteUpgrader";
import roleRemoteHavster2 from "./creeps/remoteHavster2";

import roleHealerW58S16 from "./creeps/remoteHeller";

import roleRemoteRepair from "./creeps/remoteRepairer";
import roleEye from "./creeps/eye";

import link from "./utils/link";
import terminalW58S16 from "./utils/term";



const W58S16 = {
    work: function () {
        const W58S16 = Game.rooms['W58S16']
        if (Game.time % 2 === 0) {
            console.log('----------------W58S16-------------------')
            autoSpawn.spawn();
            console.log('Spawn1能量:' + W58S16.energyAvailable + "/" + W58S16.energyCapacityAvailable)
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
        if (Game.time % 10 === 0) {
            terminalW58S16.send();
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
                // 优化后的代码
                switch (creep.memory.role) {
                    case 'harvester': roleHarvester.run(creep); break;
                    case 'upgrader': roleUpgrader.run(creep); break;
                    case 'builder': roleBuilder.run(creep); break;
                    case 'miner': roleminer.run(creep); break;
                    case 'carrier': roleCarrier.run(creep); break;
                    case 'repair': roleRepair.run(creep); break;
                    case 'collector': roleCollector.run(creep); break;
                    case 'dismoveableminer': roleDismveableminer.run(creep); break;
                    case 'dismoveableminer2': roleDismveableminer2.run(creep); break;
                    case 'Dismveableminer3': roleDismveableminer3.run(creep); break;
                    case 'attacker': roleAttacker.run(creep); break;
                    case 'claim': roleClaim.run(creep); break;
                    // case 'ChaiQian': roleChaiQian.run(creep); break;
                    case 'remoteHavster': roleRemoteHavster.run(creep); break;
                    case 'RemoteHavster2': roleRemoteHavster2.run(creep); break;
                    case 'remoteBuilder': roleRemoteBuilder.run(creep); break;
                    case 'HealerW58S16': roleHealerW58S16.run(creep); break;
                    case 'RemoteUpgrader': roleRemoteUpgrader.run(creep); break;

                    // case 'transfer': roletransfer.runEnergy(creep); break;
                    case 'transfer': roletransfer.runMineral(creep); break;

                    case 'thief': roleThief.run(creep); break;
                    case 'remoteAttacker': roleremoteAttacker.run(creep); break;
                    case 'remoteAttackerW57S13': roleremoteAttackerW57S13.run(creep); break;

                    case 'ChaiQian': roleChaiQian.run(creep); break;
                    case 'eye': roleEye.run(creep); break;
                    case 'dismoveabletrasfer': roledismoveabletrasfer.run(creep); break;

                    case 'RemoteRepair': roleRemoteRepair.run(creep);

                }
            }
        }
    }
}
export default W58S16
