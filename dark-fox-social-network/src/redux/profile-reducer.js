const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsDate: [
        { id: 1, postMessage: 'Test Post', likeCount: '15' },
        { id: 2, postMessage: 'Hello!', likeCount: '233' },
        { id: 3, postMessage: 'its my post!', likeCount: '415' },
        { id: 4, postMessage: 'i am from React', likeCount: '965' }
    ],

    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText
            state.newPostText = ''
            state.postsDate.push({ id: 5, postMessage: text })
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer