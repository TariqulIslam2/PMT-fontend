import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/initialPage/adminInitialPage/Sidebar/header";
import Sidebar from "./component/initialPage/adminInitialPage/Sidebar/sidebar";

import HeaderSetup from "./component/MainPage/AdminPage/HeaderSetup/HeaderSetup";
import FooterSetup from "./component/MainPage/AdminPage/FooterSetup/FooterSetup";
import AddTeamPage from "./component/MainPage/AdminPage/AddTeamPage/AddTeamPage";
import ViewTeamPage from "./component/MainPage/AdminPage/ViewTeamPage/ViewTeamPage";
const AdminApp = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Routes>
        <Route path="/headerSetup" element={<HeaderSetup />} />
        <Route path="/footerSetup" element={<FooterSetup />} />
        <Route path="/AddTeam" element={<AddTeamPage />} />
        <Route path="/viewTeam" element={<ViewTeamPage />} />
      </Routes>
    </div>
  );
};

export default AdminApp;
