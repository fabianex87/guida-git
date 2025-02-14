
  problemi quando lavori su un branch diverso
  git reset HEAD^1: eliminare l'ultimo commit, ritorna al commit precedente
  poi git add .
  poi lo metti in uno stash: git stash --save "messaggio" o solamente git stash
  creo il branch (dovevo lavorare su questo branch)
  git checkout -b branchLavoro
  prendo quello che ce nello stash
  git stash pop
  git add .
  git commit -m "Modifica nuova."
  git push ma non esiste quel branch, allora non possiamo fare un pull ma solo push:
  git push -u origin branchLavoro: -u perché non esiste quel branch ed è il primo commit
  e al fare un pull Request da fork(hai copiato un repository di un altro), quel pull Request
  per default andra' a quel autore originario, quindi devi cambiare e fare il PR alla persona indicata (github)
 
