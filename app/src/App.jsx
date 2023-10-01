import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignupPage";

import MainNavigation from "./Pages/userProfile/MainNavigation";
import { useLocation } from "react-router-dom";
import ProfilePageHome from "./Pages/userProfile/ProfilePageHome";
import ProfilePageHistory from "./Pages/userProfile/ProfilePageHistory";
import ProfilePage from "./Pages/userProfile/ProfilePage";
import DonationFormPage from "./Pages/DonationFormPage";
import ApplicationOverview from "./Pages/ApplyDonation/OverviewPage";
import PersonalInfo from "./Pages/ApplyDonation/PersonalInfoPage";
import DonationInfo from "./Pages/ApplyDonation/DonationInfoPage";
import SuccessPage from "./Pages/ApplyDonation/SuccessPage";

function App() {
  const currentPath = useLocation().pathname;

  const isProfilePage = currentPath.startsWith("/profile");
  const showNavigation =
    currentPath !== "/" &&
    currentPath !== "/signup" &&
    !currentPath.includes("/profile/home/donation-form") &&
    !currentPath.includes('/apply-donation');

  return (
    <div>
      {showNavigation && isProfilePage && <MainNavigation />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/home" element={<ProfilePageHome />} />
        <Route path="/profile/history" element={<ProfilePageHistory />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/profile/home/donation-form/:id"
          element={<DonationFormPage />}
        />
        <Route path="/apply-donation/overview" element={<ApplicationOverview/>}/>
        <Route path="/apply-donation/personal-info" element={<PersonalInfo/>}/>
        <Route path="/apply-donation/donation-info" element={<DonationInfo/>}/>
        <Route path="/apply-donation/success" element={<SuccessPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
