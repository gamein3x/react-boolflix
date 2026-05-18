// Import stili
import { Search } from 'react-bootstrap-icons';
import styles from '../styles/Searchbar.module.css';
// Import
import { useState } from 'react';

function Searchbar() {
    const [query, setQuery] = useState('');

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
                />
                <label
                    htmlFor="searchbar"
                    className={styles.searchLabel}>
                    Search here!
                </label>
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