import tower from "./utils/tower";
import link from "./utils/link";
import autoSpawn from "./utils/autoSpawn";

import { Upgrader } from "./creeps/Upgrader";
import { Harvester } from "./creeps/Harvester";
import { Builder } from "./creeps/Builder";
import { Guard } from "./creeps/Guard";
import { Dismoveableminer } from "./creeps/Dismveableminer";
import { Transfer } from "./creeps/Transfer";
import { Carrier } from "./creeps/Carrier";
import { Dismoveableminer2 } from "./creeps/Dismveableminer2";
import { Claim } from "./creeps/Claim";

// import term from "./utils/term";

export const W55S8 = {
	work: function (ThisRoom: Room) {
		const roleToFunction: {
			[roleName: string]: {
				run(creep: Creep): void;
			};
		} = {
			UpgraderW55S8: Upgrader,
			HarvesterW55S8: Harvester,
			BuilderW55S8: Builder,
			GuardW55S8: Guard,
			ClaimW57S9: Claim,
			DismoveableminerW55S8: Dismoveableminer,
			Dismoveableminer2W55S8: Dismoveableminer2,
			TransferW55S8: Transfer,
			CarrierW55S8: Carrier
		};
		if (ThisRoom.controller) {
			new RoomVisual(ThisRoom.name).text(
				`${ThisRoom.controller.progress}/${ThisRoom.controller.progressTotal} (${(
					(ThisRoom.controller.progress / ThisRoom.controller.progressTotal) *
					100
				).toFixed(2)}% Lv:${ThisRoom.controller.level}) `,
				ThisRoom.controller.pos.x,
				ThisRoom.controller.pos.y - 1,
				{
					color: "yellow",
					align: "center",
					opacity: 0.5
				}
			);
		}

		function logRoomInfo() {
			console.log(`----------------${ThisRoom.name}-------------------`);
			console.log(`${ThisRoom.name} 能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
		}

		if (ThisRoom.controller) {
			new RoomVisual(ThisRoom.name).text(
				`${ThisRoom.controller.progress}/${ThisRoom.controller.progressTotal} (${(
					(ThisRoom.controller.progress / ThisRoom.controller.progressTotal) *
					100
				).toFixed(2)}% Lv:${ThisRoom.controller.level}) `,
				ThisRoom.controller.pos.x,
				ThisRoom.controller.pos.y - 1,
				{
					color: "yellow",
					align: "center",
					opacity: 0.5
				}
			);
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
