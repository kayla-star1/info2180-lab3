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
window.onload = function (){
        let myDiv = document.getElementById("board").children;
     
        for (let i = 0; i < myDiv.length; i++){
             myDiv[i].setAttribute("class","square")
             myDiv[i].setAttribute("onclick","handleClick(this)")
         }

        console.log(myDiv);
    
}

