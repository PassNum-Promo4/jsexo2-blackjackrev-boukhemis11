# Black Jack Revisité
Un black Jack revisité par la Passerelle Numérique

## Rendu attendu

Le rendu devra se composer de deux pages html distinctes comprenant les deux étapes du projet.  
* etape1.html
* etape2.html

L'ensemble des fonctions JavaScript seront stockées dans un fichier: blackJack.js  
Si besoin, un fichier css pourra être créé : master.css

L'arboressence de votre projet devra ressembler à ceci :

/   => correspond à la racine du projet  
|- etape1.html  
|- etape2.html  
|- js  
|&nbsp;&nbsp;|- blackJack.js  
|- ( css  
&nbsp;&nbsp;|- master.css ) => optionnel  

La partie graphique est géré avec Bootstrap (v3 ou v4)  

## Enoncé étape 1 :

Créer une mini application web comprenant une page de saisie de texte et un bouton de validation.
Il est demandé au joueur de saisir un chiffre entre 1 et 10.
Quand le bouton est actionné, un nombre aléatoire est généré compris entre 0 et 10.
Si le nombre généré aléatoirement est inférieur au nombre saisi par l'utilisateur, la page affichera un message de victoire
Sinon afficher un message de défaite.
En cas d'égalité, la machine gagne.

Les erreurs de saisies devront être gérées.

### Bonus : 
* Faire les statistiques des parties jouées (compter les défaites, les victoires et les chiffres saisies et générées).
* Inclure une notion de probabilité. Plus le chiffre est bas plus les chances de gagner sont faibles donc le gain de point pour le calcul du score est élevé. (soyez créatif !)

## Enoncé étape 2 :

Le joueur joue contre l'ordinateur.  
Il doit faire plus que l'ordinateur mais ne doit pas dépasser le chiffre 21.  
Quand le jeu commence l'ordinateur et le joueur recoivent un chiffre généré aléatoirement compris entre 1 et 11.  
Le chiffre de l'ordinateur est masqué.  
Le joueur à le choix entre:  
* Recevoir un nouveau chiffre qui viendra s'ajouter au sien (l'ordinateur fera de même)
* S'arreter et voir le chiffre de l'ordinateur.  

Si la somme des nombres du joueur dépasse 21 il a immédiatement perdu et un message s'affiche.  
Si le joueur obtient plus que l'ordinateur et moins que 21, il a gagné.  
Si l'ordinateur a plus que le joueur et moins de 21 la machine gagne.  

### Bonus :
* Transformer les chiffres en carte visuellement
* Laisser l'ordinateur la possibilité de choisir si il veut lui aussi une carte en plus ou non.
* Mettre en place un systeme de mise (Le joueur commence avec une réserve de jeton qu'il peut miser)
# jsexo2-blackjackrev-exercice1-boukhemis11
