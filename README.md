# **Piccola Guida Git**

# Table of contents

1. [Creazione Progetto](#create-project)
2. [Reels](#reels)
3. [Git Clone](#git-clone)
4. [Git Pull](#git-pull)
5. [Git Push](#git-push)
6. [Git Merge](#git-merge)
7. [Rinominare un branch in remoto](#rename-branch)
8. [Aggiungere un submodule](#add-submodule)
9. [Altre Info](#altre-info)


<a id='create-project'></a>

## Creazione Progetto

### Due modi per creare iniziare con il repo in github o gitlab

#### I modo senza README.md

Crei il progetto in Github senza README.md
Ti sposti nella cartella di lavoro

* git init
* git remote add origin urlRepositoryGit
* git add -A (git add .)
* git commit -m "First commit."
* git checkout -b feature/fabian
* git push origin feature/fabian

#### II modo con README.md

Crei il progetto in Github con README.md
Ti sposti nella cartella di lavoro
* git init
* git clone urlRepositoryGit
* cd nameRepository
* git add -A (git add .)
* git commit -m "First commit."
* git checkout -b feature/fabian
* git push origin feature/fabian 


<a id='git-clone'></a>

## Git Clone
- git clone https://github.com/fabianex87/guida-git.git

<a id='git-pull'></a>

## Git Pull
- git pull: git pull dello stesso branch
- git pull origin fabian: git pull del branch fabian

<a id='git-push'></a>

## Git Push
quando crei il branch direttamente dal repository
- git push
quando crei il branch in locale
- git push -u origin fabian: con -u, solo fai la prima volta, dopo solo git push

Quando fai  -u, nel file di configurazione di git: config (locale) o .gitconfig (globale) viene aggiunto

[branch "fabian"]
	remote = origin
	merge = refs/heads/fabian

<a id='git-merge'></a>

## Git Merge

- git checkout develop
- git merge fabian 
- git push -u origin develop (git push)


<a id='rename-branch'></a>

## Rinominare un branch in remoto

1) Rinominare il branch localmente:
    Se ti trovi già sul branch che desideri rinominare, esegui:
    `
    git branch -m nuovo_nome
    `
    Se ti trovi su un altro branch, esegui:
    `
    git branch -m vecchio_nome nuovo_nome
    `
2) Eliminare il branch remoto con il vecchio nome:
    `
    git push origin --delete vecchio_nome
    `
3) Spingere il branch rinominato al repository remoto e impostare il tracking:
    `
    git push origin -u nuovo_nome
    `


<a id='add-submodule'></a>

## Aggiungere un submodule al progetto
```js
git submodule deinit -f ProjectTemplate
git rm -rf ProjectTemplate
rm -rf .git/modules/ProjectTemplate
rm -rf ProjectTemplate
git submodule add -b transformers-vlad https://gitlab.eurobet.it/game-developer/game-template.git ProjectTemplate
git submodule update --init --recursive
```

## Resume

| comando  | descrizione | Altre info |
| -------- | ------------- | ------------- |
| _git clone_ |	        fai una copia|
| _git pull_		|aggiornamento del tuo repository locale da remoto| [git pull](./gitPull.md)
| _git push_		| invio delle modifiche | [git push](./gitPush.md)
| _git reset HEAD~1_      | per annullare il commit senza aver fatto il push ma non ti rimane nella cronologia| [git reset](./gitReset.md)
| _git revert HEAD^^_   | per annullare il penultimo commit senza aver fatto il push ma ti rimane nella cronologia| [git revert](./gitRevert.md)
| _git commit --amend_ | per aggiungere un file allo stesso commit o modificare l'ultimo commit sempre e quando ancora non l'hai pushato|
| _git commit --amend -m "Nuovo commento"_| modifica/sostituice la descrizione dell'ultimo commit se ancora non è stato pushato|
| _git stash_     | per salvare le modifiche temporaneo per poi riprendero per continuare a lavorare|
| _git add ._    | mette tutto in staging area|
| _git add -A_   | simile a git add . ma in questo caso mette tutto anche al commit|
| _git commit_   | fa una specie di foto e lo mette nel header|
| _git log_      | lista di tutti i commit|
| _git checkout_ bbce9131012384ef15c2e6b...| ti permette di andare a quel commit|
| _git ignore_   | tutti i file che non saranno versionati (per es: token)|
| _git reflog_   | ti fa vedere tutti i movimenti (spostamenti di branch, tutte le operazioni di git etc etc) |
| _git branch -a_| per vedere tutti i branch locale e remoto|
| _git gc:_| per cancellare i commits dal disco duro|

ma per cancellare i commits ci devono essere alcune condizioni:
```
- non deve esistere nessun riferimento che lo segnali
- nessun branch
- nessun tag
- nessun input del reflog
```

<a id='altre-info'></a>

### Altre Info
** annullare l'ultimo commit senza aver pushato **
```
git reset HEAD~1 : te lo togli dallo stage
git reset HEAD^ = git reset HEAD~
Pluging Git: clic nei 3 puntini (View and More Actions)/Commit/Undo Last Commit: te lo inserisce nello stage
Pluging GitLens: commits; ti appare il nome del commit o fai clic nella freccia di indietro o clic destro "Undo commit"
```

** annullare dal penultimo commit senza aver pushato **
```
git reset HEAD~2 : annulla dal penultimo (due commit) committ e lo togli dallo stage
git reset HEAD^^ = git reset HEAD~2
Commit/Undo Last Commit: fai due volte
Pluging GitLens: commits; fai due volte "Undo commit"
```

### Elimina un ramo in locale e in remoto

**in locale** (nel tuo pc) : \
git branch --delete branch_name \
git branch -d branch_name

**in remoto** (nel tuo git): \
git push origin --delete branch_name \
git push origin -D branch_name
