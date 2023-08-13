const DismoveTransferW57S9 = {
	run: function (creep: Creep) {
		const ThisRoom = "W57S9";
		creep.moveTo(9, 21);
		const terminal = Game.rooms[ThisRoom].terminal;
		const targetLink = Game.getObjectById("64d8b4cff2c47840be0a67b0") as StructureLink;
		let goods = RESOURCE_OXYGEN;
		const Storage = Game.rooms[ThisRoom].storage;
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
				Game.spawns["Spawn5"].renewCreep(creep);
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
};
export default DismoveTransferW57S9;
