// 타입스크립트의 클래스

const employee = {
    name : "ts",
    age : 27,
    position : "developer",
    work() {
        console.log("Sdf");
    },
 };

class Employee {
    // 필드
    name:string;
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


class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber : number;

    // 생성자
    constructor(name : string, age: number, position :string, officeNumber : number) {
        super(name,age,position);  //타입스크립트에서는 생략 X
        this.officeNumber=officeNumber;
    }
}
const employeeB = new Employee("sdf", 27, "sdf");