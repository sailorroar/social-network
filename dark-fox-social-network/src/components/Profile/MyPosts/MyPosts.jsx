import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {
    debugger

    let postElements = props.postsDate.map((p) =>
        <Post postMessage={p.postMessage} key={p.id} likeCount={p.likeCount} />
    );

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                New post
                <div className={classes.newPostForm}>
                    <input ref={newPostElement}
                        type='text'
                        placeholder='Enter your text...'
                        value={props.newPostText}
                        onChange={onPostChange}></input>
                    <button onClick={onAddPost} >Send</button>
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