import React from 'react';

import Card from './Card';

import SmoothRender from 'react-smooth-render';

class Column extends React.Component {

    constructor(props){
        super(props);
        this.state =  {
            hidden: false 
        }
    }

    componentDidMount(){
        const { hidden } = this.state
        this.setState({ hidden: !hidden })
    }

    render() {
        return (
                <div className="col-lg-2 col-md-6 col-sm-12 col-less-padding">
                    <div className="column">
                        <h3 className={this.props.status}>{this.props.statusName}</h3>
                        { this.props.cards ? this.props.cards.map(card => 
                            <Card 
                                id={card.id}
                                title={card.titulo}
                                requester={card.usuario_abertura}
                                owner={card.usuario_dono}
                                department={returnArea(card.setor)}
                                sla={card.previsao_hora ? card.previsao_hora : card.datahora_previsao}
                            />
                            ) : ''}
                    </div>
                </div>
        )
    }
  
}

function returnArea(area){
    switch(area){
        case 0:
        case 10:
            return 'relationship';
            break;
        case 1:
            return 'audiences';
            break;
        case 2:
        case 4:
        case 7:
            return 'copies';
            break;
        case 3:
            return 'selling';
            break;
        case 5:
            return 'directorship';
            break;
        case 6:
            return 'financial';
            break;
        case 9:
            return 'human-resources';
            break;
        case 11:
            return 'diligencies';
            break;
        case 12:
            return 'technology';
            break;
        case 13:
            return 'marketing';
            break;
        case 14:
            return 'community';
            break;
        case 15:
            return 'products';
            break;
        case 16:
            return 'projects';
            break;
        default:
            return 'default';
            break;
    }
}

export default Column;
