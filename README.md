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
    fetch API →
    debounce →   
    loading →
    results/error →
    render

### [11:15-13:10]
Maneggiato la funzione per la fetch finchè non mi ha soddisfatto e smesso di restituire errori; studiato il funzionamento di una searchbar e implementato valori con useState e useEffect correttamente.

L'idea è di far apparire il nome (name) dei primi 10 film come barra sotto, poi portare alla pagina recensione. A quel punto considero la searchbar pronta e vado avanti.

Rubato questo modale carino dal sito della documentazione di tmdb da usare dopo:
```
<mdn-search-modal id="search"><template shadowrootmode="open"><!---->
      <dialog closedby="any" open="">
        <form method="get" action="/en-US/search">
          <input type="search" name="q" autocomplete="off" autofocus="" placeholder="Search" aria-label="Search">
        </form>
        <mdn-button class="close" variant="plain" icon-only=""><template shadowrootmode="open"><!---->
        <button class="button" part="button" aria-labelledby="label-mhbfkjdpigp" data-variant="plain">
          <!--?lit$015333916$--><!----><span class="icon" part="icon"><!--?lit$015333916$--><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg></span><!----><!---->
    <span class="label" part="label" id="label-mhbfkjdpigp" hidden=""><!--?lit$015333916$--><slot></slot></span>
  <!---->
        </button>
      </template><!--?lit$015333916$-->Exit search</mdn-button>
        <!--?lit$015333916$-->
        <ul>
          <!--?lit$015333916$-->
          <!--?lit$015333916$-->
        </ul>
      </dialog>
    </template></mdn-search-modal>
```

### [13.10-13.55]
Map e loading state gestite momentaneamente in Header per la searchbar.
Migliorata ulteriormente la fetch.

Non riesco in nessun modo a far funzionare la querystring con la chiave API, anche se il file .env è collegato correttamente. Boh. 
=> Era semplicemente il modo in cui avevo richiesto la chiave all'API, l'ho corretto guardando la documentazione TMBD e adesso restituisce i risultati correttamente. Posso mangiare.