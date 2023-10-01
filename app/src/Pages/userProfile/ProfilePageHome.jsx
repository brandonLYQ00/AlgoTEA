import classes from "../../style/HomePage.module.css";
import HomeCard from "../../components/HomeCard";

function ProfilePageHome() {
  return (
    <main className={classes.main}>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
    </main>
  );
}

export default ProfilePageHome;
