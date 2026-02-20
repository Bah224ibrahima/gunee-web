// Fonction pour entrer dans l'application
function login() {
    document.getElementById('auth-page').style.display = 'none';
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('main-app').style.display = 'block';
}

// Navigation entre les pages
function showPage(pageId) {
    // Masquer toutes les sections
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Afficher la page cible
    document.getElementById('page-' + pageId).style.display = 'block';
    
    // Mettre à jour l'état visuel des boutons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + pageId).classList.add('active');
}

// Menu Paramètres / Langues
function toggleMenu() {
    const overlay = document.getElementById('language-overlay');
    const status = overlay.style.display;
    overlay.style.display = (status === 'block') ? 'none' : 'block';
}

function changeLang(lang) {
    alert("Langue modifiée : " + lang);
    toggleMenu();
}