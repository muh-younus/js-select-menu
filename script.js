let arrow = document.getElementById("arrow");
let list = document.getElementById("list");
let option = document.querySelectorAll(".option");
let menu = document.getElementById("field");
console.log(option);










arrow.addEventListener("click", () =>{
   

   if(arrow.style.transform === "rotate(180deg)"){

    arrow.style.transform = "rotate(0deg)";
    list.style= "display: none";
   }

   else{

    arrow.style.transform = "rotate(180deg)";
     list.style= "display: block";

   }


   
});


option.forEach(options => {
 
    options.addEventListener("click", function () {
        menu.innerHTML = this.textContent; // Update menu with clicked option's text

    list.style= "display: none"
    arrow.style.transform = "rotate(0deg)";
        
    });
});


