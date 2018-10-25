/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    let num = 'YES';
    if(a < 1){
        if(a < 0)
            num = "Negative";
        else if(a == 0)
            num = "Zero"

        throw new Error(num + ' Error');                 
    }
    return num;
}