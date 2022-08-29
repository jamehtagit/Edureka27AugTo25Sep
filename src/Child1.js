import React, { Component } from 'react';

class Child1 extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>I am child1 and my name is {this.props.firstname}</h1>
            </div>
        );
    }
}

export default Child1;