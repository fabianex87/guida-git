
git revert viene utilizzato se hai fatto il commit senza aver pushato e ti rimane nella cronologia


l'ultimo
git revert HEAD~1
git revert HEAD^

penultimo
git revert HEAD~2
git revert HEAD^^

git revert <commit_da_revertare>

e così successivamente

