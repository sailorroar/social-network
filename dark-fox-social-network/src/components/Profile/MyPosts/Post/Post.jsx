import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <img src='https://i.pinimg.com/originals/30/f9/75/30f975f6fbea4836f5995b39e291b706.jpg'
                    alt='fox' />
                Author Name
            </div>
            <div>
                {props.postMessage}
            </div>
            <div className={classes.postButton} >
                <button className={classes.likeButton} >like  {props.likeCount} </button>
                <button className={classes.repostButton} >repost {props.likeCount} </button>
            </div>
        </div>
    )
}

export default Post