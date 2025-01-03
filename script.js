const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const pop = document.getElementById("popp")
const over = document.getElementById("ov")
const cont = document.getElementById("cont")

btn.addEventListener("click",()=>{
  pop.classList.add("open")
  cont.classList.add("none")
  
  
})


btn2.addEventListener("click",()=>{
  pop.classList.toggle("open")
  cont.classList.remove("none")
  
})
