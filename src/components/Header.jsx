import { NavLink } from "react-router";
import useTheme from "../hooks/useTheme";
import Searchbar from "./Searchbar";
import { useState, useEffect } from 'react';

function Header() {
    const { theme, toggleTheme } = useTheme();

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container">
                    <NavLink className="navbar-brand fw-semibold" to="/">MyApp</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Searchbar />
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item ms-2">
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={toggleTheme}
                                    aria-label="Cambia tema"
                                >
                                    {theme === 'light' ? '🌙' : '☀️'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {loading && <p>Loading...</p>}

            {results.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </header>

    );
}

export default Header;
