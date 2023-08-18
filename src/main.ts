/// <reference types="@screepscn/types" />+

import W58S16 from "W58S16";
import W58S14 from "W58S14";
import W57S9 from "W57S9";

// Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, MOVE], "test1",{ memory: { role: 'dismoveableminer', room: '', working: false } })
// Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE,MOVE, MOVE, MOVE], "claim"+Game.time,{ memory: { role: 'claim', room: '', working: false } })
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
		boosted?: boolean;
	}

	namespace NodeJS {
		interface Global {
			log: any;
		}
	}
}

console.log("=========================================");
console.log("code is Updated!...,The Game tickis .." + Game.time);
console.log("=========================================");

// Game.market.deal('64c35b138afb1c39b4c12983', 2000, 'W58S16')

export const loop = () => {
	if (Game.cpu.bucket === 10000) {
		cancelZeroAmountOwnOrders();
		Game.cpu.generatePixel();
		// Game.market.deal("64c813840b755a87a6a3b510", 1);
	}
	if (Game.time % 2 === 0) {
		console.log("\r");
		console.log("\r");
		console.log("\r");
		console.log("========" + "Game.time = " + Game.time + "==" + "cpu.bucket=" + Game.cpu.bucket + "========");
	}
	// cancelZeroAmountOwnOrders();
	for (let RoomName in Game.rooms)
		switch (RoomName) {
			case "W58S16":
				try {
					W58S16.work(Game.rooms[RoomName]);
				} catch (error) {
					if (error instanceof Error) {
						console.log(`W58S16，异常抛出：${error}`);
						console.log(error.stack);
					}
				}
				break;
			case "W58S14":
				try {
					W58S14.work(Game.rooms[RoomName]);
				} catch (error) {
					if (error instanceof Error) {
						console.log(`W58S14，异常抛出：${error}`);
						console.log(error.stack);
					}
				}

				break;
			case "W57S9":
				try {
					W57S9.work(Game.rooms[RoomName]);
				} catch (error) {
					// 显示错误的位置
					if (error instanceof Error) {
						console.log(`W57S9，异常抛出：${error}`);
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
