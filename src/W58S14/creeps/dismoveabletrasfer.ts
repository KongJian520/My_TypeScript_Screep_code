import roleCarrier from "./carrier";

const roledismoveabletrasferW58S14 = {
	run: function (creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "CarrierW58S14").length == 0) {
			roleCarrier.run(creep);
		} else {
			// creep.say("1");
			creep.moveTo(new RoomPosition(23, 34, "W58S14"));
			const W58S14 = "W58S14";
			const terminal = Game.rooms[W58S14].terminal!;
			const targetLink = Game.getObjectById("64c079136835debeda4182fd") as StructureLink;
			const Storage = Game.rooms[W58S14].storage!;

			creep.withdraw(targetLink, RESOURCE_ENERGY);
			creep.transfer(Storage, RESOURCE_ENERGY);

			if (creep.ticksToLive !== undefined && creep.ticksToLive < 500) {
				Game.spawns["Spawn2"].renewCreep(creep);
			}
			if (targetLink.store[RESOURCE_ENERGY] == 0) {
				if (terminal.store[RESOURCE_ENERGY] <= 30000 && Storage.store.energy >= 3000) {
					creep.withdraw(Storage, RESOURCE_ENERGY);
					creep.transfer(terminal, RESOURCE_ENERGY);
				}
				if (terminal.store[RESOURCE_ENERGY] >= 35000) {
					creep.withdraw(terminal, RESOURCE_ENERGY);
					creep.transfer(Storage, RESOURCE_ENERGY);
				}
			}
		}
	}
};
export default roledismoveabletrasferW58S14;
