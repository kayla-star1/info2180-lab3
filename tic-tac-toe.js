onload = function (){
    
    myDiv = document.getElementById("board").children;
     for (let i = 0; i < myDiv.length; i++){
         myDiv[i].setAttribute("class","square")
     }
    console.log(myDiv);
}
   
