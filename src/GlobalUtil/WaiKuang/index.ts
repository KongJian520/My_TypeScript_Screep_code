import { RemoteHarvester } from "./creep/RBRemoteHarveser";

export const WaiKuang = (creep: Creep, targetRoom: Room, Home: Room, SourceID: string) => {
	const source = Game.getObjectById<Source>(SourceID);
	if (source) {
		const Spawn = Home.find(FIND_MY_SPAWNS);

		const Count = _.filter(
			Game.creeps,
			creep => creep.memory.role == "RemoteHarvester" && creep.memory.SourceId == SourceID
		);
		if (Count.length == 0) {
			const newName = "RemoteHarvester" + Game.time;
			console.log("Spawning new RemoteHarvester: " + newName);
			Spawn[0].spawnCreep([WORK, CARRY, MOVE], newName, {
				memory: {
					role: "RemoteHarvester",
					working: false,
					SourceId: SourceID,
					room: Home.name
				}
			});
		} else {
			for (let name in Game.creeps) {
				let creep = Game.creeps[name];
				if (creep.memory.role == "RemoteHarvester") {
					RemoteHarvester.run(creep, targetRoom, Home, SourceID);
				}
			}
		}
	} else {
		return ERR_INVALID_TARGET;
	}
};
