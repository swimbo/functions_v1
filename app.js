// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive()
// Five! Five! Five!

function triplefive(){
  for(var i = 0; i < 3; i++){
    console.log('Five!')
  }
}
triplefive()

// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'

function lastLetter(str){
    var last = str.slice(-1)
    console.log(last)
}

// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25s
function square(x){
  var newNum = x * x
  console.log(newNum)
}


// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8
function negate(x){
  console.log(-x)
}

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]
function toArray(x,y,z){
  var newArray = [x, y, z]
  console.log(newArray)
}


// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false

function startsWithA(str2){
  var firstL = str2.charAt(0)

  if(firstL === 'a'){
    console.log(true)
  }
  else {
    console.log(false)
  }
}

// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'
function excite(str3){
  var excited = (str3 + '!!!')
  console.log(excited)
}


// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false
function sun(str4){
  var sunny = str4.indexOf('sun')
  console.log(sunny)
  if(sunny === -1){
    console.log(false)
  }
    else{
      console.log(true)
  }
}


// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false

function tiny(x){
  if(x>=0 && x<= 1){
    console.log(true)
  }
    else{
      console.log(false)
    }
}


// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625
function getSeconds(str5){
  var totalSeconds = str5.split(':')
  var number1 = parseFloat(totalSeconds.shift())
  console.log(number1)
  var number2 = parseFloat(totalSeconds.pop())
  console.log(number2)
  var seconds = number1 * 60
  var total = seconds + number2
  // parseFloat()
  console.log(total)
}

// COMPLETE
