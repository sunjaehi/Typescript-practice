// 사용자 정의 타입가드

type Dog = {
    name : string;
    isBark: boolean;
};

type Cat = {
    name :string;
    isScratch : boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function warning(animal: Animal) {
    if(isDog(animal)) {
        // 강아지
    } else if ("isScratch" in animal) {
        // 고양이
    }
}