

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
bookingprocess=document.querySelector("#bookingprocess_innercontainer");
selectedclass=document.querySelector("#selectedclasses");
submitbtn=document.querySelector("#submitbtn");
booknowbtn.forEach(value=> {
    value.addEventListener("click",(e)=>{
        e.stopPropagation();
        console.log(classesname.innerText);
        whichclass.innerText="You Choosed a Class";
        cname.innerText=`Thank You For Choosing !!`;
        instructor.innerText= "Filled Out the form below !!";
        bookingprocess.classList.add("bkic");
        bookingprocess.style.backgroundColor="#30613c";
        selectedclass.classList.add("sc");
        selectedclass.style.backgroundColor="#30613c";
        selectedclass.style.borderRadius="20px 20px 0 0";
        bookingprocess.style.borderRadius="0 0 20px 20px";
        submitbtn.style.boxShadow =
        "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 8px rgba(255,255,255,0.04)";

    })
    
});
document.addEventListener("click", () => {
    bookingprocess.classList.remove("bkic");
    selectedclass.classList.remove("sc");
    bookingprocess.style.backgroundColor = "";
    selectedclass.style.backgroundColor="";
    selectedclass.style.borderRadius="";
    bookingprocess.style.borderRadius="";
    whichclass.innerText="";
    cname.innerText=``;
    instructor.innerText= "";
});






