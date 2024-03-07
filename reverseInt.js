const reverseInt = (num) => {
  let i = 0;
  let result = '';
  const numInStr = String(num);
  const numInStrAbs = String(Math.abs(num));
  
  while(i < numInStrAbs.length) {
    result = numInStrAbs[i] + result;
    i++;
  }
  
  result = Math.abs(result);
  
  if (numInStr[0] === '-') {
    result = numInStr[0] + result;
  }

  console.log(result);
};
