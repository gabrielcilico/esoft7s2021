import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {

    return (
        <Router>
            <Link to="/hello">
                <button>Hello</button>
            </Link>
        </Router>
    )
}

export default Header;
