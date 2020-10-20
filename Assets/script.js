// Assignment Code
//==============================================================================
var generateBtn = document.getElementById("generate");

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

var password = generatePassword();

var finalPassword = document.getElementById("result");
    


var randomFunc= {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Add event listener to generate button
//==============================================================================
generateBtn.addEventListener("click", writePassword => {
  var length = +lengthEl.value;
	var hasLowerCase = lowercaseEl.checked;
	var hasUpperCase = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  
  resultEl.innerText = generatePassword(hasLowerCase, hasUpperCase, hasNumber, hasSymbol, length);
  
});


//FUNCTIONS
//==============================================================================

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  var typesCount = lower + upper + number + symbol;

  console.log("typesCount: ", typesCount);

  //Requiring at least one character type to be selected in settings
  if (typesCount === 0) {
    return "";
  }

  //Filtering out false array types
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  
  //Loop
  for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	var finalPassword = generatedPassword.slice(0, length);
	
    return finalPassword;

}


//Character Types
function getRandomLowerCase() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.;:_-+='
	return symbols[Math.floor(Math.random() * symbols.length)];
}

