import roleBuilder from "./creeps/Builder";
import roleHarvester from './creeps/Harvester'
import roleUpgrader from "creeps/Upgrader";

import roleminer from "./creeps/miner";
import roleCarrier from "./creeps/carrier";
import roleRepair from "creeps/repair";

import roleCollector from "creeps/Collector";
import roleDismveableminer from "creeps/dismoveableminer";
import roleDismveableminer2 from "creeps/dismoveableminer2";
import roleAttacker from "creeps/attacker";
import roleClaim from "creeps/claim";

import autoSpawn from "utils/autoSpawn";
import roleChaiQian from "creeps/remoteChaiQian";
import roleRemoteHavster from "creeps/remoteHavster";
import roletransfer from "creeps/transfer";
import roleRemoteBuilder from "creeps/remoteBuilder";
import tower from "utils/tower";
import roleThief from "creeps/thief";
import roleremoteAttacker from "creeps/remoteattacker";
import roleEye from "creeps/eye";

// Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, MOVE], "test1",{ memory: { role: 'dismoveableminer', room: '', working: false } })
// Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE,MOVE, MOVE, MOVE], "claim"+Game.time,{ memory: { role: 'claim', room: '', working: false } })
// Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );


declare global {

  interface Memory {
    uuid: number;
    log: any;
  }
  interface CreepMemory {
    role: string;
    room: string;
    working: boolean;
    needToRenew: boolean;

  }
  namespace NodeJS {
    interface Global {
      log: any;
    }
  }
}

console.log('=========================================')
console.log("code is Updated!...,The Game tickis .." + Game.time)
console.log('=========================================')



export const loop = () => {


  autoSpawn.spawn();
  tower.run();

  if (Game.spawns['Spawn1'].spawning) {
    var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    Game.spawns['Spawn1'].room.visual.text(
      '🛠️' + spawningCreep.memory.role,
      Game.spawns['Spawn1'].pos.x + 1,
      Game.spawns['Spawn1'].pos.y,
      { align: 'left', opacity: 0.8 });
  }

  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      // console.log('Clearing non-existing creep memory:', name);
    }
  }

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    // if (creep.ticksToLive) {
    //   if (creep.ticksToLive < 200) {
    //     if (Game.spawns["Spawn1"].renewCreep(creep) == ERR_NOT_IN_RANGE) {
    //       creep.moveTo(new RoomPosition(31, 36, 'W58S16'))
    //     }
    //   }
    //   else {
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
      // Game.spawns['Spawn1'].recycleCreep(creep)
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
    if (creep.memory.role == 'remoteBuilder') {
      roleRemoteBuilder.run(creep);
    }
    if (creep.memory.role == 'transfer') {
      roletransfer.run(creep);
    }
    if (creep.memory.role == 'thief') {
      roleThief.run(creep);
    }
    if (creep.memory.role == 'remoteAttacker') {
      roleremoteAttacker.run(creep);
    }
    if (creep.memory.role == 'ChaiQian') {
      roleChaiQian.run(creep);
    }
    if (creep.memory.role == 'eye') {
      roleEye.run(creep);
    }
    // }
    // }
  }
};
