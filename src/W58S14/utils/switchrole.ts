const switchrole = {
    RoletoCreep: function (role: string) {
        var creep = _.filter(Game.creeps, (creep) => creep.memory.role == role)
        return creep
    }

}
export default switchrole
interface CreepsByRole {
    [role: string]: Creep[];
}


