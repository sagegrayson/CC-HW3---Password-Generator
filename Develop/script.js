// // Assignment Code ------------------------- from CC
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input --- from CC
// function writePassword() {
// 	console.log("2");
// 	var password = generatePassword();
// 	var passwordText = document.querySelector("#password");

// 	passwordText.value = password;
// }

// // Add event listener to generate button --- from CC
// generateBtn.addEventListener("click", writePassword());

//===========================map===========================

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

//===========================map===========================

function startGen() {
	var gPassLength = getPassLength();
	console.log("startGen - password length is " + gPassLength);
	var gPassLower = getPassLower();
}

function getPassLength() {
	var passLength = prompt(
		"How long should your password be?\nPasswords must be between 8-128 characters"
	);
	console.log("getPassLength - USER entry: " + passLength);
	if (passLength <= 7 || passLength >= 129) {
		console.log("getPassLength - invalid choice");
		alert("Passwords must be between 8-128 characters.");
		getPassLength();
	} else {
		console.log("getPassLength - valid choice");
		return passLength;
	}
}

// TEMP - Auto Prompt
startGen();

var specialCharacters = [
	" ",
	"!",
	'"',
	"#",
	"$",
	"%",
	"&",
	"'",
	"(",
	")",
	"*",
	"+",
	",",
	"-",
	".",
	"/",
	":",
	";",
	"<",
	"=",
	">",
	"?",
	"@",
	"[",
	"\\",
	"]",
	"^",
	"_",
	"`",
	"{",
	"|",
	"}",
	"~",
];
