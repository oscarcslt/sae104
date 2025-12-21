// Interaction Blason
function highlightBlason() {
    const el = document.getElementById('blasonContainer');
    if(el) { el.style.transform = "scale(1.05)"; el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)"; }
}

function resetBlason() {
    const el = document.getElementById('blasonContainer');
    if(el) { el.style.transform = "scale(1)"; el.style.boxShadow = "none"; }
}

// Animation Timeline
function animateTimeline(element) {
    element.style.transition = "all 0.5s ease";
    element.style.backgroundColor = "#cfe2ff";
    element.style.padding = "15px";
    element.style.borderRadius = "10px";
}

// Fonction Afficher/Masquer générique
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.style.display = (section.style.display === "none") ? "block" : "none";
    }
}