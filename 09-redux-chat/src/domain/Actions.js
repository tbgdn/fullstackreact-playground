import ActionTypes from "./ActionTypes";

export default class Actions{
    static addMessage = (threadId, text) => ({
        type: ActionTypes.ADD_MESSAGE,
        threadId,
        text
    });
    static deleteMessage = (threadId, messageId) => ({
        type: ActionTypes.DELETE_MESSAGE,
        threadId,
        messageId
    });
    static addThread = (title, threadId) => ({
        type: ActionTypes.ADD_THREAD,
        title,
        threadId
    });
    static openThread = (threadId) => ({
        type: ActionTypes.OPEN_THREAD,
        threadId
    });
    static newThread = (threadId) => ({
        type: ActionTypes.NEW_THREAD
    });
};