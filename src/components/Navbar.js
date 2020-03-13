import React from 'react';

import '../css/navbar.scss';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Sprint</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Sustentação</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">BI</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navbar;