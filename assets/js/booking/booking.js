

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

whichclass=document.querySelector('#whichclass');
cname=document.querySelector("#name");
instructor=document.querySelector("#instructor");

classesname=document.querySelectorAll('.classesname');
classestype=document.querySelectorAll('.classestype');
classeswith=document.querySelectorAll(".classeswith")
;
booknowbtn=document.querySelectorAll(".bookclasses");
classesdescription=document.querySelectorAll(".classesdescription");

booknowbtn.forEach(value=> {
    value.addEventListener("click",()=>{
        console.log(classesname.innerText);
        whichclass.innerText=classesname.innerText;
        cname.innerText=classestype.innerText;
        instructor.innerText= classeswith.innerText;

    })
    
});







