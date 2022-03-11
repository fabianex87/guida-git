# _Guida Git_

Comandi di git

# **Una piccola guida di Git**

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

ti sposti nella cartella creata al fare il clone,
fai le tue modifiche
* git add -A (git add .)
* git commit -m "First commit."
* git checkout -b feature/fabian
* git push origin feature/fabian

### **_Elimina un ramo in locale e in remoto_**

**in locale** (nel tuo pc) : git branch -d branch_name

**in remoto** (nel tuo git): git push origin --delete branch_name

# Guida Git

  - [Git Push](#git-push)
  - [Git Pull](#git-pull)
  - [Git Merge](#git-merge)

## Git Pull
- git pull: git pull dello stesso branch \
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
