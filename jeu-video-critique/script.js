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

// Exemple d'utilisation
// ajouterCritique('Nouveau jeu', '2023-10-01', 'Ce jeu est incroyable!');
