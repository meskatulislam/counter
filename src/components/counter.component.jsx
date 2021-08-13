import React, { Component } from 'react';

class Counter extends Component {
    state = {
        items: [2, 0],
    }
    
    handleReset = () => {
        const arra = [...this.state.items];
        const newArra = arra.map(()=>{
            return 0
        })
        
        this.setState({ items: newArra });
    }

    formatCount = (index) => {
        if(this.state.items[index] === 0) return 'Zero'
        return this.state.items[index]
    }

    handleIncrement = (index) => {
        const arra = [...this.state.items]
        arra[index]++
        
        this.setState({ items: arra });
    }

    handleDecrement = (index) => {
        const arra = [...this.state.items];
        if(arra[index]){   
            arra[index]--;
            this.setState({ items: arra });
        }
    }

    render() { 
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar <span className="badge bg-secondary">4</span>
                        </a>
                    </div>
                </nav>
                <button onClick={this.handleReset} type="button" className="btn btn-primary m-4">Reset</button>

                <ul>
                    <li className="list-unstyled">
                        <div>
                            <span className={this.state.items[0]===0?'badge bg-warning mr-5':'badge bg-primary mr-5'} >
                                {this.formatCount(0)}
                            </span>

                            <button
                                onClick={this.handleIncrement.bind(this, 0)}
                                type="button"
                                className="btn btn-secondary m-2">
                                +
                            </button>
                            
                            <button
                                disabled={this.state.items[0]===0?true:false}
                                onClick={this.handleDecrement.bind(this, 0)}
                                type="button"
                                className="btn btn-secondary m-2">
                                -
                            </button>
                            <button type="button" className="btn btn-danger m-2">Delete</button>
                        </div>
                    </li>

                    <li className="list-unstyled">
                        <div>
                            <span className={this.state.items[1]===0?'badge bg-warning':'badge bg-primary'} >
                                {this.formatCount(1)}
                            </span>

                            <button
                                onClick={this.handleIncrement.bind(this, 1)}
                                type="button"
                                className="btn btn-secondary m-2">
                                +
                            </button>
                            
                            <button
                                disabled={this.state.items[1]===0?true:false}
                                onClick={this.handleDecrement.bind(this, 1)}
                                type="button"
                                className="btn btn-secondary m-2">
                                -
                            </button>
                            <button type="button" className="btn btn-danger m-2">Delete</button>
                        </div>
                    </li>
                    
                </ul>
            </>
        );
    }
}
 
export default Counter;