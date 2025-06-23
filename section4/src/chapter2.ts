// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// -반환값의 타입이 호환되는가
// -매개변수의 타입이 호환되는가

// -반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// -매개변수가 호환되는가
// 매개변수의 개수가 같을때

type C = (value: number) => void;
type D = (value: number) => void;

let c:C = (value) => {};
let d:D = (value) => {};

// c=d;
d = c;

type Animal = {
    name : string;
};

type Dog = {
    name : string;
    color : string;
}

// 매개변수의 개수가 다를 때
