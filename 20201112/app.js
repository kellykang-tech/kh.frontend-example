// ctrl alt N
console.log('test');

//자바스크립트에서 변수 선언
var name;

console.log(name);

// console.log(name2);
// var name2 = 'abc';
// console.log(name2);

//ES6 변수, 상수 선언
var name;   //함수 레벨 스코프
let name1 = 'abc';  //변수 선언 방법
const name2 = 'abc';    //final (변경 불가능 - 상수)

// 선언 - 식별자를 등록
// 초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않았다면 undefined

console.log(name1)
console.log(name2)

//
var name = 'abc';
console.log(name);

name = 12344;
console.log(name)

const n = 10;
const message = 'test'

console.log(`상수 n의 값: ${n}, 상수 message의 값: ${message}`);

//
const obj = {
    abc: 'abc'
}
// 멤버 접근 연산자(.) member access operator
console.log(obj)
// 계산된 멤버 접근 연산자([]) computed member access operator
console.log(obj['abc'])
obj['alpha'] = 'a'
obj['beta'] = 'b'
console.log(obj)

const obj1 = {
    abc: 'abc'
}

const obj2 = {
    abc: 'abc'
}
console.log(obj1 == obj2)

//
const a = 10

if(a > 5) {
    console.log('a가 5보다 크다.')
}

//
for(var i = 0; i < 10; i++){
    console.log(`${i+1}번째 출력.`)
}

//
const obj = {
    food: '감자',
    number: 10,
    arr: [1, 2, 3]
}

for(p in obj) {
    console.log(obj[p])
}

//
function test(a, b){
    return `${a}와 ${b}의 합은 ${a + b}입니다.`
}

const a = test
// const a = (a, b) => `${a}와 ${b}의 합은 ${a + b}입니다.`  //이름이 없는 함수
const resultMessage = a(1, 2)
console.log(resultMessage)

//
function test(a, b = 3, template = `${a}와 ${b}의 합은 ${a + b}입니다.`) {
    return template 
}

//
const obj = {
    name: 'chwon',
    say: function() {
        console.log(`my name is ${this.name}`);
    }     
}

obj.say()


// 동적 타이핑
// 1. 값을 보고 타입 추론
// 2. 언제든 

//식별자(identifier)
//변수
//함수
//클래스
//식별자 - 실행 컨텍스트에 등록됨
/*
- 특수문자 제외한 숫자, 문자, 언더스코어(_), 달러($) 기호 가능
- 숫자로 식별자 이름 시작은 불가능
- 예약어(keyword, reserved word) 사용 불가능
*/
