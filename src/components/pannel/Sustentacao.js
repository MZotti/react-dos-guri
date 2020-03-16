import React from 'react';

import Column from './Column';

import axios from 'axios'

class Sustentacao extends React.Component {

    constructor(){
        super();
        this.state = {
            cards : []
        };
    }

    componentDidMount(){
        axios.get(`https://sistema.doc9.com.br/apiti/chamados-sustentacao.php`)
            .then(res => {
                    const cards = res.data;
                    this.setState({ cards });
                    console.log(this.state.cards);
                    //cardsBuild(this, this.state.cards);
                })
                
    }

    render() {
        //console.log(this.state.cards);
        return (
            <div className="row">
                <Column id="0" status="awaiting" cards={this.state.cards["NA FILA"]} statusName="Na fila"/>
                <Column id="1" status="development" cards={this.state.cards["EM DESENVOLVIMENTO"]} statusName="Em desenvolvimento"/>
                <Column id="2" status="testing" cards={this.state.cards["EM TESTE"]} statusName="Em Teste"/>
                <Column id="3" status="validation" cards={this.state.cards["EM HOMOLOGAÇÃO"]} statusName="Em Homologação"/>
                <Column id="4" status="deployment" cards={this.state.cards["AGUARDA PUBLICAÇÃO"]} statusName="Aguarda Publicação"/>
                <Column id="5" status="done"  cards={this.state.cards["PRONTO"]} statusName="Pronto"/>
            </div>
        )
    }
}
/*
function cardsBuild(obj, tickets){
    tickets.forEach(tickets => {
        //console.log(tickets.agrupador);

        switch(tickets.agrupador){
            case "NA FILA":
                obj.cards.awaiting.push(tickets);
                break;
            case "EM DESENVOLVIMENTO":
                obj.cards.development.push(tickets);
                break;
            case "EM TESTE":
                obj.cards.testing.push(tickets);
                break;
            case "EM HOMOLOGAÇÃO":
                obj.cards.validation.push(tickets);
                break;
            case "AGUARDA PUBLICAÇÃO":
                obj.cards.deployment.push(tickets);
                break;
            case "PRONTO":
                obj.cards.done.push(tickets);
                break;
            case "PRONTO":
                obj.cards.done.push(tickets);
                break;
            default:
                break;
        }
    });

}
*/
export default Sustentacao;