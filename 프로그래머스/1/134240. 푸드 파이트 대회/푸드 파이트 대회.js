function solution(food) {
    let food_pos = ""; // 음식 배열
    
    for(let i = 1; i <= food.length; i ++){
        const count = Math.floor(food[i] / 2);
        food_pos += count > 0 ? i.toString().repeat(count) : "";
    }
    
    return food_pos + "0" + food_pos.split("").reverse().join("");
}