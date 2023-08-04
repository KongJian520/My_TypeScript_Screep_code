import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import HarvesterW59S11 from "./creeps/HarvesterW59S11";
import DismoveminerW59S11 from "./creeps/DismoveminerW59S11";
import BuilderW59S11 from "./creeps/BuilderW59S11";
import UpgraderW59S11 from "./creeps/Upgrader";
import CarrierW59S11 from "./creeps/CarrierW59S11";

const W59S11 = {
	work: function (W59S11: Room) {
		let name;
		if (Game.time % 2 === 0) {
			console.log("----------------W59S11-------------------");
			console.log(`W59S11 能量:` + W59S11.energyAvailable + "/" + W59S11.energyCapacityAvailable);
			if (W59S11.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + W59S11.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
			for (name in Memory.creeps) {
				if (!Game.creeps[name]) {
					delete Memory.creeps[name];
					// console.log('Clearing non-existing creep memory:', name);
				}
			}
			link.run();
		}

		for (const Spawns of W59S11.find(FIND_MY_SPAWNS)) {
			if (Spawns.spawning) {
				const spawningCreep = Game.creeps[Spawns.spawning.name];
				Spawns.room.visual.text("🛠️" + spawningCreep.memory.role, Spawns.pos.x + 1, Spawns.pos.y, {
					align: "left",
					opacity: 0.8
				});
				if (Game.time % 2 === 0) {
					console.log(`🔁${Spawns.name} is Spawning ${spawningCreep.memory.role}`);
				}
			} else {
				if (Game.time % 2 === 0) {
					autoSpawn.spawn(Spawns);
				}
			}
		}
		if (Game.time % 10 === 0) {
			if (W59S11.terminal) {
				terminalW58S16.send(W59S11.terminal);
			}
		}
		let Towers = Game.rooms["W58S16"].find(FIND_MY_STRUCTURES, {
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
					case "HarvesterW59S11":
						HarvesterW59S11.run(creep);
						break;
					case "DismoveminerW59S11":
						DismoveminerW59S11.run(creep);
						break;
					case "BuilderW59S11":
						BuilderW59S11.run(creep);
						break;
					case "UpgraderW59S11":
						UpgraderW59S11.run(creep);
						break;
					case "CarrierW59S11":
						CarrierW59S11.run(creep);
						break;
				}
			}
		}
	}
};
export default W59S11;
