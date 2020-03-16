import React from 'react';
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
                "actived": true         
            },
            { 
                "name": "Sustentação", 
                "actived": false       
            },
            { 
                "name": "BI", 
                "actived": false        
            },
            { 
                "name": "Infraestrutura", 
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
                            <a className="nav-link" href="#">{item.name}</a>
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