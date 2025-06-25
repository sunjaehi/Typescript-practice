// 접근 제어자
// access modifier => public private protected

class Employee {
    // 필드
    private name:string; //기본이 public
    age:number;
    position:string;

    // 생성자
    constructor(name:string, age:number, position:string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("sd");
    }
}

const employee = new Employee("sdf", 27, "developer");
// employee.name = "sdf" // 클래스 내에서만 접근 가능