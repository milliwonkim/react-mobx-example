import { observable, action, makeObservable } from 'mobx';

export default class CounterStore {
    @observable number = 0;

    constructor() {
        makeObservable(this);
    }

    @action increase = () => {
        this.number++;
        console.log('increase', this.number);
    };

    @action decrease = () => {
        this.number--;
        console.log('decrease', this.number);
    };
}
