/*

quando si crea il branch in locale e fai
git add . 
git commit -m "first commit"
git push

qua ti consiglia di fare
git push --set-upstream origin feature/fab = git push -u origin feature/fabian
ma ti chiederà una sola volta di fare git push --set-upstream origin branch, 
le prossime volte ti basterà fare git push

invece se fai
git push origin feature/fabian
ogni volta che fai git push, ti chiederà di fare git push --set-upstream
questo è dovuto a che bel file config, non viene creato la tua nuova branch

invece con -u viene creato
[branch "feature/fab"]
	remote = origin
	merge = refs/heads/feature/fabian

ed ecco il motivo che conviene fare -u (--set-upstream)
che lo vedi anche dal messaggio della console
"Branch 'feature/fab' set up to track remote branch 'feature/fab' from 'origin'."
*/
