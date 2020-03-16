import React from 'react';

import LoadingBar from './LoadingBar';
import NavItem from './NavItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPause } from '@fortawesome/free-solid-svg-icons'

import '../../css/navbar.scss';

//const pause = <FontAwesomeIcon icon={faPause} />

class Navbar extends React.Component {

    constructor(){
        super();

        this.state = {
            items:[
            { 
                "name": "Sprint",
                "link": "/sprint",
                "active": true         
            },
            { 
                "name": "Sustentação", 
                "link": "/sustentacao",
                "active": false       
            },
            { 
                "name": "BI", 
                "link": "/bi",
                "active": false        
            },
            { 
                "name": "Infraestrutura", 
                "link": "/infraestrutura",
                "active": false     
            }]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <LoadingBar />
                <ul className="navbar-nav mr-auto">
                    { this.state.items.map(item => 
                        <NavItem 
                            name={ item.name }
                            link={ item.link }
                            active={ item.active }
                        />
                    )}
                    <li className="nav-item no-border">
                        <span className="nav-link">{}</span>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navbar;