



let addtask=document.querySelector("#addnewtask");
let removetask=document.querySelector("#removetask");
let t1=document.querySelector("#t1");
let t2=document.querySelector("#t2");
let t3=document.querySelector("#t3");
let t4=document.querySelector("#t4");
let t5=document.querySelector("#t5");
let t6=document.querySelector("#t6");

let userinfo=document.querySelector("#username");
let usernameinput=prompt("Enter Your Name Hussler: ");
let usernameinputs=prompt("Enter Your SurName Hussler: ");
userinfo.innerText=usernameinput.concat(usernameinputs);
userinfo.style.display="flex";



let getinput="";
addtask.addEventListener("click",()=>{
    getinput=prompt("Enter your task: ");
    if (t1.innerText===""){
        t1.innerText=` ${getinput}`;   
    }
    else if(t2.innerText===""){
        t2.innerText=` ${getinput}`;
    }
    else if( t3.innerText===""){
        t3.innerText=` ${getinput}`;
    }
    else if( t4.innerText===""){
        t4.innerText=` ${getinput}`;
    }
    else if( t5.innerText===""){
        t5.innerText=` ${getinput}`;
    }
    else if(t6.innerText===""){
        t6.innerText=` ${getinput}`;
    }
    else{
        alert("All Task Space Alloted ! ! !")
    }
});


let removeinput="";
removetask.addEventListener("click",()=>{
    removeinput=Number(prompt("Which task you want to remove?(1/ 2/ 3/ 4/ 5/ 6) :"));
    if (removeinput===null || removeinput>6 || removeinput<0 ){
        alert("Enter a valid task number !!! ")
        removeinput;
    }
    else if(removeinput===1){
        t1.innerText="";
        t1.style.backgroundColor="";
        donecolor1.style.color="";
        notdonecolor1.style.color="";
        donevalue1.checked = false;
        notdonevalue1.checked = false;
    }
    else if(removeinput===2){
        t2.innerText="";
        t2.style.backgroundColor="";
        donecolor2.style.color="";
        notdonecolor2.style.color="";
        donevalue2.checked = false;
        notdonevalue2.checked = false;
    }
    else if(removeinput===3){
        t3.innerText="";
        t3.style.backgroundColor="";
        donecolor3.style.color="";
        notdonecolor3.style.color="";
        donevalue3.checked = false;
        notdonevalue3.checked = false;
    }
    else if(removeinput===4){
        t4.innerText="";
        t4.style.backgroundColor="";
        donecolor4.style.color="";
        notdonecolor4.style.color="";
        donevalue4.checked = false;
        notdonevalue4.checked = false;
    }
    else if(removeinput===5){
        t5.innerText="";
        t5.style.backgroundColor="";
        donecolor5.style.color="";
        notdonecolor5.style.color="";
        donevalue5.checked = false;
        notdonevalue5.checked = false;
    }
    else if(removeinput===6){
        t6.innerText="";
        t6.style.backgroundColor="";
        donecolor6.style.color="";
        notdonecolor6.style.color="";
        donevalue6.checked = false;
        notdonevalue6.checked = false;
    }
});
let donevalue1=document.querySelector('input[name="task1"][value="done"]');
let notdonevalue1=document.querySelector('input[name="task1"][value="notdone"]');
let donecolor1=document.querySelector("#task1 .done");
let donecolor2=document.querySelector("#task2 .done");
let donecolor3=document.querySelector("#task3 .done");
let donecolor4=document.querySelector("#task4 .done");
let donecolor5=document.querySelector("#task5 .done");
let donecolor6=document.querySelector("#task6 .done");

let notdonecolor1=document.querySelector("#task1 .notdone");
let notdonecolor2=document.querySelector("#task2 .notdone");
let notdonecolor3=document.querySelector("#task3 .notdone");
let notdonecolor4=document.querySelector("#task4 .notdone");
let notdonecolor5=document.querySelector("#task5 .notdone");
let notdonecolor6=document.querySelector("#task6 .notdone");

donevalue1.addEventListener("change",()=>{
    t1.style.backgroundColor="green";
    donecolor1.style.color="green";
    notdonecolor1.style.color="";
})
notdonevalue1.addEventListener("change",()=>{
    t1.style.backgroundColor="";
    donecolor1.style.color="";
    notdonecolor1.style.color="red";
})

let donevalue2=document.querySelector('input[name="task2"][value="done"]');
let notdonevalue2=document.querySelector('input[name="task2"][value="notdone"]');
donevalue2.addEventListener("change",()=>{
    t2.style.backgroundColor="green";
    donecolor2.style.color="green";
    notdonecolor2.style.color="";

})
notdonevalue2.addEventListener("change",()=>{
    t2.style.backgroundColor="";
    donecolor2.style.color="";
    notdonecolor2.style.color="red";
})

let donevalue3=document.querySelector('input[name="task3"][value="done"]');
let notdonevalue3=document.querySelector('input[name="task3"][value="notdone"]');
donevalue3.addEventListener("change",()=>{
    t3.style.backgroundColor="green";
    donecolor3.style.color="green";
    notdonecolor3.style.color="";
})
notdonevalue3.addEventListener("change",()=>{
    t3.style.backgroundColor="";
    donecolor3.style.color="";
    notdonecolor3.style.color="red";

})

