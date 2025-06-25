// 인터페이스와 클래스


interface Character1 { // 인터페이스는 public으로
    name : string;
    moveSpeed : number;
    move() :void;
}

class Character implements Character1{
    // name : string;
    // moveSpeed: number;

    constructor(public name:string, public moveSpeed : number) {
        // this.name = name;
        // this.moveSpeed = moveSpeed;
    }
    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동`);
    }
}