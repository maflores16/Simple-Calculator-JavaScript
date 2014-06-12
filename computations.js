//Global values we use in order to keep calculations in order

var sum = false;
var min = false;
var digit = 0;

//The press method gets the variable from the button
//It also locks and unlocks the calculator whenever there's a sum or substraction

function press(variable)
{
    //Here we get the DOM element from the screen in order to use it in JS
    
    var screen = document.getElementById("screen");
    
    //Then we get its current value displaying
    
    screen.value = variable;
    
    //If the calculator has been locked to sum or substract, we proceed to calculate it
    //Else, we just save the current digit on screen for future use
    
    if(sum === true){
        
        screen.value = parseInt(digit) + parseInt(variable);
        digit = screen.value;
        sum = false;
    }
    else if(min === true){
        screen.value = parseInt(digit) - parseInt(variable);
        digit = screen.value;
        min = false;
    }
    else{
        digit = screen.value;
    }
}

//The adition method locks the calculator into sum mode

function addition(){
    
    if(sum === false){        
       sum = true;        
    }
    
}

//The substraction method locks the calculator into substraction mode

function substraction(){
    
    if(min === false){        
       min = true;        
    }
}