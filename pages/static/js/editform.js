const sub = document.getElementById("btn")
const sucess = document.getElementById("add")
// all messages
const salary = document.getElementById("salary")
const mail = document.getElementById("Mail")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const avVacDays = document.getElementById("avVacDays")
const vacDays = document.getElementById("vacDays")
const gender = document.getElementById("gender")
const martial = document.getElementById("martial")
const dateMessage = document.getElementById("dateMessage")
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

window.addEventListener('DOMContentLoaded',(event) => {
    const urlparams = new URLSearchParams(window.location.search)
    const  employeeNAME = urlparams.get('empname')
    const employeeEMAIL = urlparams.get('empemail')
    const employeeADDRESS = urlparams.get('empaddress')
    const employeePHONENUMBER = urlparams.get('empphone')
    const employeeID = urlparams.get('empID')
    const employeeGENDER = urlparams.get('empgen')
    const employeeMARTIAL = urlparams.get('empmartial')
    const employeeDATE = urlparams.get('empdate')
    const employeeVAC = urlparams.get('empvac')
    const employeeAPPROVED = urlparams.get('empapproved')
    const employeeSALARY = urlparams.get('empsalary')
    const employeeunique = urlparams.get('empidd')

    document.getElementById('ID').value = employeeunique
    nameField.value = employeeNAME
    mailField.value = employeeEMAIL
    addressField.value = employeeADDRESS
    IDField.value = employeeID
    phoneField.value = employeePHONENUMBER
    
    // gender
    if(employeeGENDER == 'Male')
        male.checked = true
    else
        female.checked = true
    
    // martial
    if(employeeMARTIAL == 'Single')
        single.checked = true
    else if(employeeMARTIAL == 'Married')
        Married.checked = true
    else if(employeeMARTIAL == 'Widowed')
        Widowed.checked = true
    else if(employeeMARTIAL == 'Divorced')
        Divorced.checked = true

    var formatteddate = new Date(employeeDATE).toISOString().split('T')[0]
    date.value = formatteddate
    avVacDaysField.value = employeeVAC
    vacDaysField.value = employeeAPPROVED
    salaryField.value = employeeSALARY
})

document.getElementById('editform').addEventListener('submit',function(event){
    
    event.preventDefault()

    if(salaryField.value===""){
        salaryField.style.border='2px solid red'
        salary.style.display='block'
    }
    if(mailField.value===""){
            mailField.style.border='2px solid red'
            mail.style.display='block'
        }
    if(addressField.value===""){
        addressField.style.border='2px solid red'
        address.style.display='block'
    }
    if(phoneField.value===""){
        phoneField.style.border='2px solid red'
        phone.style.display='block'
    }
    if(avVacDaysField.value===""){
        avVacDaysField.style.border='2px solid red'
        avVacDays.style.display='block'
    }
    if(vacDaysField.value===""){
        vacDaysField.style.border='2px solid red'
        vacDays.style.display='block'
    }
    if(!single.checked && ! Married.checked&& ! Widowed.checked&&!Divorced.checked){
        martial.style.display='block'
    }
    if(!male.checked&& !female.checked){
        gender.style.display='block'
    }
    if(date.value===""){
        date.style.border='2px solid red'
        dateMessage.style.display='block'
    }
    if(date.value!="" &&(male.checked || female.checked) && 
    (single.checked||Married.checked||Widowed.checked||Divorced.checked) &&
    vacDaysField.value!="" &&avVacDaysField.value!=""&& IDField.value!=""&&phoneField.value!=""&&
    addressField.value!=""&&mailField.value!=""&&nameField.value!=""&& salaryField.value!="")
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
        salaryField.style.border='none'
        salary.style.display='none'
    }
    if(mailField==this){
        mailField.style.border='none'
        mail.style.display='none'
        }
    if(addressField==this){
        addressField.style.border='none'
        address.style.display='none'
    }
    if(phoneField==this){
        phoneField.style.border='none'
        phone.style.display='none'
    }
    if(avVacDaysField==this){
        avVacDaysField.style.border='none'
        avVacDays.style.display='none'
    }
    if(vacDaysField==this){
        vacDaysField.style.border='none'
        vacDays.style.display='none'
    }
    if(date==this){
        date.style.border='none'
        dateMessage.style.display='none'
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
        salaryField.style.border='2px solid red'
        salary.style.display='block'
    }
    if(mailField.value==="" && this == mailField){
            mailField.style.border='2px solid red'
            mail.style.display='block'
        }
    if(addressField.value===""&& this == addressField){
        addressField.style.border='2px solid red'
        address.style.display='block'
    }
    if(phoneField.value==="" && this ==phoneField){
        phoneField.style.border='2px solid red'
        phone.style.display='block'
    }
    if(avVacDaysField.value===""&& this ==avVacDaysField){
        avVacDaysField.style.border='2px solid red'
        avVacDays.style.display='block'
    }
    if(vacDaysField.value==="" && this ==vacDaysField){
        vacDaysField.style.border='2px solid red'
        vacDays.style.display='block'
    }
    if(date.value==="" && this ==date){
        date.style.border='2px solid red'
        dateMessage.style.display='block'
    }
}
//onclick on every field
salaryField.addEventListener("click" , press)
mailField.addEventListener("click" , press)
addressField.addEventListener("click" , press)
phoneField.addEventListener("click" , press)
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
mailField.addEventListener("blur" , make_it_red)
addressField.addEventListener("blur" ,make_it_red)
phoneField.addEventListener("blur" , make_it_red)
avVacDaysField.addEventListener("blur" , make_it_red)
vacDaysField.addEventListener("blur" ,make_it_red)
date.addEventListener("blur" , make_it_red)