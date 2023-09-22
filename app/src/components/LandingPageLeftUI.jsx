import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import LandingPageRight from "./LandingPageRightUI";
// import Logo from'../Assets/logo-1.png'
// import LogoName from '../Assets/logo-name.png'

function LandingLeft() {
  return (
    <>
      {/* <div style={{ position: "absolute", top: -500, right: -200 , margin:'0px', padding:'0px' }} className={classes.bubble} ></div> */}
      <MDBContainer style={{ display: "flex", marginLeft: "0px" }}>
        <MDBContainer
          style={{ width: "25%", display: "flex", marginRight: "20rem" }}>
          <MDBCol size="12">
            <MDBRow style={{ margin: "2rem", height: "7rem" }}>
              <h2>AlgoTEA</h2>
            </MDBRow>
            <MDBRow
              style={{
                margin: "0.7rem",
                backgroundColor: "#6FFCD2",
                height: "10rem",
              }}>
              <div>
                <h6>It gives me updates on my donation. So reliable !</h6>
                <br />
                <i>Puma,</i>
                <br />
                <i>AlgoTEA donor</i>
              </div>
            </MDBRow>
            <MDBRow
              style={{
                margin: "0.7rem",
                backgroundColor: "#152520",
                color: "white",
                height: "25rem",
              }}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus ratione quaerat eveniet distinctio dolorem quas
                officiis quibusdam, incidunt vel a corrupti molestias aspernatur
                ipsam explicabo vero, quisquam, consequuntur reiciendis nisi.
              </p>
            </MDBRow>
            <MDBRow style={{ margin: "2rem", marginBottom: "0" }}>
              <p style={{ fontSize: "11px" }}>
                2023 AlgoTEA - All rights reserved
              </p>
            </MDBRow>
          </MDBCol>

          <MDBCol size="12">
            <MDBRow
              style={{
                marginTop: "0rem ",
                marginBottom: "0.7rem",
                marginRight: "0.7rem",
                marginLeft: "0.7rem",
                backgroundColor: "#152520",
                color: "white",
                height: "15rem",
              }}>
              <p>I can now study without worrying about the next meal</p>
              <i>Jason</i>
              <i>Architecture major</i>
            </MDBRow>
            <MDBRow
              style={{
                margin: "0.7rem",
                backgroundColor: "#E5E5E5",
                color: "black",
                height: "25rem",
              }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                placeat dolore at nihil assumenda mollitia quidem, commodi
                quibusdam neque eum quis maiores aliquam minus aut debitis iste
                odit dignissimos totam.
              </p>
            </MDBRow>
            <MDBRow
              style={{
                margin: "0.7rem",
                backgroundColor: "#6FFCD2",
                height: "10rem",
              }}></MDBRow>
          </MDBCol>
        </MDBContainer>
        <MDBContainer style={{ width: "100%" }}>
          <LandingPageRight></LandingPageRight>
        </MDBContainer>
      </MDBContainer>
    </>
  );
}

export default LandingLeft;
