export const Claim = {
	run: function (creep: Creep) {
		const target = Game.flags.Need_To_Claim1;
		const targetRoom = "W55S8";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
		} else if (creep.room.name === targetRoom) {
			if (creep.room.controller) {
				let Controller = creep.room.controller;
				if (Controller.owner !== creep.owner) {
					if (Controller.reservation !== creep.owner) {
						let result = creep.attackController(Controller);
						creep.moveTo(Controller);
						if (result == 0) creep.cancelOrder(MOVE);
						creep.say(`C A ${result}`);
					} else if (Controller.reservation == creep.owner || Controller.reservation == undefined) {
						let result = creep.reserveController(Controller);
						creep.moveTo(Controller);
						if (result == 0) creep.cancelOrder(MOVE);
						creep.say(`C R ${result}`);
					}
				} else {
					creep.say("我的");
				}
			}
		}
	}
};
