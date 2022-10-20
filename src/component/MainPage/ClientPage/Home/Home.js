import React from "react";
import Navbar from "../../../initialPage/navbar/Navbar";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import ExpertArea from "../ExpertArea/ExpertArea";
import HomeContact from "../HomeContact/HomeContact";
// import OurProjects from "../OurProjects/OurProjects";
import OurServices from "../OurServices/OurServices";
import TeamOfProfessional from "../TeamOfProfessional/TeamOfProfessional";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import TotalCount from "./../TotalCount/TotalCount";
import MessageSend from "./../MessageSend/MessageSend";
import LatestNews from "../LatestNews/LatestNews";
import ProudClient from "./../ProudClient/ProudClient";
import Footer from "../../../initialPage/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <ExpertArea></ExpertArea>
      <OurServices></OurServices>
      <TotalCount></TotalCount>
      <HomeContact></HomeContact>
      <TeamOfProfessional></TeamOfProfessional>
      <ClientReview></ClientReview>
      <MessageSend></MessageSend>
      <LatestNews></LatestNews>
      <ProudClient></ProudClient>
      <Footer></Footer>
    </div>
  );
};

export default Home;
