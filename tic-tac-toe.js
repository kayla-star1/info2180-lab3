let myArray =[]
   function handleClick(e){
    if (myArray.length == 0 || myArray[0]=="O"){
       e.textContent="X"
       e.classList.add ("X")
       myArray[0]= "X"
    } else if (myArray[0]== "X"){
        e.textContent="O"
        e.classList.add ("O")
        myArray[0]= "O"  
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
    }
     console.log(myDiv);
    
}

