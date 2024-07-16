
function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




    const formulaire = document.getElementById("formulaire");
    const nombreInput = document.getElementById("nombre");
    const affichage = document.getElementById("affichage");

    const nombreATrouver = aleatoire(1, 10);
    console.log(nombreATrouver)
    let tentatives = 0;

    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();
        const valeur = parseInt(nombreInput.value);
        tentatives++;

        if (isNaN(valeur) || (valeur < 1 || valeur > 10)) {
            affichage.innerHTML = "Veuillez entrer un nombre valide entre 1 et 10.";
        } else {
            if (valeur === nombreATrouver) {

                affichage.innerHTML = `tu as trouvé le nombre ${nombreATrouver} en ${tentatives} tentatives !`;

                formulaire.insertAdjacentHTML('beforeend', '<button onclick="reloadPage()" style="padding: 10px 20px; border: none; background-color: #28a745; color: white; font-size: 16px; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;"> Rafrechir la page</button>');
                
            } else {
                affichage.innerHTML = `essaye encore. Tentative numéro ${tentatives}`;
            }
        }
        nombreInput.value = '';
    });

    function reloadPage(){
        location.reload()
    }
