import ActionTypes from "./ActionTypes";

export default class Actions{
    static addMessage = (text) => ({
        type: ActionTypes.ADD_MESSAGE,
        text
    });
    static deleteMessage = (id) => ({
        type: ActionTypes.DELETE_MESSAGE,
        id
    });
};