let donevalue4=document.querySelector('input[name="task4"][value="done"]');
let notdonevalue4=document.querySelector('input[name="task4"][value="notdone"]');
donevalue4.addEventListener("change",()=>{
    t4.style.backgroundColor="green";
    donecolor4.style.color="green";
    notdonecolor4.style.color="";
})
notdonevalue4.addEventListener("change",()=>{
    t4.style.backgroundColor="";
    donecolor4.style.color="";
    notdonecolor4.style.color="red";
})

let donevalue5=document.querySelector('input[name="task5"][value="done"]');
let notdonevalue5=document.querySelector('input[name="task5"][value="notdone"]');
donevalue5.addEventListener("change",()=>{
    t5.style.backgroundColor="green";
    donecolor5.style.color="green";
    notdonecolor5.style.color="";
})
notdonevalue5.addEventListener("change",()=>{
    t5.style.backgroundColor="";
    donecolor5.style.color="";
    notdonecolor5.style.color="red";
})

let donevalue6=document.querySelector('input[name="task6"][value="done"]');
let notdonevalue6=document.querySelector('input[name="task6"][value="notdone"]');
donevalue6.addEventListener("change",()=>{
    t6.style.backgroundColor="green";
    donecolor6.style.color="green";
    notdonecolor6.style.color="";
})
notdonevalue6.addEventListener("change",()=>{
    t6.style.backgroundColor="";
    donecolor6.style.color="";
    notdonecolor6.style.color="red";
})

donevalue1.addEventListener("change", () => {

    if (t1.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue1.checked = false;
        t1.style.backgroundColor = "";
        donecolor1.style.color = "";
        
    }
    else{
        t1.style.backgroundColor = "green";
        donecolor1.style.color = "green";
        notdonecolor1.style.color = "";
    }
   
});

notdonevalue1.addEventListener("change",()=>{
    if(t1.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue1.checked=false;
        notdonecolor1.style.color="";
        t1.style.backgroundColor="";
        
    }
    else{
        t1.style.backgroundColor="";
        notdonecolor1.style.color="red";
    }
    
})

donevalue2.addEventListener("change", () => {

    if (t2.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue2.checked = false;
        t2.style.backgroundColor = "";
        donecolor2.style.color = "";
        
    }
    else{
        t2.style.backgroundColor = "green";
        donecolor2.style.color = "green";
        notdonecolor2.style.color = "";
    }
   
});

notdonevalue2.addEventListener("change",()=>{
    if(t2.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue2.checked=false;
        notdonecolor2.style.color="";
        t2.style.backgroundColor="";
        
    }
    else{
        t2.style.backgroundColor="";
        notdonecolor2.style.color="red";
    }
    
})

donevalue3.addEventListener("change", () => {

    if (t3.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue3.checked = false;
        t3.style.backgroundColor = "";
        donecolor3.style.color = "";
        
    }
    else{
        t3.style.backgroundColor = "green";
        donecolor3.style.color = "green";
        notdonecolor3.style.color = "";
    }
   
});

notdonevalue3.addEventListener("change",()=>{
    if(t3.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue3.checked=false;
        notdonecolor3.style.color="";
        t3.style.backgroundColor="";
        
    }
    else{
        t3.style.backgroundColor="";
        notdonecolor3.style.color="red";
    }
    
})

donevalue4.addEventListener("change", () => {

    if (t4.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue4.checked = false;
        t4.style.backgroundColor = "";
        donecolor4.style.color = "";
    
    }
    else{
        t4.style.backgroundColor = "green";
        donecolor4.style.color = "green";
        notdonecolor4.style.color = "";
    }
   
});

notdonevalue4.addEventListener("change",()=>{
    if(t4.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue4.checked=false;
        notdonecolor4.style.color="";
        t4.style.backgroundColor="";
        
    }
    else{
        t4.style.backgroundColor="";
        notdonecolor4.style.color="red";
    }
    
})

donevalue5.addEventListener("change", () => {

    if (t5.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue5.checked = false;
        t5.style.backgroundColor = "";
        donecolor5.style.color = "";
        
    }
    else{
        t5.style.backgroundColor = "green";
        donecolor5.style.color = "green";
        notdonecolor5.style.color = "";
    }
   
});

notdonevalue5.addEventListener("change",()=>{
    if(t5.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue5.checked=false;
        notdonecolor5.style.color="";
        t5.style.backgroundColor="";
        
    }
    else{
        t5.style.backgroundColor="";
        notdonecolor5.style.color="red";
    }
    
})

donevalue6.addEventListener("change", () => {

    if (t6.innerText === "") {
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        donevalue6.checked = false;
        t6.style.backgroundColor = "";
        donecolor6.style.color="";
    }
    else{
        t6.style.backgroundColor = "green";
        donecolor6.style.color = "green";
        notdonecolor6.style.color = "";
    }
   
});

notdonevalue6.addEventListener("change",()=>{
    if(t6.innerText===""){
        alert("There is no task !!\nAdd task first to use radio buttons !!");
        notdonevalue6.checked=false;
        notdonecolor6.style.color="";
        t6.style.backgroundColor="";
        
    }
    else{
        t6.style.backgroundColor="";
        notdonecolor6.style.color="red";
    }
    
})