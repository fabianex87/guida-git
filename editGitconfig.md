
  git init
  
  modifica del file gitconfig in locale e globale
  
  config       : file di configurazione locale
  .gitconfig   : file di configurazione globale
 
 
  
 
  ================================= LOCALE ====================================
  dal prompt dei comandi
  git config --local --edit
  altrimenti
  git config user.name "fabianex87"
  etc etc
 
  ================================= GLOBALE ===================================
  git config --global --edit : per editare il file di git
  altrimenti
  git config --global user.name "Walter Guillen"
  etc etc
 
  ================================ ATTENZIONE =================================
  a volte la configurazione in locale non può funzionare per esempio perché in
  quella globale c'era la variabile [https] o [http], quindi per risolvere
  momentaneamente ho eliminato il file .gitconfig
 
 

