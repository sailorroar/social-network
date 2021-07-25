let state = {

    profilePage: {
        postsDate: [
            { id: 1, postMessage: 'Test Post', likeCount: '15' },
            { id: 2, postMessage: 'Hello!', likeCount: '233' },
            { id: 3, postMessage: 'its my post!', likeCount: '415' },
            { id: 4, postMessage: 'i am from React', likeCount: '965' }
        ]
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
}

export let addPost = (newPostsMessage) => {
    let newPost = {
        id: 5,
        postMessage: newPostsMessage,
        likeCount: 727 
    }

    state.profilePage.postsDate.push(newPost)
}

export default state