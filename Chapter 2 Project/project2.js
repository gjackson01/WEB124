var myName;
var para1;

myName = "Jason Jackson";
document.addEventListener ("DOMContentLoaded", function(){
	var para1 = document.getElementById("p1");
	para1.textContent = myName;
})

var num1 = 7;
var num2 = 3;
var numberMult = num1 * num2;
var age = 25;

 document.addEventListener("DOMContentLoaded", function() { 
 	document.getElementById("p3").textContent = numberMult;
});

 var myNameAddNum = myName + num1;
 document.addEventListener("DOMContentLoaded", function(){
 	document.getElementById("p4").textContent = myNameAddNum;
 });

 var myNameMultNum = myName * num1;
 document.addEventListener("DOMContentLoaded", function(){
 	document.getElementById("p5").textContent = myNameMultNum;
 });
 var ageCompare = age>numberMult;
 document.addEventListener("DOMContentLoaded",function(){
 	document.getElementById("p6").textContent = ageCompare;
 });