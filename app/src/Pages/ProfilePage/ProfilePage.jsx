import classes from "../../style/ProfilePage.module.css";

import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const navigate = useNavigate();

    const handleSignOut = ()=>{
        navigate('/',{replace:true})
    }

  return (
    <div className={classes.main}>
      <section className={classes.profile_card}>
        <h2>Your Profile</h2>
        <div className={classes.info}>
          <p>Name</p>
          <p>Natacha Edwards</p>
        </div>

        <div className={classes.info}>
          <p>Email address</p>
          <p>natacha@gmail.com</p>
        </div>

        <div className={classes.info}>
          <p>Phone number</p>
          <p>+6012983231</p>
        </div>

       <div className={classes.icons}>
       <i class="fa-regular fa-file fa-xl"> </i>
        <p>Privacy Policy</p>
       </div>
       <div className={classes.icons}>
       <i class="fa-solid fa-circle-info fa-xl"></i>
        <p>About Us</p>
       </div>

        <div className={classes.profile_button}>
          <button onClick={handleSignOut}><p>Sign out</p></button>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
