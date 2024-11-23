function solution(seoul) {
    const index = seoul.indexOf("Kim");
    return index !== -1 ? `김서방은 ${index}에 있다` : "Kim이 배열에 없습니다";
}