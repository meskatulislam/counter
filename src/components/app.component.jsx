import React, { useState, useEffect } from 'react';
import Navbar from './navbar.component';
import Reset from './reset.component';
import Counters from './counters.component';

function App() {
    const [counters, setCounters] = useState([
        {id: 0, value: 0},
        {id: 1, value: 5},
        {id: 2, value: 9},
        {id: 3, value: 1},
        {id: 4, value: 0},
    ]);

    useEffect( () => {
        console.log('=========>', counters);
    });

    const [name, setName] = useState('Pondit');

    const updateName = () => {
        setName('Meskat')
    }
    const handleReset = () => {
        const all_counters = counters.map((counter, index) => {
            const obj = {id: index, value: 0};
            return obj;
        });
        setCounters(all_counters);
        
    }

    const handleIncrement = (id) => {
        const updated_counters = counters.map((counter, idx) => {
            if(counter.id === id) return { id: idx, value: counter.value+1};
            return counter;
        });
        setCounters(updated_counters)
    }

    const handleDecrement = (id) => {
        const updated_counters = counters.map((counter, idx) => {
            if(counter.value !== 0){
                if(counter.id === id) return { id: idx, value: counter.value-1};
            }
            return counter;
        });
        setCounters(updated_counters)
    }

    const getNonZeroItems = () => {
        let count = 0;
        counters.forEach(counter => {
            if(counter.value > 0) count++;
        })
        return count;
    }

    const handleDelete = (id) => {
        const updated_counters = counters.filter(counter => counter.id !== id);
        setCounters(updated_counters)
    }

    return (
        <>
            <Navbar
                nonZeroItems={getNonZeroItems()}
            />

            <Reset
                onReset={handleReset}
            />

            <Counters 
                counters={counters}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
            />

        </>
    );
}

export default App;