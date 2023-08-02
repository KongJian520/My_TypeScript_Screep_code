const link = {

    run: function () {
        const sourceLink = Game.getObjectById('64c0730c64271e64bf03f388') as StructureLink;
        const targetLink = Game.getObjectById('64c079136835debeda4182fd') as StructureLink;
        // 检查link是否存在并且有足够的能量
        if (sourceLink && targetLink && sourceLink.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.2) {
            // 尝试从源link传输能量到目标link
            const result = sourceLink.transferEnergy(targetLink);
            // 打印传输结果
            // console.log('Transfer result: ' + result);
        }

    }
}
export default link
