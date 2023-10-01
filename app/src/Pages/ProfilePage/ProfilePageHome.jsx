import React from 'react';
import classes from "../../style/HomePage.module.css";
import HomeCard from "../../components/HomeCard";
import Students from "../../db.json";


function ProfilePageHome() {
  return (
    <main className={classes.main}>
      {Students && Students.map((student, index) => {
        return(<HomeCard student={student} key={student.student_id} ></HomeCard>)
      })
      }
    </main>
  );
}

export default ProfilePageHome;
