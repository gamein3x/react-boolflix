// Import
import { useState, useEffect } from 'react';

// Import stili
import { Search } from 'react-bootstrap-icons';
import styles from '../styles/Searchbar.module.css';

const API_key = import.meta.env.VITE_TMDB_API_KEY;

console.log(API_key);

function Searchbar() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    function searchAPI() {
        const API_searchQuery = `https://api.themoviedb.org/3/search/movie?query=${query}&language=it-IT`;
        fetch(API_searchQuery, {
            headers: {
                Authorization: `Bearer ${API_key}`
            }})
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella richiesta");
                };
                return response.json(); // Qui ho fatto prendere la response 
            })
            .then((data) => {
                setResults(data.results);
                console.log(results); // Se tutto funziona mi restituirà i risultati
            })
            .catch((error) => (console.log(error)))
            .finally(() => {
                setLoading(false);
                return console.log(loading ? "Loading completo" : "Loading non eseguito");
            });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query.trim() !== "") {
                searchAPI();
            } else {
                setResults([]); //
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

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
