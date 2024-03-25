const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce((acc,currVal)=>{
    //console.log(`acc = ${acc}  curr = ${currVal}`)
    return acc + currVal

},3
)
//console.log(myTotal)

// another format 
const newWay = myNums.reduce((acc,currVal)=> acc+currVal,0)
console.log(newWay)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
