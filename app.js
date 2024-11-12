let caunt = 0;
const incbtn = document.querySelector(".inkriz")
const dicbtn = document.querySelector(".dekrimit")
incbtn.addEventListener("click",()=>{
    caunt++;
    document.querySelector("h1").textContent = caunt
})
dicbtn.addEventListener("click",()=>{
    caunt=0;
    document.querySelector("h1").textContent = caunt
})
