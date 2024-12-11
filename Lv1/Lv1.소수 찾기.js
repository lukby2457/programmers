/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
*/

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  // let answer = 0;

  // for (let i = 2; i <= n; i++) {
  //   if (isPrime(i)) answer++;
  // }

  // return answer;

  let arr = Array.from({ length: n + 1 }, (v) => true).fill(false, 0, 2);
  for (i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (k = i * i; k <= n; k += i) {
        arr[k] = false;
      }
    }
  }
  return arr.filter((x) => x).length;
}

console.log(solution(10)); // 4
