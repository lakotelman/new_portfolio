// Burger menu 


let toggle = document.getElementById("nav-button")
let menu = document.getElementById("navbar-default")
let active = false

toggle.addEventListener("click", function(e)
{
    console.log("clickety")
    menu.classList.remove("hidden")
    toggle.classList.add("hidden")
    active = true
}
)

document.addEventListener("click", function(e){ 
    if(e.target != menu && e.target != toggle && toggle.classList.contains("hidden")){ 
        menu.classList.add("hidden")
        console.log(e.target)
        toggle.classList.remove("hidden")
        active = false;
        console.log("clicked outside")
    }
})