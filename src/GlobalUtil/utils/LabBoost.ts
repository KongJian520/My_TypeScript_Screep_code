export const LabBoost = (creep: Creep, Resource: ResourceConstant, LabId: string, BoostPart: BodyPartConstant) => {
	const LAB = Game.getObjectById<StructureLab>(LabId);
	if (LAB && LAB.store.energy >= 20 && LAB.store[Resource] >= 30) {
		if (creep.ticksToLive! > 300) {
			if (!creep.body.some(part => part.type === BoostPart && part.boost)) {
				creep.say("Boosting");
				const boostResult = LAB.boostCreep(creep);
				if (boostResult === OK) {
					creep.say(`${BoostPart} B OK`);
				} else if (boostResult === ERR_NOT_IN_RANGE) {
					creep.moveTo(LAB);
				} else {
					creep.say(`${BoostPart} B ${boostResult}`);
				}
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
};
