import { Worker } from "cluster";

const W58S14autoSpawn = {
    spawn: function () {
        const Spawn = Game.spawns['Spawn2']
        const Home = Game.rooms['W58S14']
        const HomeLeft = Game.rooms['W59S14']
        var HarvesterW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'HarvesterW58S14');
        var BuilderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'BuilderW58S14');
        var UpgraderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'UpgraderW58S14');
        var CarrierW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CarrierW58S14');
        var CollectorW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CollectorW58S14');
        var RepairW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RepairW58S14');
        var Dismveableminer2W58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'Dismveableminer2W58S14');
        var transferW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transferW58S14');
        var MinerW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'MinerW58S14');
        var dismoveabletrasferW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveabletrasferW58S14');
        var DismveableminerW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'DismveableminerW58S14');
        var RemoteBuilderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteBuilderW58S14');

        var EyeW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'EyeW58S14');

        // new RoomVisual(Spawn.room.name).text('======Creeps======', 1, 0, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("HarvesterW58S14s =\t" + HarvesterW58S14s.length, 1, 1, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("BuilderW58S14s =\t" + BuilderW58S14s.length, 1, 2, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("UpgraderW58S14s =\t" + UpgraderW58S14s.length, 1, 3, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("CarrierW58S14s =\t" + CarrierW58S14s.length, 1, 4, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("CollectorW58S14s =\t" + CollectorW58S14s.length, 1, 5, { align: 'left', color: 'white', font: 0.8 })
        // new RoomVisual(Spawn.room.name).text("RepairW58S14s =\t" + RepairW58S14s.length, 1, 6, { align: 'left', color: 'white', font: 0.8 })
        if (Game.time % 1 === 0) {
            console.log(
                "\r" + "======Creeps======"
                + "\r" + "HarvesterW58S14s =\t" + HarvesterW58S14s.length
                + "\r" + "BuilderW58S14s =\t" + BuilderW58S14s.length
                + "\r" + "UpgraderW58S14s =\t" + UpgraderW58S14s.length
                + "\r" + "CarrierW58S14s =\t" + CarrierW58S14s.length
                + "\r" + "CollectorW58S14s =\t" + CollectorW58S14s.length
                + "\r" + "RepairW58S14s =\t" + RepairW58S14s.length
                + "\r" + "transferW58S14s =\t" + transferW58S14s.length

                + "\r======================="
            )
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
            } else if (dismoveabletrasferW58S14s.length < 1) {
                var newName = 'dismoveabletrasfer|W58S14' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, MOVE], newName,
                    { directions: [LEFT], memory: { role: 'dismoveabletrasferW58S14', room: '', working: false, needToRenew: false } });
            } else if (DismveableminerW58S14s.length == 0) {
                var newName = 'Dismveableminer|W58S14' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], newName,
                    { directions: [RIGHT], memory: { role: 'DismveableminerW58S14', room: '', working: false, needToRenew: false } });
            } else if (CarrierW58S14s.length < 1) {
                var newName = 'Carrier|W58S14|' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: 'CarrierW58S14', room: 'W58S14', working: false, needToRenew: false } });
            }
            else {
                if (transferW58S14s.length < 2) {
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
                    if (Home.find(FIND_CONSTRUCTION_SITES).length !== 0) {
                        if (BuilderW58S14s.length < 1) {
                            var newName = 'Builder|W58S14' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'BuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                        }
                    } else {
                        //房间外
                        if (!HomeLeft) {
                            if (EyeW58S14s.length < 1) {
                                var newName = 'Eye|W58S14' + Game.time;
                                Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'EyeW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        } else {
                            if (RemoteBuilderW58S14s.length < 1) {
                                var newName = 'RemoteBuilder|W58S14' + Game.time;
                                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'RemoteBuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        }
                    }
                }
            }
        }
    }
}



export default W58S14autoSpawn;
