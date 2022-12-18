// function DeleteUserAction(userId) { //функция конструктор. С большой буквы, вызывается через new
//     //this = {}
//     this.type = 'DELETE-USER'
//     this.payload = {
//         userId: userId
//     }
//    //return this //происходит сам по себе
// }
//
// const action1 = new DeleteUserAction(121212)
// const action2 = new DeleteUserAction(333333)
//
// console.log(action1)
// console.log(action2)


function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User("Lyuda", "sobaka.by", new Date(1999, 1, 11))
const u2 = new User("Tanya", "sobaka.by", new Date(1980, 7, 70))

u1.hello()
u2.hello()