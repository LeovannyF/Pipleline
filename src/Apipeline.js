const fs = require('fs');

let cb = (err, result) => {
  if(err) {
    console.log(err);
  } else {
    console.log("I am the result:", result);
  }
}

 function aPipeline (input, cb) {
   const arr = input.split(' | ');
   let finalArr = [];
   let total = 0;

   for(let i = 0; i<arr.length; i++) {
     let tempArr = arr[i].split(' ');
     finalArr.push(tempArr);
   }

   total = finalArr.reduce(function(acc, current) {

     if(current[0] === 'set'){
       acc = operations[current[0]](null, current[1], cb);
       console.log("I am the ACC", acc);

     }
     else if(current[0] === 'addFromFile'){

     }

     else{
       acc = operations[current[0]](acc, current[1], cb);
     }
     return acc;

   },0);

     return total;
 };


const operations = {
  addFromFile: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fs.readFile(arg, (err, result)=> {
      fn(err, input + result.toString()*1);
    });
  },
  set: (input, arg, fn) => {
    console.log('I am here!');
    fn(null, arg*1);
  },
  add: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input + arg*1);
  },
  mult: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input * arg*1);
  }
};

module.exports = {
  aPipeline : aPipeline,
  cb : cb
}


// const arr = input.split(' | ');
// let finalArr = [];
// let total = 0;
//
// for(let i = 0; i<arr.length; i++) {
//   let tempArr = arr[i].split(' ');
//   finalArr.push(tempArr);
// }
