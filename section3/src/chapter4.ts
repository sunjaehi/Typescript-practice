// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재

// 합집합 - Union 타입
let a : string | number;
a= 1;
a='ho';

type Dog = {
    name : string;
    color : string;
};

type Person = {
    name : string;
    language : string;
};

type Union1 = Dog | Person;

let union1 : Union1 = {
    name : "",
    color : "",
};

let union2 : Union1 = {
    name : "",
    language : "",
};

let union3  :Union1 = {
    name : "",
    color : "",
    language : "",
};

// // let union4 : Union1 = {
// name : "",
// };

// 교집합 타입 - Intersection

type Intersection = Dog & Person;

// intersection타입은 다 포함되어야 함
let intersection : Intersection = {
    name : "",
    color : "",
    language : "",
};