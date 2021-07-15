import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.post}>
            <img src='https://i.pinimg.com/originals/30/f9/75/30f975f6fbea4836f5995b39e291b706.jpg'
                alt='fox' />
            Post 1
        </div>
    )
}

export default Post