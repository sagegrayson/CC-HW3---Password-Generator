// VARS ===================================================
// prettier-ignore
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// prettier-ignore
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// prettier-ignore
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// prettier-ignore
var specialCharacters = [" ",	"!",	'"',	"#",	"$",	"%",	"&",	"'",	"(",	")",	"*",	"+",	",",	"-",	".",	"/",	":",	";",	"<",	"=",	">",	"?",	"@",	"[",	"\\",	"]",	"^",	"_",	"`",	"{",	"|",	"}",	"~",];

// COLUMBIA CODING ========================================
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = startGen();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MAP ====================================================
// take generate button input and start
// length of password
//    prompt user for length
//    must be between 8 and 128 char
//    if yes - write to var
//    if no -
//      alert user
//      restart function
// lowercase
//    confirm lowercase
//    write to var
// uppercase
//    confirm uppercase
//    write to var
// numeric
//    confirm numeric
//    write to var
// special chars
//    confirm special chars
//    write to var
// check at least one char type has been selected
// generate password
//    ¯\_(ツ)_/¯
// write password to page

// PRIMARY FUNCTION =======================================
function startGen() {
	var gPassLength = getPassLength();
	if (gPassLength === null) {
		return "CANCELLED";
	}
	console.log("passLength - password length is " + gPassLength);

	var cPassLower = getPass("lowercase");
	console.log("getPass - lowercase characters? " + cPassLower);

	var cPassUpper = getPass("uppercase");
	console.log("getPass - uppercase characters? " + cPassUpper);

	var cPassNumber = getPass("number");
	console.log("getPass - number characters? " + cPassNumber);

	var cPassSpecial = getPass("special");
	console.log("getPass - special characters? " + cPassSpecial);

	var gOneCheck = oneCheck(cPassLower, cPassUpper, cPassNumber, cPassSpecial);
	console.log("oneCheck - at least one character type? " + gOneCheck);
	if (gOneCheck === false) {
		alert("You have to choose at least one character type.");
		startGen();
	}
	console.log("startGen - completed USER queries");

	var passAspects = [cPassLower, cPassUpper, cPassNumber, cPassSpecial];
	console.log(`startGen - password aspects: ${passAspects}`);

	var chosenCharacters = [];

	if (passAspects[0]) {
		chosenCharacters = chosenCharacters.concat(lowercaseCharacters);
		console.log(chosenCharacters);
	}
	if (passAspects[1]) {
		chosenCharacters = chosenCharacters.concat(uppercaseCharacters);
		console.log(chosenCharacters);
	}
	if (passAspects[2]) {
		chosenCharacters = chosenCharacters.concat(numberCharacters);
		console.log(chosenCharacters);
	}
	if (passAspects[3]) {
		chosenCharacters = chosenCharacters.concat(specialCharacters);
		console.log(chosenCharacters);
	}

	var chosenCharactersString = chosenCharacters.join("");

	function generatePassword() {
		var length = gPassLength,
			charset = chosenCharactersString,
			retVal = "";
		for (var i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		return retVal;
	}

	finalPassword = generatePassword();
	console.log(finalPassword);
	return finalPassword;
}

// SECONDARY FUNCTIONS ====================================
function getPassLength() {
	var passLength = prompt(
		"How long should your password be?\nPasswords must be between 8-128 characters"
	);
	console.log("getPassLength - USER entry: " + passLength);
	if (passLength === null) {
		alert("Cancelled Password Generation");
		return passLength;
	} else if (passLength <= 7 || passLength >= 129) {
		console.log("getPassLength - invalid choice");
		alert("Passwords must be between 8-128 characters.");
		var passLength = getPassLength();
	} else {
		console.log("getPassLength - valid choice");
	}
	return passLength;
}

function getPass(aspect) {
	var aspect = confirm(
		"Should your password have " + aspect + " characters?"
	);
	return aspect;
}

function oneCheck(w, x, y, z) {
	if ([w, x, y, z].filter(Boolean).length >= 1) {
		return true;
	} else {
		return false;
	}
}
