function getMaxLessThanK(n,k){
    let max = 0;
    for(let i = 1; i < n; i++){
        for(let x = i+1; x <= n; x++){
            let p = (i&x);
            max = (p<k && p>max)?p:max;
        }
    }
    return max;
}