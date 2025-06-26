// 인덱스드 엑세스 타입

type PostList = {
    title : string;
    content : string;
    author : {
        id : number;
        name : string;
        age:number;
    };
}[];

// author를 인덱스라고 함
function printAuthorInfo (author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post : PostList[0] = {
    title : "제목",
    content : "본문",
    author : {
        id : 1,
        name : " hi",
        age : 25,
    },
};

printAuthorInfo(post.author);

// tuple은 길이가 고정되어있음
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];