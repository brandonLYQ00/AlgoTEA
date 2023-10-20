import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignupPage";

import MainNavigation from "./Pages/userProfile/MainNavigation";
import MainNavigationAdmin from "./Pages/Admin/MainNavigationAdmin";
import { useLocation } from "react-router-dom";
import ProfilePageHome from "./Pages/userProfile/ProfilePageHome";
import ProfilePageHistory from "./Pages/userProfile/ProfilePageHistory";
import ProfilePage from "./Pages/userProfile/ProfilePage";
import DonationFormPage from "./Pages/DonationFormPage";
import ApplicationOverview from "./Pages/ApplyDonation/OverviewPage";
import PersonalInfo from "./Pages/ApplyDonation/PersonalInfoPage";
import DonationInfo from "./Pages/ApplyDonation/DonationInfoPage";
import SuccessPage from "./Pages/ApplyDonation/SuccessPage";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminHistory from "./Pages/Admin/AdminHistory";
import StudentVerify from "./Pages/Admin/StudentVerify";
import ApplicationEdit from "./Pages/Admin/ApplicationEdit";

function App() {
  const currentPath = useLocation().pathname;

  const isProfilePage = currentPath.startsWith("/profile");
  const isAdmin = currentPath.startsWith('/admin')
  const showNavigation =
    currentPath !== "/" &&
    currentPath !== "/signup" &&
    !currentPath.includes("/profile/home/donation-form") &&
    !currentPath.includes('/apply-donation');

   const showAdminNavigation =
   currentPath !== "/" &&
   currentPath !== "/admin/sign-in" &&
   !currentPath.includes("/admin/verify/")  &&
   !currentPath.includes("/admin/edit-application/")  &&
   !currentPath.includes("/admin/home/donation-form") &&
   !currentPath.includes('/apply-donation');


  return (
    <div>
     {showNavigation && isProfilePage ? <MainNavigation /> : null}
      {/* {showAdminNavigation && isProfilePage ? <MainNavigationAdmin /> : null} */}
      { showAdminNavigation && isAdmin ? <MainNavigationAdmin /> : null}
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
        <Route path="/admin/sign-in" element={<AdminLogin/>}></Route>



<Route path="/admin/home" element={<AdminHome/>}></Route>
<Route path="/admin/history" element={<AdminHistory/>}></Route>
<Route path="/admin/verify/:id" element={<StudentVerify/>}></Route>
<Route path="/admin/edit-application/:id" element={<ApplicationEdit/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
