// fibonacci with loop
function fibs(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fib = [0, 1];
    for (let i = 0; i < n - 2; i++) {
      let first = fib[i];
      let second = fib[i + 1];
      let current = first + second;
      fib.push(current);
    }
    return fib;
  }
}

// fibonacci with recursion example1
function rec(n, fib = [0, 1]) {
  if (n <= fib.length) {
    return fib.slice(0, n);
  } else {
    const current = fib[length - 1] + fib[length - 2];
    return rec(n, [...fib, current]);
  }
}

// fibonacci with recursion example2
function re(n, fib = [0, 1]) {
  while (n > fib.length) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    re(n, fib);
  }
  return fib;
}
console.log(re(5));
