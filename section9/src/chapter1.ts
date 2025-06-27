// 분산적인 조건부 타입

// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

//2단계
//number
//never
//boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;