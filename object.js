// const deleteUser = (userId) => {
//     const action = {
//         type: 'DELETE-USER',
//         payload: {
//             userId: userId
//         }
//     }
//     return action;
// }
//
// const action1 = deleteUser("123132")
// const action2 = deleteUser("444444")
//
// console.log(action1)
// console.log(action2)
//
//


function hello() {
    console.log(`I am ${this.name} from ${this.site}`)
}
const userFabric = (name) => {
    const user = {
        name: name,
        site: 'sobaka.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello: hello
    }
    return user;
}

const u1 = userFabric('Lyuda')
const u2 = userFabric('Tanya')

u1.hello()