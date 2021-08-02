import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/state'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {

    let postElements = props.postsData.map((p) =>
        <Post postMessage={p.postMessage} likeCount={p.likeCount} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                New post
                <div className={classes.newPostForm}>
                    <textarea ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange} />
                    <button onClick={addPost} >Send</button>
                </div>
            </div>
            <div className={classes.postTape}>
                Post tape
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts