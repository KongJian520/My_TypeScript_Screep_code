import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import HarvesterW58S15 from "./creeps/HarvesterW58S15";
import UpgraderW58S15 from "./creeps/UpgraderW58S15";
import GuardW58S15 from "./creeps/Guard";
import BuilderW58S15 from "./creeps/BuilderW58S15";
import DismoveminerW58S15 from "./creeps/DismoveminerW58S15";
import CarrierW58S15 from "./creeps/CarrierW58S15";
import Dismveableminer2W58S15 from "./creeps/Dismoveminer2W58S15";
import Transfer2W58S15 from "./creeps/Transfer2W58S15";
import TransferW58S15 from "./creeps/TransferW58S15";

const W58S15 = {
	work: function (ThisRoom: Room) {
		let name;
		if (Game.time % 2 === 0) {
			console.log(`----------------${ThisRoom.name}-------------------`);
			console.log(`${ThisRoom.name} 能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
			for (name in Memory.creeps) {
				if (!Game.creeps[name]) {
					delete Memory.creeps[name];
					// console.log('Clearing non-existing creep memory:', name);
				}
			}
			link.run();
		}

		for (const Spawns of ThisRoom.find(FIND_MY_SPAWNS)) {
			if (Spawns.spawning) {
				const spawningCreep = Game.creeps[Spawns.spawning.name];
				Spawns.room.visual.text("🛠️" + spawningCreep.memory.role, Spawns.pos.x + 1, Spawns.pos.y, {
					align: "left",
					opacity: 0.8
				});
				if (Game.time % 2 === 0) {
					console.log(`🔁${ThisRoom.name}的${Spawns.name} is Spawning ${spawningCreep.memory.role}`);
				}
			} else {
				if (Game.time % 2 === 0) {
					autoSpawn.spawn(Spawns);
				}
			}
		}
		if (Game.time % 10 === 0) {
			if (ThisRoom.terminal) {
				terminalW58S16.send(ThisRoom.terminal);
			}
		}
		let Towers = ThisRoom.find(FIND_MY_STRUCTURES, {
			filter: { structureType: STRUCTURE_TOWER }
		}) as StructureTower[];
		// 遍历每个塔
		for (let Tower of Towers) {
			tower.run(Tower);
		}
		for (name in Game.creeps) {
			{
				const creep = Game.creeps[name];
				// 优化后的代码
				switch (creep.memory.role) {
					case "HarvesterW58S15":
						HarvesterW58S15.run(creep);
						break;
					case "UpgraderW58S15":
						UpgraderW58S15.run(creep);
						break;
					// case "GuardW58S15":
					// 	GuardW58S15.run(creep);
					// 	break;
					case "BuilderW58S15":
						BuilderW58S15.run(creep);
						break;
					case "DismoveminerW58S15":
						DismoveminerW58S15.run(creep);
						break;
					case "CarrierW58S15":
						CarrierW58S15.run(creep);
						break;
					case "Dismveableminer2W58S15":
						Dismveableminer2W58S15.run(creep);
						break;
					case "Transfer2W58S15":
						Transfer2W58S15.runEnergy(creep);
						break;
					case "TransferW58S15":
						TransferW58S15.runEnergy(creep);
						break;
				}
			}
		}
	}
};
export default W58S15;
