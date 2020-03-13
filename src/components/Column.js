import React from 'react';

import Card from './Card';

class Column extends React.Component {
  render() {
    return (
        <div class="col col-md-2">
            <div class="column">
                <h3 class="awaiting">{this.props.status}</h3>
                <Card 
                    title="0666 - Chamado chato pra caralho"
                    requester="Andre Silva"
                    owner="Marcos Zotti"
                />
            </div>
        </div>
    )
  }
}

export default Column;