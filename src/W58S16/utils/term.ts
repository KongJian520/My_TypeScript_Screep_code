const terminalW58S16 = {
    send: function (terminal: StructureTerminal) {
        const goods = RESOURCE_HYDROGEN
        processSellOrder(Game.market.getAllOrders({
            type: ORDER_SELL,
            resourceType: goods
        }).sort((a, b) => a.price - b.price), 500,);
        processBuyOrder(Game.market.getAllOrders({
            type: ORDER_BUY,
            resourceType: RESOURCE_ENERGY
        }).sort((a, b) => b.price - a.price), 500,);


        // 处理购买订单的通用函数
        function processBuyOrder(orderBuy: Order[], OrderAmount: number) {
            for (const currentOrder of orderBuy) {
                const orderNeededEnergy = Game.market.calcTransactionCost(currentOrder.amount, terminal.room.name, currentOrder.roomName as string);
                console.log("===============购买===============");
                console.log("订单ID:", currentOrder.id);
                console.log("订单种类:", currentOrder.type);
                console.log("资源种类:", currentOrder.resourceType);
                console.log("目标屋子:", currentOrder.roomName);
                console.log("单价:", currentOrder.price);
                console.log("数量:", currentOrder.amount);
                if (terminal.store.energy >= orderNeededEnergy) {
                    const dealResult = Game.market.deal(currentOrder.id, OrderAmount, terminal.room.name);
                    console.log("购买结果：")
                    handleDealResult(dealResult);
                    break; // 处理成功后退出循环
                }
            }
        }

        // 处理出售资源的通用函数
        function processSellOrder(orderSell: Order[], OrderAmount: number,) {
            for (const currentOrder of orderSell) {
                if (terminal.store[goods] >= currentOrder.amount) {
                    const dealResult = Game.market.deal(currentOrder.id, OrderAmount, terminal.room.name);
                    console.log("===============出售===============");
                    console.log("订单ID:", currentOrder.id);
                    console.log("订单种类:", currentOrder.type);
                    console.log("资源种类:", currentOrder.resourceType);
                    console.log("目标屋子:", currentOrder.roomName);
                    console.log("单价:", currentOrder.price);
                    console.log("数量:", currentOrder.amount);
                    console.log("出售结果：")
                    handleDealResult(dealResult);
                    break; // 处理成功后退出循环
                }
            }
        }

        function handleDealResult(result: number) {
            switch (result) {
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
};

export default terminalW58S16;
