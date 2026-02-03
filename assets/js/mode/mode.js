const mode=document.querySelector("#mode");
mode.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    document.header.classList.toggle("dark");
    document.footer.classList.toogle("dark")
})