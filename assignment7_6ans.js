let rotateString = function(s, goal) {
    let max = 100;
     while(s !== goal && max > - 1) {
      if(s === goal) {
         return true;
      }
      const firstChar = s[0];
      s = s.substring(1) + firstChar;
      max--;
     }
     return s === goal;  
 };