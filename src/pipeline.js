function pipeline(input){
  const arr = input.split(' | ');
  let finalArr = [];
  let total = 0;

  for(let i = 0; i<arr.length; i++) {
    let tempArr = arr[i].split(' ');
    finalArr.push(tempArr);
  }

total = finalArr.reduce(function(acc, current) {

  if(current[0] === 'set'){
    acc = operations[current[0]](null, current[1]);
  }
  else{
    acc = operations[current[0]](acc, current[1]);
  }
  return acc;

},0);

  return total;
}




const operations = {
  set: (input, arg ) => {
    return arg*1;
  },
  add: (input, arg)=> {
    //we need to add to something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input + arg*1;
  },
  mult: (input, arg)=> {
    //we need to multiply by something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input * arg*1;
  }
};

module.exports = pipeline;
