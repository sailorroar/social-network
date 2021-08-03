import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

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
    },

    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //type : 'ACTION TYPE'

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state)
    }
}

export default store