/*
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

참가자 중에는 동명이인이 있을 수 있습니다.
*/

function solution(participant, completion) {
  // const participantCount = new Map();

  // for (const name of participant) {
  //   participantCount.set(name, (participantCount.get(name) || 0) + 1);
  // }

  // for (const name of completion) {
  //   participantCount.set(name, participantCount.get(name) - 1);
  // }

  // for (const [name, count] of participantCount) {
  //   if (count > 0) {
  //     return name;
  //   }
  // }

  // participant.sort();
  // completion.sort();

  // for (let i = 0; i < completion.length; i++) {
  //   if (participant[i] !== completion[i]) return participant[i];
  // }

  // return participant[participant.length - 1];

  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
