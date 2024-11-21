// - - - - - NAV BAR FUNCTION - - - - -

function menuFunction() {
    var menuButton = document.getElementById("myNavMenu") // variable for class w/ id "myNavMenu" from HTML (for drop down menu)

    if(menuButton.className === "nav-menu"){ // if className is nav-menu
        menuButton.className += "responsive";
    } else {
        menuButton.className = "nav-menu";
    }
}