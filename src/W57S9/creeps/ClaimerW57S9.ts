const ClaimW56S8 = {
	run: function (creep: Creep) {
		const targetRoom = "W56S8";
		const controller = Game.rooms[targetRoom]?.controller; // 使用安全导航操作符确保获取不会导致错误

		if (!controller) {
			creep.say("No controller");
			return;
		}

		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(controller.pos.x, controller.pos.y, targetRoom));
		} else {
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
