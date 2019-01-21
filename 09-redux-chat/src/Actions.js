import ActionTypes from "./ActionTypes";

export default class Actions{
    static addMessage = (message) => ({
        type: ActionTypes.ADD_MESSAGE,
        message
    });
    static deleteMessage = (index) => ({
        type: ActionTypes.DELETE_MESSAGE,
        index
    });
};