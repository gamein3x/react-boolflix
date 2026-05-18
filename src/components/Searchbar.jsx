import { Search } from 'react-bootstrap-icons';

function Searchbar() {
    return (
        <div>
            <div>
                <label htmlFor="searchbar">Search here!</label>
                <input type="text" id="searchbar" />
            </div>
            <button className="btn">
                <Search />
            </button>
        </div>
    )
}
export default Searchbar