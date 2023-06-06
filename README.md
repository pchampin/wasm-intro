# Web Assembly par l'exemple

Ce dépôt contient quelques exemples d'initiation à Web Assembly.

Dans chaque répertoire, un `Makefile` permet de compiler le fichier C en Web Assembly. Le fichier `ex1.html` peut ensuite être ouvert dans un navigateur pour tester le code ainsi compilé.

NB: le fichier HTML doit être accédé via HTTP, *pas* via une URL `file://` (sans quoi le code Web Assembly ne pourra pas être chargé). Pour lancer un serveur web local, une option est d'utiliser la commande `python3 -m http.server`.

## Pré-requis

Les `Makefile` supposent que les outils `clang` et `lld` sont disponibles.

Sous Ubuntu: `apt install clang lld`