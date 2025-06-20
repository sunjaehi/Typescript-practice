// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로

type Person = {
    name : string;
    age : number;
};

//value => number : toFixed
//value => string : toUpperCase
//value => Data : getTime
//value => Person : name은 age살입니다.
function func(value : number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        console.log(value.getTime()); //value가 null일 수도 있음
    }
    else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}입니다.`)
    }
}