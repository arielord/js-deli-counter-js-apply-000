function takeANumber(curr){
  if (curr.length === 0){
    curr.push(1);
  }
  curr.push(curr[curr.length]+1);
  return "Welcome. You are number " + curr.length + " in line.";
}

function nowServing(curr){
  if(curr.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + curr.shift() + ".";
  }
}

function currentLine(curr){
  if(curr.length === 0){
    return "The line is currently empty.";
  }
  else {
    var currLine = "The line is currently: ";
   for (var i = 0; i < curr.length; i++){
     currLine += (i+1);
     currLine += ". ";
     currLine += curr[i];
     if (i !== (curr.length-1)){
       currLine += ", ";
     }
   }
   return currLine;
  }
}