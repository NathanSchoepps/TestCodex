// Exemple de JavaScript pour ajouter une critique dynamiquement
function ajouterCritique(titre, dateSortie, resume) {
    const section = document.getElementById('reviews');

    const article = document.createElement('article');
    article.className = 'review';

    const h3 = document.createElement('h3');
    h3.textContent = titre;
    article.appendChild(h3);

    const dateP = document.createElement('p');
    dateP.className = 'date';
    dateP.textContent = 'Date de sortie: ' + dateSortie;
    article.appendChild(dateP);

    const summaryP = document.createElement('p');
    summaryP.className = 'summary';
    summaryP.textContent = resume;
    article.appendChild(summaryP);

    section.appendChild(article);
}

// Ajout de quelques critiques pour démonstration
document.addEventListener('DOMContentLoaded', function () {
    ajouterCritique('The Legend of Zelda: Tears of the Kingdom', '2023-05-12',
        'Une suite épique qui repousse les limites du gameplay en monde ouvert.');
    ajouterCritique('Final Fantasy XVI', '2023-06-22',
        'Un retour aux sources avec un système de combat plus dynamique.');
});
