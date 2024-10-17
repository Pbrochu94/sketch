

/*Create the row container and the grid container + selectors and globa perimeters*/ 
let innerGridContainer = document.createElement("div")
let gridContainer = document.querySelector(".gridContainer")
gridContainer.append(innerGridContainer)
innerGridContainer.style.display = "flex"
let size = 1088
let promptAction = document.querySelector("button")
promptAction.addEventListener("click", changeGridSize)

startingGrid()



/*create the size the grid must respect*/
innerGridContainer.style.height = size+'px'
innerGridContainer.style.width = size+'px'


let backgroundColorUpdate = []/*Array that will hold only numbers of rgb(255.255.255)*/
let regex = /\d+/g/*Regular expression used to seperate only the numbers in rgb(255,255,255) */


function startingGrid()/*Creation of the grid*/
{
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
                newSquareX.style.backgroundColor = "Rgb(255,255,255)"
                addEvent(newSquareX)
                rowContainer.append(newSquareX)
            }
    }
}

function addEvent(square)
{
    square.addEventListener("mouseover", hoverOn)
    square.addEventListener("mouseout", hoverOff)
}

function changeGridSize()/*new grid creation*/
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
                    newSquareX.style.backgroundColor = "Rgb(255,255,255)"
                    addEvent(newSquareX)
                    rowContainer.append(newSquareX)
                }
        } 
}


function hoverOn(square)/*behavior for hovering on*/
{
    backgroundColorUpdate = square.target.style.backgroundColor.match(regex)/*store the current value of th square*/
    square.target.style.backgroundColor = `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`/*Randomize the value of Red, Green and blue each time the mouse hover*/
    square.target.style.transition = "none"
}

function hoverOff(square)/*behavior for hovering off*/
{
    square.target.style.transition = "background-color 1s ease"
    square.target.style.backgroundColor = `Rgb(${backgroundColorUpdate[0] - Math.round((255/100) *10)},${backgroundColorUpdate[0] - Math.round((255/100) *10)},${backgroundColorUpdate[0] - Math.round((255/100) *10)})`
}