import React from 'react';

class Card extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            status: 0
        };
    }

    render() {
        return (
            <div className={`ticket-card ${this.props.department}`} onClick={this.handleClick}>
                <span className="title">{this.props.id} - {this.props.title}</span>
                <span className="text">Deman.: {this.props.requester}</span>
                <span className="text">Resp.: {this.props.owner}</span>
                <span className="text">SLA: {this.props.sla}</span>
            </div>
        )
    }
}

export default Card;