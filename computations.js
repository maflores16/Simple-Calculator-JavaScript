var sum = false;
var min = false;
var digit = 0;

function press(variable)
{
    var screen = document.getElementById("screen");
    
    screen.value = variable;
    
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

function addition(){
    
    if(sum === false){        
       sum = true;        
    }
    
}

function substraction(){
    
    if(min === false){        
       min = true;        
    }
}