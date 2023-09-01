/// <reference types="@screepscn/types" />+

import { W55S8 } from "W55S8";
import { W56S8 } from "W56S8";

// Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, MOVE], "test1",{ memory: { role: 'dismoveableminer', room: '', working: false } })
// Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE,MOVE, MOVE, MOVE], "claim"+Game.time,{ memory: { role: 'ClaimW46S12', room: '', working: false } })
// Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

declare global {
	interface Memory {
		uuid: number;
		log: any;
		role: any;
	}

	interface CreepMemory {
		role: string;
		room: string;
		working: boolean;
		SourceId?: string;
	}

	// interface FlagMemory {
	// 	role: string;
	// 	room: string;
	// 	working: boolean;
	// 	SourceId?: string;
	// }

	namespace NodeJS {
		interface Global {
			log: any;
		}
	}
}

console.log("=========================================");
console.log("code is Updated!...,The Game tickis .." + Game.time);
console.log("=========================================");

// Game.market.deal('64c813840b755a87a6a3b510', 257)

export const loop = () => {
	if (Game.time % 2 === 0) {
		console.log("\r");
		console.log("\r");
		console.log("\r");
		console.log("========" + "Game.time = " + Game.time + "==" + "cpu.bucket=" + Game.cpu.bucket + "========");
	}
	getPixels();
	// cancelZeroAmountOwnOrders();
	for (let RoomName in Game.rooms)
		switch (RoomName) {
			case "W56S8":
				try {
					W56S8.work(Game.rooms[RoomName]);
				} catch (error) {
					// 显示错误的位置
					if (error instanceof Error) {
						console.log(`${RoomName}，异常抛出：${error}`);
						console.log(error.stack);
					}
				}
				break;
			case "W55S8":
				try {
					W55S8.work(Game.rooms[RoomName]);
				} catch (error) {
					// 显示错误的位置
					if (error instanceof Error) {
						console.log(`${RoomName}，异常抛出：${error}`);
						console.log(error.stack);
					}
				}
				break;
		}
};

function cancelZeroAmountOwnOrders(): void {
	const myOrders = Game.market.orders;
	for (const orderId in myOrders) {
		const order = myOrders[orderId];
		if (order.amount === 0) {
			const result = Game.market.cancelOrder(orderId);
			if (result === OK) {
				console.log(`Canceled own order ${orderId} with zero amount.`);
			} else {
				console.log(`Failed to cancel own order ${orderId}. Result: ${result}`);
			}
		}
	}
}

function getPixels() {
	if (Game.cpu.bucket === 10000) {
		cancelZeroAmountOwnOrders();
		Game.cpu.generatePixel();
		// Game.market.deal("64c813840b755a87a6a3b510", 1);
	}
}
