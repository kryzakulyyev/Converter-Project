


//Kelvin to Celsius, then  Fahrenheit.
//Kelvin variable
const kelvin=prompt("Enter the Kelvin value"); //Kelvin variable is constanted and it is not change 


//Celsius variable
let celsius=kelvin-273; // Celsius value less than Kelvin value. Because of formul: celsius=kelvin-273; 

//Fahrenheit variable
let fahrenheit=celsius*(9/5)+32; //This formul result is giving fahrenheit value.

//Round the number
fahrenheit=Math.round(fahrenheit); // fahrenheit result be decimal number beacuse of formul method "(9/5)". Thats why we are using Math.round model. 
 


//print and counting Fahrenheit degrees
alert(`The temperature is ${fahrenheit} degrees Fahrenheit`); 

//Newton value
 let newton=celsius*(33/100);
 newton=Math.floor(newton); 
 alert(`Newton temperature is ${newton}`);

 //Challange example.
const lb=prompt("Enter the kg:");
 let kg=lb/2.2046;
 alert(` ${lb} pound is ${kg} kilogram`); //Chalange exapmle counting  "lb" to "kg"
