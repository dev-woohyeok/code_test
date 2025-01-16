function solution(t, tangerine) {
	const tangerineCounts = new Map();

	// 귤 갯수 세기
	tangerine.forEach((size) => {
		tangerineCounts.set(size, (tangerineCounts.get(size) || 0) + 1);
	});

	// 귤 정렬 하기
	const sortedTangerine = Array.from(tangerineCounts.values()).sort(
		(a, b) => b - a,
	);

	// 상자에 담기
	let count = 0;
	let total = 0;
	for (const num of sortedTangerine) {
		total += num;
		count++;
		if (total >= t) break;
	}
	return count;
}