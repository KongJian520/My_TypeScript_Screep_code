import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import harvester from "./creeps/Harvester";
import UpgraderW58S16 from "./creeps/UpgraderW58S16";

import miner from "./creeps/miner";
import carrier from "./creeps/carrier";

import collector from "./creeps/Collector";
import dismoveableminer from "./creeps/dismoveableminer";
import dismoveableminer2 from "./creeps/dismoveableminer2";
import Dismveableminer3 from "./creeps/dismoveableminer3";
import Guard from "./creeps/Guard";
import claim from "./creeps/claim";

import RemoteUpgrader from "./creeps/remoteUpgrader";
import transfer from "./creeps/transfer";
import thief from "./creeps/thief";

import remoteAttackerW57S13 from "./creeps/remoteattacker2";
import ChaiQian from "./creeps/remoteChaiQian";
import eye from "./creeps/eye";
import dismoveabletrasfer from "./creeps/dismoveabletrasfer";
import RemoteRepair from "./creeps/remoteRepairer";
import RemoteBuilderW58S17 from "./creeps/RemoteBuilderW58S17";
import SelfH from "./creeps/SelfH";
import LabTransferW58S16 from "./creeps/LabTransfer";
import RATTW58S16 from "./creeps/RATTW58S16";
import Claim2W58S15 from "./creeps/Claim2W58S16";
import LabW58S16 from "./utils/Lab";
import RemoteHavster3W58S16 from "./creeps/RemoteHavster3W58S16";
import Transfer2W58S16 from "./creeps/Transfer2W58S16";
import RemoteHavster2W58S16 from "./creeps/RemoteHavster2W58S16";
import Transfer3W58S16 from "./creeps/Transfer3W58S16";
import BuilderW58S16 from "./creeps/BuilderW58S16";
import RemoteBuilderW58S15 from "./creeps/RemoteBuilderW58S15";
import RemoteHavsterW58S16 from "./creeps/RemoteHavsterW58S16";

const W58S16 = {
	work: function (ThisRoom: Room) {
		let name;

		if (Game.time % 2 === 0) {
			console.log(`---------------${ThisRoom.name}-------------------`);
			console.log(`${ThisRoom.name} 能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}
			for (name in Memory.creeps) {
				if (!Game.creeps[name]) {
					delete Memory.creeps[name];
					// console.log('Clearing non-existing creep memory:', name);
				}
			}
		}
		link.run();
		LabW58S16.run();

		for (const Spawns of ThisRoom.find(FIND_MY_SPAWNS)) {
			if (Spawns.spawning) {
				const spawningCreep = Game.creeps[Spawns.spawning.name];
				Spawns.room.visual.text("🛠️" + spawningCreep.memory.role, Spawns.pos.x + 1, Spawns.pos.y, {
					align: "left",
					opacity: 0.8
				});
				if (Game.time % 2 === 0) {
					console.log(`🔁${Spawns.name} is Spawning ${spawningCreep.memory.role}`);
				}
			} else {
				if (Game.time % 2 === 0) {
					autoSpawn.spawn(Spawns);
				}
			}
		}

		if (Game.time % 10 === 0) {
			if (ThisRoom.terminal) {
				terminalW58S16.send(ThisRoom.terminal);
			}
		}
		let Towers = ThisRoom.find(FIND_MY_STRUCTURES, {
			filter: { structureType: STRUCTURE_TOWER }
		}) as StructureTower[];
		// 遍历每个塔
		for (let Tower of Towers) {
			tower.run(Tower);
		}
		for (name in Game.creeps) {
			{
				const creep = Game.creeps[name];
				// 优化后的代码
				switch (creep.memory.role) {
					case "harvester":
						harvester.run(creep);
						break;
					case "UpgraderW58S16":
						UpgraderW58S16.run(creep);
						break;
					case "BuilderW58S16":
						BuilderW58S16.run(creep);
						break;
					case "miner":
						miner.run(creep);
						break;
					case "carrier":
						carrier.run(creep);
						break;
					case "collector":
						collector.run(creep);
						break;
					case "dismoveableminer":
						dismoveableminer.run(creep);
						break;
					case "dismoveableminer2":
						dismoveableminer2.run(creep);
						break;
					case "Dismveableminer3":
						Dismveableminer3.run(creep);
						break;
					case "Guard":
						Guard.run(creep);
						break;
					case "SelfH":
						SelfH.run(creep);
						break;
					case "claim":
						claim.run(creep);
						break;
					case "Claim2W58S15":
						Claim2W58S15.run(creep);
						break;
					// case 'ChaiQian': roleChaiQian.run(creep); break;
					case "RemoteHavsterW58S16":
						RemoteHavsterW58S16.run(creep);
						break;
					case "Transfer2W58S16":
						Transfer2W58S16.run(creep);
						break;
					case "Transfer3W58S16":
						Transfer3W58S16.run(creep);
						break;
					case "RemoteHavster2W58S16":
						RemoteHavster2W58S16.run(creep);
						break;
					case "RemoteHavster3W58S16":
						RemoteHavster3W58S16.run(creep);
						break;
					case "RemoteBuilderW58S17":
						RemoteBuilderW58S17.run(creep);
						break;
					case "RemoteUpgrader":
						RemoteUpgrader.run(creep);
						break;
					case "transfer":
						transfer.run(creep);
						break;
					case "thief":
						thief.run(creep);
						break;
					case "remoteAttackerW57S13":
						remoteAttackerW57S13.run(creep);
						break;
					case "ChaiQian":
						ChaiQian.run(creep);
						break;
					case "eye":
						eye.run(creep);
						break;
					case "dismoveabletrasfer":
						dismoveabletrasfer.run(creep);
						break;
					case "RemoteRepair":
						RemoteRepair.run(creep);
						break;
					case "RemoteBuilderW58S15":
						RemoteBuilderW58S15.run(creep);
						break;
					case "LabTransferW58S16":
						LabTransferW58S16.run(creep);
						break;
					case "RATTW58S16":
						RATTW58S16.run(creep);
						break;
				}
			}
		}
	}
};
export default W58S16;
