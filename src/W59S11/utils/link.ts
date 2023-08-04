const link = {
    run: function () {
        const sourceLink1 = Game.getObjectById('64b54598c5f7ddf2f409c8f1') as StructureLink;
        const sourceLink2 = Game.getObjectById('64c3dcfa7b156580e8312d07') as StructureLink;
        const targetLink = Game.getObjectById('64b5d08fd3a05b4f1f6f0325') as StructureLink;
        // 检查link是否存在并且有足够的能量
        if (sourceLink1 && targetLink && sourceLink1.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.3) {
            // 尝试从源link传输能量到目标link
            // 打印传输结果
            console.log('Transfer1 result: ' + sourceLink1.transferEnergy(targetLink));
        }
        if (sourceLink2 && targetLink && sourceLink2.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.5) {
            // RESOURCE_ENERGY
            // 打印传输结果
            console.log('Transfer2 result: ' + sourceLink2.transferEnergy(targetLink));
        }
    }
}
export default link
