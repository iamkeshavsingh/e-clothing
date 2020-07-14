import React, { Component } from 'react';

import { SpinnerOverlay, SpinnerContainer } from './spinner.style';

class Spinner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        };
    }

    startLoader = () => {
        this.setState({
            isLoading: true
        });
    };

    stopLoader = () => {
        this.setState({
            isLoading: false
        });
    }

    render() {
        const { children } = this.props;
        const { isLoading } = this.state;
        const render = children(this.startLoader, this.stopLoader);
        return (
            isLoading ? (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>
            ) :
                render
        );
    }
}

export default Spinner;