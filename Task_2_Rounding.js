function rounding(num, r){
    if (r > 15){
        r = 15;
    }
console.log(parseFloat(num.toFixed(r)));
}
rounding(3.141592653, 2);