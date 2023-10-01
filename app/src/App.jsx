import React from "react";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";

import MainNavigation from "./pages/userProfile/MainNavigation";
import { useLocation } from "react-router-dom";
import ProfilePageHome from "./pages/userProfile/ProfilePageHome";
import ProfilePageHistory from "./pages/userProfile/ProfilePageHistory";
import ProfilePage from "./pages/userProfile/ProfilePage";
import DonationFormPage from "./pages/DonationFormPage";
import ApplicationOverview from "./pages/applyDonation/OverviewPage";
import PersonalInfo from "./pages/applyDonation/PersonalInfoPage";
import DonationInfo from "./pages/applyDonation/DonationInfoPage";
import SuccessPage from "./pages/applyDonation/SuccessPage";

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
