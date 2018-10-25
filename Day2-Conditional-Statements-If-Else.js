function getGrade(score) {
    let grade = 
    (score<=30 && score>25)?'A':
    (score<=25 && score>20)?'B':
    (score<=20 && score>15)?'C':
    (score<=15 && score>10)?'D':
    (score<=10 && score>5)?'E':
    (score<=5 && score>0)?'F':
    '';
    // Write your code here
    return grade;
}