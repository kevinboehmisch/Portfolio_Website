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
//-----------alternative zur Hover funktion (Verwendung bei Project) (einfügen der Klasse .active in CSS entsprechend und onclick="toggleProject(this)" in Html wo es angewendet werden soll)-----------------
function setupProjectClicks() {
    document.querySelectorAll('.project').forEach((project) => {
        // Handhabt Mausklicks
        project.addEventListener('click', function() {
            toggleProject(this);
        });

        // Handhabt Touch-Events
        project.addEventListener('touchstart', function(event) {
            event.preventDefault(); // Verhindert das Auslösen des Click-Events nach dem Touch-Event
            toggleProject(this);
        });
    });
}

function toggleProject(element) {
    if (window.innerWidth < 600) {
        const isActive = element.classList.contains('active');

        // Toggle-Logik, wie zuvor definiert
        document.querySelectorAll('.project').forEach((project) => {
            if (project !== element) {
                project.classList.remove('active');
            }
        });

        if (isActive) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    }
}

// Initialisiert das Setup nach dem Laden der Seite
document.addEventListener('DOMContentLoaded', setupProjectClicks);




