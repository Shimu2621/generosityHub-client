import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout/MainLayout.jsx";
import Home from "./pages/homePage/Home.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import SingleDonation from "./pages/homePage/singleDonation/SingleDonation.jsx";
import DonationPage from "./pages/donationPage/DonationPage.jsx";
import FundRaiserpage from "./pages/fundRaiserPage/FundRaiserPage.jsx";
import SingleFundRaiser from "./pages/homePage/singleFundraiser/SingleFundRaiser.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import AdminLayout from "./layout/adminLayout/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import CreateDonation from "./pages/admin/CreateDonation.jsx";
import CreateFundraiser from "./pages/admin/CreateFundraiser.jsx";
import AllDonation from "./pages/admin/AllDonation.jsx";
import UpdateDonation from "./pages/admin/UpdateDonation.jsx";
import AllUsers from "./pages/admin/AllUsers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donationPage" element={<DonationPage />} />
          <Route path="/fundraiserPage" element={<FundRaiserpage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donations/:id" element={<SingleDonation />} />
          <Route path="/fundraisers/:id" element={<SingleFundRaiser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-donation/:id" element={<UpdateDonation />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/admin-home" element={<AdminHome />} />
          <Route path="/admin/create-donation" element={<CreateDonation />} />
          <Route path="/admin/all-user" element={<AllUsers />} />
          <Route path="/admin/all-donation" element={<AllDonation />} />
          <Route
            path="/admin/create-fundraiser"
            element={<CreateFundraiser />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
