const RATTW58S16 = {
	run: function (creep: Creep) {
		const targetRoom = "W56S14";
		const Home = "W57S14";
		creep.heal(creep);

		if (!creep.memory.working && creep.hits > creep.hitsMax * 0.9) {
			creep.memory.working = true;
			creep.say("移动");
		}
		if (creep.memory.working && creep.hits < creep.hitsMax * 0.7) {
			creep.memory.working = false;
			creep.say("退场");
		}
		if (creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(new RoomPosition(4, 39, targetRoom), { visualizePathStyle: { stroke: "#ff0000" } });
			} else if (creep.room.name === targetRoom) {
				creep.moveTo(22, 12);
				// creep.rangedMassAttack();
				let nearNeedToATT = creep.pos.findInRange(FIND_STRUCTURES, 2);
				let nearNeedToATTCREEPS = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 2);
				if (nearNeedToATTCREEPS.length > 1) {
					creep.rangedMassAttack();
				} else if (nearNeedToATTCREEPS.length == 1) {
				} else if (nearNeedToATT.length > 0) {
					creep.rangedAttack(nearNeedToATT[0]);
				} else {
					creep.rangedAttack(nearNeedToATT[0]);
				}
			}
		} else {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(48, 40, Home), { visualizePathStyle: { stroke: "#ff0000" } });
				let nearNeedToATT = creep.pos.findInRange(FIND_STRUCTURES, 2);
				creep.rangedAttack(nearNeedToATT[0]);
			} else if (creep.room.name === Home) {
				creep.moveTo(new RoomPosition(48, 40, Home), { visualizePathStyle: { stroke: "#ff0000" } });
			}
		}
	}
};
export default RATTW58S16;
