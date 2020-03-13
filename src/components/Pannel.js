import React from 'react';

import Column from './Column';

class Pannel extends React.Component {

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