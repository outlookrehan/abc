var no1 = parseFloat(prompt("Enter your First Number",""));
var opt = prompt("Enter one of those operator( + , - , / , % , $ )","");
if ( opt==="$" ){
    var squrot= Math.sqrt(no1) ;
    var answer = "Your answer is : " + squrot ; 
}
else{
var no2 = parseFloat(prompt("Enter your Second Number",""));


if ( opt==="+" ){
    var add= no1 + no2 ;
   var answer = "Your Answer is : " + add ; 
}

else if ( opt==="-" ){
    var sub= no1 - no2 ;
    var answer = "Your Answer is : " + sub ; 
}

else if ( opt==="/" ){
    var div= no1 / no2 ;
    var answer = "Your Answer is : " + div ; 
}

else if ( opt==="%" ){
    var mod= no1 % no2 ;
    var answer = "Your Answer is : " + mod ; 
}

else{
    alert("please use these operators only:  \n For adding = + \n For subtrating = - \n For division = / \n For mode = % \n For squareroot = $ ");
};};
var name = prompt("Enter your Name","");
var Fname = prompt("Enter your Father Name","");
var name1 = "Name : " + name;
var name2 = "Father Name : " + Fname; 
var a = "Welcome";
 document.getElementById("con").innerHTML =  "<h1>" +
 " " + a + " " + name + " " + Fname + "</h1>" + "<p>" + name1 + "</p>" + "<p>" + name2