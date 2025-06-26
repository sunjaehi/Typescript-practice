// keyof 연산자
// type에만 사용할 수 있음

// interface Person {
//     name : string;
//     age : number;
// }

type Person = typeof person;

function getPropertyKey(person:Person, key:keyof Person) {
    return person[key];
}

const person = {
    name : "hi",
    age : 27,
};

getPropertyKey(person, "name");


