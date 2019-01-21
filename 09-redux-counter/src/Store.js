export default class Store{
    constructor(reducer){
        this.reducer = reducer;
        this.state = 0;
    }
    dispatch = (action) => {
        this.state = this.reducer(this.state, action);
    };
    getState = () => (this.state);
}