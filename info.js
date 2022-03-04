/**
 * configurazione di git
 * git config --global user.name "nome"
 * git config --global user.email email@google.com
 * git config --list: ti appare tutta la configurazione
 *
 *
 * tre stati
 * 1) working directory (dove lavori)
 * git add
 * 2) staging area
 * git commit
 * 3) git directory (repository)
 * 1  -------->  2  -------->  3  ------> 1
 *    (git add)    (git commit)   (checkout)
 *
 * git init: per inizializzare con git
 * git add: per aggiungere
 * git status: per vedere in quale di quei tre stati stà il tuo git
 *
 * git push:
 * git pull:
 * git clone: fai una copia
 *
 * git add .    : mette tutto in staging area
 * git add -A   : simile a git add . ma in questo caso mette tutto anche al commit
 * git commit   : fa una specie di foto e lo mette nell'header
 * git log      : lista di tutti i commit
 * git checkout bbce9131012384ef15c2e3af406b8000cf0465e1: ti permette di andare
 * a quel commit
 * git ignore   : tutti i file che non saranno versionti (per es: token)
 *
 * =============================================================================
 * tutto ha soluzione in git tranne se digiti "git checkout ." (PERICOLOSO)
 * =============================================================================
 *
 * problemi che puoi riscontrare:
 * quando modifichi il master e non fai il commit e poi ti sposti ad un branch figlio develop
 * git branch nomeBranch: creazione del branch
 * git checkout nomeBranch: per spostarti a quel branch
 * git checkout -b nomeBranch: crei e ti sposti al branch contemporaneamente
 * git merge: unire le modifiche del branch1(develop) al branch2 (feature/fabian)
 * git checkout branch1 : ti sposti a develop
 * git merge branch2    : da develop fai il merge
 *
 * problemi al merge:
 * conflitto: lo mette insieme pero con conflitti
 * soluzione: fare un pull Request e chiede la revisione delle persone che ha lavorato per sapere con quale versione rimanere
 *
 * best pratices
 * quando finisci un lavoro/task (una volta fatto il merge), devi uccidere il branch, cancella il branch
 * git branch -D nomeBranch:
 *
 * repository:
 * local: il tuo pc
 * remote: github o gitlab
 *
 * prima di fare un push, fare sempre il pull
 * prima di lavorare, fai il pull e poi il push
 *
 * git rebase: ti fa risparmiare diversi passi
 *
 * fork: quando fai clic in fork (github) il repository te lo copi nel tuo repository
 *
 * ho fatto il lavoro su featureBranch e voglio metterlo in develop cioè fare il merge su develop
 * merge di featureBranch su develop ma non con il metodo della pagina
 * ma in questo modo:
 * merge in locale
 * mi sposto su develop
 * git merge featureBranch (copio quello di featureBranch in develop)
 * git push -u origin develop
 *
 * di solito origin si fa solo la prima volta, poi si aggancia da solo
 * ti può dare errore se non fai il pull
 * quando lavorano su una branch diverse persone, DEVI FARE IL PULL perché se nel
 * remoto ci sono dei cambi dovuto a che qualche persona ha fatto qualche modifica
 * e tu vuoi fare il push, ti darà problemi perché nel tuo pc (locale) non ce quello che ce nel remoto
 * a prescindere se fai il pull ti darà problemi di conflitto perché bisogna
 * decidere con quale modifica deve rimanere
 * git pull origin develop (mi porto i cambi)
 * appaiono i conflitti
 * apri VSCode, e scegli con quello che vuoi rimanere "use" o ce un commando che accetta tutto, Accept current change
 * poi git status
 * git add .
 * git commit -m "Risolve conflitto."
 * git push origin develop -u  o  git push -u origin develop
 *
 *
 */
