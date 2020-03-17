import React from 'react';

import { NavLink, Link } from 'react-router-dom';

class NavItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : this.props.name,
            link : this.props.link,
            active : this.props.active
        }
    }

    handleClick() {
        this.setState({ active: true })
    }

    render() {
        return (
            /*<li className={`nav-item${ this.state.active == true ? ` active` : `` }`}>
                <Link className="nav-link" to={this.state.link}>{this.state.name}</Link>
            </li>*/
            <NavLink className="nav-item" to={this.state.link}>
                <span className="nav-link">{this.state.name}</span>
            </NavLink>
        )
    }
}

export default NavItem;