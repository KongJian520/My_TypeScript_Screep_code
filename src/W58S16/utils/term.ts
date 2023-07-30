const terminalW58S16 = {
    send: function () {
        const W58S16 = 'W58S16'
        const terminal = Game.rooms[W58S16].terminal
        // const terminal = Game.getObjectById('64c33d512dc85d0e59b44d16') as StructureTerminal;
        let goods = RESOURCE_HYDROGEN
        var order_buy = Game.market.getAllOrders({ type: ORDER_BUY, resourceType: goods });//购买的订单
        var order_sell = Game.market.getAllOrders({ type: ORDER_SELL, resourceType: RESOURCE_ENERGY });//出售的订单
        order_buy.sort((a: Order, b: Order) => b.price - a.price);
        order_sell.sort((a: Order, b: Order) => a.price - b.price);
        var order_buyneededEnergy = Game.market.calcTransactionCost(order_buy[0].amount, W58S16, order_buy[0].roomName as string)
        var order_sellneededEnergy = Game.market.calcTransactionCost(order_sell[0].amount, W58S16, order_buy[0].roomName as string)
        console.log('======待处理订单：======')
        console.log('下一买家' + JSON.stringify(order_buy[0], null, 2))
        if (Game.cpu.bucket == 10000) {
            Game.cpu.generatePixel()
            // Game.market.createOrder({
            //     type: ORDER_SELL,
            //     resourceType: PIXEL,
            //     price: 44999.000,
            //     totalAmount: 1,
            //     roomName: "W58S16"
            // });
        }
        // if (terminal) {
        //     if (order_buy[0]) {
        //         console.log('已填充:' + terminal.store.energy + '/' + order_buyneededEnergy)
        //         if (terminal.store.energy >= order_buyneededEnergy) {
        //             switch (Game.market.deal(order_buy[0].id, 500, W58S16)) {
        //                 case 0: console.log('已发货'); break;
        //                 case -1: console.log('你的终端不存在'); break;
        //                 case -6: console.log('资源不足'); break;
        //                 case -10: console.log('参数无效'); break;
        //                 case -11: console.log('冷却'); break;
        //             }
        //         }
        //         else {
        //             console.log('没钱了')
        //         }
        //     }
        //     console.log('下一卖家' + JSON.stringify(order_sell[0], null, 2))
        //     if (order_sell[0]) {
        //         if (Game.market.credits > 1000) {
        //             console.log('已填充:' + terminal.store.energy + '/' + order_sellneededEnergy)
        //             if (terminal.store.energy >= order_sellneededEnergy) {
        //                 console.log('填充完毕,准备收货')
        //                 switch (Game.market.deal(order_sell[0].id, order_sell[0].amount * 0.05, W58S16)) {
        //                     case 0: console.log('已收货'); break;
        //                     case -1: console.log('你的终端不存在'); break;
        //                     case -6: console.log('资源不足'); break;
        //                     case -10: console.log('参数无效'); break;
        //                     case -11: console.log('冷却'); break;
        //                 }
        //             }
        //         }
        //     }
        // }
        console.log('======待处理订单END======')
    }
}
export default terminalW58S16

