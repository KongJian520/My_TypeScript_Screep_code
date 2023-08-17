const ClaimW56S8 = {
	run: function (creep: Creep) {
		const targetFlag = Game.flags.ClaimW56S8Ta;
		const targetRoom = Game.flags.ClaimW56S8Ta.pos.roomName;
		creep.say(creep.moveTo(targetFlag.pos) as unknown as string);
		if (creep.room.name !== targetRoom) {
			creep.moveTo(targetFlag.pos);
		} else {
			const controller = Game.rooms[targetRoom].controller!;
			if (!controller.owner) {
				if (!controller.reservation) {
					this.reserveController(creep, controller);
				} else if (controller.reservation.username !== creep.owner.username) {
					this.attackController(creep, controller);
				} else {
					this.reserveController(creep, controller);
				}
			}
		}
	},

	reserveController: function (creep: Creep, controller: StructureController): void {
		let result = creep.reserveController(controller);
		if (result === ERR_NOT_IN_RANGE) {
			creep.say(`R, ${result}`);
			creep.moveTo(controller);
		} else if (result == OK) {
			creep.say(`R OK`);
		} else {
			creep.say(`R Err: ${result}`);
		}
	},

	attackController: function (creep: Creep, controller: StructureController): void {
		let result = creep.attackController(controller);
		if (result === ERR_NOT_IN_RANGE) {
			creep.say(`A, ${result}`);
			creep.moveTo(controller);
		} else if (result == OK) {
			creep.say(`A OK`);
		} else {
			creep.say(`A Err: ${result}`);
		}
	}
};

export default ClaimW56S8;
