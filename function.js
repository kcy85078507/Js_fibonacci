function fibo(num) { 
  fiboArr = [];

  if (num === 1) {
    fiboArr = [0];
  } else if (num === 2) {
    fiboArr = [0, 1];
  } else {
    fiboArr = [0, 1];
    for (let i = 2; i < num; i++) {
      fiboArr.push(fiboArr[fiboArr.length - 2] + fiboArr[fiboArr.length - 1]);
    }
  }
  return fiboArr;
}

console.log(fibo(0));
console.log(fibo(5));
