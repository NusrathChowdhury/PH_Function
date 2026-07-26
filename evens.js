

const numbers=[12,87,14,51,36,46];

// const evens=[];
// for (const num of numbers){
//     console.log(num);
//     if(num %2 ===0){
//         console.log('even',num);
//         evens.push(num);
//     }
//     else
//         console.log('odds')
// }

function getEven(array){
    const even=[];
    for (const num of array){
        if (num %2 === 0){
            even.push(num);
        


        }
        
    }
    return even;

}
const result=getEven(numbers);
console.log(result)
