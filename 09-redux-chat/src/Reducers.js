import ActionTypes from "./ActionTypes";

export default class Reducers{
    static allActionTypes(state, action){
        if (action.type === ActionTypes.ADD_MESSAGE){
            return {
                messages: [...state.messages, action.message]
            };
        }else if (action.type === ActionTypes.DELETE_MESSAGE){
            return {
                messages: state.messages.filter((element, index) => index !== action.index)
            };
        }else{
            return state;
        }
    }
}