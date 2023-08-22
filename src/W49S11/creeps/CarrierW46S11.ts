import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";

export const CarrierW49S11 = {
	run: function (creep: Creep) {
		const Home = "W49S11";
		if (creep.room.name !== Home) {
			creep.moveTo(new RoomPosition(20, 37, Home));
		} else {
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
				creep.memory.working = false;
				creep.say("🔄");
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
				creep.memory.working = true;
				creep.say("working");
			}
			if (creep.memory.working) {
				// 填充 EXT 和 Spawn
				const closestLab = creep.pos.findClosestByPath(
					creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) =>
							structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					})
				);
				const closestTarget = creep.pos.findClosestByPath(
					creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) =>
							(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
							structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					})
				);
				if (closestTarget) {
					if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(closestTarget, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				} else if (closestLab) {
					if (creep.transfer(closestLab, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(closestLab, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				}
			} else {
				WithdrawEnergyFromContainer(creep, "64e3a735be752fbcae3d0ceb");
			}
		}
	}
};
