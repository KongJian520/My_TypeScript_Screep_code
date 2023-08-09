import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import HarvesterW57S9 from "./creeps/HarvesterW57S9";
import UpgraderW57S9 from "./creeps/UpgraderW57S9";
import BuilderW57S9 from "./creeps/BuilderW58S15";

import GuardW57S9 from "./creeps/GuardW57S9";

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
					case "HarvesterW57S9":
						HarvesterW57S9.run(creep);
						break;
					case "UpgraderW57S9":
						UpgraderW57S9.run(creep);
						break;
					case "BuilderW57S9":
						BuilderW57S9.run(creep);
						break;
					case "GuardW57S9.ts":
						GuardW57S9.run(creep);
						break;
				}
			}
		}
	}
};
export default W58S15;
