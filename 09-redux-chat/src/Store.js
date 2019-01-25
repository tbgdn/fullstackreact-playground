export default class Store{
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState || { messages: [] };
        this.listeners = [];
    }
    dispatch = (action) => {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    };
    getState = () => ( this.state );
    subscribe = (listener ) => {
        this.listeners.push(listener)
    }
}