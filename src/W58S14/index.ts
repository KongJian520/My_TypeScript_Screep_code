import roleBuilderW58S14 from "./creeps/Builder";
import roleUpgraderW58S14 from "./creeps/Upgrader";
import roleHarvesterW58S14 from "./creeps/Harvester";
import roleCarrierW58S14 from "./creeps/carrier";
import roleCollectorW58S14 from "./creeps/Collector";
import roleRepairW58S14 from "./creeps/repair";
import tower from "./utils/tower";
import transferW58S14 from "./creeps/transfer";
import roleDismveableminer2 from "./creeps/dismoveableminer2";
import roleMinerW58S14 from "./creeps/Miner";
import roledismoveabletrasferW58S14 from "./creeps/dismoveabletrasfer";
import roleDismveableminerW58S14 from "./creeps/dismoveableminer";
import RemoteBuilder2W58S14 from "./creeps/remoteBuilder2";
import roleRemoteBuilderW58S14 from "./creeps/remoteBuilder";
import roleRemoteHavsterW58S14 from "./creeps/remoteHavster";
import roleremoteAttackerW58S14 from "./creeps/remoteattacker";
import EXMANW58S14 from "./creeps/EXMAN";
import roleGuardW58S14 from "./creeps/Guard";
import GuardW58S13 from "./creeps/GuardW58S13";
import roleClaim from "./creeps/claim";
import roleClaimW58S13 from "./creeps/claimW58S13";
import link from "./utils/link";
import autoSpawn from "./utils/autoSpawn";
import terminalW58S16 from "./utils/term";
import Dismveableminer3W58S14 from "./creeps/dismoveableminer3";
import RATTW58S14 from "./creeps/RATTW58S14";
import RemoteBuilder3W58S14 from "./creeps/RemoteBuilder3W58S14";
import LabTransferW58S14 from "./creeps/LabTransferW58S14";
import Transfer2W58S14 from "./creeps/TransferW58S14";
import ClaimW59S15 from "./creeps/ClaimW59S15";
import RemoteHavsterW59S15 from "./creeps/RemoteHavsterW59S15";

const W58S14 = {
	work: function (ThisRoom: Room) {
		if (Game.time % 2 === 0) {
			console.log(`----------------${ThisRoom.name}-------------------`);
			if (ThisRoom.storage) {
				console.log("Storge-RESOURCE_ENERGY = " + ThisRoom.storage.store.getUsedCapacity(RESOURCE_ENERGY));
			}

			console.log(`${ThisRoom.name}能量:` + ThisRoom.energyAvailable + "/" + ThisRoom.energyCapacityAvailable);
			// 遍历 Spawn 并执行逻辑
		}
		if (Game.time % 15 === 0) {
			link.run();
		}
		let Towers = ThisRoom.find(FIND_MY_STRUCTURES, {
			filter: { structureType: STRUCTURE_TOWER }
		}) as StructureTower[];
		for (let Tower of Towers) {
			tower.run(Tower);
		}
		for (const Spawns of ThisRoom.find(FIND_MY_SPAWNS)) {
			// 执行你的 Spawn 相关逻辑，比如生成单位、孵化等
			if (Spawns.spawning) {
				const spawningCreep = Game.creeps[Spawns.spawning.name];
				Spawns.room.visual.text("🛠️" + spawningCreep.memory.role, Spawns.pos.x + 1, Spawns.pos.y, {
					align: "left",
					opacity: 0.8
				});
				if (Game.time % 2 === 0) {
					console.log(`🔁${ThisRoom.name}的${Spawns.name} is Spawning ${spawningCreep.memory.role}`);
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

		for (const name in Game.creeps) {
			const creep = Game.creeps[name];
			switch (creep.memory.role) {
				case "Dismveableminer3W58S14":
					Dismveableminer3W58S14.run(creep);
					break;
				case "HarvesterW58S14":
					roleHarvesterW58S14.run(creep);
					break;
				case "BuilderW58S14":
					roleBuilderW58S14.run(creep);
					break;
				case "UpgraderW58S14":
					roleUpgraderW58S14.run(creep);
					break;
				case "CarrierW58S14":
					roleCarrierW58S14.run(creep);
					break;
				case "CollectorW58S14":
					roleCollectorW58S14.run(creep);
					break;
				case "RepairW58S14":
					roleRepairW58S14.run(creep);
					break;
				case "Dismveableminer2W58S14":
					roleDismveableminer2.run(creep);
					break;
				case "Transfer2W58S14":
					Transfer2W58S14.run(creep);
					break;
				case "transferW58S14":
					transferW58S14.run(creep);
					// transferW58S14.runEnergy(creep);
					break;
				case "MinerW58S14":
					roleMinerW58S14.run(creep);
					break;
				case "dismoveabletrasferW58S14":
					roledismoveabletrasferW58S14.run(creep);
					break;
				case "RemoteBuilderW58S14":
					roleRemoteBuilderW58S14.run(creep);
					break;
				case "RemoteBuilder2W58S14":
					RemoteBuilder2W58S14.run(creep);
					break;
				case "RemoteBuilder3W58S14":
					RemoteBuilder3W58S14.run(creep);
					break;
				case "RemoteHavsterW58S14":
					roleRemoteHavsterW58S14.run(creep);
					break;
				case "RemoteAttackerW58S14":
					roleremoteAttackerW58S14.run(creep);
					break;
				case "GuardW58S14":
					roleGuardW58S14.run(creep);
					break;
				case "GuardW58S13":
					GuardW58S13.run(creep);
					break;
				case "claimW58S14":
					roleClaim.run(creep);
					break;
				case "claimW58S13":
					roleClaimW58S13.run(creep);
					break;
				case "ClaimW59S15":
					ClaimW59S15.run(creep);
					break;
				case "EXMANW58S14":
					EXMANW58S14.run(creep);
					break;
				case "DismveableminerW58S14":
					roleDismveableminerW58S14.run(creep);
					break;
				case "RATTW58S14":
					RATTW58S14.run(creep);
					break;
				case "LabTransferW58S14":
					LabTransferW58S14.run(creep);
					break;
				case "RemoteHavsterW59S15":
					RemoteHavsterW59S15.run(creep);
					break;
			}
		}
	}
};

export default W58S14;
