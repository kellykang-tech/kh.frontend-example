//배열 리터럴
const arr = [1, 2, '문자열', {}]
const [a, b] = arr

console.log(a)
console.log(b)

//객체 리터럴
const user = {
    id: 'abcdefg',
    name: 'Chiho Won',
    data: [1, 2, 3, 4, ],
}

const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)

//
function f(x) {
    console.log('호출됨!')
}

f(1)
f(1, 2, 3)

//
console.log(name)
let name

//
console.log('블록 이전에 호출')
{
    console.log('블록 내부 1에서 호출됨')
    const x = 1
    console.log(x)
    {
        console.log('블록 내부 2에서 호출됨')
        const y = 5
        console.log(y)
    }
    console.log(y)
}
console.log(x)

//
console.log('블록 이전에 호출')
{
    const x = 10
    const block1 = '블록1이란다'
    console.log(x)
    {
        const x = '다른타입의 값'
        console.log(x)
        console.log(block1)
    }
}

//
function sayHello(name) {
    const message = `Hello ${name}!`
    return function() {
        console.log(message)
    }
}

const hello1 = sayHello('Chiho Won')
const hello2 = sayHello('Test')
const hello3 = sayHello('asfd')
hello1()
hello2()
hello3()

//
function outer() {
    const name ='바깥임'
    function showName() {
        const n = '안쪽 데이터'
        console.log(`바깥: ${name}, 안: ${n}`)
    }
    showName()
}
outer()

//수정
function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽 데이터'
        console.log(`바깥: ${name}, 안: ${n}`)
    }
    return showName()
}
const f1 = outer()
f1()    //showName

//
const dd = 'ㅇㅇ'
function outer() {
    const name ='밖에 있어요'   //유효 범위
    function closure() {    //클로저
        const inner ='내부에'
        console.log(`${name}, ${inner}`)
    }
    return closure
}

const f1 = outer()
f1()

// 문제풀기
function countdown(startAt){
    // 환경
    let data = startAt
    function counter() {
        console.log(data--)
    }
    return counter
}

const counter = countdown(10)
counter()   // 10
counter()   // 9
counter()   // 8
//...
counter()   // 0

// 힌트
// class Inner{
//     int 환경;
//     생성자같은거(x){
//         this.환경 = x;
//     }
//     void inner(){
//         환경--;
//     }
// }

// 쉽게 기억하기
class 클로저 {
    멤버;
    생성자(파라미터) {
        멤버 = 파라미터
    }

    메서드() {

    }
}

function 생성자(파라미터) {
    function 메서드(){

    }
    return 메서드
}

// 문제. 자신을 몇 번 호출했는지 확인
function countdown(){
    let s = 0
    function counter() {
        console.log(`${++s}회 호출됨.`)
    }
    return counter
}

const c1 = countdown(10)
c1()    //1회 호출됨
c1()    //2회 호출됨
c1()    //3회 호출됨

//
