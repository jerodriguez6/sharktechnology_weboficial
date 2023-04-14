import React, { useEffect, useState } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import FloatingWhatsApp from 'react-floating-whatsapp';
// --------------layer----------------
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// ---------------------pages------------------
import TitlePart from "./TitlePart";
import TimerPart from "./TimerPart";
import StoryPart from "./StoryPart";
import BenefitPart from "./BenefitPart";
import RoadmapPart from "./RoadmapPart";
import LegenPart from "./LegenPart";
import TeamPart from "./TeamPart";
import FAQPart from "./FAQPart";
import SavePart from "./SavePart";

import { BunniPart, MountainImg, GrassImg, CloudImg } from "./main.style";
import Slider from "./Slide";
import Blog from "./Blog";
const MainPage: React.FC = () => {
  const isTabletMode = useMediaQuery("(max-width: 1500px)");
  const [className, setClassName] = useState("");
  const [backscrollstate, setBackscroll] = useState(0);
  const handleScroll = () => {
    if (window.innerWidth <= 1500) setBackscroll(window.scrollY * -0.12);
    else {
      setBackscroll(window.scrollY * -0.25);
    }
  };
  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    const mountain: any = document.querySelector("#mountain");
    const grass: any = document.querySelector("#grass");
    const cloud: any = document.querySelector("#cloud");
    mountain.style.bottom = 0;
    mountain.style.transition = "all .8s";
    grass.style.bottom = "0";
    grass.style.transition = "all 1.2s";
    cloud.style.top = "100px";
    cloud.style.transition = "all 1.2s";
    setTimeout(() => {
      setClassName("sameClass");
    }, 1200);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <>
      <BunniPart>
        <MountainImg
          className={className}
          src={isTabletMode ? "img/ola.png" : "img/marea.png"}
          transform={backscrollstate}
          alt=""
          id="mountain"
        />
        <FloatingWhatsApp
          className={className}
          phoneNumber='573175090528'
          accountName='Shark'
          allowClickAway
          notification
          notificationDelay={60000}
          darkMode
        />

        <GrassImg
          className={className}
          src="img/marea.png"
          alt=""
          id="grass"
        />
        <CloudImg className={className} src="img/tibu.png" alt="" id="cloud" />
        <Header />
        <TitlePart />
        <TimerPart />
      </BunniPart>
      <StoryPart />
      <Blog />
      <BenefitPart />
      <RoadmapPart />
      <LegenPart />
      <TeamPart />
      <Slider />
      <FAQPart />
      <SavePart />
      <Footer />



    </>

  );
};
export default MainPage;
