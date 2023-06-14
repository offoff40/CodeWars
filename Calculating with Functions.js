function zero() {if(numArr.length> 1 && numArr.length < 3){ numArr.push(0) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(0); }
function one() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(1) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(1); }
function two() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(2) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(2); }
function three() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(3) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(3); }
function four() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(4) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(4); }
function five() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(5) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(5); }
function six() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(6) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() }} else numArr.length = 0; numArr.push(6); }
function seven() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(7) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() }} else numArr.length = 0; numArr.push(7); }
function eight() {if(numArr.length > 1 && numArr.length < 3){ numArr.push(8) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() } } else numArr.length = 0; numArr.push(8); }
function nine()  {if(numArr.length > 1 && numArr.length < 3){ numArr.push(9) ;if(numArr[1] === '+'){return plus()}else if(numArr[1] === '-'){return minus()}else if (numArr[1] === '*'){return times()}else{return dividedBy() }} else numArr.length = 0; numArr.push(9); }

function plus(n)  { return function(v) {return v + n}}
function minus() { if(numArr.length >1){return numArr[2] - numArr[0]}else numArr.push('-');}
function times() { if(numArr.length >1){return numArr[2] * numArr[0]}else numArr.push('*');}
function dividedBy() { if(numArr.length >1){return ~~(numArr[2]/numArr[0])}else numArr.push('/');}
var numArr = []


