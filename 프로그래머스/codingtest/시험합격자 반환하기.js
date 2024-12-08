// 문제 
// 서로 길이가 같은 배열 ip_addr,langs,scores 를 파라미터로 받으며
// 각 배열은 학생의 ip 주소, 사용한 언어, 점수를 반환한다.
// 각 조건에 해당하면 불합격자 처리하며, 최종적으로 합격한 학생의 숫자를 반환하는 함수를 만들어라
// 조건 1. ip 주소가 4명 이상 중복되는 학생들의 경우 전부 불합격
// 조건 2. ip 주소가 정확히 3명 중복되는 상황에서, 학생들이 사용하는 언어도 같은 경우 전부 불합격 ( c, c++ ,c# 언어는 같은 언어로 취급함)
// 조건 3. ip 주소가 정확히 2명이 중복되는 상황에서, 학생들이 사용하는 언어가 전부 같고, 점수가 같은 경우 불합격
//const ip_addr = [
//    "192.168.0.1", "192.168.0.2", "192.168.0.1", "192.168.0.3",
//    "192.168.0.1", "192.168.0.2", "192.168.0.1", "192.168.0.4"
//];
//const langs = ["java", "c", "python", "c++", "c", "javascript", "c#", "java"];
//const scores = [90, 85, 88, 92, 78, 87, 80, 91];
function solution(ips, langs, scores) {
    const langGroup = { 
        "c" : "clang",
        "c++" : "clang",
        "c#" : "clang",
    };

    const groupedLangs = langs.map(lang => { // c 언어 통일
          return langGroup[lang.toLowerCase()] || lang.toLowerCase();
    });

    const ipGroups = {}; // ip 중복자 카운팅
    ips.forEach((ip,index) => {
        if(!ipGroups[ip]) {ipGroups[ip] = [];}
        ipGroups[ip].push(index);
    });

    const langIpGroups = {}; // 언어-ip 중복자 카운팅
    langs.forEach((lang,index) => {
        const ip = ips[index];
        const key = `${lang}_${ip}`;
        if(!langIpGroups[key]) {langIpGroups[key] = [];}
        langIpGroups[key].push(index);
    });

    const nonPass = new Set(); // 불합격자 처리
    // 조건 1. ip 주소가 4명 이상 중복되는 경우
    Object.values(ipGroups).forEach(group => {
        if(group.length >= 4) {
            group.forEach(index => {
                nonPass.add(index);
            })
        }
    });
    
    Object.entries(langIpGroups).forEach(([key,group]) => {
        const ip = key.slice("_").pop();
        const groupLength = group.length;
        
        // 조건 2. ip 주소가 3명이 중복되는 상황에서, 언어가 같은 경우
        if(groupLength === 3) { 
            group.forEach(index =>  nonPass.add(index));    
        }else if(groupLength === 2) { // 조건 3. ip 주소 2명, 언어 2명 중복된 상황에서, 점수까지 같은 경우
            const [idxA,idxB] = group;
            if(scores[idxA] === scores[idxB]){
                  nonPass.add(idxA);
                  nonPass.add(idxB);
            }
        }    
    });

    return langs.length - nonPass.size;
}

