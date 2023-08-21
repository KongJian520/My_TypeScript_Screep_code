import tower from "./utils/tower";
import link from "./utils/link";
import autoSpawn from "./utils/autoSpawn";
import term from "./utils/term";
import { HarvesterW46S12 } from "./creeps/HarvesterW46S12";
import { UpgraderW46S12 } from "./creeps/UpgraderW58S16";
import { CollectorW46S12 } from "./creeps/CollectorW46S12";
import { BuilderW46S12 } from "./creeps/BuilderW46S12";
import { CarrierW46S12 } from "./creeps/CarrierW46S12";
import { DismveableminerW46S12 } from "./creeps/DismveableminerW46S12";
import { Dismoveableminer2W46S12 } from "./creeps/Dismoveableminer2W46S12";
import { TransferW46S12 } from "./creeps/TransferW46S12";
import { Transfer2W46S12 } from "./creeps/Transfer2W46S12";

const W57S9 = {
	work: function (ThisRoom: Room) {
		const roleToFunction: {
			[roleName: string]: { run(creep: Creep): void };
		} = {
			HarvesterW46S12: HarvesterW46S12,
			UpgraderW46S12: UpgraderW46S12,
			CollectorW46S12: CollectorW46S12,
			BuilderW46S12: BuilderW46S12,
			CarrierW46S12: CarrierW46S12,
			DismveableminerW46S12: DismveableminerW46S12,
			Dismoveableminer2W46S12: Dismoveableminer2W46S12,
			TransferW46S12: TransferW46S12,
			Transfer2W46S12: Transfer2W46S12
			// RemoteBuilderW46S12: RemoteBuilderW46S12
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

export default W57S9;
