// Function to show and hide the popup
function togglePopup() {
    var width = $(window).width(); 

    if (width >= 820) {
        $(".content-hide").toggle();
    }
    else {    
        alert("Redirigiendo a carrito de compra...")
    }

}


/**  Click para el menu  **/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
     const nav = document.getElementById(navId);

     if (toggle && nav) {
         toggle.addEventListener('click', () => {
             nav.classList.toggle('show')
         })

     }
}

showMenu('menu-hamb-toggle', 'hamburgerMenu');

