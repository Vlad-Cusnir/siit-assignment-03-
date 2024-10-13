function maxArray(nr) {
  
    let max = nr[0];

  for (let i = 1; i < nr.length; i++) {
    if (nr[i] > max) {
      max = nr[i];
    }
  }

  return max;
}
