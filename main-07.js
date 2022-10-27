//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
function repeatString(word, count, sign) {
    return ((word + sign).repeat(count - 1) + word)
}

console.log("__________________1. repeat String__________________")
console.log(repeatString("yo", 3, " ")) // "yo yo yo"
console.log(repeatString("yo", 3, ",")) // "yo,yo,yo"


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

function checkStart(string, substring) {
    return string.slice(0, substring.length).toLowerCase() === substring.toLowerCase()
}
console.log('__________________2. check Start__________________')
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function truncateString(string, number) {
    return string.slice(0, number) + '...'
}
console.log('________________3. truncate String________________')
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// split()

function getMinLengthWord(string) {
    return string !== "" && typeof (string) === 'string'
            ? string.split(" ").sort((a, b) => a.length - b.length)[0]
            : null
}


console.log("_______________4. get Min Length Word_______________")
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord("А всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
function setUpperCase(string) {
    return string.toLowerCase().split(" ").map(el => el.slice(0, 1).toUpperCase() + el.slice(1)).join(' ');
}
console.log('________________5. set UpperCase________________')
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
console.log(setUpperCase("пРиВет"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, которая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке
function isIncludes(string, substring) {
    let myArr = substring.toLowerCase().split('');
    let arr = string.toLowerCase().split('');
    let result = true
    for (let i = 0; i < myArr.length ; i++){
        if (!arr.includes(myArr[i])){
            result =  false
        }
    }
    return result;
}
console.log('__________________6. is Includes__________________')
console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))


function isIncludes2(string, substring) {
    let myArr = substring.toLowerCase().split('');
    let arr = string.toLowerCase().split('');
    let result = true
    for (let i = 0; i < myArr.length ; i++){
        if (arr.includes(myArr[i])){
            arr = arr.filter(el => el !== myArr[i]) // можно заменить на splice
        } else
        {result =  false}
    }
    return result;
}
console.log('__________________6*. is Includes2__________________')
console.log(isIncludes2("Incubator", "Cut"))
console.log(isIncludes2("Incubator", "table"))
console.log(isIncludes2("Incubator", "inbba"))
console.log(isIncludes2("Incubator", "inba"))
console.log(isIncludes2("Incubator", "Incubatorrr"))
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false




