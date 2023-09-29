import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../style/PersonalInfo.module.css";

function PersonalInfo() {
  const [selectedUni, setSelectedUni] = useState("");
  const [selectedFac, setSelectedFac] = useState("");
  const [studenttId, setStudenttId] = useState("");
  const studentId = useRef("a");
  const history = useNavigate();

  const handleStudentId = () => {
    setStudenttId(studentId.current.value)
    console.log(studenttId);
  };
  const handleBack = () => {
    history(-1);
  };

  const handleContinue = () => {
    history("/apply-donation/donation-info");
  };

  const isActive = {
    "": selectedUni === "" || selectedFac === "" ? "disabled" : "",
  };

  const uni = ["UTM", "UTHM", "UM", "UPM", "UKM", "UTP", "USM", "UUM"];
  const faculty = ["Engineering", "Computing", "Business", "Science"];

  return (
    <>
      <main className={`${classes.main}`}>
        <section className={`${classes.PersonalInfoForm}`}>
          <i className="fa-solid fa-chevron-left" onClick={handleBack}>
            {" "}
            Back{" "}
          </i>

          <div className={`${classes.personalInfoCard}`}>
            <div className="">
              <h2>Personal Information</h2>
              <p>University Name</p>

              <Dropdown
                selected={selectedUni}
                setSelected={setSelectedUni}
                options={uni}></Dropdown>
              <p>Faculty</p>

              <Dropdown
                selected={selectedFac}
                setSelected={setSelectedFac}
                options={faculty}></Dropdown>

              <p>Student ID</p>
              <input
                type="text"
                placeholder="A20E43000"
                ref={studentId}
                onChange={handleStudentId}
              />
            </div>
            <div className={`${classes.personal_button}`}>
              <button
                onClick={handleContinue}
                className={`btn ${
                  selectedUni === "" || selectedFac === "" || studenttId === ""
                    ? "disabled"
                    : ""
                } `}>
                Continue
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PersonalInfo;

function Dropdown({ selected, setSelected, options }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div className={classes.dropdown}>
        <div
          className={classes.dropdown_btn}
          onClick={(e) => {
            setActive(!isActive);
          }}>
          <div>{selected === "" ? "Choose One" : selected.toString()}</div>
          <div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        {isActive && (
          <div className={classes.dropdown_content}>
            {options.map((option) => {
              return (
                <div
                key={option}
                  className={classes.dropdown_item}
                  onClick={(e) => {
                    setSelected(option);
                    setActive(false);
                  }}>
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
