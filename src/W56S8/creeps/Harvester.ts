import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { ChargeStructure } from "../../GlobalUtil/utils/ChargeStruc";
import { BuildByPath } from "../../GlobalUtil/utils/BuildByPath";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { Transfer2 } from "./Transfer2";
import { Carrier } from "./Carrier";

export const Harvester = {
	run(creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "Dismoveableminer2W56S8").length == 0) {
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
				HarvestSource(creep, "5bbcaa009099fc012e630924");
			} else {
				if (creep.room.energyAvailable !== creep.room.energyCapacityAvailable) {
					ChargeStructure(creep);
				} else {
					if (tower) {
						transferToStore(creep, tower.id);
					}
					BuildByPath(creep);
				}
			}
		} else {
			Carrier.run(creep);
		}
	}
};
