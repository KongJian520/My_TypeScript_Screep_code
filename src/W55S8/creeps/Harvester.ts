import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { ChargeStructure, judgeNeedToCharge } from "../../GlobalUtil/utils/ChargeStruc";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { Carrier } from "./Carrier";

export const Harvester = {
	run(creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "Dismoveableminer2W55S8").length == 0) {
			if (creep.store.getFreeCapacity() == 0) {
				creep.say("H 开始干活");
				creep.memory.working = true;
			} else if (creep.store.energy == 0) {
				creep.say("H 准备充能");
				creep.memory.working = false;
			}
			const tower = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: (structure: any) =>
					structure.structureType === STRUCTURE_TOWER && structure.store.getFreeCapacity() !== 0
			});

			if (!creep.memory.working) {
				HarvestSource(creep, "5bbcaa0c9099fc012e630b54");
			} else {
				if (judgeNeedToCharge(creep)) {
					ChargeStructure(creep);
				} else {
					transferToStore(creep, "64eff1a9a0c2db6dbdebe518");
				}
			}
		} else {
			Carrier.run(creep);
		}
	}
};
