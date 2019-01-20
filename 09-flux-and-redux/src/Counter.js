import ActionTypes from "./ActionTypes";
import Actions from "./Actions";
import Store from "./Store";

export default class Counter{
    demo = () => {
        let reducer = (state, action) => {
            if (action.type === ActionTypes.INCREMENT){
                return state + action.amount;
            }else if (action.type === ActionTypes.DECREMENT){
                return state - action.amount;
            }else{
                return state;
            }
        };

        console.log(reducer(0, Actions.increment()));
        console.log(reducer(1, Actions.increment()));
        console.log(reducer(5, Actions.increment()));

        console.log(reducer(5, Actions.increment()));
        console.log(reducer(8, Actions.increment()));

        console.log(reducer(10, Actions.decrement()));
        console.log(reducer(9, Actions.decrement()));
        console.log(reducer(5, Actions.decrement()));

        console.log(reducer(0, Actions.increment(5)));
        console.log(reducer(1, Actions.increment(5)));
        console.log(reducer(100, Actions.decrement(11)));

        const store = new Store(reducer);
        store.dispatch(Actions.increment(3));
        console.log(store.getState());
        store.dispatch(Actions.increment(3));
        console.log(store.getState());
        store.dispatch(Actions.decrement(4));
        console.log(store.getState());
    };
}