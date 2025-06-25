// 제네릭

// T - 타입 변수
function func<T>(value:T): T {
    return value;
}

let num = func(10);

if (typeof num === "number") {
    num.toFixed();
}

let bool = func(true);

let arr = func<[number,number,number]>([1,2,3]);