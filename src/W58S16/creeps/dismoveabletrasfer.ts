import roleCarrier from "./carrier";

const roledismoveabletrasfer = {
	run: function (creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "carrier").length == 0) {
			roleCarrier.run(creep);
		} else {
			const W58S16 = "W58S16";
			creep.moveTo(32, 37);
			const terminal = Game.rooms[W58S16].terminal;
			const targetLink = Game.getObjectById("64b5d08fd3a05b4f1f6f0325") as StructureLink;
			let goods = RESOURCE_HYDROGEN;
			const Storage = Game.rooms[W58S16].storage;
			const LinkStore = _.keys(targetLink.store);
			const CreepStore = _.keys(creep.store);
			if (Storage) {
				if (LinkStore[0]) {
					if (LinkStore[0].length > 0) {
						creep.withdraw(targetLink, LinkStore[0] as ResourceConstant);
						creep.transfer(Storage, CreepStore[0] as ResourceConstant);
					}
				}
				creep.transfer(Storage, CreepStore[0] as ResourceConstant);
				if (creep.ticksToLive !== undefined && creep.ticksToLive < 500) {
					Game.spawns["Spawn1"].renewCreep(creep);
				}
				if (targetLink.store[RESOURCE_ENERGY] == 0) {
					if (terminal) {
						if (terminal.store[RESOURCE_ENERGY] <= 30000) {
							creep.withdraw(Storage, RESOURCE_ENERGY);
							creep.transfer(terminal, RESOURCE_ENERGY);
						}
						if (terminal.store[RESOURCE_ENERGY] >= 35000) {
							creep.withdraw(terminal, RESOURCE_ENERGY);
							creep.transfer(Storage, RESOURCE_ENERGY);
						}
						if (Storage.store[goods] >= 500) {
							creep.withdraw(Storage, goods);
							creep.transfer(terminal, goods);
						}
					}
				} else if (targetLink.store[RESOURCE_ENERGY] !== 0 && creep.store[goods] > 0) {
					if (terminal) {
						creep.transfer(terminal, goods);
					}
				}
			}
		}
	}
};
export default roledismoveabletrasfer;
