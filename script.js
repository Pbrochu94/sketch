/*Create the row container and the grid container*/ 
let innerGridContainer = document.createElement("div")
let gridContainer = document.querySelector(".gridContainer")
gridContainer.append(innerGridContainer)
innerGridContainer.style.display = "flex"
innerGridContainer.style.height = "1088px"
innerGridContainer.style.width = "1088px"

/*Creation of the grid*/
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
                newSquareX.classList.add("hoveringColor")
                rowContainer.append(newSquareX)
            }
    }


let promptAction = document.querySelector("button")
promptAction.addEventListener("click", changeGridSize)

function changeGridSize()
{
    innerGridContainer.innerHTML = ""

    let size = 0
    size = prompt("Size of the grid?")
    for( let x = 0; x<size;x++)
        {
            let rowContainer = document.createElement("div")
            innerGridContainer.append(rowContainer)
            for (let i = 0; i<size; i++)
                {
                    let newSquareX = document.createElement("div")
                    newSquareX.style.border = "2px solid black"
                    newSquareX.style.width= "64px"
                    newSquareX.style.height= "64px"
                    newSquareX.classList.add("hoveringColor")
                    rowContainer.append(newSquareX)
                }
        }
}
