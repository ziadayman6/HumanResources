const sub = document.getElementById("btn")
// all messages
const confirm = document.getElementById("confirm")
// all fields
const salaryField = document.getElementById("salaryField")
const nameField = document.getElementById("nmField")
const mailField = document.getElementById("mailField")
const addressField = document.getElementById("addressField")
const phoneField = document.getElementById("phoneField")
const IDField = document.getElementById("IDField")
const avVacDaysField = document.getElementById("avVacDaysField")
const vacDaysField = document.getElementById("vacDaysField")
const date = document.getElementById("date")
const single = document.getElementById("single")
const Married = document.getElementById("Married")
const Widowed = document.getElementById("Widowed")
const Divorced = document.getElementById("Divorced")
const male = document.getElementById("male")
const female = document.getElementById("female")
var radios = document.getElementsByName('gen');
var radios2 = document.getElementsByName('mart');
// sucess message
var sucess = document.getElementById("add")

//maximum date of birth must be lower than 60 years old
var today = new Date();
var minDate = new Date(today.getFullYear() - 60, today.getMonth(), today.getDate());
var minDateString = minDate.toISOString().split('T')[0];
date.setAttribute('min', minDateString);

// minimum date of birth must be older than 20 years old
var maxDate = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate());
var maxDateString = maxDate.toISOString().split('T')[0];
date.setAttribute('max', maxDateString);

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

document.getElementById("addform").addEventListener("submit",function(event){

        event.preventDefault()

        if(salaryField.value===""){
            salaryField.style.outline='2px solid red'
        }
        if(nameField.value===""){
            nameField.style.outline='2px solid red'
        }
        if(mailField.value===""){
                mailField.style.outline='2px solid red'
            }
        if(addressField.value===""){
            addressField.style.outline='2px solid red'
        }
        if(phoneField.value===""){
            phoneField.style.outline='2px solid red'
        }
        if(IDField.value===""){
            IDField.style.outline='2px solid red'
        }
        if(avVacDaysField.value===""){
            avVacDaysField.style.outline='2px solid red'
        }
        if(vacDaysField.value===""){
            vacDaysField.style.outline='2px solid red'
        }
        if(!single.checked && ! Married.checked&& ! Widowed.checked&&!Divorced.checked){
            martial.style.display='block'
        }
        if(!male.checked&& !female.checked){
            gender.style.display='block'
        }
        if(date.value===""){
            date.style.outline='2px solid red'
        }
        if(newarr.includes(parseInt(IDField.value))){
            IDField.style.outline = '2px solid red'
            confirm.style.display = 'block'
        }
        if(!newarr.includes(parseInt(IDField.value))){
            confirm.style.display = 'none'
        }
        if(date.value!="" &&(male.checked || female.checked) && 
        (single.checked||Married.checked||Widowed.checked||Divorced.checked) &&
        vacDaysField.value!="" &&avVacDaysField.value!=""&& IDField.value!=""&&phoneField.value!=""&&
        addressField.value!=""&&mailField.value!=""&&nameField.value!=""&& salaryField.value!=""&& !newarr.includes(parseInt(IDField.value)))
        {
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
    if(this == salaryField){
        salaryField.style.outline='none'
    }
    if(this ==nameField){
        nameField.style.outline='none'
    }
    if(mailField==this){
        mailField.style.outline='none'
        }
    if(addressField==this){
        addressField.style.outline='none'
    }
    if(phoneField==this){
        phoneField.style.outline='none'
    }
    if(IDField==this){
        IDField.style.outline='none'
        confirm.style.display='none'
    }
    if(avVacDaysField==this){
        avVacDaysField.style.outline='none'
    }
    if(vacDaysField==this){
        vacDaysField.style.outline='none'
    }
    if(date==this){
        date.style.outline='none'
    }
    if(single.checked || Married.checked || Widowed.checked||Divorced.checked){
        martial.style.display='none'
    }
    if(male.checked||female.checked){
        gender.style.display='none'
    }
}

function make_it_red(event){
    if(salaryField.value==="" && this ==salaryField){
        salaryField.style.outline='2px solid red'
    }
    if(nameField.value===""&& this == nameField){
        nameField.style.outline='2px solid red'
    }
    if(mailField.value==="" && this == mailField){
            mailField.style.outline='2px solid red'
        }
    if(addressField.value===""&& this == addressField){
        addressField.style.outline='2px solid red'
    }
    if(phoneField.value==="" && this ==phoneField){
        phoneField.style.outline='2px solid red'
    }
    if(IDField.value==="" && this ==IDField){
        IDField.style.outline='2px solid red'
    }
    if(avVacDaysField.value===""&& this ==avVacDaysField){
        avVacDaysField.style.outline='2px solid red'
    }
    if(vacDaysField.value==="" && this ==vacDaysField){
        vacDaysField.style.outline='2px solid red'
    }
    if(date.value==="" && this ==date){
        date.style.outline='2px solid red'
    }
}

//onclick on every field
salaryField.addEventListener("click" , press)
nameField.addEventListener("click" , press)
mailField.addEventListener("click" , press)
addressField.addEventListener("click" , press)
phoneField.addEventListener("click" , press)
IDField.addEventListener("click" , press)
avVacDaysField.addEventListener("click" , press)
vacDaysField.addEventListener("click" , press)
date.addEventListener("click" , press)
single.addEventListener("click" , press)
Married.addEventListener("click" , press)
Widowed .addEventListener("click" , press)
Divorced.addEventListener("click" , press)
male.addEventListener("click" , press)
female.addEventListener("click" , press)
//onblur
salaryField.addEventListener("blur" , make_it_red)
nameField.addEventListener("blur" , make_it_red)
mailField.addEventListener("blur" , make_it_red)
addressField.addEventListener("blur" ,make_it_red)
phoneField.addEventListener("blur" , make_it_red)
IDField.addEventListener("blur" , make_it_red)
avVacDaysField.addEventListener("blur" , make_it_red)
vacDaysField.addEventListener("blur" ,make_it_red)
date.addEventListener("blur" , make_it_red)