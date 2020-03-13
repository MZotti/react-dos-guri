import React from 'react';

import Card from './Card';

class Column extends React.Component {

    render() {
        return (
            <div className="col col-md-2">
                <div className="column">
                    <h3 className={this.props.status}>{this.props.statusName}</h3>
                    {createCard(this.props)}          
                </div>
            </div>
        )
    }
  
}

function createCard(props){
    console.log(props);
    if(props.id === "0"){
        return (
        <Card 
            id="0666"
            title="Chamado chato pra caralho"
            requester="Andre Silva"
            owner="Marcos Zotti"
            department="copies"
        />)
    }
}

function teste(){
    console.log();
}

export default Column;
