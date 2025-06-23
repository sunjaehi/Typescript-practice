// 인터페이스의 확장

interface Animal {
    name :string;
    color : string;
}

interface Dog extends Animal{
    isBark : boolean;
}

const dog: Dog = {
    name:"",
    color:"",
    isBark: true,
};

interface Cat extends Animal{
    isScratch : boolean;
}
interface Chicken extends Animal{
    isFly : boolean;
}

// 다중확장
interface DodCat extends Dog, Cat {
    name : "",
    color : "",
    isBark:true,
    isScratch : true,
};