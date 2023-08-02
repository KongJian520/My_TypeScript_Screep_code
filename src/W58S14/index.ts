import roleBuilderW58S14
  from "./creeps/Builder"
import roleUpgraderW58S14
  from "./creeps/Upgrader"
import roleHarvesterW58S14
  from "./creeps/Harvester"
import roleCarrierW58S14
  from "./creeps/carrier"
import roleCollectorW58S14
  from "./creeps/Collector"
import roleRepairW58S14
  from "./creeps/repair"
import tower
  from "./utils/tower"
import roletransferW58S14
  from "./creeps/transfer"
import roleDismveableminer2
  from "./creeps/dismoveableminer2"
import roleMinerW58S14
  from "./creeps/Miner"
import roledismoveabletrasferW58S14
  from "./creeps/dismoveabletrasfer"
import roleDismveableminerW58S14
  from "./creeps/dismoveableminer"

import roleRemoteBuilderW58S14
  from "./creeps/remoteBuilder"
import roleRemoteRepairW58S14
  from "./creeps/remoteRepairer"
import roleRemoteHavsterW58S14
  from "./creeps/remoteHavster"
import roleremoteAttackerW58S14
  from "./creeps/remoteattacker"
import EXMANW58S14
  from "./creeps/EXMAN"
import roleEyeW58S14
  from "./creeps/eye"
import roleEyeW58S13
  from "./creeps/EyeW58S13"
import roleClaim
  from "./creeps/claim"
import roleClaimW58S13
  from "./creeps/claimW58S13"
import link
  from "./utils/link"
import autoSpawn
  from "./utils/autoSpawn";


const W58S14 = {
  work: function (W58S14: Room) {
    if (Game.time % 2 === 0) {
      console.log('----------------W58S14-------------------')
      if (W58S14.storage) {
        console.log('Storge-RESOURCE_ENERGY = ' + W58S14.storage.store.getUsedCapacity(RESOURCE_ENERGY))
      }
      link.run()
      console.log('Spawn2能量:' + W58S14.energyAvailable + "/" + W58S14.energyCapacityAvailable)
      // 遍历 Spawn 并执行逻辑
      for (const Spawns of W58S14.find(FIND_MY_SPAWNS)) {
        // 执行你的 Spawn 相关逻辑，比如生成单位、孵化等
        if (Spawns.spawning) {
          const spawningCreep = Game.creeps[Spawns.spawning.name];
          Spawns.room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Spawns.pos.x + 1, Spawns.pos.y,
            {
              align: 'left',
              opacity: 0.8
            });
          console.log(`${Spawns.name} is Spawning ${spawningCreep.memory.role}`)
        } else {
          autoSpawn.spawn(Spawns);
        }
      }
    }
    // const W58S14Spawn = Game.spawns['Spawn2']

    // console.log(Game.rooms['W58S14'].energyAvailable)
    tower.run();
    for (const name in Game.creeps) {
      const creep = Game.creeps[name];
      switch (creep.memory.role) {
        case 'HarvesterW58S14':
          roleHarvesterW58S14.run(creep);
          break;
        case 'BuilderW58S14':
          roleBuilderW58S14.run(creep);
          break;
        case 'UpgraderW58S14':
          roleUpgraderW58S14.run(creep);
          break;
        case 'CarrierW58S14':
          roleCarrierW58S14.run(creep);
          break;
        case 'CollectorW58S14':
          roleCollectorW58S14.run(creep);
          break;
        case 'RepairW58S14':
          roleRepairW58S14.run(creep);
          break;
        case 'Dismveableminer2W58S14':
          roleDismveableminer2.run(creep);
          break;
        case 'transferW58S14':
          roletransferW58S14.run(creep);
          break;
        case 'MinerW58S14':
          roleMinerW58S14.run(creep);
          break;
        case 'dismoveabletrasferW58S14':
          roledismoveabletrasferW58S14.run(creep);
          break;
        case 'RemoteBuilderW58S14':
          roleRemoteBuilderW58S14.run(creep);
          break;
        case 'RemoteRepairW58S14':
          roleRemoteRepairW58S14.run(creep);
          break;
        case 'RemoteHavsterW58S14':
          roleRemoteHavsterW58S14.run(creep);
          break;
        case 'RemoteAttackerW58S14':
          roleremoteAttackerW58S14.run(creep);
          break;
        case 'EyeW58S14':
          roleEyeW58S14.run(creep);
          break;
        case 'EyeW58S13':
          roleEyeW58S13.run(creep);
          break;
        case 'claimW58S14':
          roleClaim.run(creep);
          break;
        case 'claimW58S13':
          roleClaimW58S13.run(creep);
          break;
        case 'EXMANW58S14':
          EXMANW58S14.run(creep);
          break;
        case 'DismveableminerW58S14':
          roleDismveableminerW58S14.run(creep);
          break;
      }
    }
  }
}

export default W58S14
