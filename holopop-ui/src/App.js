import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Forget from "./pages/auth/forget/Forget";
import VerificationCode from "./pages/auth/verificationCode/VerificationCode";
import CommonSection from "./pages/auth/authWrapper/CommonSection";
import Practice from "./pages/practice/Practice";
import NewPassword from "./pages/auth/newPassword/NewPassword";
import FormikForm from "./pages/practice/formik/FormikForm";
import Navbar from "./pages/dasboard/navBar/Navbar";
import HeaderSection from "./pages/dasboard/header/HeaderSection";
import HeroSection from "./pages/dasboard/heroSection/HeroSection";
import Userpage from "./pages/userPage/Userpage";
import QrCode from "./pages/qrCode/QrCode";
import GiftCard from "./pages/giftCard/GiftCard";
import BrowseGallery from "./pages/browseGallery/BrowseGallery";
import InputField from "./pages/auth/login/Login";
import PrivateLayout from "./layout/PrivateLayout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonSection />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/inputField" element={<InputField></InputField>} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/navbar" element={<Navbar></Navbar>} />
          <Route path="/header-section" element={<HeaderSection></HeaderSection>} />
          <Route
            path="/hero-section"
            element={
              <PrivateLayout>
                <HeroSection />
              </PrivateLayout>
            }
          />
          <Route
            path="/userpage"
            element={
              <PrivateLayout>
                <Userpage />
              </PrivateLayout>
            }
          />
          <Route
            path="/qr-code"
            element={
              <PrivateLayout>
                <QrCode />
              </PrivateLayout>
            }
          />
          <Route
            path="/gift-card"
            element={
              <PrivateLayout>
                <GiftCard />
              </PrivateLayout>
            }
          />
          <Route
            path="/browse-gallery"
            element={
              <PrivateLayout>
                <BrowseGallery />
              </PrivateLayout>
            }
          />

          <Route path="/123" element={<Practice />} />
          <Route path="/formik-form" element={<FormikForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
