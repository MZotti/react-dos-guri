import React from 'react';

class LoadingBar extends React.Component {

    constructor(){
        super();

        this.state = {
            loading : true
        }
    }
    componentDidMount() {
        console.log(this.state);
        let timer = null;
        timer = setTimeout(
            () => (
                this.setState({loading: false}),
                console.log(this.state)
            ), 30000);
    }

    render() {
        return (
            <div className={`loading-bar ${this.state.loading ? `loading-active` : `` }`} >
            </div>
        )
    }
}

export default LoadingBar;