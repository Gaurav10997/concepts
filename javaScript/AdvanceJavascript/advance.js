// Destructuring

// 1) destructring of Arrays 
// const arr = [1,2,3,4,5];

// const [first,second,...remaining] = arr;

// const addAndMultiply = (a,b) =>{
//     return [a+b,a*b]
// }

// const [sum,multiply] = addAndMultiply(2,4);

// console.log(sum);
// console.log(multiply)




// 2) destructuring of Objects 
// it doesnot follows the order name  same most of the time 


// const obj = {
//     first_name:"gaurav",
//     last_name:"mandal",
//     age:28,
// }

// const  {first_name,age} = obj;


// console.log(first_name,age)

// nested destructuring also possible in the array as well as in the objects

// console.log("gaurav mandal".split(" "))


//array destructuring 
// function nameTofirstAndLast(name){
//     return name.split(" ");
// }

// const [firstName , lastName] = nameTofirstAndLast("Gaurav mandal");

//object destructuring 

// function nameTofirstAndLastObject(name){
//     const [first_name,last_name]  = name.split(" ");

//     return {
//         first_name,
//         last_name
//     }
// }
// const {first_name,last_name} = nameTofirstAndLastObject("Gaurav Mandal") 
// console.log(first_name,last_name)

// the concepts of options work like this internally 

// function addAndMultiply({a,b}){
//     return [a+b,a*b]
// }


// const [sum , multiply] = addAndMultiply({a:5 ,b:4})

// console.log(multiply)



//spread and Rest operatotor 

// function sum(...numbers){
//     return numbers.reduce((sum,el)=>sum+el,0);
// }

// console.log(sum(1,2,3,4,5,6));



// numbers = [0,1,2,3,4,5,6,9];

// const numberCopied = [...numbers];

// console.log(numberCopied)



//enhanced object literals 


// const name = {
//     firstName,
//     lastName,
//     sayhi(){
//         console.log('hi from javasriprt')
//     },
//     sayhello:function(){
//         console.log("hello from javascript");
//     }
// }


// please default paramters at last kyle simplified advice 
// function sayhi(name="User"){
//     console.log("hi " + name);
// }

// sayhi("cook");


// null coalicing operator

// console.log(undefined || "smith")
// console/log("" || "smith")


// console.log(""??"smith")


// optinalol chaining 



//Map


const map = new Map([["unitedStates" , "USD"]
,["INDIA" ,"RUPPES"]
]);

console.log(map);