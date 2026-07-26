

function firstElementDouble(array){
    console.log('got the parameter value',number);
    const firstElement=array[0];
    const double=firstElement*2
    return double;


}
const number=[45,8,7,541,69,12];
const double= firstElementDouble(number);
console.log('double of the first element of array',double);




// object using

const student={
    name:'fnc',
    id:32,
    marks:70
}

function isPlus(student){
    console.log('the student got:',student)
    const marks=student.marks;
    console.log(marks);
    if (marks>=80){
        return true;
    }
    else 
        return false;
}
const isAplus= isPlus(student);

