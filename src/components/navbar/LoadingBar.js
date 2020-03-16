import React from 'react';

class LoadingBar extends React.Component {

    constructor(){
        super();

        this.state = {
            width : 0
        }
    }

    render() {
        return (
            <div className="loading-bar">
            </div>
        )
    }
}

export default LoadingBar;