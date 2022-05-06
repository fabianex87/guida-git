# **Piccola Guida Git**

## Due modi per creare iniziare con il rrepo in github o gitlab

### I modo senza README.md

Crei il progetto in Github senza README.md
Ti sposti nella cartella di lavoro

* git init
* git remote add origin urlRepositoryGit
* git add -A (git add .)
* git commit -m "First commit."
* git checkout -b feature/fabian
* git push origin feature/fabian

### II modo con README.md

Crei il progetto in Github con README.md
Ti sposti nella cartella di lavoro
* git init
* git clone urlRepositoryGit
* cd nameRepository
* git add -A (git add .)
* git commit -m "First commit."
* git checkout -b feature/fabian
* git push origin feature/fabian 


# **_Guida Git_**

  - [Git Clone](#git-clone)
  - [Git Pull](#git-pull)
  - [Git Push](#git-push)
  - [Git Merge](#git-merge)
  - [Altre Info](#altre-info)


## Git Clone
- git clone https://github.com/fabianex87/guida-git.git

## Git Pull
- git pull: git pull dello stesso branch
- git pull origin fabian: git pull del branch fabian


## Git Push
quando crei il branch direttamente dal repository
- git push
quando crei il branch in locale
- git push -u origin fabian: con -u, solo fai la prima volta, dopo solo git push

Quando fai  -u, nel file di configurazione di git: config (locale) o .gitconfig (globale) viene aggiunto

[branch "fabian"]
	remote = origin
	merge = refs/heads/fabian

## Git Merge

- git checkout master
- git merge fabian 
- git push -u origin develop (git push)

## Altre Info
```
* git clone	: fai una copia
* git pull		: aggiornamento del tuo repository locale da remoto
* git push		: invio delle modifiche 

* git add .    : mette tutto in staging area
* git add -A   : simile a git add . ma in questo caso mette tutto anche al commit
* git commit   : fa una specie di foto e lo mette nel header
* git log      : lista di tutti i commit
* git checkout bbce9131012384ef15c2e3af406b8000cf0465e1: ti permette di andare
* a quel commit
* git ignore   : tutti i file che non saranno versionati (per es: token)
```

### Altre Info
** annullare l'ultimo commit senza aver pushato **
```
git reset HEAD~ : te lo togli dallo stage
git reset HEAD^1 = git reset HEAD~
Pluging Git: clic nei 3 puntini (View and More Actions)/Commit/Undo Last Commit: te lo inserisce nello stage
Pluging GitLens: commits; ti appare il nome del commit o fai clic nella freccia di indietro o clic destro "Undo commit"
```

** annullare dal penultimo commit senza aver pushato **
```
git reset HEAD~2 : annulla dal penultimo (due commit) committ e lo togli dallo stage
git reset HEAD^2 = non funziona questo commando
Commit/Undo Last Commit: fai due volte
Pluging GitLens: commits; fai due volte "Undo commit"
```

### **_Elimina un ramo in locale e in remoto_**

**in locale** (nel tuo pc) : git branch -d branch_name

**in remoto** (nel tuo git): git push origin --delete branch_name