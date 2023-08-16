import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import HarvesterW57S9 from "./creeps/HarvesterW57S9";
import UpgraderW57S9 from "./creeps/UpgraderW57S9";
import BuilderW57S9 from "./creeps/BuilderW57S9";
import GuardW57S9 from "./creeps/GuardW57S9";
import CarrierW57S9 from "./creeps/CarrierW57S9";
import Dismveableminer2W57S9 from "./creeps/Dismoveminer2W58S15";
import DismveableminerW57S9 from "./creeps/DismoveminerW58S15";
import TransferW57S9 from "./creeps/TransferW57S9";
import Transfer2W57S9 from "./creeps/Transfer2W57S9";
import Transfer3W57S9 from "./creeps/Transfer3W57S9";
import CollectorW57S9 from "./creeps/CollectorW57S9";

import ClaimW56S8 from "./creeps/ClaimerW57S9";
import GuardW56S8 from "./creeps/GuardW56S8";
import DismoveTransferW57S9 from "./creeps/DismoveTransferW57S9";
import RemoteBuilderW56S8 from "./creeps/RemoteBuilderW56S8";
import EnergyTransfer1W56S8 from "./creeps/EnergyTransfer1W56S8";
import RemoteBuilderW57S8 from "./creeps/RemoteBuilderW57S8";
import RemoteHavsterW56S8 from "./creeps/RemoteHavsterWS57S9";

const W57S9 = {
	work: function (ThisRoom: Room) {
		function logRoomInfo() {
			console.log(`----------------${ThisRoom.name}-------------------`);
			console.log(`${ThisRoom.name} 能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
		}

		let name;

		if (Game.time % 2 === 0) {
			logRoomInfo();
			for (name in Memory.creeps) {
				if (!Game.creeps[name]) {
					delete Memory.creeps[name];
				}
			}
			link.run();
		}

		for (const Spawns of ThisRoom.find(FIND_MY_SPAWNS)) {
			if (Spawns.spawning) {
				const spawningCreep = Game.creeps[Spawns.spawning.name];
				Spawns.room.visual.text("🛠️" + spawningCreep.memory.role, Spawns.pos.x + 1, Spawns.pos.y, {
					align: "left",
					opacity: 0.8
				});
				if (Game.time % 2 === 0) {
					console.log(`🔁${ThisRoom.name}的${Spawns.name}正在生成 ${spawningCreep.memory.role}`);
				}
			} else {
				if (Game.time % 2 === 0) {
					autoSpawn.spawn(Spawns);
				}
			}
		}

		if (Game.time % 10 === 0 && ThisRoom.terminal) {
			terminalW58S16.send(ThisRoom.terminal);
		}

		let Towers = ThisRoom.find(FIND_MY_STRUCTURES, {
			filter: { structureType: STRUCTURE_TOWER }
		}) as StructureTower[];
		for (let Tower of Towers) {
			tower.run(Tower);
		}

		const roleToFunction: { [roleName: string]: { run(creep: Creep): void } } = {
			HarvesterW57S9: HarvesterW57S9,
			UpgraderW57S9: UpgraderW57S9,
			BuilderW57S9: BuilderW57S9,
			GuardW57S9: GuardW57S9,
			CarrierW57S9: CarrierW57S9,
			Dismveableminer2W57S9: Dismveableminer2W57S9,
			DismveableminerW57S9: DismveableminerW57S9,
			TransferW57S9: TransferW57S9,
			Transfer2W57S9: Transfer2W57S9,
			Transfer3W57S9: Transfer3W57S9,
			CollectorW57S9: CollectorW57S9,
			ClaimW56S8: ClaimW56S8,
			Transfer4W57S9: EnergyTransfer1W56S8,
			GuardW56S8: GuardW56S8,
			DismoveTransferW57S9: DismoveTransferW57S9,
			RemoteBuilderW56S8: RemoteBuilderW56S8,
			EnergyTransfer1W56S8: EnergyTransfer1W56S8,
			RemoteBuilderW57S8: RemoteBuilderW57S8,
			RemoteHavsterW56S8: RemoteHavsterW56S8
		};

		for (name in Game.creeps) {
			const creep = Game.creeps[name];
			const roleFunction = roleToFunction[creep.memory.role];
			if (roleFunction) {
				roleFunction.run(creep);
			}
		}
	}
};

export default W57S9;
