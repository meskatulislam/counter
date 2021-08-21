import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends Component {
    
    

    render() {
        return (
            <>
            {
                this.props.counters.map(counter => {
                    return <Counter
                                key={counter.id}
                                value={counter.value} 
                                id={counter.id}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                            />
                })
            }
            </>
        );
    }
}

export default Counters;