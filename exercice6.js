function division(){

var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;

 if (!isNaN(firstNumber)&&!isNaN(secondNumber)) {
  var remainder = firstNumber%secondNumber;
   alert('Le reste de la division : ' + remainder)

 } else {
   alert('Un nombre !')

 }
}
