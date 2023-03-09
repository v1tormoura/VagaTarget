function reverterString(str) {
  var novaString = "";
  for (var i = str.length - 1; i >= 0; i--) { 
    novaString += str[i]; 
  }
  return novaString; 
}

reverterString('Vitor');