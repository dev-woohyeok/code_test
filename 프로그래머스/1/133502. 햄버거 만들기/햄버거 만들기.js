

function solution(ingredient) {
    const order = "1231";
    const burger = [];
    let count = 0;
    
    for(const ingre of ingredient){
        burger.push(ingre);

        if(burger.length >= 4 && burger.slice(-4).join("") === order){ // 햄버거 포장 여부
            burger.splice(-4); // 햄버거 포장
            count++;
        }
    }
    return count;
}

// want 완성된 버거의 갯수 

// ingredient : 재료 담긴 배열
// 1: 빵, 2:야채, 3:고기 
// 1, 2, 3, 1 순올 쌓여야 버거 완성

// problem : 선입 선출 => stack 을 활용해서 활용가능