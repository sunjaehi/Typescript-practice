// void
// 아무것도 없음을 의미하는 타입

function func1() {
    return 'hello';
}

// never
// 존재하지 않는, 불가능한 타입
function func3() : never{
    while (true) {}
    // 반환할 게 없어서 void는 웃겨용 !
}