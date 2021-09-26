import React from 'react';
import CounterStore from './stores/counter';
import Counter from './Counter';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider

const counter = new CounterStore();

export default function App() {
    return (
        <Provider counter={counter}>
            <div className='App'>
                <h1>function component</h1>
                <Counter />
            </div>
        </Provider>
    );
}
