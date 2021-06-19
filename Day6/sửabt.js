// localStorage.setItem("VietNamFood", JSON.stringify(foodArr))

let data = JSON.parse(localStorage.getItem("VietNamFood"))

let container = document.getElementById("container")


data.forEach(food => {
    container.innerHTML += `
    <div class="container-food">
    <h1>${food.name}</h1>
    <p>${food.description}</p>
    <p>Nguyên liệu:</p>
    <ul>
    `

    let ingredients = food.igredients
    console.log("những nguyên liệu ", ingredients)
    ingredients.forEach(ingredient => {
        container.innerHTML +=
            `<li>${ingredient}</li>`
    })
    container.innerHTML +=
        `
        </ul>
        </div>
        <br>`

});

// lưu dữ liệu vào local
let addLocal = function () {
    let foodArr = [{
            name: "Phở",
            igredients: ["xương ống", "hành khô", "tỏi khô", "thịt bò", "thịt gà",
                "bánh phở"
            ],
            description: "Một món ăn phải thử khi đến Việt Nam"
        },
        {
            name: "Bún r",
            igredients: ["xương ống", "hành khô", "tỏi khô", "thịt bò", "riêu cua",
                "bún"
            ],
            description: "Một món ăn phải thử khi đến Việt Nam"
        },
        {
            name: "Bánh mỳ",
            igredients: ["tương ớt", "hành", "tương cà chua", "thịt bò", "thịt gà", "bánh mỳ"],
            description: "Một món ăn phải thử khi đến Việt Nam"
        },
        {
            name: "Bún chả",
            igredients: ["bún", "hành khô", "tỏi", "thịt lợn", "nem",
                "nước mắm"
            ],
            description: "Một món ăn phải thử khi đến Việt Nam"
        },
        {
            name: "Bánh cuốn",
            igredients: ["nước mắm", "hành khô", "mộc nhĩ", "nấm hương", "thịt lợn",
                "bột", "chả"
            ],
            description: "Một món ăn phải thử khi đến Việt Nam"
        },
        {
            name: "Nem",
            igredients: ["miến", "trứng gà", "cà rốt", "su hào", "thịt lợn",
                "nấm hương", "tôm", "bánh đa nem"
            ],
            description: "Một món ăn phải thử khi đến Việt Nam"
        }
    ]
    // reload lại trang khi xoá local
    localStorage.setItem("VietNamFood", JSON.stringify(foodArr))
    location.reload()

}
// xoá toàn bộ dữ liệu về món ăn trong localstorage

let delLocal = function () {
    alert("Xoá toàn bộ dữ liệu các món ăn?")
    localStorage.removeItem("VietNamFood")
    container.style.display = "none"
}


// ------------ search ingredients ---------------

let searchBtn = document.getElementById("searchBtn")

// Khai báo function trong ES6
// let function1 = (a,b) => console.log("a+b")



searchBtn.addEventListener("click", () => {
    let inpt = document.getElementById("inpt").value
    // console.log(inpt)
    let check
    data.forEach(food => {
        let igredients = food.igredients
        igredients.filter((ingrd) => {
                if (ingrd == inpt){
                    console.log(food.name)
                    check = true
                    return food
                }
        })
    })
    if(check != true){
        alert("Không có món ăn đâu lew lew")
    }
})

