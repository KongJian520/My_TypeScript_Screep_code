import tower
    from "./utils/tower";
import link
    from "./utils/link";
import terminalW58S16
    from "./utils/term";
import autoSpawn
    from "./utils/autoSpawn";
import harvester
    from "./creeps/Harvester";
import upgrader
    from "./creeps/Upgrader";
import builder
    from "./creeps/Builder";
import miner
    from "./creeps/miner";
import carrier
    from "./creeps/carrier";
import repair
    from "./creeps/repair";
import collector
    from "./creeps/Collector";
import dismoveableminer
    from "./creeps/dismoveableminer";
import dismoveableminer2
    from "./creeps/dismoveableminer2";
import dismveableminer3
    from './creeps/dismoveableminer3'
import attacker
    from "./creeps/attacker";
import claim
    from "./creeps/claim";
import remoteHavster
    from "./creeps/remoteHavster";
import RemoteHavster2
    from "./creeps/remoteHavster2";

import RemoteUpgrader
    from "./creeps/remoteUpgrader";
import transfer
    from "./creeps/transfer";
import thief
    from "./creeps/thief";
import remoteAttacker
    from "./creeps/remoteattacker"
import remoteAttackerW57S13
    from './creeps/remoteattacker2'
import ChaiQian
    from "./creeps/remoteChaiQian"
import eye
    from "./creeps/eye"
import dismoveabletrasfer
    from "./creeps/dismoveabletrasfer";
import RemoteRepair
    from "./creeps/remoteRepairer"
import RemoteBuilder
    from "./creeps/remoteBuilder";

const W58S16 = {
    work: function () {
        let name;
        const W58S16 = Game.rooms['W58S16']
        const Spawns = Game.spawns['Spawn1']
        if (Spawns.spawning) {
            const spawningCreep = Game.creeps[Spawns.spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});

        } else {
            autoSpawn.spawn(Spawns);
        }
        if (Game.time % 2 === 0) {
            console.log('----------------W58S16-------------------')
            console.log('Spawn1能量:' + W58S16.energyAvailable + "/" + W58S16.energyCapacityAvailable)
            if (Game.rooms['W58S16'].storage) {
                console.log('Storge-RESOURCE_ENERGY = ' + Game.rooms['W58S16'].storage.store.getUsedCapacity(RESOURCE_ENERGY))
            }
            for (name in Memory.creeps) {
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

        }
        for (name in Game.creeps) {
            {
                const creep = Game.creeps[name];
                // 优化后的代码
                switch (creep.memory.role) {
                    case 'harvester':
                        harvester.run(creep);
                        break;
                    case 'upgrader':
                        upgrader.run(creep);
                        break;
                    case 'builder':
                        builder.run(creep);
                        break;
                    case 'miner':
                        miner.run(creep);
                        break;
                    case 'carrier':
                        carrier.run(creep);
                        break;
                    case 'repair':
                        repair.run(creep);
                        break;
                    case 'collector':
                        collector.run(creep);
                        break;
                    case 'dismoveableminer':
                        dismoveableminer.run(creep);
                        break;
                    case 'dismoveableminer2':
                        dismoveableminer2.run(creep);
                        break;
                    case 'dismveableminer3':
                        dismveableminer3.run(creep);
                        break;
                    case 'attacker':
                        attacker.run(creep);
                        break;
                    case 'claim':
                        claim.run(creep);
                        break;
                    // case 'ChaiQian': roleChaiQian.run(creep); break;
                    case 'remoteHavster':
                        remoteHavster.run(creep);
                        break;
                    case 'RemoteHavster2':
                        RemoteHavster2.run(creep);
                        break;
                    case 'RemoteBuilder':
                        RemoteBuilder.run(creep);
                        break;
                    // case 'HealerW58S16':
                    //     HealerW58S16.run(creep);
                    //     break;
                    case 'RemoteUpgrader':
                        RemoteUpgrader.run(creep);
                        break;

                    // case 'transfer':
                    //     roletransfer.runEnergy(creep);
                    //     break;
                    case 'transfer':
                        transfer.runMineral(creep);
                        break;

                    case 'thief':
                        thief.run(creep);
                        break;
                    case 'remoteAttacker':
                        remoteAttacker.run(creep);
                        break;
                    case 'remoteAttackerW57S13':
                        remoteAttackerW57S13.run(creep);
                        break;

                    case 'ChaiQian':
                        ChaiQian.run(creep);
                        break;
                    case 'eye':
                        eye.run(creep);
                        break;
                    case 'dismoveabletrasfer':
                        dismoveabletrasfer.run(creep);
                        break;
                    case 'RemoteRepair':
                        RemoteRepair.run(creep);

                }
            }
        }
    }
}
export default W58S16
