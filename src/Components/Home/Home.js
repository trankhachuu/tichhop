import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <h5>{ this.props.StateApp.name }</h5>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp }
})(Home);