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

Q09: 
commande: 

Q10: 
commande: 

Q11: 
commande: 

Q12: 
commande: 

Q13: 
commande: 

Q14: 
commande: 

Q15: 
commande: 
