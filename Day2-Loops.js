/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = [];
    let cons = [];
    
    for(let i = 0; i < s.length; i++){
        if((/^[aeiou]$/).test(s[i].toLowerCase()))
            vowels.push(s[i]);
        else
            cons.push(s[i]);
    }
    let print = (arr) => {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    };
    print(vowels);
    print(cons);
}