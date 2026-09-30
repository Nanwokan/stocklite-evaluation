# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->
Q01: 32
commande: git rev-list --count depart


Q02: Sarah Benali
commande: >git blame -L 7 src/format.js

Q03: commit 4459c91715f9b1c97cf4776ad2e5afbdb3aa7051 (HEAD)
commande: git bisect start, git bisect good 6547cc58050bd6455d7d025a440e3bca05babe49, git bisect bad 015939e6b9106643797934b3b1f9a1d95a412c13

Q04: sk_live_01de6ba0c9f4d846
commande: git log --all --oneline -- .env, git show 11544ab

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git log --all --oneline -- .env, git show 11544ab

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: essai-perf
commande: git tag -l --format="%(refname:short) %(objecttype)"

Q08: /experiment/cache-redis
commande: git branch -r --no-merged main, git merge-base origin/experiment/cache-redis v1.0.0, git show --oneline --decorate 6547cc58050bd6455d7d025a440e3bca05babe49

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
