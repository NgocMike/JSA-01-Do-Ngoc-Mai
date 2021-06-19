// (date) sử dụng làm việc với thời gian
// (getTime) sử dụng để tính ra đơn vị mili giây được tính từ năm 1970
// setInterval đặt ra một khoảng thời gian lặp lại 1 hành động nào đó
let newYear = new Date("Fri Feb 12 2021 00:00:00").getTime()
// console.log(NewYear)
let CountDown = setInterval(function () {
    let now = new Date().getTime()
    // console.log(now)
    let distance = newYear - now
    // console.log(distance)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    // console.log(days)

    let hours = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000*60*60))
    // console.log(hours)
let minutes = Math.floor ((distance%(1000*60*60))/(1000*60))
// console.log(minutes)
let seconds = Math.floor ((distance%(1000*60)/1000))
// console.log(seconds)
let Clock = document.getElementById('clock')
clock.innerHTML = days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's'

// đến thời điêmr năm mới
if(distance <= 0 ){
    clearInterval(countDown)
    clock.innerHTML = 'HAPPY NEW YEAR !!!'
}
}, 1000)