import React from 'react';

import Column from './Column';

import axios from 'axios'

class Pannel extends React.Component {

    constructor(){
        super();
        this.state = {
            cards : []
        };
    }

    componentDidMount(){
        axios.get(`http://mikhael-com.umbler.net/chamado/395`)
            .then(res => {
                    const cards = res.data;
                    this.setState({ cards });
                    console.log(this.state);
                })

        //console.log(this.state);
    }

    render() {
        return (
            <div className="row">
                <Column id="0" status="awaiting" statusName="Na fila"/>
                <Column id="1" status="development" statusName="Em desenvolvimento"/>
                <Column id="2" status="testing" statusName="Em Teste"/>
                <Column id="3" status="validation" statusName="Em Homologação"/>
                <Column id="4" status="deployment" statusName="Aguarda Publicação"/>
                <Column id="5" status="done" statusName="Pronto"/>
            </div>
        )
    }
}

export default Pannel;