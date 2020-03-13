import React from 'react';

class Card extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            status: 0
        };
    }

    handleClick() {
        console.log(this.props);
        console.log(this.state);
        this.setState({ status: (this.state.status + 1) })
        if(this.state.status === 5)
            this.setState({ status: 0 })

    }

    render() {
        return (
            <div className="ticket-card copies" onClick={this.handleClick}>
                <span className="title">{this.props.id} - {this.props.title}</span>
                <span className="text">Deman.: {this.props.requester}</span>
                <span className="text">Resp.: {this.props.owner}</span>
            </div>
        )
    }
}

export default Card;