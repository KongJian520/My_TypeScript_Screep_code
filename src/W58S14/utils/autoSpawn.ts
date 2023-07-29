import { Worker } from "cluster";
import { connect } from "http2";

const W58S14autoSpawn = {
    spawn: function () {
        const Spawn = Game.spawns['Spawn2']
        const Home = Game.rooms['W58S14']
        const HomeLeft = Game.rooms['W59S14']
        const HomeUp = Game.rooms['W58S13']
        var HarvesterW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'HarvesterW58S14');
        var BuilderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'BuilderW58S14');
        var UpgraderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'UpgraderW58S14');
        var CarrierW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CarrierW58S14');
        var CollectorW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CollectorW58S14');
        var RepairW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RepairW58S14');
        var Dismveableminer2W58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'Dismveableminer2W58S14');
        var transferW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transferW58S14');
        var RemoteHavsterW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteHavsterW58S14');
        var dismoveabletrasferW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveabletrasferW58S14');
        var DismveableminerW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'DismveableminerW58S14');
        var RemoteBuilderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteBuilderW58S14');
        var RemoteRepairW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteRepairW58S14');
        var RemoteAttackerW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteAttackerW58S14');

        var claimW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimW58S14');
        var EyeW58S13s = _.filter(Game.creeps, (creep) => creep.memory.role == 'EyeW58S13');

        var EXMANW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'EXMANW58S14');
        var EyeW59S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'EyeW58S14');
        var EyeW58S13s = _.filter(Game.creeps, (creep) => creep.memory.role == 'EyeW58S13');

        // new RoomVisual(Spawn.room.name).text('======Creeps======', 1, 0, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("HarvesterW58S14s =\t" + HarvesterW58S14s.length, 1, 1, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("BuilderW58S14s =\t" + BuilderW58S14s.length, 1, 2, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("UpgraderW58S14s =\t" + UpgraderW58S14s.length, 1, 3, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("CarrierW58S14s =\t" + CarrierW58S14s.length, 1, 4, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("CollectorW58S14s =\t" + CollectorW58S14s.length, 1, 5, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("RepairW58S14s =\t" + RepairW58S14s.length, 1, 6, { align: 'left', color: 'white', font: 0.8 })
        if (Game.time % 1 === 0) {
            // console.log(
            //     "\r" + "======Creeps======"
            //     + "\r" + "HarvesterW58S14s =\t" + HarvesterW58S14s.length
            //     + "\r" + "BuilderW58S14s =\t" + BuilderW58S14s.length
            //     + "\r" + "UpgraderW58S14s =\t" + UpgraderW58S14s.length
            //     + "\r" + "CarrierW58S14s =\t" + CarrierW58S14s.length
            //     + "\r" + "CollectorW58S14s =\t" + CollectorW58S14s.length
            //     + "\r" + "RepairW58S14s =\t" + RepairW58S14s.length
            //     + "\r" + "transferW58S14s =\t" + transferW58S14s.length

            //     + "\r======================="
            // )
        }
        if (HarvesterW58S14s.length == 0) {
            var newName = 'Harvester|W58S14|' + Game.time;
            Spawn.spawnCreep([WORK, CARRY, MOVE, CARRY], newName,
                { memory: { role: 'HarvesterW58S14', room: 'W58S14', working: false, needToRenew: false } });
        } else {
            if (Dismveableminer2W58S14s.length == 0) {
                var newName = 'Dismveableminer2|W58S14|' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'Dismveableminer2W58S14', room: 'W58S14', working: false, needToRenew: false } });
            } else if (dismoveabletrasferW58S14s.length == 0) {
                var newName = 'dismoveabletrasfer|W58S14' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, MOVE], newName,
                    { directions: [LEFT], memory: { role: 'dismoveabletrasferW58S14', room: '', working: false, needToRenew: false } });
            } else if (DismveableminerW58S14s.length == 0) {
                var newName = 'Dismveableminer|W58S14' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], newName,
                    { memory: { role: 'DismveableminerW58S14', room: '', working: false, needToRenew: false } });
            } else if (CarrierW58S14s.length == 0) {
                var newName = 'Carrier|W58S14|' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], newName,
                    { memory: { role: 'CarrierW58S14', room: 'W58S14', working: false, needToRenew: false } });
            }
            else {
                if (transferW58S14s.length == 0) {
                    var newName = 'transfer|W58S14' + Game.time;
                    Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'transferW58S14', room: '', working: false, needToRenew: false } });
                }
                else {
                    if (Home.find(FIND_DROPPED_RESOURCES).length > 0 || Home.find(FIND_TOMBSTONES, { filter: (t: any) => t.store.energy > 0 }).length > 0 || Home.find(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 }).length > 0) {
                        if (CollectorW58S14s.length < 1) {
                            var newName = 'Collector|W58S14|' + Game.time;
                            Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'CollectorW58S14', room: 'W58S14', working: false, needToRenew: false } });
                        }
                    }
                    if (RepairW58S14s.length < 1) {
                        var newName = 'Repair|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'RepairW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    }
                    if (UpgraderW58S14s.length < 1) {
                        var newName = 'Upgrader|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'UpgraderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    }
                    if (BuilderW58S14s.length < 1) {
                        var newName = 'Builder|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'BuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    } else {
                        //房间外
                        console.log('执行HomeLeft代码')
                        if (!HomeLeft) {
                            if (EyeW59S14s.length < 1) {
                                console.log('W59S14看不见,生成eye中')
                                var newName = 'Eye|W59S14|' + Game.time;
                                Spawn.spawnCreep([ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE], newName,
                                    { memory: { role: 'EyeW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        } else if (HomeLeft) {
                            console.log('W59S14看得见')
                            var W59S14InvaderCreep = HomeLeft.find(FIND_HOSTILE_CREEPS)
                            if (W59S14InvaderCreep.length == 0) {
                                console.log(HomeLeft + '安全')
                                if (RemoteBuilderW58S14s.length == 0) {
                                    var newName = 'RemoteBuilder|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteBuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                                if (RemoteRepairW58S14s.length == 0) {
                                    var newName = 'RemoteRepair|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteRepairW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                                if (RemoteHavsterW58S14s.length < 2) {
                                    var newName = 'RemoteHavster|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteHavsterW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                } if (claimW58S14s.length == 0) {
                                    var newName = 'Claim|W58S14|' + Game.time;
                                    Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'claimW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                            }
                        }
                        if (HomeUp) {
                            // if (RemoteAttackerW58S14s.length < 2) {
                            //     var newName = 'RemoteAttacker|W58S14|' + Game.time;
                            //     Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,], newName,
                            //         { memory: { role: 'RemoteAttackerW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            // }
                            if (EyeW58S13s.length == 0) {
                                var newName = 'claim|W58S13|' + Game.time;
                                Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'claimW58S13', room: 'W58S14', working: false, needToRenew: false } });
                            }
                            if (EXMANW58S14s.length == 0) {
                                var newName = 'EXMAN|W58S14|' + Game.time;
                                Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL,], newName,
                                    { memory: { role: 'EXMANW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }

                        } else if (!HomeUp) {
                            if (EyeW58S13s.length == 1) {
                                console.log('W58S13看不见,生成eye中')
                                var newName = 'Eye|W58S13|' + Game.time;
                                Spawn.spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK,], newName,
                                    { memory: { role: 'EyeW58S13', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        }
                    }
                }
            }
        }
    }
}



export default W58S14autoSpawn;
