/* Projet HTML : LoL EsQuiz
Professeur: Maha NACEUR
Mai - Juin / 2024

Par Sébastien XU et Maxence DURAND */


// Pour la page HOME
document.addEventListener("DOMContentLoaded", function() {
    const tournamentTitles = document.querySelectorAll('.tournament-title');
    
    tournamentTitles.forEach(title => {
        title.addEventListener('click', function() {
            const info = this.nextElementSibling;
            const openInfo = document.querySelector('.tournament-info.show');
            
            // Masquer les autres informations
            if (openInfo && openInfo !== info) {
                openInfo.classList.remove('show');
                openInfo.style.display = 'none';
            }
            
            // Afficher ou masquer les informations actuelles
            if (info.classList.contains('show')) {
                info.classList.remove('show');
                info.style.display = 'none';
            } else {
                info.classList.add('show');
                info.style.display = 'block';
            }
        });
    });
});


function showPlayers(region) {
    const allPlayers = document.querySelectorAll('.players');
    
    allPlayers.forEach(player => {
        if (player.id === region) {
            // Vérifie si la région est déjà visible
            const isVisible = !player.classList.contains('hidden');
            
            // Cache tous les joueurs, y compris ceux de la région cliquée si elle est déjà visible
            allPlayers.forEach(p => p.classList.add('hidden'));
            
            // Si la région n'était pas déjà visible, alors la montre maintenant
            if (!isVisible) {
                player.classList.remove('hidden');
            }
        } else {
            player.classList.add('hidden'); // Cache tous les autres éléments
        }
    });
}


// Pour le quiz

let score = 0; 

function checkAnswers() {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    const answers = {
        q1: 'Lee Sang-hyeok',
        q2: 'ADC',
        q3: 'Luka Perković',
        q4: 'Jian Zihao',
        q5: 'Rasmus Winther',
        q6: 'Mid',
        q7: 'Carl Martin Erik Larsson',
        q8: 'Lee Sang-hyeok',
        q9: 'Marcin Jankowski',
        q10: 'Song Eui-jin',
        q11: 'Kim Dong-ha',
        q12: 'Zhuo Ding',
        q13: 'LEC',
        q14: '3',
        q15: '28',

    };

    // Calculer le score en fonction des réponses données
    score = 0; // Réinitialiser le score à zéro à chaque fois que checkAnswers est appelée
    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = quizForm.elements[question].value;
        if (userAnswer === answer) {
            score++;
        }
    }

    resultDiv.textContent = `Vous avez ${score} sur 5 bonnes réponses.`;
    resultDiv.style.display = 'block';
}

function resetForm() {
    // Sélectionner tous les boutons radio dans le formulaire
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    // Décocher tous les boutons radio
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });
}

function setDifficulty(difficulty) {
    
    score = 0;

   
    var questions = document.querySelectorAll('.question');
    
    // Parcourt toutes les questions pour gérer leur affichage en fonction de l'ID de difficulté
    questions.forEach(function(question) {
        // Vérifie si l'ID de la question correspond à la difficulté choisie
        if (question.id === difficulty) {
            question.style.display = 'block'; // Affiche la question
        } else {
            question.style.display = 'none'; // Cache la question si elle ne correspond pas à la difficulté choisie
        }
    });

    // Réinitialiser l'affichage du résultat
    document.getElementById('result').style.display = 'none';

    resetForm();
    
}


// Formulaire à propos
function success() {
    // Récupération des valeurs des champs
    var nom = document.getElementById('nom').value.trim();
    var prenom = document.getElementById('prenom').value.trim();
    var pseudo = document.getElementById('pseudo').value.trim();
    var dateNaissance = document.getElementById('datenaissance').value.trim();
    var email = document.getElementById('mail').value.trim();
    var commentaire = document.getElementById('commentaire').value.trim();

    // Vérification si tous les champs sont remplis
    if (nom !== '' && prenom !== '' && pseudo !== '' && dateNaissance !== '' && email !== '' && commentaire !== '') {
        alert("Formulaire envoyé avec succès !");
    }
}
