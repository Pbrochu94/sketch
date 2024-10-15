/*Create the row container and the grid container*/ 
let innerGridContainer = document.createElement("div")
let gridContainer = document.querySelector(".gridContainer")
gridContainer.append(innerGridContainer)
innerGridContainer.style.display = "flex"

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
    let size = 0
    gridContainer.innerHTML = ""
    innerGridContainer.innerHTML = ""
    size = prompt("Size of the grid?")
    for( let x = 0; x<size;x++)
        {
            let rowContainerNew = document.createElement("div")
            innerGridContainer.append(rowContainerNew)
            for (let i = 0; i<size; i++)
                {
                    let newSquareXNew = document.createElement("div")
                    newSquareXNew.style.border = "2px solid black"
                    newSquareXNew.style.width= "64px"
                    newSquareXNew.style.height= "64px"
                    newSquareXNew.classList.add("hoveringColor")
                    rowContainerNew.append(newSquareXNew)
                }
        }
}
