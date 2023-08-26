export const UpgradeControllerByObj = (creep: Creep, controller: StructureController | undefined) => {
	if (controller == undefined) {
		creep.say("🔍❌");
	} else {
		creep.moveTo(controller, {
			visualizePathStyle: { stroke: "#ffffff" },
			reusePath: 10
		});
		creep.upgradeController(controller);
	}
};
export const UpgradeControllerByID = (creep: Creep, ControllerId: string) => {
	let Controller = Game.getObjectById<StructureController>(ControllerId)!;
	creep.moveTo(Controller, {
		visualizePathStyle: { stroke: "#ffaa00" },
		reusePath: 10
	});
	if (Controller) {
		let result = creep.upgradeController(Controller);
		creep.say(`${result}`);
	} else {
		creep.say("🔍❌");
	}
};
