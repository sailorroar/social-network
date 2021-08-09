import classes from './Users.module.css'
import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1,
                followed: false,
                fullName: 'Full Name',
                fholoURL: 'https://cdn-0.emojis.wiki/emoji-pics/facebook/ogre-facebook.png',
                status: 'I am a dumb',
                location: { country: 'Russia', city: 'Moscow' }
            },
            {
                id: 2,
                followed: true,
                fullName: 'Octopus',
                fholoURL: 'https://emojis.wiki/emoji-pics/apple/octopus-apple.png',
                status: 'I am crazy',
                location: { country: 'Ocean', city: 'Floor' }
            },
            {
                id: 3,
                followed: true,
                fullName: 'Pumpkin',
                fholoURL: 'https://emojigraph.org/media/facebook/jack-o-lantern_1f383.png',
                status: 'I am an artist',
                location: { country: 'Garder', city: 'Near carrots' }
            },
            {
                id: 4,
                followed: true,
                fullName: 'Kitten',
                fholoURL: 'https://emojio.ru/images/apple-b/1f408.png',
                status: 'I am a dumb',
                location: { country: 'Apartment', city: 'Under the sofa' }
            },
            {
                id: 5,
                followed: false,
                fullName: 'Benedict',
                fholoURL: 'https://cdn-0.emojis.wiki/emoji-pics/facebook/spider-facebook.png',
                status: 'I am a dumb',
                location: { country: 'UK', city: 'London' }
            },
            {
                id: 6,
                followed: false,
                fullName: 'Guy Ritchie',
                fholoURL: 'https://emojitool.ru/img/apple/ios-14.5/parrot-2129.png',
                status: 'I am a dumb',
                location: { country: 'Canada ', city: 'Toronto' }
            }

        ]
        )
    }

    return props.users.map(u =>
        <div key={u.id} className={classes.userBox}>
            <div className={classes.grid} >
                <div className={classes.photoBox}>
                    <img src={u.fholoURL} alt='userPhoto' />
                </div>
                <div className={classes.infoBox}>
                    <div>{u.fullName}</div>
                    {u.status}
                </div>
                <div className={classes.locationBox}>
                    location:
                    <div>
                        {u.location.country},
                        {u.location.city}
                    </div>
                </div>
                <div className={classes.buttonBox} >
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} ><RiUserFollowLine /></button>
                        : <button onClick={() => { props.follow(u.id) }}><RiUserUnfollowLine /></button>}
                </div>
            </div>
        </div>)
}

export default Users;