// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type Admin = {
    tag : "ADMIN";
    name : string;
    kickCount : number;
};

type Member = {
    tag : "MEMBER";
    name : string;
    point : number;
};

type Guest = {
    tag : "GUEST",
    name : string;
    visitCount : number;
};

type User = Admin | Member | Guest;

function login(user:User) {
    if(user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    }else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
    }else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
    }
}


type AsyncTask = {
    state : "LOADING" | "FAILED" | "SUCCESS";
}