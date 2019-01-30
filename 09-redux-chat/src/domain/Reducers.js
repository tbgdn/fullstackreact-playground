import ActionTypes from "./ActionTypes";
import {combineReducers} from "redux";

const uuid = require("uuid/v1");

const defaultThreadId = uuid();
const defaultThreadName = "Default";

const activeThreadId = (state = defaultThreadId, action) => {
    if (action.type === ActionTypes.OPEN_THREAD) {
        return action.threadId;
    } else {
        return state;
    }
};
const threads = (state = [{
    id: defaultThreadId,
    title: defaultThreadName,
    messages: messagesReducer(undefined, {})
}], action) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGE:
        case ActionTypes.DELETE_MESSAGE:
            let threadIndex = state.findIndex(t => t.id === action.threadId);
            let existingThread = state[threadIndex];
            let newThread = {
                ...existingThread,
                messages: messagesReducer(existingThread.messages, action)
            };
            return replace(newThread, threadIndex, state);
        case ActionTypes.ADD_THREAD:
            return [...state, {
                id: action.threadId || uuid(),
                title: action.title,
                messages: []
            }];
        case ActionTypes.NEW_THREAD:
            return [
                ...state,
                {
                    id: uuid(),
                    title: uuid(),
                    messages: []
                }
            ];
        default:
            return state;
    }
};
const messagesReducer = (state = [], action) => {
    if (action.type === ActionTypes.ADD_MESSAGE) {
        let message = {
            text: action.text,
            id: uuid(),
            timestamp: Date.now()
        };
        return [
            ...state,
            message
        ];
    } else if (action.type === ActionTypes.DELETE_MESSAGE) {
        return state.filter(m => m.id !== action.messageId);
    } else {
        return state;
    }
};

const replace = (item, index, collection) => [
    ...collection.slice(0, index),
    item,
    ...collection.slice(index + 1),
];

export default class Reducers {
    static instance = combineReducers({
        activeThreadId,
        threads
    });
}