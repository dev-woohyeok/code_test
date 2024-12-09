// 둘중 큰것중에 가장 큰거 가로
// 둘중 작은것중에 가장 큰거 세로 
function solution(sizes) {
    let max_w = 0;
    let max_h = 0;
    
    sizes.forEach(([w, h]) => {
        const [width, height] = w > h ? [w, h] : [h, w];
        max_w = Math.max(width, max_w);
        max_h = Math.max(height, max_h);
    });
    
    return max_w * max_h;
}