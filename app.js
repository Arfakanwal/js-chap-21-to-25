//______________________string methods_________________
//Q#1
/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName =(firstName + lastName);
var message =("Hello,")
var greet = (message +fullName)
alert(greet);
//Q#2 Mobile models
var mobilesArr=["Samsung Galaxy S6 Edge","Oppo","Techno","Realme","Samsung Flip","Samsung galaxy","Realme note50"];
var userModel =prompt("Enter your favorite phone:");
var userMobile =userModel;
document.write("My favourite phone is: " + userMobile+" Lenght of string "+userMobile. length ); */
//Q#3 indexOf
var string =("Pakistani");
var word = "n";
document.write("String:" + string+"<br/>");
document.write("Index of 'n:'"+ string.indexOf(word)+"<br/>"+"<br/>");
//Q#4 lastIndexOf
var str = (" Hello world");
var word="l";
document.write("String:"+str+"<br/>");
document.write("Index of 'l:'"+str.lastIndexOf(word)+"<br/>"+"<br/>");
//Q#5 charAt
var $tr=("Pakistani");
document.write("String:" + $tr+"<br/>")
document.write("Character at index 3: "+$tr.charAt(3)+"<br/>"+"<br/>");
//Q#6 concat method
var firstName = ("Arfa");
var lastName = ("Umer");
var greet = ("Hello!");
var message = (greet+firstName+lastName);
document.write(message +"<br/>"+"<br/>");
//Q#7 Replacement
var city = ("Hyderabad");
var newWord =("Islamabad");
var newCity = city.replace(city,newWord);
document.write("City:" +city+"<br/>");
document.write("After replacement: "+newCity+"<br/>"+"<br/>");
//Q#8 globally replacement
 var message = ("<i>Ali and Sami are best friend. They play football and cricket together<i/>");
document.write(message+"<br/>"+"<br/>");
var oldWord = "and";
var result = message.replace(/and/g,"&");
var head=("<h3>After replacement</h3>")
document.write(head+"<br/>")
 document.write(result+"<br/>"+"<br/>"); 
//Q#9 types
var str = ("425");
var num = 425;
document.write("Value:  425"+"<br/>");
document.write("Type: "+ typeof str+"<br/>");
document.write("value:  425"+"<br/>");
document.write("Type: "+ typeof num+"<br/>"+"<br/>");
//Q#10 uppercase
 var dryFruit =prompt("Enter your dry fruit name:");
var res = dryFruit.toUpperCase();
document.write(res+"<br/>"+"<br/>"); 
//Q#11 Tittlecase
/* var userCourse=prompt("Enter your computer language those you are learning:");
document.write(userCourse);
var words =userCourse.toLowerCase().split(' ');
for(var i =0; i<word.length; i++){
    word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase();
}
var tittleCase=word.join(' ');
document.write(tittleCase) */
//Q#12 variable to string
var num = 35.36;
document.write("Number " + num+"<br/>"+"<br/>");
var numStr = num.toString();
var res = numStr.replace('.','');
document.write("Result "+res+"<br/>"+"<br/>");
//Q#13 ASCII Code
function isValidUsername (username){
    var specialSymbols = /[@.,!]/;
    return !specialSymbols.test(username);
}
function promptForUsername(){
    var username = prompt("Enter your username");
    if(username === null){
        alert("username input was canceled.");
        return;
    }
    if(isValidUsername(username)){
        alert("Username is valid "+ username);

    }else{
        alert("Invalid username. please enter a user name without special symbols [@ . , !].");
        promptForUsername();
    }
}
promptForUsername();
//Q# 14 password
var password =prompt("Enter a password");
if(password.length < 6){
    alert("Password must be  atleast 6 characters long!")
}else{
    var hasAlphabet = false;
    var hasNumber = false;
    for(var i = 0; i<password.length; i++){
        var charCode = password.charCodeAt(i)
        if((charCode>=65 && charCode<=90) ||
    (charCode>+97 && charCode<=122)){
        hasAlphabet = true;
    }else if (charCode>=48 && charCode<=57){
        hasNumber = true;
    }
    }
}









