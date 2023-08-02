const terminalW58S16 = {
    send: function (terminal: StructureTerminal) {
        // 处理购买订单的通用函数
        function processBuyOrder(order: Order[], energyThreshold: number, percentage: number, dealMessage: string) {
            for (const currentOrder of order) {
                const orderNeededEnergy = Game.market.calcTransactionCost(currentOrder.amount, terminal.room.name, currentOrder.roomName as string);

                if (terminal.store.energy >= orderNeededEnergy) {
                    console.log(dealMessage);
                    const dealResult = Game.market.deal(currentOrder.id, currentOrder.amount * percentage, terminal.room.name);
                    handleDealResult(dealResult);
                    break; // 处理成功后退出循环
                }
            }
        }

        // 处理出售H资源的通用函数
        function processSellHydrogen(energyThreshold: number, percentage: number, dealMessage: string) {
            const orderSell = Game.market.getAllOrders({
                type: ORDER_SELL,
                resourceType: RESOURCE_HYDROGEN
            }).sort((a, b) => a.price - b.price);

            for (const currentOrder of orderSell) {
                if (terminal.store[RESOURCE_HYDROGEN] >= currentOrder.amount) {
                    console.log(dealMessage);
                    const dealResult = Game.market.deal(currentOrder.id, currentOrder.amount * percentage, terminal.room.name);
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

        if (Game.market.credits > 1000) {
            processBuyOrder(Game.market.getAllOrders({
                type: ORDER_BUY,
                resourceType: RESOURCE_ENERGY
            }).sort((a, b) => b.price - a.price), terminal.store.energy, 0.5, '购买能量');
        }

        processSellHydrogen(terminal.store.energy, 0.05, '出售H');
    }
};

export default terminalW58S16;
