// some decelrations
const user = document.getElementById("Username")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")

// functions
document.getElementById('loginform').addEventListener('submit',function(event){
    event.preventDefault()
    if(user.value == "" || user.value != "Admin")
    {
        user.style.outline = "2px solid red"
    }
    if(pass.value == "" || pass.value != "Admin")
    {
        pass.style.outline = "2px solid red"
    }
    if(pass.value == "Admin" && user.value == "Admin")
    {
        event.target.submit()
    }
})

function removeMark(event){
    if(this == user){
        user.style.outline = "none"
    }
    if(this == pass){
        pass.style.outline = "none"
    }
}

//actions
user.addEventListener("click" , removeMark)
pass.addEventListener("click" , removeMark)
