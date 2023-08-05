const terminalW58S14 = {
	send: function (terminal: StructureTerminal) {
		console.log(`------------------------${terminal.room.name}-Terminal---------------------------`);
		const goods = RESOURCE_ZYNTHIUM;
		createEnergyBuyOrder();
		createResourceSellOrder();

		processOrder(
			Game.market
				.getAllOrders({
					type: ORDER_BUY,
					resourceType: goods
				})
				.sort((a, b) => b.price - a.price),
			500,
			terminal
		);

		processOrder(
			Game.market
				.getAllOrders({
					type: ORDER_SELL,
					resourceType: RESOURCE_ENERGY
				})
				.sort((a, b) => a.price - b.price),
			500,
			terminal
		);

		function processOrder(orderSell: Order[], OrderAmount: number, terminal: StructureTerminal) {
			for (let i = 0; i < 5; i++) {
				if (terminal.store[goods] >= orderSell[i].amount) {
					console.log(`<font color=\"#87ceeb\">===============${orderSell[i].type}订单===============`);
					console.log("订单ID:", orderSell[i].id);
					console.log("订单种类:", orderSell[i].type);
					console.log("资源种类:", orderSell[i].resourceType);
					console.log("目标屋子:", orderSell[i].roomName);
					console.log("单价:", orderSell[i].price);
					console.log("数量:", orderSell[i].amount);
					console.log("出售结果：");
					// 计算交易所需能量
					const orderNeededEnergy = Game.market.calcTransactionCost(
						orderSell[i].amount,
						terminal.room.name,
						orderSell[i].roomName as string
					);
					console.log(`已充能：${terminal.store.energy} / ${orderNeededEnergy}`);
					// 检查是否有足够的能量进行交易
					if (terminal.store.energy >= orderNeededEnergy) {
						const dealResult = Game.market.deal(orderSell[i].id, OrderAmount, terminal.room.name);
						handleDealResult(dealResult);
					} else {
						console.log(`路费不够，不执行函数`);
					}
				} else {
					console.log(`资源不足，中断代码执行`);
					break;
				}
			}
		}

		// 假设 "goods" 是你要出售的资源种类

		//创建能量购买订单
		function createEnergyBuyOrder() {
			const orderAmount = 10000; // 要购买的能量数量
			const maxPrice = 10; // 设置一个最大购买价格

			const existingOrders = Game.market.getAllOrders({
				type: ORDER_BUY,
				resourceType: RESOURCE_ENERGY,
				price: maxPrice
			});

			if (existingOrders.length === 0) {
				const dealResult = Game.market.createOrder({
					type: ORDER_BUY,
					resourceType: RESOURCE_ENERGY,
					price: maxPrice,
					totalAmount: orderAmount,
					roomName: terminal.room.name
				});

				console.log("创建能量购买订单结果：");
				handleDealResult(dealResult);
			} else {
				console.log("已存在符合条件的购买订单，无需创建新订单。");
			}
		}

		//创建资源出售订单
		function createResourceSellOrder() {
			const orderAmount = 10000; // 要出售数量
			const maxPrice = 90; // 设置一个最大购买价格

			const existingOrders = Game.market.getAllOrders({
				type: ORDER_SELL,
				resourceType: goods,
				price: maxPrice
			});

			if (existingOrders.length === 0) {
				const dealResult = Game.market.createOrder({
					type: ORDER_SELL,
					resourceType: goods,
					price: maxPrice,
					totalAmount: orderAmount,
					roomName: terminal.room.name
				});

				console.log(`创建${goods}售出订单结果：`);
				handleDealResult(dealResult);
			} else {
				console.log(`已存在符合条件的出售${goods}订单，无需创建新订单。`);
			}
		}

		// 处理出售资源的通用函数

		function handleDealResult(result: number) {
			switch (result) {
				case 0:
					console.log(`已处理`);
					break;
				case -1:
					console.log(`返回值：${result}：你的终端不存在`);
					break;
				case -6:
					console.log(`返回值：${result}：资源不足`);
					break;
				case -10:
					console.log(`返回值：${result}：参数无效`);
					break;
				case -11:
					console.log(`返回值：${result}：冷却`);
					break;
				default:
					console.log(`未定义返回值${result}`);
					break;
			}
		}
	}
};

export default terminalW58S14;
