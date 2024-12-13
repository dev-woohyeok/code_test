function solution(numbers) {
    const adds = new Set();
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            adds.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(adds).sort((a, b) => a - b);
}