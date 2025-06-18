// 기본 타입 간의 호환성

type Book = {
    name : string;
    price : number;
};

type ProgrammingBook = {
    name : string;
    price : number;
    skill : string;
};

let book : Book;
let programmingBook : ProgrammingBook = {
    name : "dfs",
    price : 33000,
    skill : "react",
};

book = programmingBook;
// programmingBook = book;