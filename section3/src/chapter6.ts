// 타입 단언 - assertion

type Person = {
    name : string;
    age : number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name : string;
    color : string;
};

let dog : Dog = {
    name : "돌돌이",
    color : 'brown',
    breed : "sdf",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 - 값이 단언의 슈퍼타입이거나 값이 단언의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; -> 겹치는 부분 없음

//const 단언

let num4 = 10 as const;

let cat = {
    name : "dfs",
    color : "yellow",
} as const;

// cat.name = 'sdf' -> as const : 속성 수정 X

//Non Null 단언 : !
type Post = {
    title : string;
    author? : string;
};

let post : Post = {
    title : "sdf1",
    author : "Sdf",
};

const len : number = post.author!.length;
// ? : 옵셔널 체이닝
// ! : null이거나 undefined가 아닐것이라고 선언