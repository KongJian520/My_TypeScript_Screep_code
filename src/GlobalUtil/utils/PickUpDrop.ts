export const PickUpDrop = (creep: Creep) => {
	const findDrops = creep.room.find(FIND_DROPPED_RESOURCES, {
		filter: (source: Resource) => source.amount > 0
	});
	findDrops.sort((a, b) => b.amount - a.amount);
	// const Drops = creep.pos.findClosestByPath(findDrops);
	const Drops = findDrops[0];
	if (Drops) {
		let result = creep.pickup(Drops);
		creep.moveTo(Drops, {
			visualizePathStyle: { stroke: "#ffaa00" },
			reusePath: 6
		});
		if (result === OK) {
			creep.cancelOrder(MOVE);
			return result;
		} else {
			creep.say(`${result}`);
			return result;
		}
	} else {
		return -100;
	}
};
