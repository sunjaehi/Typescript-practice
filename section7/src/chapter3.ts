// 제네릭 인터페이스

interface KeyPair<K, V> {
    key : K;
    value : V;
}

let keypair : KeyPair<string, number> = {
    key : "key",
    value : 0,
}

let keypair2:KeyPair<boolean, string[]> = {
    key : true,
    value : ["1"],
}

// 인덱스 시그니처

interface NumberMap {
    [key:string]:number;
}

let numberMap:NumberMap = {
    key : 123,
    key2:5663
};

// 제네릭 타입 별칭
type Map2<V> = {
    [key:string]:V;
};

let stringMap2 : Map2<string> = {
    key : 'hello',
};

// 제네릭 인터페이스 활용 예시
// 유저 관리 프로그램
// 유저 구분 : 학생 / 개발자

interface Student {
    type : "student";
    school : string;
}
interface Developer {
    type : "developer";
    skill : string;
}

interface User<T> {
    name : string;
    profile : T;
}

function goToSchool(user : User<Student>) {
    if (user.profile.type !== 'student') {
        console.log("NO");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser : User<Developer> = {
    name : "sdf",
    profile : {
        type : "developer",
        skill : "Typescript",
    },
};

const studentUser : User<Student> = {
    name : "sdf",
    profile : {
        type : "student",
        school : "가대",
    },
};