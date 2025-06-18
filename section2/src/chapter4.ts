// 타입 별칭
type User = {
    id : number,
    name : string,
    nickname : string,
    birth : string,
    bio : string,
    location : string;
};

let user : User = {
    id : 1,
    name :"hi",
    nickname : "Sd",
    birth : "2000",
    bio : "df",
    location : "ds",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string;
};

let countryCodes = {
    Korea : 'ko',
    UnitesState : 'us',
    UnitedKingdom : 'uk',
};