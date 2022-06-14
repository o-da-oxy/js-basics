function sales(group, num, price){
    var totalPrice;
    switch (group){
        case 'Students':{
            if (num >= 30){
                return totalPrice = price * num * 0.85;
            }
            else{
                return totalPrice = price * num;
            }
        }
        case 'Company':{
            if (num >= 100){
                return totalPrice = price * (num-10);
            }
            else{
                return totalPrice = price * num;
            }
        }
        case 'Regular':{
            if (num >= 10 && num <= 20){
                return totalPrice = price * num * 0.95;
            }
            else{
                return totalPrice = price * num;
            }
        }
    }
}
function totalPrice(num, group, day){
    var price;
    switch (group){
        case 'Students':{
            switch (day){
                case 'Friday':{
                    price = 8.45; break;
                }
                case 'Saturday':{
                    price = 9.80; break;
                }
                case 'Sunday':{
                    price = 10.46; break;
                }
            }
            break;
        }
        case 'Company':{
            switch (day){
                case 'Friday':{
                    price = 10.90; break;
                }
                case 'Saturday':{
                    price = 15.60; break;
                }
                case 'Sunday':{
                    price = 16; break;
                }
            }
            break;
        }
        case 'Regular':{
            switch (day){
                case 'Friday':{
                    price = 15; break;
                }
                case 'Saturday':{
                    price = 20; break;
                }
                case 'Sunday':{
                    price = 22.50; break;
                }
            }
            break;
        }
    }
    var result = sales(group, num, price).toFixed(2);
    console.log(`Total price: ${result}`);
}
totalPrice(40, "Regular", "Saturday");