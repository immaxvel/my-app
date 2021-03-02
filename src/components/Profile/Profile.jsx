import classes from "./Profile.module.css";
import MyPosts from "../Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
    src="https://i0.wp.com/sunniti.ru/wp-content/uploads/2019/03/o-nachale-sozdaniya.jpg?fit=2560%2C1600&ssl=1" alt={asdasd}/>
            </div>
            <div>
                <img
    className={`${classes.content} ${classes.avatar}`}
    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
     alt={asdasd}/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
