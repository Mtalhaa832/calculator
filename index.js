let input =document.getElementById("inpt");
let button = document.querySelectorAll("button");
let string = "";
button.forEach((val)=>{
 val.addEventListener("click",()=>{
    input.style.color = "white"
    if (val.innerHTML == "C") {
        string = "";
        input.value = string
       
    }else if(val.innerHTML == "="){
        string = eval(string);
        input.value = string
       
    }else{
    string += val.value
  input.value =string}
 })
} );
