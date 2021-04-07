
//Map, Set e6

// Object 키가 존재하는 데이터 모음, key와 value의 쌍으로 이루어 져있다. 
// Array 순서가 존재하는 데이터 모음 index 가 key의 역할을 한다. index와 value의 쌍으로 이루어져있다.

const dummy = {}

dummy[1] = "hello world";
console.log(dummy[1]) //object의 키는 어떠한 값을 넣어도 string으로 변경된다. 
console.log(dummy["1"]);

dummy[{}] = "10"
console.log(dummy) // [object Object]
console.log(String({}));
dummy["kim"] = "여수"
dummy["kim"] = "부산" 

// 1 === "1" false

const attendance = new Map() //map은 다른 자료형을 key값으로 설정 할 수 있다. 
{
    const yongduck = Symbol("영덕의 대게");
    const ulsan = Symbol("울산의 대게");
    attendance.set(yongduck,"영덕 !!!");
    attendance.set(ulsan,"울산 !!!!");
}
const newArray = [10,20,30,40,10]
const set = new Set(newArray);

console.log(set)


let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
weakMap.set("test", "Whoops");

