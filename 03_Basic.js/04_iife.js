// immediately invoked function expression
(function addTwo (num1 , num2){
    console.log(num1+num2);
})(2,4);

// to remove the global scope pollution

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("himanshu")

