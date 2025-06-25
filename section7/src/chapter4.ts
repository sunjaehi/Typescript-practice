// 제네릭 클래스

class List<T> {  //private은 this 안해도됨 !!
    constructor(private list : T[]) {}

    push(data:T) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}

const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();