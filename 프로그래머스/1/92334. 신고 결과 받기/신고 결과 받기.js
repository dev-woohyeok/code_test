function solution(id_list, report, k) {
	// 동일한 유저에 대한 신고는 1번만 Map -> 중복처리
	// k번 이상 신고시 정지 -> 대상자 기준
	// id_list 순서대로 처리

	// 유저별 처리 결과 메일
	const reportMailCounts = new Map(id_list.map((id) => [id, 0]));
	// 작성자-메일 매핑, 중복처리를 위해 Set() 사용
	const reportMap = new Map(id_list.map((id) => [id, new Set()]));

	// ID-누적횟수 매핑
	const stopMap = new Map();

	for (const rep of report) {
		// 작성자-메일 매핑
		const [id, target] = rep.split(' ');
		reportMap.get(id).add(target);
	}

	for (const targets of reportMap.values()) {
		for (const id of [...targets]) {
			if (stopMap.has(id)) {
				stopMap.set(id, stopMap.get(id) + 1);
			} else {
				stopMap.set(id, 1);
			}
		}
	}
	for (const [id, targets] of reportMap) {
		for (const target of [...targets]) {
			if (stopMap.get(target) >= k) {
				reportMailCounts.set(id, reportMailCounts.get(id) + 1);
			}
		}
	}

	return [...reportMailCounts.values()];
}