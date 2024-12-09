// [[w,h],[w,h]]
// max_w = 가로중 가장 긴거
// max_idx = 가로중 가장 긴거의 Index
// max_h = max_idx 세로 값 포함해서, 나머지 숫자중 가장 큰거
function solution(sizes) {
    let max_w = 0;
    let max_h = 0;
    
    sizes.forEach((size) => {
        const w = Math.max(size[0], size[1]);
        if(w > max_w){
            max_w = w; 
            max_h = Math.min(size[0], size[1]);
        }       
    });
    
    sizes.forEach((size) => {
        const h = Math.min(size[0], size[1]);
        if(h > max_h){
            max_h = h;
        }
    })
    
    return max_w * max_h;
}