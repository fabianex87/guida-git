/** Per cambiare il testo di un commit
 *
 * git log: per vedere dove sta il commit che vuoi cambiare
 * per esempio il terzo commit
 * git rebase -i HEAD~3: ti fa vedere gli ultimi 3 commit
 * premere la lettera "a" della tastiera: serve per poter scrivere nel file
 * ti posizioni al commit che vuoi cambiare e cambi la scritta "pick" per reword
 * esc: per uscire dalla modalità di scrittura che si era entrato con la lettera "a"
 * scrivi :wq : serve per salvare e uscire
 * premi a:  per scrivere/modificare il testo del commit "testo cambiato del commit"
 * scrivi :wq : serve per salvare e uscire
 * FINITO ma è in locale, infine per cambiare in remoto
 * git push --force : per fare il push sul repository
 * FINO QUI HO PROVATO E FUNZIONA
 *
 *
 *
 * PER CAMBIARE IL TESTO DELL'ULTIMO COMMIT
 * git commit --amend -m "New message"
 * (git push --force repository-name branch-name): MA NON E' CONSIGLIABILE, perché può distruggere le modifiche che ha fatto su quel commit qualcun altro
 *
 * ALTERNATIVAMENTE
 * git push --force-with-lease repository-name branch-name :  se ce qualche modifica, il cambiamento che hai fatto non lo farà
 * git push --force-with-lease: non ce bisogno di mettere il repository e il nome
 *
 */
