import React from 'react';

import Loading from '../_common/Loading';
import Column from './Column';

import axios from 'axios'

class Sprint extends React.Component {

    constructor(){
        super();
        this.state = {
            cards : [],
            isLoading: true
        };
        console.log(this.state);
    }

    componentDidMount(){
        axios.get(`https://sistema.doc9.com.br/apiti/chamados-sprint.php`)
            .then(res => {
                    const cards = res.data;
                    this.setState({ cards });
                    this.setState({isLoading: false})    
                    console.log(this.state);
                })   
    }

    render() {
        return (
            this.state.isLoading ?
                <Loading /> :
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

export default Sprint;