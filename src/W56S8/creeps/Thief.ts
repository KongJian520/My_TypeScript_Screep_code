import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { noMoveChargeStructure } from "../../GlobalUtil/utils/ChargeStruc";
import { noMoveBuildByPath } from "../../GlobalUtil/utils/BuildByPath";

export const Thief = {
	run: function (creep: Creep) {
		const targetFlag = Game.flags.ThiefTarget;
		const targetroom = "W54S8";

		if (!creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = true;
			creep.say("T 🔍");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("T 🚚S");
		}
		if (creep.memory.working) {
			if (creep.ticksToLive !== undefined) {
				if (creep.ticksToLive < 150) creep.suicide();
			}
			if (creep.room.name !== targetroom) {
				creep.moveTo(new RoomPosition(20, 20, targetroom));
			} else {
				const found = targetFlag.pos.findInRange(FIND_STRUCTURES, 2, {
					filter: structure => {
						return (
							(structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_TERMINAL) &&
							structure.store.getUsedCapacity(RESOURCE_ENERGY) !== 0
						);
					}
				});
				WithdrawFromContainer(creep, found[0].id, RESOURCE_ENERGY);
			}
		} else {
			noMoveBuildByPath(creep);
			noMoveChargeStructure(creep);
			transferToStore(creep, "64e870f7d3acba1ba87f72ac");
		}
	}
};
