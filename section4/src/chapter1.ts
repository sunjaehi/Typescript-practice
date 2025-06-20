// 함수 타입 표현식 => funtion type expression

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 호출 시그니처(콜 시그니처)

type Operation2 = {
    (a: number, b: number): number;
}