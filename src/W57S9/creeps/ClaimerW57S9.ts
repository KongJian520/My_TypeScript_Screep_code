const ClaimW57S9 = {
	run: function (creep: Creep) {
		const controller = Game.rooms["W56S8"].controller!;
		if (!controller.owner) {
			if (!controller.reservation || controller.reservation.username === creep.owner.username) {
				let result = creep.reserveController(controller);
				if (result === ERR_NOT_IN_RANGE) {
					creep.say(`RCR,${result}`);
					creep.moveTo(controller);
				} else {
					creep.say(`RCR,E:${result}`);
				}
			}
		} else if (controller.owner.username !== creep.owner.username) {
			let result = creep.attackController(controller);
			if (result === ERR_NOT_IN_RANGE) {
				creep.say(`RCA,${result}`);
				creep.moveTo(controller);
			} else {
				creep.say(`RCA,E:${result}`);
			}
		}
	}
};
export default ClaimW57S9;
