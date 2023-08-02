/// <reference types="@screepscn/types" />+

import W58S16
    from './W58S16/index'
import W58S14
    from './W58S14/index';

// Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, MOVE], "test1",{ memory: { role: 'dismoveableminer', room: '', working: false } })
// Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE,MOVE, MOVE, MOVE], "claim"+Game.time,{ memory: { role: 'claim', room: '', working: false } })
// Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );


declare global {

    interface Memory {
        uuid: number;
        log: any;
        role: any;
    }

    interface CreepMemory {
        role: string;
        room: string;
        working: boolean;
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

// Game.market.deal('64c35b138afb1c39b4c12983', 2000, 'W58S16')

export const loop = () => {
    if (Game.cpu.bucket === 10000) {
        Game.cpu.generatePixel()
    }
    if (Game.time % 2 === 0) {

        console.log('\r')
        console.log('\r')
        console.log('\r')
        console.log('========' + "Game.time = " + Game.time + '==' + "cpu.bucket=" + Game.cpu.bucket + '========')
    }
    for (let RoomName in Game.rooms) {
        switch (RoomName) {
            case 'W58S16':
                W58S16.work(Game.rooms[RoomName]);
                break;
            case 'W58S14':
                W58S14.work(Game.rooms[RoomName]);
                break;
        }
    }
};
