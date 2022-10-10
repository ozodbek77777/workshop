let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let btn =document.getElementById('btn')
const select=document.getElementById('select')
let x  = document.getElementById('demo')
let x1 = document.getElementById('demo1')
let x2 = document.getElementById('demo2')
let x3 = document.getElementById('demo3')
let x4 = document.getElementById('demo4')
let x5 = document.getElementById('demo5')
let x6 = document.getElementById('demo6')
let x7 = document.getElementById('demo7')
let h2 = document.getElementById('h2')
let h3 = document.getElementById('h3')
let h1 =document.getElementById('h1')
    console.log(select)
btn.addEventListener('click',()=>{
        let date = 4
        let is_shop_open = true
        if (date < 3) {
            is_shop_open = false
        }
        let order = (time, work) => {
            return new Promise((resolve, reject) => {
                if (is_shop_open) {
                    setTimeout(() => {
                        resolve(work())
                    }, time)
                } else {
                    reject(console.log('The shop is closed '))
                }
            })
        }
        order(2000, () =>h1.innerHTML= select.value + ' ' +`has been selected`)
            .then(() => {
                return order(0000, () => x.innerHTML = 'Production has started')
            })
            .then(() => {
                return order(2000, () => x1.innerHTML = 'The fruit cut')
            })
        
            .then(() => {
                return order(1000, () => x2.innerHTML = `${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            })
            .then(() => {
                return order(1000, () => x3.innerHTML = 'The machine has started')
            })
            .then(() => {
                return order(2000, () => x4.innerHTML = `The ice cream into the ${stocks.holder[1]}`)
            })
        
            .then(() => {
                return order(3000, () => x5.innerHTML = `The ${stocks.toppings[0]} was sprinkled`)
            })
        
            .then(() => {
                return order(2000, () => x6.innerHTML = 'The ice cream was served to the n64 group of students ')
            })
        
        
            .catch(() => {
                h3.innerHTML = 'Something went wrong'
            })
        
            .finally(() => {
                h2.innerHTML = 'The work is done and goodbye'
            }) 
})