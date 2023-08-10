const RATTW58S16 = {
	run: function (creep: Creep) {
		const targetsRoom = "W58S15";
		creep.heal(creep);
		if (creep.room.name !== targetsRoom) {
			creep.moveTo(new RoomPosition(12, 12, targetsRoom));
		} else {
			const targets = creep.room.find(FIND_HOSTILE_CREEPS);
			const targetsStruc = creep.room.find(FIND_HOSTILE_STRUCTURES);
			if (targets.length > 0) {
				creep.rangedAttack(targets[0]);
			} else {
				creep.moveTo(targetsStruc[0]);
				creep.rangedMassAttack();
			}
		}
	}
};
export default RATTW58S16;
