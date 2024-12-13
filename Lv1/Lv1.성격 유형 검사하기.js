/*
질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다. 
이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.

지표 번호	성격 유형
1번 지표	라이언형(R), 튜브형(T)
2번 지표	콘형(C), 프로도형(F)
3번 지표	제이지형(J), 무지형(M)
4번 지표	어피치형(A), 네오형(N)

선택지	성격 유형 점수
매우 비동의	네오형 3점
비동의	네오형 2점
약간 비동의	네오형 1점
모르겠음	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의	어피치형 1점
동의	어피치형 2점
매우 동의	어피치형 3점
*/

function solution(survey, choices) {
  // let answer = "";
  // let R = 0,
  //   T = 0,
  //   C = 0,
  //   F = 0,
  //   J = 0,
  //   M = 0,
  //   A = 0,
  //   N = 0;

  // for (let i = 0; i < survey.length; i++) {
  //   let typeArr = survey[i].split("");
  //   let scoreArr = [0, 0];
  //   let choice = choices[i];

  //   switch (choice) {
  //     case 1:
  //       scoreArr[0] += 3;
  //       break;
  //     case 2:
  //       scoreArr[0] += 2;
  //       break;
  //     case 3:
  //       scoreArr[0] += 1;
  //       break;
  //     case 4:
  //       break;
  //     case 5:
  //       scoreArr[1] += 1;
  //       break;
  //     case 6:
  //       scoreArr[1] += 2;
  //       break;
  //     case 7:
  //       scoreArr[1] += 3;
  //       break;
  //   }

  //   for (let j = 0; j < typeArr.length; j++) {
  //     let category = typeArr[j];
  //     let score = scoreArr[j];

  //     switch (category) {
  //       case "R":
  //         R += score;
  //         break;
  //       case "T":
  //         T += score;
  //         break;
  //       case "C":
  //         C += score;
  //         break;
  //       case "F":
  //         F += score;
  //         break;
  //       case "J":
  //         J += score;
  //         break;
  //       case "M":
  //         M += score;
  //         break;
  //       case "A":
  //         A += score;
  //         break;
  //       case "N":
  //         N += score;
  //         break;
  //     }
  //   }
  // }

  // answer += R >= T ? "R" : "T";
  // answer += C >= F ? "C" : "F";
  // answer += J >= M ? "J" : "M";
  // answer += A >= N ? "A" : "N";

  // return answer;

  const data = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const score = choices[i] - 4;
    let type = survey[i].split("")[score < 0 ? 0 : 1];
    data[type] += Math.abs(score);
  }

  const { R, T, C, F, J, M, A, N } = data;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${A >= N ? "A" : "N"}`;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
