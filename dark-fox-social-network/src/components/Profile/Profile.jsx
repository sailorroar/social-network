import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content} >
      <div>
        description
      </div>
    <MyPosts />
    </div>
  )
}

export default Profile