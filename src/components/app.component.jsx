import React, { Component } from 'react';
import Navbar from './navbar.component';
import Reset from './reset.component';
import Counters from './counters.component';

class App extends Component {
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

    getNonZeroItems = () => {
        let count = 0;
        this.state.counters.forEach(counter => {
            if(counter.value > 0) count++;
        })
        return count;
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({counters: counters})
    }

    render() {
        return (
            <>
                <Navbar
                    nonZeroItems={this.getNonZeroItems()}
                />

                <Reset
                    onReset={this.handleReset}
                />

                <Counters 
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
        );
    }
}

export default App;