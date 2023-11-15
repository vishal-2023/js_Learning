const shopping =[
    {
        course1:"Web-Dev_Course",
        price:2121
    },
    {
        course1:"App-Dev_Course",
        price:1999
    },
    {
        course1:"Machine-Learning_Course",
        price:2000
    },
    {
        course1:"App_Course",
        price:9999
    }

]

const checkout = shopping.reduce( (acc,curr) =>{
    return acc+curr.price;
},0)
console.log(checkout); //o/p=> 16119