

let dropdowncontent =document.querySelectorAll(".dropdown_content")

let anchoryoga=document.querySelector("#anchoryoga")
let anchormeditation=document.querySelector("#anchormeditation")
let anchornutrition=document.querySelector("#anchornutrition")
let anchorfitness=document.querySelector("#anchorfitness")
let yogaclasses=document.querySelector("#yogaclasses")
let meditationclasses=document.querySelector("#meditationclasses")
let nutritionclasses=document.querySelector("#nutritionclasses")
let fitnessclasses=document.querySelector("#fitnessclasses")


anchoryoga.addEventListener('click',()=>{
    meditationclasses.style.display = "none";
    nutritionclasses.style.display = "none";
    fitnessclasses.style.display = "none";
    yogaclasses.style.display="flex";
})

anchormeditation.addEventListener('click',()=>{
    yogaclasses.style.display = "none";
    nutritionclasses.style.display = "none";
    fitnessclasses.style.display = "none";
    meditationclasses.style.display="flex";
})

anchornutrition.addEventListener('click',()=>{
    yogaclasses.style.display = "none";
    nutritionclasses.style.display = "flex";
    fitnessclasses.style.display = "none";
    meditationclasses.style.display="none";
})

anchorfitness.addEventListener('click',()=>{
    yogaclasses.style.display = "none";
    nutritionclasses.style.display = "none";
    fitnessclasses.style.display = "flex";
    meditationclasses.style.display="none";
})






