const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {

        profilePage: {
            postsDate: [
                { id: 1, postMessage: 'Test Post', likeCount: '15' },
                { id: 2, postMessage: 'Hello!', likeCount: '233' },
                { id: 3, postMessage: 'its my post!', likeCount: '415' },
                { id: 4, postMessage: 'i am from React', likeCount: '965' }
            ],

            newPostText: 'Hello NJigger'
        },

        dialogsPage: {
            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'i am fine,thank you' }
            ],

            dialogsData:
                [
                    { id: 1, name: 'Kolya' },
                    { id: 2, name: 'Dima' },
                    { id: 3, name: 'Sneg' },
                    { id: 4, name: 'Kotya' },
                    { id: 5, name: 'Octopus' }
                ],
            newMessageText : 'Введите сообщение...'
        }
    },

    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },

    subscride(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //type : 'ACTION TYPE'
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                postMessage: this._state.profilePage.newPostText,
                likeCount: 727
            }

            this._state.profilePage.postsDate.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messageData.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}

export default store