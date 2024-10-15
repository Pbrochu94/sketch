console.log("hello world")
let innerGridContainer = document.createElement("div")
let gridContainer = document.querySelector(".gridContainer")
gridContainer.append(innerGridContainer)

innerGridContainer.style.display = "flex"

for( let x = 0; x<16;x++)
    {
        let rowContainer = document.createElement("div")
        innerGridContainer.append(rowContainer)
        for (let i = 0; i<16; i++)
            {
                let newSquareX = document.createElement("div")
                newSquareX.style.border = "2px solid black"
                newSquareX.style.width= "64px"
                newSquareX.style.height= "64px"
                rowContainer.append(newSquareX)
            }
    }
