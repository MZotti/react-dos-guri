import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'

import '../../css/navbar.scss';

const pause = <FontAwesomeIcon icon={faPause} />

class Navbar extends React.Component {

    constructor(){
        super();

        this.state = {
            items:[
            { 
                "name": "Sprint",
                "link": "/sprint",
                "actived": true         
            },
            { 
                "name": "Sustentação", 
                "link": "/sustentacao",
                "actived": false       
            },
            { 
                "name": "BI", 
                "link": "/bi",
                "actived": false        
            },
            { 
                "name": "Infraestrutura", 
                "link": "/infraestrutura",
                "actived": false     
            }]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    { this.state.items.map(item => 
                        <li className={`nav-item ${ item.actived == true ? `active` : `` } `}>
                            <Link className="nav-link" to={item.link}>{item.name}</Link>
                        </li>
                    )}
                    <li className="nav-item no-border">
                        <span className="nav-link">{pause}</span>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navbar;