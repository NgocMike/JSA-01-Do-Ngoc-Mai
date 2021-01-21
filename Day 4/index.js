let a = 10 % 2
console.log(a)

// on tap function
let helloFuntion = function () {
    alert('hello');
}
// cach khai báo ft
// gọi lại mà k cần khai báo console
helloFuntion()

// if/else

if (6 % 2 == 0) {
    console.log('so chan')
} else {
    console.log('so le')
}

//vong lap for
let count = 0
for (i = 32; i <= 40; i++) {
    count++
}
console.log('count', count)

//   Viết một function có tên là findEven(number) 
// với number là một số bất kỳ trong khoảng từ 4-20.
//  Khi chạy findEven() sẽ đưa ra tất cả các số chẵn 
//  trong khoảng từ 4 đến number.



let even = function (a) {
    let number = 0
    for (i = 4; i <= a; i++) {
        if (i % 2 == 0) {
            number++
            console.log(i)
        }
    }
    console.log('so cac so chan la', number)

}

let divColor = document.getElementById('divColor')



let colorChange = function () {
    divColor.style.background = 'black'
}
divColor.addEventListener('mouseover', colorChange)






let colorChange1 = function () {
    divColor.style.background = 'black'
}
divColor.addEventListener('mouseout', colorChange1)


let triangle = document.getElementById('triangle')
for (i=1; i <6; i++) {
    for (j = 1; j <= i; j++){
        triangle.innerHTML += 'a'
    }
    triangle.innerHTML += '<br>'
}