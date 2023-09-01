import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { BuildByPath } from "../../GlobalUtil/utils/BuildByPath";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";

export const RemoteBuilder1 = {
	run: function (creep: Creep) {
		const targetRoom = "W56S7";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("RBU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			noMoveRepairStructure(creep);
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					BuildByPath(creep);
				}
			} else {
				HarvestSource(creep, "5bbcaa009099fc012e630921");
			}
		}
	}
};
