



// Bài 1 
let students = (Name, Age, Address) => {
    let pupil = {
        name: Name,
        age: Age,
        address: Address,
    }
    return pupil
}
console.log(students)

// Bài 2
var smartPhones = [{
        name: 'iphone',
        price: 649
    },
    {
        name: 'Galaxy S6',
        price: 576
    },
    {
        name: 'Galaxy Note 5',
        price: 489
    }
];

showPrice = () => {

    let prices = []

    let firstP = smartPhones[0].price
    prices.push(firstP)
    let secondP = smartPhones[1].price
    prices.push(secondP)
    let thirdP = smartPhones[2].price
    prices.push(thirdP)

    return prices

    // thêm vào object
    // students(firstP,secondP,thirdP)
}

// Bài 3

change1 = (x, y, z) =>
    console.log(x, y, z)

change2 = () =>
    alert('hello')

change3 = (a, b) => {
    return a + b * 10
}