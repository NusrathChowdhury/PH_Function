
function doubleOrHalf(price,isDouble){
    if(isDouble === true){
        const askingPrice= price*2;
        return askingPrice;
    }
    else{
        const askingPrice = price/2;
        return askingPrice;
    }
}

const myprice=doubleOrHalf(100,true);
console.log('price for normal people',myprice);
const leaderprice=doubleOrHalf(100,false);
console.log('pricefor leader people',leaderprice);