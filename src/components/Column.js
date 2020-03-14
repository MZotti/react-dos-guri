import React from 'react';

import Card from './Card';

class Column extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="column">
                    <h3 className={this.props.status}>{this.props.statusName}</h3>
                    { this.props.cards ? this.props.cards.map(card => 
                        <Card 
                        id={card.id}
                        title={card.titulo}
                        requester={card.usuario_abertura}
                        owner={card.usuario_dono}
                        department={returnArea(card.setor)}
                    />
                        ) : ''}
                </div>
            </div>
        )
    }
  
}

function createCard(data){

   /* let area;
    let owner;
    let number;

    number = parseInt(0 + Math.random() * (7 - 0));
    area = returnArea(number);
    number = parseInt(0 + Math.random() * (6 - 0));
    owner = returnOwner(number);*/
    if(data)
        return (
            <Card 
                id={data.id}
                title={data.titulo}
                requester={data.usuario_abertura}
                owner={data.usuario_dono}
                department={returnArea(data.setor)}
            />
        )
}

function returnArea(area){
    switch(area){
        case 0:
        case 7:
            return 'copies';
            break;
        case 1:
            return 'audiences';
            break;
        case 2:
        case 10:
            return 'relationship';
            break;
        case 3:
            return 'marketing';
            break;
        case 4:
            return 'technology';
            break;
        case 5:
            return 'community';
            break;
        case 6:
            return 'directorship';
            break;
        default:
            return 'directorship';
            break;
    }
}
/*
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
}*/

export default Column;
