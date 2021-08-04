import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer'
import React from 'react';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContex';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action);
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsDate={state.profilePage.postsDate}
                        newPostText={state.profilePage.newPostText} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer