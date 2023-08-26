import { HarvestSource } from "../../utils/HarvestSource";
import { StoreSource } from "../../utils/transferToStore";

export const RBRemoteHarveser = (creep: Creep, store: string, targetRoom: string) => {
	if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
		creep.memory.working = false;
		creep.say("🔄");
	}
	if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
		creep.memory.working = true;
		creep.say("升级中");
	}
	if (creep.memory.working) {
		if (creep.memory.SourceId) {
			HarvestSource(creep, creep.memory.SourceId);
		} else if (creep.memory.SourceId == undefined || Game.getObjectById<Source>(creep.memory.SourceId)!.energy == 0) {
			creep.memory.SourceId = creep.room.find(FIND_SOURCES_ACTIVE)[0].id;
		}
	} else {
		StoreSource(creep, store);
	}
};
