const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'i am fine,thank you' }
    ],

    dialogs:
        [
            { id: 1, name: 'Kolya' },
            { id: 2, name: 'Dima' },
            { id: 3, name: 'Sneg' },
            { id: 4, name: 'Kotya' },
            { id: 5, name: 'Octopus' }
        ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:

            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer