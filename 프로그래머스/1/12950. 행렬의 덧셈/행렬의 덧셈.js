function solution(arr1, arr2) {
    return arr1.map((row, r_idx) => row.map((col, c_idx)=> col + arr2[r_idx][c_idx] ));
}