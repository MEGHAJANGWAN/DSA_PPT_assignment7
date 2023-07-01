let backspaceCompare = function(s, t) {
    function cleanup(str) {
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "#") {
          if (i <= 0) {
            str = str.slice(1);
          } else {
            str = str.slice(0, i - 1) + str.slice(i + 1);
          }
          i -= 2;
        }
      }
      return str;
    }
    return cleanup(s) === cleanup(t);
  };