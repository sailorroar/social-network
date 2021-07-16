import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.postTape}>
                Post tape
                <Post postMessage='Test Post' likeCount='14' />
                <Post postMessage='Hello!' likeCount='700' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts