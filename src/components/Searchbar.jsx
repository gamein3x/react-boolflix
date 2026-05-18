import { Search } from 'react-bootstrap-icons';
import styles from '../styles/Searchbar.module.css';

function Searchbar() {
    return (
        <div className={styles.searchBox}>
            <div className='btn d-flex gap-1'>
                <input
                    type="text"
                    id="searchbar"
                    placeholder=" "
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