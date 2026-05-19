// Import
import { useState, useEffect } from 'react';

// Import stili
import { Search } from 'react-bootstrap-icons';
import styles from '../styles/Searchbar.module.css';


function Searchbar() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const API_urlAndquery = `https://api.themoviedb.org/3/search/movie/${query}`;

    function searchAPI() {
        fetch(API_urlAndquery)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella richiesta");
                };
                return response.json();
            })
            .catch((error) => (console.log(error)))
            .finally(() => {
                setLoading(false);
                return console.log(loading ?"Loading completo" : "Loading fallito");
            });
    };

    const handleInputChange = (input) => {
        setQuery(input.target.value);  // aggiorna lo stato a ogni tasto
    };

    return (
        <div className={styles.searchBox}>
            <div className='btn d-flex gap-1'>
                <input
                    type="text"
                    id="searchbar"
                    placeholder=" "
                    value={query}
                    onChange={handleInputChange}
                    className={styles.searchLabel} />
            </div>
            <div>
                <button className="btn">
                    <Search />
                </button>
            </div>
        </div>
    )
}

export default Searchbar;
