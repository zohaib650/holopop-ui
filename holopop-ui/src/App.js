import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forget from "./pages/auth/forget/Forget";
import VerificationCode from "./pages/auth/verificationCode/VerificationCode";
import CommonSection from "./pages/auth/authWrapper/CommonSection";
import Practice from "./pages/practice/Practice";
import NewPassword from "./pages/auth/newPassword/NewPassword";
import FormikForm from "./pages/practice/formik/FormikForm";
import Navbar from "./pages/dasboard/navBar/Navbar";
import HeaderSection from "./pages/dasboard/header/HeaderSection";
import HeroSection from "./pages/dasboard/heroSection/HeroSection";
import User from "./pages/user/User";
import QrCode from "./pages/qrCode/QrCode";
import GiftCard from "./pages/giftCard/GiftCard";
import BrowseGallery from "./pages/browseGallery/BrowseGallery";
import InputField from "./pages/auth/login/Login";
import PrivateLayout from "./layout/PrivateLayout";
import AdminPortal from "./pages/adminPortal/AdminPortal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonSection />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/inputField" element={<InputField />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/navbar" element={<Navbar />} />

          <Route
            path="/admin"
            element={
              <PrivateLayout>
                <AdminPortal />
              </PrivateLayout>
            }
          />

          <Route
            path="/deshboard"
            element={
              <PrivateLayout>
                <HeroSection />
              </PrivateLayout>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateLayout>
                <User />
              </PrivateLayout>
            }
          />
          <Route
            path="/qr"
            element={
              <PrivateLayout>
                <QrCode />
              </PrivateLayout>
            }
          />
          <Route
            path="/gift"
            element={
              <PrivateLayout>
                <GiftCard />
              </PrivateLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <PrivateLayout>
                <BrowseGallery />
              </PrivateLayout>
            }
          />
          <Route path="/123" element={<Practice />} />
          <Route path="/formik-form" element={<FormikForm />} />
        </Routes>
        <ToastContainer position="top-center" reverseOrder={false} autoClose={2000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
