import classes from "../../style/HomePage.module.css";
import HomeCard from "../../components/HomeCard";

function ProfilePageHome() {
  return (
    <main>
      <div className={classes.title}>
        Donation Requests
      </div>
      <div className={classes.main}>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      </div>
    </main>
  );
}

export default ProfilePageHome;
