import ActionTypes from "./ActionTypes";
const uuid = require("uuid/v1");

export default class Reducers{
    static allActionTypes(state, action){
        if (action.type === ActionTypes.ADD_MESSAGE){
            let message = {
                text: action.text,
                id: uuid(),
                timestamp: Date.now()
            };
            return {
                messages: [...state.messages, message]
            };
        }else if (action.type === ActionTypes.DELETE_MESSAGE){
            return {
                messages: state.messages.filter(message => message.id !== action.id)
            };
        }else{
            return state;
        }
    }
}