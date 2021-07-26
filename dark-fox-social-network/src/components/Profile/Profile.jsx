import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  return (
    <div className={classes.content} >
      <ProfileInfo />
      <MyPosts
        newPostText={props.state.newPostText}
        postsData={props.state.postsDate}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile