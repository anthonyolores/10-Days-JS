var operand1 = '';
var operand2 = '';
var operator = '';
function setRes(val){  
    if("01".indexOf(val) != -1){
        if(operator.length == 0){
            operand1 += val;
        }
        else {
            operand2 += val;
        }
        setResText();
    }   
    else if("*/+-".indexOf(val) != -1 && 
            operator.length == 0 && 
           operand1.length > 0){
        operator = val;
        setResText();
    }
    else if("c" == val){
        reset();
    }
    else if("=" == val){  
        if(operator.length > 0){
            var result = 0;               
             switch(operator){
                case '*':{
                    result = binToDec(operand1) * binToDec(operand2);
                }break;
                case '/':{
                    result = Math.floor(binToDec(operand1) / binToDec(operand2));
                }break;
                case '+':{
                    result = binToDec(operand1) + binToDec(operand2);
                }break;
                case '-':{
                    result = binToDec(operand1) - binToDec(operand2);
                }break;
            }

            result = decToBinary(result).split('').reverse().toString().replace(/,/g, '');
            document.getElementById("res").innerHTML = result;
            operand1 = result;
            operand2 = '';
            operator = '';           
            }

    }
    
}
function setResText(){
    document.getElementById("res").innerHTML = operand1 + operator + operand2;   
}
function reset(){
    operand1 = '';
    operand2 = '';
    operator = '';
    document.getElementById("res").innerHTML = "";
}
function binToDec(binArr){
    binArr = binArr.split('').reverse();
    let dec = 0;
    let bitDec = 1;
    for(let i = 0; i < binArr.length; i++){      
        if(binArr[i]=='1'){
            dec += bitDec;
        }
        bitDec *= 2;
    }
    return dec;
}
function decToBinary(dec){
    
    if(dec == 0){
        return '';
    }
        
    else{
        let r = dec%2==0?'0':'1';
        return r + decToBinary(Math.floor(dec/2));
    }
}