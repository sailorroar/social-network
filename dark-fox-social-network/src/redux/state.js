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
                ]
        }
    },

    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },

    addPost() {
        let newPost = {
            id: 5,
            postMessage: this._state.profilePage.newPostText,
            likeCount: 727
        }

        this._state.profilePage.postsDate.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscride(observer) {
        this._callSubscriber = observer
    }
}
export default store