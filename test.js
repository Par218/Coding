//when user clicks on notification icon, toggle between hiding and showing content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = this.document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
