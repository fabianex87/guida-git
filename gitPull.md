
master
 - feature/fabian 
 - feature/fab 

ho fatto diverse modifiche e ho pushato
per esempio ho fatto l'ultima modifica su feature/fab e l'ho mergiato al master

adesso switcho a feature/fabian 
e faccio git pull ma me ne sono reso conto che non si porta le ultime modifiche 
come se feature/fab non fosse stato creato dal master

e quindi ho dovuto fare
git pull origin master

quindi, quando crei un nuovo branch, lo devi specificare da quale branch lo vai 
a creare

git checkout -b feature/fabian          : branch creato senza un padre 
git checkout -b feature/nikyta master   : branche creato dal master


================================================================================
pull
per feature/fabian, devi fare sempre
git pull origin master (o develop)

per feature/nikyta, basta 
git pull  (non è vero, cioè non si è aggiornato al fare git pull)

in teoria dovrebbe aver bastato la creazione del branch dal master ma quanto 
pare non funziona
================================================================================

quello che bisogna fare è 
ti sposti in feature/fab
git pull --set-upstream origin master (no funziona con git pull -u origin master)
in questo caso -u non funziona per il pull
dopodiché ti basterà d'ora in poi fare solo git pull

poi fai le modifiche in feature/fabian, fai il push e dal master fai il merge
poi ti cambi a feature/fab con git checkout feature/fab
appena ti cambi, la console ti consiglia
Your branch is behind 'origin/master' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

  quindi basta fare solo "git pull" d'ora in poi

ma al fare il push, non ti permetterà perché ti consiglia:
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push origin HEAD:master

To push to the branch of the same name on the remote, use

    git push origin HEAD

quindi ho scelto il push sullo stesso branch
git push origin HEAD

f782b13..45f5f65  HEAD -> feature/fab

ma scegliendo quello ogni volta ti consiglia la stessa cosa
invece con 
 git push origin HEAD:master

ti appare 
 ti appare f82cd9d..d05482e  HEAD -> master

cioè hai già modificato direttamente su master, quindi non ce bisogno di fare il
merge

ma comunque scegliendo uno o l'altro, ti consiglia le due opzioni
git push origin HEAD:master
git push origin HEAD

quindi non si è risolto nulla con 
git pull --set-upstream origin master

