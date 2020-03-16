import React from 'react';

import { Link } from 'react-router-dom';

class NavItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : this.props.name,
            link : this.props.link,
            active : this.props.active
        }
    }

    render() {
        return (
            <li className={`nav-item ${ this.state.active == true ? `active` : `` } `}>
                <Link className="nav-link" to={this.state.link}>{this.state.name}</Link>
            </li>
        )
    }
}

export default NavItem;