import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { BuildByPath } from "../../GlobalUtil/utils/BuildByPath";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";
import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";

export const RemoteBuilder1 = {
	run: function (creep: Creep) {
		const targetRoom = "W57S8";
		if (creep.memory.working && creep.store.energy == 0) {
			creep.memory.working = false;
			creep.say("RBU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(36, 25, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			noMoveRepairStructure(creep);
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

				if (targets.length !== 0) {
					BuildByPath(creep);
				} else {
					transferToStore(creep, "64f9b0a52da3be7c8ca1506f");
				}
			} else {
				creep.moveTo(new RoomPosition(36, 25, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
				creep.say("🔄 harvest");
				HarvestSource(creep, "5bbca9f59099fc012e630729");
			}
		}
	}
};
