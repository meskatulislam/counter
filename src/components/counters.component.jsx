import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends Component {
    
    state = {
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 5},
            {id: 2, value: 9},
            {id: 3, value: 1},
            {id: 4, value: 0},
        ]
    };

    handleReset = () => {
        const all_counters = this.state.counters.map((counter, index) => {
            const obj = {id: index, value: 0};
            return obj;
        });
        this.setState({counters: all_counters});
        
    }

    handleIncrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
            if(counter.id === id) return { id: idx, value: counter.value+1};
            return counter;
        });
        this.setState({counters: counters})
    }

    handleDecrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
            if(counter.value !== 0){
                if(counter.id === id) return { id: idx, value: counter.value-1};
            }
            return counter;
        });
        this.setState({counters: counters})
    }

    render() {
        return (
            <>
            <button onClick={this.handleReset} type="button" className="btn btn-primary m-4">Reset</button>
            {
                this.state.counters.map(counter => {
                    return <Counter
                                key={counter.id}
                                value={counter.value} 
                                id={counter.id}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                            />
                })
            }
            </>
        );
    }
}

export default Counters;