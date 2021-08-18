import React, { Component } from 'react';

class Counter extends Component {

    formatCount = () => {
        if (this.state.counter===0) return 'Zero'
        return this.state.counter;
    }

    render() {

        return (
            <>
                <div >
                    <span className="badge bg-primary mr-5" >
                        {this.props.value}
                    </span>

                    <button
                        onClick={() => this.props.onIncrement(this.props.id)}
                        type="button"
                        className="btn btn-secondary m-2">
                        +
                    </button>
                    
                    <button
                        onClick={() => this.props.onDecrement(this.props.id)}
                        type="button"
                        className="btn btn-secondary m-2">
                        -
                    </button>
                    <button type="button" className="btn btn-danger m-2">Delete</button>
                </div>
            </>
        );
    }
}
 
export default Counter;