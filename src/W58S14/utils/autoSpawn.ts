const W58S14autoSpawn = {
    spawn: function () {
        const Spawn = Game.spawns['Spawn2']
        var HarvesterW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'HarvesterW58S14');
        var BuilderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'BuilderW58S14');
        var UpgraderW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'UpgraderW58S14');
        var CarrierW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CarrierW58S14');
        var CollectorW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'CollectorW58S14');
        var RepairW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RepairW58S14');
        var Dismveableminer2W58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'Dismveableminer2W58S14');


        new RoomVisual(Spawn.room.name).text('======Creeps======', 1, 0, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("HarvesterW58S14s =\t" + HarvesterW58S14s.length, 1, 1, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("BuilderW58S14s =\t" + BuilderW58S14s.length, 1, 2, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("UpgraderW58S14s =\t" + UpgraderW58S14s.length, 1, 3, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("CarrierW58S14s =\t" + CarrierW58S14s.length, 1, 4, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("CollectorW58S14s =\t" + CollectorW58S14s.length, 1, 5, { align: 'left', color: 'white', font: 0.8 })
        new RoomVisual(Spawn.room.name).text("RepairW58S14s =\t" + RepairW58S14s.length, 1, 6, { align: 'left', color: 'white', font: 0.8 })
        if (Game.time % 1 === 0) {
            console.log(
                "\r" + "======Creeps======"
                + "\r" + "HarvesterW58S14s =\t" + HarvesterW58S14s.length
                + "\r" + "BuilderW58S14s =\t" + BuilderW58S14s.length
                + "\r" + "UpgraderW58S14s =\t" + UpgraderW58S14s.length
                + "\r" + "CarrierW58S14s =\t" + CarrierW58S14s.length
                + "\r" + "CollectorW58S14s =\t" + CollectorW58S14s.length
                + "\r" + "RepairW58S14s =\t" + RepairW58S14s.length
                + "\r======================="
            )
        }
        if (HarvesterW58S14s.length < 1) {
            var newName = 'Harvester|W58S14|' + Game.time;
            Spawn.spawnCreep([WORK, MOVE, CARRY, CARRY], newName,
                { memory: { role: 'HarvesterW58S14', room: 'W58S14', working: false, needToRenew: false } });
        } else {
            if (Dismveableminer2W58S14s.length == 0) {
                var newName = 'Dismveableminer2|W58S14|' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'Dismveableminer2W58S14', room: 'W58S14', working: false, needToRenew: false } });
            } else {

                // if (CollectorW58S14s.length < 1) {
                //     var newName = 'Collector|W58S14|' + Game.time;
                //     Spawn.spawnCreep([MOVE, MOVE, MOVE, CARRY, CARRY, CARRY], newName,
                //         { memory: { role: 'CollectorW58S14', room: 'W58S14', working: false, needToRenew: false } });
                // }
                if (UpgraderW58S14s.length < 2) {
                    var newName = 'Upgrader|W58S14|' + Game.time;
                    Spawn.spawnCreep([WORK, WORK, WORK, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY], newName,
                        { memory: { role: 'UpgraderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                } else
                    if (CarrierW58S14s.length < 1) {
                        var newName = 'Carrier|W58S14|' + Game.time;
                        Spawn.spawnCreep([MOVE, MOVE, MOVE, CARRY, CARRY, CARRY], newName,
                            { memory: { role: 'CarrierW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    } else
                        if (BuilderW58S14s.length < 1) {
                            var newName = 'Builder|W58S14|' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, MOVE, CARRY, CARRY], newName,
                                { memory: { role: 'BuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                        } else {
                            if (RepairW58S14s.length < 1) {
                                var newName = 'Repair|W58S14|' + Game.time;
                                Spawn.spawnCreep([WORK, WORK, WORK, MOVE, CARRY, CARRY], newName,
                                    { memory: { role: 'RepairW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        }
            }
        }
    }
}



export default W58S14autoSpawn;
