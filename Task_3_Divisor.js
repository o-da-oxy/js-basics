function divisor(num){
    const divisors = [2, 3, 6, 7, 10];
    let maxDivisor = 0;
    divisors.forEach(element => {
        if (num % element == 0){
            maxDivisor = element;
        }
    });
    if (maxDivisor == 0){
        console.log(`Не делится`);
    }
    else{
        console.log(`Число делится на ${maxDivisor}`);
    }
}
divisor(1643);