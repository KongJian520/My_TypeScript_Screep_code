import tower from "./utils/tower";
import link from "./utils/link";
import terminalW58S16 from "./utils/term";
import autoSpawn from "./utils/autoSpawn";
import harvester from "./creeps/Harvester";
import upgrader from "./creeps/Upgrader";
import builder from "./creeps/Builder";
import miner from "./creeps/miner";
import carrier from "./creeps/carrier";
import repair from "./creeps/repair";
import collector from "./creeps/Collector";
import dismoveableminer from "./creeps/dismoveableminer";
import dismoveableminer2 from "./creeps/dismoveableminer2";
import Dismveableminer3 from "./creeps/dismoveableminer3";
import Guard from "./creeps/Guard";
import claim from "./creeps/claim";
import remoteHavster from "./creeps/remoteHavster";
import RemoteHavster2 from "./creeps/remoteHavster2";

import RemoteUpgrader from "./creeps/remoteUpgrader";
import transfer from "./creeps/transfer";
import thief from "./creeps/thief";

import remoteAttackerW57S13 from "./creeps/remoteattacker2";
import ChaiQian from "./creeps/remoteChaiQian";
import eye from "./creeps/eye";
import dismoveabletrasfer from "./creeps/dismoveabletrasfer";
import RemoteRepair from "./creeps/remoteRepairer";
import RemoteBuilder from "./creeps/remoteBuilder";
import SelfH from "./creeps/AandH";
import RemoteBuilder2W58S16 from "./creeps/remoteBuilder2";

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
		if (Game.time % 15 === 0) {
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
					case "upgrader":
						upgrader.run(creep);
						break;
					case "builder":
						builder.run(creep);
						break;
					case "miner":
						miner.run(creep);
						break;
					case "carrier":
						carrier.run(creep);
						break;
					case "repair":
						repair.run(creep);
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
					// case 'ChaiQian': roleChaiQian.run(creep); break;
					case "remoteHavster":
						remoteHavster.run(creep);
						break;
					case "RemoteHavster2":
						RemoteHavster2.run(creep);
						break;
					case "RemoteBuilder":
						RemoteBuilder.run(creep);
						break;
					case "RemoteUpgrader":
						RemoteUpgrader.run(creep);
						break;
					// case "transfer":
					//
					// 	break;
					case "transfer":
						const sources = Game.getObjectById("64c8cfac58c500a5a104799d") as StructureContainer;
						if (sources.store.energy == 0) {
							transfer.runMineral(creep);
							break;
						} else {
							transfer.runEnergy(creep);
							break;
						}
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
					case "RemoteBuilder2W58S16":
						RemoteBuilder2W58S16.run(creep);
						break;
				}
			}
		}
	}
};
export default W58S16;
