const menu = document.querySelector("#menu")
const h1Menu = document.querySelector("#h1Menu")
const h1Home = document.querySelector("#h1Home")
const h1Pro = document.querySelector("#h1Pro")
const h1Set = document.querySelector("#h1Set")
const h1Me = document.querySelector("#h1Me")
const h1Lo = document.querySelector("#h1Lo")



let isClose = false

menu.addEventListener("click", () => {
    isClose = !isClose

    if(isClose){
    h1Menu.classList.add("hidden")
    h1Home.classList.add("hidden")
    h1Pro.classList.add("hidden")
    h1Set.classList.add("hidden")
    h1Me.classList.add("hidden")
    h1Lo.classList.add("hidden")

    }
    else{
    h1Menu.classList.remove("hidden")
    h1Home.classList.remove("hidden")
    h1Pro.classList.remove("hidden")
    h1Set.classList.remove("hidden")
    h1Me.classList.remove("hidden")
    h1Lo.classList.remove("hidden")
  

    }

    
})