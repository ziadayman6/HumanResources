// some decelrations
var tbl=document.getElementById("tbl")
var search = document.getElementById("searchField")
var btn = document.getElementById("btn")
var chk = document.getElementById("check")
var del = document.getElementById("del")
var cancel = document.getElementById("Cancel")
var deleted = document.getElementById("deleted")

// Deleting user
tbl.addEventListener("click",function(event){
    var target = event.target

    if (target.classList.contains("icon-delete")){

        chk.style.display = "block"
        var userid = target.getAttribute("data-id")

        del.addEventListener("click",function(){
            chk.style.display = "none"
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function demo() {
                deleted.style.display="block"
                await sleep(2000)
                deleted.style.display="none"
                window.location.href = "/delete-user/" + userid + "/"
            }
            demo();
        }) 

        cancel.addEventListener("click",function(){
            chk.style.display = "none"
        })
        
    }
})

// Searching
btn.addEventListener('click', function() {
    var searchText = search.value.toLowerCase();

    var tableRows = document.querySelectorAll('#tbl tbody tr');      
    tableRows.forEach(function(row) { 
        var empName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            
        if (empName.indexOf(searchText) === -1) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    })
})