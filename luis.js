
document.querySelector("#btn btn-primary").addEventListener("click", writePassword);


var number = ["0","1","2","3","4","5","6","7","8","9",];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%","&","'","(", ")","*","+",",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "]", "_",];
 //no ", \, for special characters because weird stuff happens and i dont have enought hair to pull out at this point

 var length = ""
 var lower;
 var upper;
 var special;
 var numeric;

 function myFunction() {
     //connects button to a function
    document.getElementById("#btn btn-primary");

    //what happens when button clicked
    if ("click")    {
        var length = (prompt("How many characters would you like your password to contain?"));
       
        //while loop was researched from googlefoo. it loops it until fails criteria
        while (length <8 || length >128)   {
        // alert("password  must be between 8 and 128")
         var length = (prompt("Password  must be between 8 and 128. No letters just numbers! How many characters would you like your password to contain?"));
        }
    }   //this ends upper loop for length

        //shows how many characters user picked
            alert ("your password contains " + length + " characters");
        
        //now for lower case
        if ("click")    {
            var lower = (confirm ("Do you want lower case?"));

        }
        //for upper case. simple enough... for now
        if ("click")    {
            var upper = (confirm("Do you want upper case?"));
        }
        //again
        if ("click")    {
            var special = (confirm("do you want special characters?"))
        }
        //.. after this it gets insufferable
        if ("click")    {
            var numeric = (confirm("DO you want numbers in your pasword?"))
        }

        var malleablePassword =[]

        if  (lower) {
            malleablePassword = malleablePassword.concat(lowerCase);
        }
        if (upper)  {
            malleablePassword = malleablePassword.concat(upper);
        }
        if (special)    {
            malleablePassword = malleablePassword.concat(specChar);
        }
        if  (numeric)   {
            malleablePassword = malleablePassword.concat(number)
        }

        console.log(malleablePassword)


      var randomPassword = ""
      
      for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + malleablePassword[Math.floor(Math.random() * malleablePassword.length)];
        console.log(randomPassword)
      }
      return randomPassword;
 }
 function writePassword() {
    var password = myFunction() ;
    var passwordText = document.querySelector("#exampleInputPassword1");
  
    passwordText.value = password;
  }