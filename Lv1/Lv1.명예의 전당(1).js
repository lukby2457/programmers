/*
명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때,
매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.
*/

// function solution(k, score) {
//   var answer = [];
//   var arr = [];

//   // for (let i = 0; i < score.length; i++) {
//   //   if (arr.length < k) {
//   //     arr.push(score[i]);
//   //   } else {
//   //     if (score[i] >= arr[0]) {
//   //       arr.shift();
//   //       arr.push(score[i]);
//   //     }
//   //   }
//   //   arr.sort((a, b) => a - b);
//   //   answer[i] = arr[0];
//   // }
//   score.forEach((currentScore) => {
//     if (arr.length < k) {
//       arr.push(currentScore);
//     } else if (currentScore >= arr[0]) {
//       arr.shift();
//       arr.push(currentScore);
//     }
//     arr.sort((a, b) => a - b);
//     answer.push(arr[0]);
//   });

//   return answer;
// }

function solution(k, score) {
  const arr = [];

  return score.reduce((answer, currentScore) => {
    if (arr.length < k) {
      arr.push(currentScore);
    } else if (currentScore >= arr[0]) {
      arr.shift();
      arr.push(currentScore);
    }
    arr.sort((a, b) => a - b);
    answer.push(arr[0]);
    return answer;
  }, []);
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
