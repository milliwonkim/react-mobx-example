import React from 'react';
import { observer, inject } from 'mobx-react';

function Counter(props) {
    const { counter } = props;
    return (
        <div>
            <h1>{counter.number}</h1>
            <button onClick={counter.increase}>+1</button>
            <button onClick={counter.decrease}>-1</button>
        </div>
    );
}

export default inject('counter')(observer(Counter));
// export default observer(inject("counter")(Counter)); // not works
