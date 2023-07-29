

const W58S14autoSpawn = {
    spawn: function () {
        const Spawn = Game.spawns['Spawn2']
        const Home = Game.rooms['W58S14']
        const HomeLeft = Game.rooms['W59S14']
        const HomeUp = Game.rooms['W58S13']
        let HarvesterW58S14 = [],
            BuilderW58S14s = [],
            UpgraderW58S14 = [],
            CarrierW58S14 = [],
            CollectorW58S14 = [],
            RepairW58S14 = [],
            Dismveableminer2W58S14 = [],
            transferW58S14 = [],
            RemoteHavsterW58S14 = [],
            dismoveabletrasferW58S14 = [],
            DismveableminerW58S14 = [],
            RemoteBuilderW58S14 = [],
            RemoteRepairW58S14 = [],
            RemoteAttackerW58S14 = [],
            claimW58S13 = [],
            claimW58S14 = [],
            EXMANW58S14 = [],
            EyeW59S14 = [],
            EyeW58S13 = [];
        for (let creep in Game.creeps) {
            switch (Game.creeps[creep].memory.role) {
                case 'HarvesterW58S14': HarvesterW58S14.push(Game.creeps[creep]); break;
                case 'BuilderW58S14': BuilderW58S14s.push(Game.creeps[creep]); break;
                case 'UpgraderW58S14': UpgraderW58S14.push(Game.creeps[creep]); break;
                case 'CarrierW58S14': CarrierW58S14.push(Game.creeps[creep]); break;
                case 'CollectorW58S14': CollectorW58S14.push(Game.creeps[creep]); break;
                case 'RepairW58S14': RepairW58S14.push(Game.creeps[creep]); break;
                case 'Dismveableminer2W58S14': Dismveableminer2W58S14.push(Game.creeps[creep]); break;
                case 'transferW58S14': transferW58S14.push(Game.creeps[creep]); break;
                case 'RemoteHavsterW58S14': RemoteHavsterW58S14.push(Game.creeps[creep]);
                case 'dismoveabletrasferW58S14': dismoveabletrasferW58S14.push(Game.creeps[creep]); break;
                case 'DismveableminerW58S14': DismveableminerW58S14.push(Game.creeps[creep]); break;
                case 'RemoteBuilderW58S14': RemoteBuilderW58S14.push(Game.creeps[creep]); break;
                case 'RemoteRepairW58S14': RemoteRepairW58S14.push(Game.creeps[creep]); break;
                case 'RemoteAttackerW58S14': RemoteAttackerW58S14.push(Game.creeps[creep]); break;
                case 'claimW58S13': claimW58S13.push(Game.creeps[creep]); break;
                case 'claimW58S14': claimW58S14.push(Game.creeps[creep]); break;
                case 'EXMANW58S14': EXMANW58S14.push(Game.creeps[creep]); break;
                case 'EyeW59S14': EyeW59S14.push(Game.creeps[creep]); break;
                case 'EyeW59S13': EyeW58S13.push(Game.creeps[creep]);
            }
        }
        if (Game.time % 1 === 0) {
            console.log(
                "\r" + "======Creeps======"
                + "\r" + "HarvesterW58S14 =\t" + HarvesterW58S14.length
                + "\r" + "BuilderW58S14s =\t" + BuilderW58S14s.length
                + "\r" + "UpgraderW58S14 =\t" + UpgraderW58S14.length
                + "\r" + "CarrierW58S14 =\t" + CarrierW58S14.length
                + "\r" + "CollectorW58S14 =\t" + CollectorW58S14.length
                + "\r" + "RepairW58S14 =\t" + RepairW58S14.length
                + "\r" + "transferW58S14 =\t" + transferW58S14.length

                + "\r======================="
            )
        }
        if (HarvesterW58S14.length == 0) {
            let newName = 'Harvester|W58S14|' + Game.time;
            Spawn.spawnCreep([WORK, CARRY, MOVE, CARRY], newName,
                { memory: { role: 'HarvesterW58S14', room: 'W58S14', working: false, needToRenew: false } });
        } else {
            if (Dismveableminer2W58S14.length == 0) {
                let newName = 'Dismveableminer2|W58S14|' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'Dismveableminer2W58S14', room: 'W58S14', working: false, needToRenew: false } });
            } else if (dismoveabletrasferW58S14.length == 0) {
                let newName = 'dismoveabletrasfer|W58S14' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, MOVE], newName,
                    { directions: [LEFT], memory: { role: 'dismoveabletrasferW58S14', room: '', working: false, needToRenew: false } });
            } else if (DismveableminerW58S14.length == 0) {
                let newName = 'Dismveableminer|W58S14' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], newName,
                    { memory: { role: 'DismveableminerW58S14', room: '', working: false, needToRenew: false } });
            } else if (CarrierW58S14.length == 0) {
                let newName = 'Carrier|W58S14|' + Game.time;
                Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], newName,
                    { memory: { role: 'CarrierW58S14', room: 'W58S14', working: false, needToRenew: false } });
            }
            else {
                if (transferW58S14.length == 0) {
                    let newName = 'transfer|W58S14' + Game.time;
                    Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'transferW58S14', room: '', working: false, needToRenew: false } });
                }
                else {
                    if (Home.find(FIND_DROPPED_RESOURCES).length > 0 || Home.find(FIND_TOMBSTONES, { filter: (t: any) => t.store.energy > 0 }).length > 0 || Home.find(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 }).length > 0) {
                        if (CollectorW58S14.length < 1) {
                            let newName = 'Collector|W58S14|' + Game.time;
                            Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'CollectorW58S14', room: 'W58S14', working: false, needToRenew: false } });
                        }
                    }
                    if (RepairW58S14.length < 1) {
                        let newName = 'Repair|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'RepairW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    }
                    if (UpgraderW58S14.length < 1) {
                        let newName = 'Upgrader|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'UpgraderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    }
                    if (BuilderW58S14s.length < 1) {
                        let newName = 'Builder|W58S14|' + Game.time;
                        Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'BuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                    } else {
                        //房间外
                        console.log('执行HomeLeft代码')
                        if (!HomeLeft) {
                            if (EyeW59S14.length < 1) {
                                console.log('W59S14看不见,生成eye中')
                                let newName = 'Eye|W59S14|' + Game.time;
                                Spawn.spawnCreep([ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE], newName,
                                    { memory: { role: 'EyeW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            }
                        } else if (HomeLeft) {
                            console.log('W59S14看得见')
                            let W59S14InvaderCreep = HomeLeft.find(FIND_HOSTILE_CREEPS)
                            if (W59S14InvaderCreep.length == 0) {
                                console.log(HomeLeft + '安全')
                                if (RemoteBuilderW58S14.length == 0) {
                                    let newName = 'RemoteBuilder|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteBuilderW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                                if (RemoteRepairW58S14.length == 0) {
                                    let newName = 'RemoteRepair|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteRepairW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                                if (RemoteHavsterW58S14.length < 2) {
                                    let newName = 'RemoteHavster|W58S14|' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteHavsterW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                } if (claimW58S14.length == 0) {
                                    let newName = 'Claim|W58S14|' + Game.time;
                                    Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'claimW58S14', room: 'W58S14', working: false, needToRenew: false } });
                                }
                            }
                        }
                        if (HomeUp) {
                            // if (RemoteAttackerW58S14.length < 2) {
                            //     let newName = 'RemoteAttacker|W58S14|' + Game.time;
                            //     Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,], newName,
                            //         { memory: { role: 'RemoteAttackerW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            // }
                            if (claimW58S13.length == 0) {
                                let newName = 'claim|W58S13|' + Game.time;
                                Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'claimW58S13', room: 'W58S14', working: false, needToRenew: false } });
                            }
                            // if (EXMANW58S14.length == 0) {
                            //     let newName = 'EXMAN|W58S14|' + Game.time;
                            //     Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL,], newName,
                            //         { memory: { role: 'EXMANW58S14', room: 'W58S14', working: false, needToRenew: false } });
                            // }
                        } else if (!HomeUp) {
                            if (EyeW58S13.length == 1) {
                                console.log('W58S13看不见,生成eye中')
                                let newName = 'Eye|W58S13|' + Game.time;
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
