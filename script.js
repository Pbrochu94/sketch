/*Create the row container and the grid container + selectors and globa perimeters*/ 
let innerGridContainer = document.createElement("div")
let gridContainer = document.querySelector(".gridContainer")
gridContainer.append(innerGridContainer)
innerGridContainer.style.display = "flex"
let size = 1088
let promptAction = document.querySelector("button")
promptAction.addEventListener("click", changeGridSize)

/*create the size the grid must respect*/
innerGridContainer.style.height = size+'px'
innerGridContainer.style.width = size+'px'

/*Creation of the grid*/
for( let x = 0; x<16;x++)/*create 16 vertical rows in the row container*/
    {
        let rowContainer = document.createElement("div")
        innerGridContainer.append(rowContainer)
        for (let i = 0; i<16; i++)/*create 16 boxes in the row container*/
            {
                let newSquareX = document.createElement("div")
                newSquareX.style.border = "1px solid black"
                newSquareX.style.width= "64px"
                newSquareX.style.height= "64px"
                newSquareX.classList.add("hoveringColor")
                rowContainer.append(newSquareX)
            }
    }

function changeGridSize()
{
    innerGridContainer.innerHTML = ""
    let userNumber;
    do /*Check if prompt is a number and bigger than 0 up to 100 (1 to 100)*/
    {
        userNumber = prompt("Size of the grid?")
    }
    while(userNumber > 100 || userNumber <= 0 || isNaN(userNumber))

    let height = 1088/userNumber /*Calculate the height per block to fill same grid space after change*/ 
    for( let x = 0; x<userNumber;x++)/*create "user amount" of vertical rows in the row container*/
        {
            let rowContainer = document.createElement("div")
            innerGridContainer.append(rowContainer)

            rowContainer.style.height = height+"px"/*Assign the size to each row to fill same grid space*/ 
            rowContainer.style.width = "100%"
            for (let i = 0; i<userNumber; i++)/*create "user amount" of horizontal boxes in the row container*/
                {
                    let newSquareX = document.createElement("div")
                    newSquareX.style.border = "1px solid black"
                    newSquareX.style.width= "64px"
                    newSquareX.style.height= "64px"
                    newSquareX.classList.add("hoveringColor")
                    newSquareX.style.height = height+"px"/*Assign the size to each box to fill same grid space*/ 
                    newSquareX.style.width = "100%"
                    rowContainer.append(newSquareX)
                }
        }
}
