import tower from "./utils/tower";
import link from "./utils/link";
import autoSpawn from "./utils/autoSpawn";
// import term from "./utils/term";
import { HarvesterW49S11 } from "./creeps/HarvesterW46S11";
import { DismveableminerW49S11 } from "./creeps/DismveableminerW46S11";
import { CarrierW49S11 } from "./creeps/CarrierW46S11";
import { TransferW49S11 } from "./creeps/TransferW49S11";
import { BuilderW49S11 } from "./creeps/BuilderW49S11";

export const W49S11 = {
	work: function (ThisRoom: Room) {
		const roleToFunction: {
			[roleName: string]: {
				run(creep: Creep): void;
			};
		} = {
			HarvesterW49S11: HarvesterW49S11,
			BuilderW49S11: BuilderW49S11,
			DismveableminerW49S11: DismveableminerW49S11,
			CarrierW49S11: CarrierW49S11,
			TransferW49S11: TransferW49S11
		};

		function logRoomInfo() {
			console.log(`----------------${ThisRoom.name}-------------------`);
			console.log(`${ThisRoom.name} 能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
		}

		for (let name in Game.creeps) {
			const creep = Game.creeps[name];
			const roleFunction = roleToFunction[creep.memory.role];
			if (roleFunction) {
				roleFunction.run(creep);
			}
		}
		for (let Tower of ThisRoom.find(FIND_MY_STRUCTURES, {
			filter: { structureType: STRUCTURE_TOWER }
		}) as StructureTower[]) {
			tower.run(Tower);
		}
		if (Game.time % 2 === 0) {
			logRoomInfo();
			for (let name in Memory.creeps) {
				if (!Game.creeps[name]) {
					delete Memory.creeps[name];
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
					console.log(`🔁${ThisRoom.name}的${Spawns.name}正在生成 ${spawningCreep.memory.role}`);
				}
			} else {
				if (Game.time % 2 === 0) {
					autoSpawn.spawn(Spawns);
				}
			}
		}
		// if (Game.time % 10 === 0 && ThisRoom.terminal) {
		// 	term.send(ThisRoom.terminal);
		// }
	}
};
