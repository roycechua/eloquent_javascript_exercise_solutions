// Your code here.
const size = 8;
let output = '';
for(let row = 0; row < size; row++){  
  for(let col = 0; col < size; col ++){
    if((row+col)%2===0) output+=' ';
    else output+='#';
  }
  output+='\n';
}

console.log(output);
