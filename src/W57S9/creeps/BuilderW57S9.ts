import DismveableminerW57S9 from "./DismoveminerW58S15";

const BuilderW57S9 = {
	run: function (creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "DismveableminerW57S9").length == 0) {
			DismveableminerW57S9.run(creep);
		} else {
			const targetRoom = "W57S9";
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.working = false;
				creep.say("BU 🔄 ");
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
				creep.memory.working = true;
				creep.say("🚧");
			}
			if (creep.room.name !== targetRoom) {
				creep.say("Moving");
				creep.moveTo(new RoomPosition(20, 37, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
			} else if (creep.room.name === targetRoom) {
				if (creep.memory.working) {
					const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
					if (targets.length !== 0) {
						if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targets[0], {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 10
							});
						}
					} else {
						if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
							creep.moveTo(creep.room.controller!, {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 10
							});
						}
					}
				} else {
					const sources = Game.getObjectById<StructureStorage>("64d64646b5f538e742f592a7")!;
					if (sources.store.energy !== 0) {
						if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(sources);
						}
					} else {
						creep.memory.working = true;
						creep.moveTo(sources.pos.x + 2, sources.pos.y - 2);
					}
				}
			}
		}
	}
};
export default BuilderW57S9;
