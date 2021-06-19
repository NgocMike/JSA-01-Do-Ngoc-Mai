let foodArr = [{
        Name: "Phở",
        Ingredients: ["xương ống",
            "hành khô",
            "tỏi khô",
            "thịt bò",
            "thịt gà",
            "bánh phở"
        ]
    },
    {
        Name: "Bánh mì",
        Ingredients: ["bánh mì",
            "bate",
            "thịt quay",
            "trứng",
            "xúc xích",
            "nộm rau"
        ]
    }, {
        Name: "Nem",
        Ingredients: ["bánh đa nem",
            "mộc nhĩ ",
            "nấm hương",
            "thịt lợn",
            "miến",
            "rau củ",
            "trứng"
        ]
    }, {
        Name: "Bún chả",
        Ingredients: ["bún",
            "hành khô",
            "nước chấm",
            "thịt nướng",
            "chả băm",
            "rau sống"
        ]
    }, {
        Name: "Nem nướng",
        Ingredients: ["nem nướng",
            "nước chấm",
            "rau sống",
        ]
    }
]

// // console.log(foodArr)
// let dataString = JSON.stringify(foodArr)
// // console.log(dataString)

// localStorage.setItem("VietNamFood", dataString)


// rút gọn 49,52
localStorage.setItem("VietNamFood",JSON.stringify(foodArr))
let dataArr = JSON.parse(localStorage.getItem("VietNamFood"))

// let data = localStorage.getItem("VietNamFood")
// // let dataArr = JSON.parse(data)
// console.log(dataArr)

let foods = document.getElementById("Vnfoods")
dataArr.forEach(food => {
    foods.innerHTML += `
     <div class = "food-info" >
     <br>
        Name: ${food.Name}
         <br>
     Ingredients: ${food.Ingredients}
      <br>
     </div>
        <br>
        `   
})
 