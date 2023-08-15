const sub = document.getElementById("btn")
var sucess = document.getElementById("add")
const confirm = document.getElementById("confirm")
// all fields
const nameField = document.getElementById("nmField")
const mailField = document.getElementById("mailField")
const IDField = document.getElementById("IDField")
const vacDaysField = document.getElementById("vacDaysField")
const reasonField = document.getElementById("reasonField")
const StartingField = document.getElementById("StartingField")
const endingField = document.getElementById("endingField")

// minimum date of request must be the current day 
var today = new Date().toISOString().split('T')[0];
StartingField.setAttribute('min',today)

// array of ids of employee use it when checkk if the added user id available in the database or not  
var arr = document.getElementById("arr")
var arrinfo = arr.innerHTML
var newarr = []
var array = [
    arrinfo
];
var temp = ""
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        var char = (array[i])[j]
        if (char === " " || char === "\n") {
            if(temp !== ""){
                newarr.push(parseInt(temp));
                temp = ""
            }
        } else if(!isNaN(parseInt(char))){
            temp += char
        }       
    }
    if(temp !== ""){
        newarr.push(parseInt(temp))
    }
}

document.getElementById("requestform").addEventListener("submit",function(event){
    event.preventDefault()
    if(nameField.value===""){
        nameField.style.outline='2px solid red'
    }
    if(mailField.value===""){
        mailField.style.outline='2px solid red'
    }
    if(IDField.value===""){
        IDField.style.outline='2px solid red'
    }
    if(vacDaysField.value===""){
        vacDaysField.style.outline='2px solid red'
    }
    if(reasonField.value===""){
        reasonField.style.outline='2px solid red'
    }
    if(StartingField.value===""){
        StartingField.style.outline='2px solid red'
    }
    if(!newarr.includes(parseInt(IDField.value))){
        IDField.style.outline = '2px solid red'
        confirm.style.display = 'block'
    }
    if(newarr.includes(parseInt(IDField.value))){
        confirm.style.display = 'none'
    }
    if(nameField.value!=""&&mailField.value!=""&&IDField.value!=""&&vacDaysField.value!=""&&reasonField.value!=""&&StartingField.value!="" && newarr.includes(parseInt(IDField.value))){
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function demo() {
            sucess.style.display="block"
                await sleep(2000)
                sucess.style.display="none"
            event.target.submit()
        }
        demo();
    }
    else
        return false
})

function press(event){
    if(this ==nameField){
        nameField.style.outline='none'
    }
    if(mailField==this){
        mailField.style.outline='none'
    }
    if(IDField==this){
        IDField.style.outline='none'
        confirm.style.display='none'
    }
    if(vacDaysField==this){
        vacDaysField.style.outline='none'
    }
    if(reasonField==this){
        reasonField.style.outline='none'
    }
    if(StartingField==this){
        StartingField.style.outline='none'
    }
}

function make_it_red(event){
    if(nameField.value===""&& this == nameField){
        nameField.style.outline='2px solid red'
    }
    if(mailField.value==="" && this == mailField){
            mailField.style.outline='2px solid red'
    }
    if(IDField.value==="" && this ==IDField){
        IDField.style.outline='2px solid red'
    }
    if(vacDaysField.value==="" && this ==vacDaysField){
        vacDaysField.style.outline='2px solid red'
    }
    if(reasonField.value==="" && this == reasonField){
        reasonField.style.outline='2px solid red'
    }
    if(StartingField.value===""&& this == StartingField){
        StartingField.style.outline='2px solid red'
    }
    else{
        var result = new Date(StartingField.value)
        result.setDate(result.getDate()+parseInt(vacDaysField.value))
        var year = result.getFullYear()
        var month = 1 +result.getMonth()
        var day =  result.getDate()
        if(month<10){
            month = "0"+month
        }
        if(day<10){
            day="0" + day
        }
        endingField.value = year+"-"+month+"-"+day
    }
}
//onclick on every field
nameField.addEventListener("click" , press)
mailField.addEventListener("click" , press)
IDField.addEventListener("click" , press)
vacDaysField.addEventListener("click" , press)
reasonField.addEventListener("click" , press)
StartingField.addEventListener("click" , press)
//onblur
nameField.addEventListener("blur" , make_it_red)
mailField.addEventListener("blur" , make_it_red)
IDField.addEventListener("blur" , make_it_red)
vacDaysField.addEventListener("blur" ,make_it_red)
reasonField.addEventListener("blur" ,make_it_red)
StartingField.addEventListener("blur" ,make_it_red)