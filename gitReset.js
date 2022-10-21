/*

git reset viene utilizzato se hai fatto il commit senza aver pushato e non ti rimane nella cronologia
ci sono due tipi:

con hard: ti annulla il commit e non ti mantiene le modifiche che si è fatto sui files
te lo togli dallo stage e da changes (work directory)

senza hard: ti annulla il commi ma ti mantiene le modifiche che si è fatto sui files
te lo togli dallo stage ma non da changes (work directory)

l'ultimo
git reset --hard HEAD~1
git reset --hard HEAD^

git reset HEAD~1 : 
git reset HEAD^

penultimo
git reset --hard HEAD~2
git reset --hard HEAD^^

git reset HEAD~2 : 
git reset HEAD^^

e così successivamente
*/
