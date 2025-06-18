// object
// 객체 리터럴 타입
let user: {
    id : number;
    name : string;
} = {
    id : 1,
    name : "hello",
};

//구조적 타입 시스템
let dog : {
    name : string;
    color : string;
} = {
    name : "hi",
    color : "black",
};

// readonly는 읽기전용으로 할당 x
let config : {
    readonly apikey : string;
} = {
    apikey : 'adfag',
};
