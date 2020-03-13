import React from 'react';

class Card extends React.Component {



    render() {
        return (
            <div class="card">
                <span class="title">{this.props.title}</span>
                <span class="text">{this.props.requester}</span>
                <span class="text">{this.props.owner}</span>
            </div>
        )
    }
}

export default Card;