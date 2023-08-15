var tbl=document.getElementById("tbl")
var chk = document.getElementById("check")
var del = document.getElementById("del")
var cancel = document.getElementById("Cancel")
var rejectedMessage = document.getElementById("Reject")
var acceptedMessage = document.getElementById("add")

// deleting request
tbl.addEventListener("click",function(event){

    var target = event.target
    var reqID = target.getAttribute("data-id")
    if(target.classList.contains("yes-icon")){
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function demo() {
            acceptedMessage.style.display="block"
            await sleep(2000)
            acceptedMessage.style.display="none"
            window.location.href = "/delete-req/" + reqID + "/"
        }
        demo();
    }
    else if(target.classList.contains("no-icon")){
        chk.style.display = "block"
        cancel.addEventListener("click",function(){
            chk.style.display = "none"
        })
        del.addEventListener("click",function(){
            chk.style.display = "none"
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function demo() {
                rejectedMessage.style.display="block"
                await sleep(2000)
                rejectedMessage.style.display="none"
                window.location.href = "/delete-req/" + reqID + "/"
            }
            demo();
        })
    }
    
})