/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let arr = [];
    let a = expressions[0]
    let p = expressions[1]
    arr.push((p + Math.sqrt((p*p)-16*a))/4);
    arr.push((p - Math.sqrt((p*p)-16*a))/4);
    arr = arr.sort();
    return arr;
}