import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let postElements = props.postsData.map((p) =>
        <Post postMessage={p.postMessage} likeCount={p.likeCount} />
    );

    return (
        <div>
            <h3>My posts</h3>
            <div>
                New post
                <div className={classes.newPostForm}>
                    <textarea></textarea>
                    <button>Send</button>
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