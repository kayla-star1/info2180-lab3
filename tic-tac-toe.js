let myArray =[]
let row_pos = {}
let column_pos = {}
let diagonal_pos = {}
let win = false

let current_row = undefined
let current_column = undefined
let current_diagonal = undefined

let r = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]]
let c=[
[0, 3, 6],
[1, 4, 7],
[2, 5, 8]]
let d =[
[0, 4, 8],
[2, 4, 6]]

function checkRow(r,xo){
    for (let i = 0;i<r.length;i++){
        if (document.getElementById(r[i]).classList.contains(xo) == false){
            return false
        }
    }
    return true
}
function checkColumn(c,xo){
    for (let i = 0;i<c.length;i++){
        if (document.getElementById(c[i]).classList.contains(xo) == false){
            return false
        }
    }
    return true
}
function checkDiagonal(d, xo){
    if (d != undefined)
    {
        for (let i = 0;i<d.length;i++){
            if (document.getElementById(d[i]).classList.contains(xo) == false){
                return false
            }
        }
        return true
    }
    return false
}

   function handleClick(e){
    if (win == false){
        if (myArray.length == 0 || myArray[0]=="O"){
       e.textContent="X"
       e.classList.add ("X")
    } 
    else if (myArray[0]== "X"){
        e.textContent="O"
        e.classList.add ("O") 
    }
    if(myArray[0] == "X"){
        myArray[0] = "O"
    }
    else {
        myArray[0] = "X"
    }
        current_row = row_pos[e.id]
        current_column = column_pos[e.id]
        current_diagonal = diagonal_pos[e.id]

        if (checkRow(r[current_row],myArray[0]) == true)
        {
            win = true
        }
        else if (checkColumn(c[current_column],myArray[0]) == true)
        {
            win = true
        }
        else if (checkDiagonal(d[current_diagonal],myArray[0]) == true)
        {
            win = true
        }
        if (win == true)
        {
            let message = document.getElementById("status")
            message.textContent = "Congratulations! "+myArray[0]+" is the Winner!"
            message.classList.add("you-won")   
        }
    }
}

function boardhover(e){
    e.classList.add("hover")
}

function boardhoverout(e){
    e.classList.remove("hover")
}

window.onload = function (){
    let myDiv = document.getElementById("board").children;
     
    for (let i = 0; i < myDiv.length; i++){
        myDiv[i].setAttribute("class","square")
        myDiv[i].setAttribute("onclick","handleClick(this)")
        myDiv[i].setAttribute("onmouseover","boardhover(this)")
        myDiv[i].setAttribute("onmouseout","boardhoverout(this)")
        myDiv[i].setAttribute("id",(i))
        //Row
        if (i <= 3){
            row_pos[myDiv[i].id] = 0
        }
        else if (i > 2 && i <= 5){
            row_pos[myDiv[i].id] = 1
        }
        else if (i > 5 && i <= 8){
            row_pos[myDiv[i].id] = 2
        }
        //Columns
        if (i == 0||i == 3||i == 6){
            column_pos[myDiv[i].id] = 0
        }
        else if (i == 1||i == 4||i == 7){
            column_pos[myDiv[i].id] = 1
        }
        else if (i == 2||i == 5||i == 8){
            column_pos[myDiv[i].id] = 2
        }
        //Diagonals
        if (i == 0||i == 4||i == 8){
            diagonal_pos[myDiv[i].id] = 0
        }
        else if (i == 2||i == 4||i == 6){
            diagonal_pos[myDiv[i].id] = 1
        }
    }
     console.log(myDiv);
}

