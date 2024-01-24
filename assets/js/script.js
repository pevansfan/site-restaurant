document.getElementById('voir-tout').addEventListener('click', function () {
    const galleryItems = document.querySelectorAll('.gallery-item.hidden');
    galleryItems.forEach(item => {
        item.classList.remove('hidden');
    });

    document.getElementById('voir-tout').style.display = 'none';
    document.getElementById('voir-moins').style.display = 'inline-block';
});

document.getElementById('voir-moins').addEventListener('click', function () {
    const galleryItems = document.querySelectorAll('.gallery-item:nth-child(n+3)');
    galleryItems.forEach(item => {
        item.classList.add('hidden');
    });

    document.getElementById('voir-moins').style.display = 'none';
    document.getElementById('voir-tout').style.display = 'inline-block';
});

function afficherMessage() {
    document.addEventListener('DOMContentLoaded', function () {
        // Récupérez le bouton par son ID
        var bouton = document.getElementById('monBouton');

        // Attachez un gestionnaire d'événement pour le clic sur le bouton
        bouton.addEventListener('click', function () {
            // Votre code JavaScript à exécuter après avoir cliqué sur le bouton
            alert("Votre réservation a bien été prise en compte !");
        });
    });

    document.getElementById('monFormulaire').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Vérifie si le champ texte est vide
        if (document.getElementById('name').value === '' && document.getElementById('time').value === '' && document.getElementById('date').value === '') {
            document.getElementById('messageErreur').style.display = 'block'; // Affiche le message d'erreur
        } else {
            document.getElementById('messageErreur').style.display = 'none'; // Cache le message d'erreur si le champ est rempli
            // Ici, vous pouvez soumettre le formulaire ou effectuer d'autres actions nécessaires
        }
    });

}

document.getElementById('time').addEventListener('input', function () {
    var heureSaisie = this.value;
    var heureOuverture = '11:00'; // Heure d'ouverture du restaurant
    var heureFermeture = '23:00'; // Heure de fermeture du restaurant

    // Convertir les heures en objets Date pour la comparaison
    var dateHeureSaisie = new Date('2000-01-01T' + heureSaisie + ':00');
    var dateHeureOuverture = new Date('2000-01-01T' + heureOuverture + ':00');
    var dateHeureFermeture = new Date('2000-01-01T' + heureFermeture + ':00');

    // Vérifier si l'heure saisie est dans les horaires d'ouverture
    if (dateHeureSaisie >= dateHeureOuverture && dateHeureSaisie <= dateHeureFermeture) {
        document.getElementById('messageErreur').style.display = 'none'; // Masquer le message d'erreur
        // Ici, vous pouvez soumettre le formulaire ou effectuer d'autres actions nécessaires
    } else {
        document.getElementById('messageErreur').style.display = 'block'; // Afficher le message d'erreur
    }
});












