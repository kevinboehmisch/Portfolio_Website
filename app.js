//-------------------------------slide In Effekt, beim Scrollen (hinzufügen der Klasse hidden in Html)--------------------------
document.addEventListener('DOMContentLoaded', () => {
   

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

//-------------------------------navigieren in der About Section, zwischen den einzelnen Kategorien-------------------------
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//---------------------------------------------sidebar Menu für Smartphones------------------------------------------------
var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.left= "0";
}
function closemenu(){
    sidemenu.style.left= "-400px";
}

