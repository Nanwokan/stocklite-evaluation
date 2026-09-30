# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: 

Q02: 
commande: 

Q03: 
commande: 

Q04: 
commande: 

Q05: 
commande: 

Q06: 
commande: 

Q07: 
commande: 

Q08: 
commande: 

Q09: Le chemin d'origine du fichier src/outils.js etait src/utils.js
commande: git log --follow --name-only -- src/outils.js

Q10: L'auteur a le plus de commits dans l'historique accessible depuis depart est Nathan Robin.
commande: git shortlog -sn || git log depart --pretty="%an" | sort

Q11: le commit pointé par v1.0.0 a été créé le 2026-03-24.
commande: git log -1 --format="%ad" --date=short v1.0.0

Q12: la première ligne de son message est "feat(cli): bannière de démarrage".
commande: git log --grep="Revert"

Q13: le SHA du commit de fusion qui a intégré la branche fix/valeur-totale est de5637a7c2ec4e7458525081fd1d1e9b237f0708.
commande: git log --oneline --grep="Merge" --no-abbrev

Q14: En se referrant a la première colonne de git diff --numstat, le nombre lignes ayant été ajoutées à src/stock.js entre v0.1.0 et v1.0.0 est 16.
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js

Q15: 
commande: 
