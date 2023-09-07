import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";
import { noMoveBuildByPath } from "../../GlobalUtil/utils/BuildByPath";
import { ChargeStructure } from "../../GlobalUtil/utils/ChargeStruc";

export const Transfer = {
	run: function (creep: Creep) {
		const targetRoom = "W55S8";

		if (creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = false;
			creep.say("🔍");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("T 🚚S");
		}
		if (!creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.say("Moving");
				creep.moveTo(new RoomPosition(20, 37, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
			} else if (creep.room.name === targetRoom) {
				const CID = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						structure.structureType === STRUCTURE_CONTAINER && structure.store.getUsedCapacity(RESOURCE_ENERGY) !== 0
				});
				if (CID.length !== 0) {
					WithdrawFromContainer(creep, CID[0].id, RESOURCE_ENERGY);
				} else {
					creep.memory.working = true;
				}
			}
		} else {
			if (creep.room.energyAvailable !== creep.room.energyCapacityAvailable) {
				ChargeStructure(creep);
			} else {
				transferToStore(creep, "64eff1a9a0c2db6dbdebe518");
			}
			noMoveRepairStructure(creep);
			noMoveBuildByPath(creep);
		}
	}
};
