const terminalW58S16 = {
	send: function (terminal: StructureTerminal) {
		// 处理订单的通用函数
		function processOrder(order: Order[], energyThreshold: number, percentage: number, dealMessage: string) {
			if (order.length > 0) {
				const orderNeededEnergy = Game.market.calcTransactionCost(order[0].amount, terminal.room.name, order[0].roomName as string);

				if (terminal.store.energy >= orderNeededEnergy) {
					console.log(dealMessage);
					const dealResult = Game.market.deal(order[0].id, order[0].amount * percentage, terminal.room.name);
					switch (dealResult) {
						case 0:
							console.log('已处理');
							break;
						case -1:
							console.log('你的终端不存在');
							break;
						case -6:
							console.log('资源不足');
							break;
						case -10:
							console.log('参数无效');
							break;
						case -11:
							console.log('冷却');
							break;
					}
				}
			}
		}

		// 获取购买订单并按价格排序
		const orderBuy = Game.market.getAllOrders({
			type: ORDER_BUY,
			resourceType: RESOURCE_HYDROGEN
		}).sort((a, b) => b.price - a.price);

		processOrder(orderBuy, terminal.store.energy, 500, '已发货');

		// 获取出售订单并按价格排序
		const orderSell = Game.market.getAllOrders({
			type: ORDER_SELL,
			resourceType: RESOURCE_ENERGY
		}).sort((a, b) => a.price - b.price);

		if (Game.market.credits > 1000) {
			processOrder(orderSell, terminal.store.energy, 0.05, '填充完毕,准备收货');
		}
	}
};

export default terminalW58S16;
