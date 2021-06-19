// chữa btvn day 4 
// let upDateTime = function () {
//     let date = new Date()
//     // console.log(date)
//     let hours = date.getHours()
//     console.log(hours)
//     let minutes = date.getMinutes()
//     console.log(minutes)
//     let seconds = date.getSeconds()
//     console.log(seconds)

//     if (hours < 10) {
//         hours = "0" + hours
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds
//     }

//     document.getElementById("clock").
//     innerHTML = hours + ":" + minutes + ":" + seconds

// }
// upDateTime()
// setInterval(upDateTime, 1000)

// -- -- --  Local Storage-- -- -- -- 

let JSA02 = [{
        name: "Bach",
        age: "16",
        school: "CNN"
    },
    {
        name: "Mai",
        age: "16",
        school: "Co Loa"
    },

    {
        name: "Nguyen",
        age: "16",
        school: "Chu Van An"
    },

    {
        name: "Sang",
        age: "15",
        school: "Duc Giang"
    }
]
// * data dạng string*
// console.log(JSA02)
// let dataString = JSON.stringify(JSA02)
// console.log(dataString)

// localStorage.setItem("JSA02 class", dataString)

// // *data dạng array*
// let data = localStorage.getItem("JSA02 class")
// let dataArr = JSON.parse(data)
// console.log(dataArr)

// // update dữ liệu mới
// dataArr = JSA02
// data =  JSON.stringify(dataArr)
// localStorage.setItem("JSA02 class", data)

// let students = document.getElementById("students")
// dataArr.forEach( student => {
//     students.innerHTML += `
//     <div class = "student-info" >

//     name: ${student.name}
//     <br>
//     age: ${student.age}
//     <br>
//     school: ${student.school}
//     <br>
//     </div>
//     <br>
//     ` 

// });

// ------------- update ------------

let updateData = function (name, data) {
    console.log(data)
    let dataLocal = localStorage.getItem("JSA02 class")
    let dataArr = JSON.parse(dataLocal)
    let index = dataArr.findIndex(function (student) {
        console.log(index)
        dataArr[index] = data})
        dataLocal = JSON.stringify(dataArr)
        localStorage.setting("JSA02 class", dataLocal)
}