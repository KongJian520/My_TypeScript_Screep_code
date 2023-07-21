

const link = {

    run: function () {
        var sourceLink = Game.getObjectById('64b54598c5f7ddf2f409c8f1') as StructureLink;
        var targetLink = Game.getObjectById('64b5d08fd3a05b4f1f6f0325') as StructureLink;
        // 检查link是否存在并且有足够的能量
        if (sourceLink && targetLink && sourceLink.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.3) {
            // 尝试从源link传输能量到目标link
            var result = sourceLink.transferEnergy(targetLink);
            // 打印传输结果
            console.log('Transfer result: ' + result);
        }

    }
}
export default link
