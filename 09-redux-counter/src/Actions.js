import ActionTypes from "./ActionTypes";

export default class Actions{
    static increment = (amount = 1) => ({
        type: ActionTypes.INCREMENT,
        amount: amount
    });
    static decrement = (amount = 1) => ({
        type: ActionTypes.DECREMENT,
        amount: amount
    });
};