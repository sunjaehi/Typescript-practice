// 클래스

let studentA = {
    name : "hi",
    grade : "A",
    age : 27,
    study() {
        console.log("sdf");
    },
    introduce() {
        console.log("Sdg");
    },
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("dsf");
    }

    introduce() {
        console.log("sdf");
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스


let studentB = new Student('hi','A',27);
studentB.study();