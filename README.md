# Projet GameOn

### Contexte

GameOn, PME spécialisée dans les conférences et les concours de jeux, demande à terminer sa landing page après le départ
de leur développeur front-end.

### Objectif

Ajouter le code JavaScript manquant pour que le formulaire soit pleinement fonctionnel

### Contraintes 

Travailler sur un repo GitHub forké,
Utiliser VS Code,
Il n'y a aucune dépendance,
Utilisation seule de CSS, JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

### Maquette

[Lien vers la maquette Figma](https://www.figma.com/file/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106%3A630)

### Issues

[Lien vers les Issues du projet](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues)

1. TODO : fermer la modale

    Ajouter la fonctionnalité au bouton (x)

2. Implémenter entrées du formulaire

    (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
    (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

    Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
    Les données doivent être saisies correctement :
      1. Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
      2. Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
      3. L'adresse électronique est valide.
      4. Pour le nombre de concours, une valeur numérique est saisie.
      5. Un bouton radio est sélectionné.
      6. La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

3. Ajouter validation ou messages d'erreur

    Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    "Vous devez choisir une option."
    "Vous devez vérifier que vous acceptez les termes et conditions."
    "Vous devez entrer votre date de naissance."

4. Ajouter confirmation quand envoi réussi

    Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

5. Tests manuels

    Compatibilité avec les dernières versions de Chrome et Firefox, ainsi que dans les versions mobile et desktop.
    Corriger les erreurs d'affichage existantes.
    Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)
