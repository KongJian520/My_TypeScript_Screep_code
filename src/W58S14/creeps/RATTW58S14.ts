const RATTW58S14 = {
	run: function (creep: Creep) {
		const Flags = Game.flags.ATTACK;
		const targetsRoom = new RoomPosition(Flags.pos.x, Flags.pos.y, Flags.pos.roomName);
		const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
		const targetsStruc = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 6);
		creep.heal(creep);
		if (creep.room.name !== targetsRoom.roomName) {
			creep.moveTo(targetsRoom);
		} else {
			if (targets.length > 0) {
				creep.rangedAttack(targets[0]);
			} else {
				creep.moveTo(targetsStruc[0]);
				creep.rangedMassAttack();
			}
		}
	}
};
export default RATTW58S14;
