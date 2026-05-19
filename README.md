# ESERCIZIO FINALE REACT (18-19/05/26): React Boolflix

## Diario di bordo

### [11:30 - 12:00]
- Per prima cosa, ho aperto il terminale.

**LISTA DEI COMANDI USATI PER APRIRE IL PROGETTO:**

```powershell
# PS C:\Users\@> pnpm dlx tiged classe154/react-starter-template react-boolflix
# Qui mi sono accorto di aver creato il file nella root - non va bene;
# Per mantenere tutto sul terminale, ho cercato soluzioni su come "copiare e incollare" un file dal terminale;

# PS C:\Users\@> MoveItem -Path "C:\Users\@\react-boolflix" -Destination "C:\Users\@\OneDrive\Desktop\Boolean_true\"
# Questa soluzione non ha funzionato;

# PS C:\Users\@> move "C:\Users\@\react-boolflix" "C:\Users\@\OneDrive\Desktop\Boolean_true\"
# Questa neanche, ma sembrava più promettente - mi rifiuto di togliere quello spazio nella cartella delle repo;

# PS C:\Users\@> ls
# PS C:\Users\@> move react-boolflix
# PS C:\Users\@> ls
# PS C:\Users\@> move "react-boolflix" "OneDrive/Desktop"
# PS C:\Users\@> cd "Onedrive/Desktop"
# PS C:\Users\@\Onedrive\Desktop> ls
# PS C:\Users\@\Onedrive\Desktop> move "react-boolflix" "Boolean true"
# PS C:\Users\@\Onedrive\Desktop> cd "Boolean true"
# PS C:\Users\@\Onedrive\Desktop\Boolean true> ls
# Funziona - procedo con il resto

# PS C:\Users\@\Onedrive\Desktop\Boolean true> code react-boolflix
# PS C:\Users\@\Onedrive\Desktop\Boolean true> cd react-boolflix
# PS C:\Users\@\Onedrive\Desktop\Boolean true\react-boolflix> pnpm install
# Nel vite terminal apro sul browser su "o" - tutto funziona.
```

### [12:00-12:15] 
Aggiornato README.md fino a questo punto; creato account su TMDB come primo step. Chiudo il terminale e vado su VSCODE.

### [12.15-12:55] 
Creata API KEY e sperimentato con le chiamate POSTMAN della chiave di TMDB; 
- Obiettivo per oggi: searchbar funzionante;
- Idea per il progetto: creare pagina di recensioni, tema comico, versione buona-standard-malvagia;

### [16:10-17:00]
Definito progetto e struttura. 
Non prenderò ispirazione per il layout o per le funzionalità da Netflix ma da Letterboxd, creando un sito di recensioni per i film.

    Obiettivi aggiuntivi:   
                            -Mettere una pagina "recensioni" (invece di pagina film) che deve contenere:
                                -Copertina del film;
                                -Recensione generata da claude;
                            -Creare bottone per modalità buona-standard-malvagia che determina il contesto della risposta;

    Route da creare:
    
    ---LAYOUT-- Contiene Header (contiene searchbar+pageindex) e footer (solo in modalità mb? forse)
                            -Homepage (index)
                                Contiene 
                                    -Main
                                        Contiene    
                                            -Lista Film sidescroller 1 (ultime uscite)
                                            -Lista Film sidescroller 2 (recensioni più alte)
                                            -Lista Film sidescroller 3 (recensioni più basse)
                            -About us
                            -Pagina recensioni
                            -404
                

### [10.15-11.00]
Riprendo dal lavoro (non documentato) di ieri notte: creato il componente per la searchbar e implementata prima useState con modulo CSS associato in /styles/ (per adesso solo per evidenziare);

Workflow da rispettare:
    Input →
    setQuery →
    debounce →
    fetch API →
    loading →
    results/error →
    render


