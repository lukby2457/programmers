/*
문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서,
자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.
*/

function solution(s) {
  const hash = {};

  return [...s].map((one, index) => {
    let result = hash[one] !== undefined ? index - hash[one] : -1;
    hash[one] = index;
    return result;
  });
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
