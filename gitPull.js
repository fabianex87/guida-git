/*

master
 - feature/fabian 
 - feature/fab 

ho fatto diverse modifiche e ho pushato
per esmepio ho fatto l'ultima modiifca su feature/fab e l'ho mergiato al master

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

================================================================================
*/
