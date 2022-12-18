// class DeleteUserAction {
//     constructor(userId) {
//         this.type = 'DELETE-USER'
//         this.payload = {
//             userId: userId
//         }
//     }
// }
//
// const action1 = new DeleteUserAction(121212)
// const action2 = new DeleteUserAction(333333)
//
// console.log(action1)
// console.log(action2)


class User {
    _name = " " //приватное поле, напрямую нельзя обращаться
    constructor(name, site, dob) {
        this._name = name;
        this.site = site;
        this.dateOfBirth = dob
        this.counter = 0
    }

    get getName() {
        return this._name //внутри методов класса мы можем обращаться к приватным полям
    }

    set setName(value) {
        this._name = value
    }

    hello() {
        console.log(`I am ${this._name} from ${this.site}`)
        this.counter++
    }
}

const u1 = new User("Lyuda", "sobaka.by", new Date(1999, 1, 11))
const u2 = new User("Tanya", "sobaka.by", new Date(1980, 7, 70))

// console.log(u1.hello === u2.hello)
// console.log(u1.hello === User.prototype.hello)
// u1.hello()
// u2.hello()

//
// console.log(u1.getName())
// u1.setName("Katya")
// console.log(u1.getName())

//let users = [u1, u2]
// users.forEach(u => u.hello())

//наследование
class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob, tech)
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: const sun=(a,b) => a + b`)
    }
    hello() {
        super.hello();
        console.log('Go way')
    }
}

const coder1 = new Coder("Lyuda-coder", "sobaka.by", new Date(1999, 1, 11), 'js')
// coder1.hello()
// coder1.code()

class Hacker extends Coder {
    constructor(a,b,s,d) {
        super();
        this.tech = 'XXX'
        this._name = 'XXXX'
    }
    code() {
        console.log(`I'll hack everything`)
    }
    hello(){
        throw new Error ('I am Hacker in the Dark')
    }

}

const hacker1 = new Hacker("Lyuda-coder", "sobaka.by", new Date(1999, 1, 11), 'js')

// hacker1.hello()
// hacker1.code()

//Полиморфизм
let users = [u1, u2, coder1, hacker1]
 users.forEach(u => u.hello())


class ProfilePage extends React.Component {
    render(){
        return "Yo-Yo-Yo"
    }
}
//<ProfilePage age={1}/>
//const comp1 = new ProfilePage({age:1})
//const jsx = comp1.render()
//jsx -> html
//comp1.componentDidMount();

//if (comp1.shouldComponentUpdate()){
//const newJsx = comp1.render()
//jsx -> html
//comp1.componentDidUpdate();
// }
