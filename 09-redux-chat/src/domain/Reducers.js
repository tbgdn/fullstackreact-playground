import ActionTypes from "./ActionTypes";
const uuid = require("uuid/v1");

const replace = (item, index, collection) => [
    ...collection.slice(0, index),
    item,
    ...collection.slice(index + 1),
];

export default class Reducers{
    static allActionTypes(state, action){
        if (action.type === ActionTypes.ADD_MESSAGE){
            let message = {
                text: action.text,
                id: uuid(),
                timestamp: Date.now()
            };
            let threadIndex = state.threads.findIndex(t => t.id === action.threadId);
            let existingThread = state.threads[threadIndex];
            let newThread = {
                ...existingThread,
                messages: [...existingThread.messages, message]
            };
            return {
                ...state,
                threads: replace(newThread, threadIndex, state.threads)
            };
        }else if (action.type === ActionTypes.DELETE_MESSAGE) {
            let threadIndex = state.threads.findIndex(t => t.id === action.threadId);
            let existingThread = state.threads[threadIndex];
            let newThread = {
                ...existingThread,
                messages: existingThread.messages.filter(m => m.id !== action.messageId)
            };
            return {
                ...state,
                threads: replace(newThread, threadIndex, state.threads)
            };
        }else if (action.type === ActionTypes.ADD_THREAD){
            return {
                ...state,
                threads: [...state.threads, {
                    id: action.threadId || uuid(),
                    title: action.title,
                    messages: []
                }]
            }
        }else if (action.type === ActionTypes.OPEN_THREAD){
            return {
                ...state,
                activeThreadId: action.threadId
            }
        }else if (action.type === ActionTypes.NEW_THREAD){
            return {
                ...state,
                threads: [
                    ...state.threads,
                    {
                        id: uuid(),
                        title: uuid(),
                        messages: []
                    }
                ]
            }
        }else{
            return state;
        }
    }
}