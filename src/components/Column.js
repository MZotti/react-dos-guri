import React from 'react';

import Card from './Card';

class Column extends React.Component {

    render() {
        return (
            <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="column">
                    <h3 className={this.props.status}>{this.props.statusName}</h3>
                    {createCard(this.props)}
                    {createCard(this.props)}
                    {createCard(this.props)}          
                </div>
            </div>
        )
    }
  
}

function createCard(props){

    let area;
    let owner;
    let number;

    number = parseInt(0 + Math.random() * (6 - 0));
    area = returnArea(number);
    number = parseInt(0 + Math.random() * (6 - 0));
    owner = returnOwner(number);

    if(props.id === "0"){
        return (
            <Card 
                id="0666"
                title="Nome do chamado"
                requester={area.requester}
                owner={owner}
                department={area.department}
            />
        )
    }
}

function returnArea(area){
    switch(area){
        case 0:
            return {
                department : 'copies',
                requester : 'Andre Silva'
            };
            break;
        case 1:
            return {
                department : 'audiences',
                requester : 'Marucia Oliveira'
            };
            break;
        case 2:
            return {
                department : 'relationship',
                requester : 'Guilherme Goulart'
            };
            break;
        case 3:
            return {
                department : 'marketing',
                requester : 'Romulo Neto'
            };
            break;
        case 4:
            return {
                department : 'technology',
                requester : 'Tiago Fraga'
            };
            break;
        case 5:
            return {
                department : 'community',
                requester : 'Jorge Salati'
            };
            break;
        case 6:
            return {
                department : 'directorship',
                requester : 'Klaus Riffel'
            };
            break;
        default:
            return {
                department : 'directorship',
                requester : 'Klaus Riffel'
            };
            break;
    }
}

function returnOwner(owner){
    switch(owner){
        case 0:
            return 'Rafael Lopes';
            break;
        case 1:
            return 'Fernando Franco';
            break;
        case 2:
            return 'Lucas Pacheco';
            break;
        case 3:
            return 'Mikhael Bittelo';
            break;
        case 4:
            return 'Marcos Zotti';
            break;
        case 5:
            return 'Matheus Pires';
            break;
        default:
            return '0';
            break;
    }
}

export default Column;
