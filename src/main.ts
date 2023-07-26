/// <reference types="@screepscn/types" />+

import W58S16 from './W58S16/index'
import W58S14 from './W58S14/index';
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
  console.log("Game.time = " + Game.time )
  console.log("cpu.bucket="+Game.cpu.bucket)
  for (let roomname in Game.rooms) {
    if (roomname == 'W58S16') {
      W58S16.work();
    }
    if (roomname == 'W58S14'){
      W58S14.work();
    }
  }
};
