import React, { useEffect, useState } from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  TwitterSVG,
  DiscordSVG,
  OpenseaSVG,
  InstagramSVG,
} from "components/SVG";
import { Link } from "react-router-dom";
import {
  HeaderOut,
  LogoImg,
  NavMenu,
  HeaderBody,
  SocialIcon,
  NavItem,
  SocialItems,
  ResBarMenu,
  ResNavMenu,
  ResSocialItems,
  SocialIconDiscordImg,
  SocialIconInstaImg,
  SocialIconOpenseaImg,
  SocialIconTwitterImg,
} from "./header.style";
const HeaderContainer = () => {
  const [resflag, setresflag] = useState(false);
  const handleScroll = () => {
    const headerObj: any = document.querySelector(".headerout");
    if (window.scrollY > 0) {
      headerObj.classList.add("bg-color-white");
    } else {
      headerObj.classList.remove("bg-color-white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderOut className="headerout">
      <HeaderBody>
        <Link to="/">
          <LogoImg src="img/logo.png" alt="" />
        </Link>
        <NavMenu>
          <a href="#story">
            <NavItem>OuR STORY</NavItem>
          </a>
          <a href="#benefit">
            <NavItem>BeNeFITS</NavItem>
          </a>
          <a href="#roadmap">
            <NavItem>ROADMAP</NavItem>
          </a>
          <a href="#team">
            <NavItem>TeAM</NavItem>
          </a>
          <a href="#faq">
            <NavItem>FAQ</NavItem>
          </a>
        </NavMenu>
        <SocialItems>
          <a href="https://twitter.com/savebunniesnft" target={"_blank"}>
            <SocialIcon>
              <TwitterSVG fill="#000" />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com/savebunniesnft" target={"_blank"}>
            <SocialIcon>
              <InstagramSVG fill="#000" />
            </SocialIcon>
          </a>
          <a href="https://discord.gg/Ab433VcrVU" target={"_blank"}>
            <SocialIcon>
              <DiscordSVG fill="#000" />
            </SocialIcon>
          </a>
          <a
            href="https://opensea.io/collection/save-the-bunnies-1"
            target={"_blank"}
          >
            <SocialIcon>
              <OpenseaSVG fill="#000" />
            </SocialIcon>
          </a>
        </SocialItems>
        <RiBarChartHorizontalFill
          className="resIcon"
          onClick={() => setresflag(!resflag)}
        />
        {resflag && (
          <ResBarMenu>
            <ResNavMenu>
              <a href="#story">
                <NavItem>OuR STORY</NavItem>
              </a>
              <a href="#benefit">
                <NavItem>BeNeFITS</NavItem>
              </a>
              <a href="#roadmap">
                <NavItem>ROADMAP</NavItem>
              </a>
              <a href="#team">
                <NavItem>TeAM</NavItem>
              </a>
              <a href="#faq">
                <NavItem>FAQ</NavItem>
              </a>
            </ResNavMenu>
            <ResSocialItems>
              <a href="https://twitter.com/savebunniesnft" target={"_blank"}>
                <SocialIcon>
                  <TwitterSVG fill="#000" />
                </SocialIcon>
              </a>
              <a
                href="https://www.instagram.com/savebunniesnft"
                target={"_blank"}
              >
                <SocialIcon>
                  <InstagramSVG fill="#000" />
                </SocialIcon>
              </a>
              <a href="https://discord.gg/Ab433VcrVU" target={"_blank"}>
                <SocialIcon>
                  <DiscordSVG fill="#000" />
                </SocialIcon>
              </a>
              <a
                href="https://opensea.io/collection/save-the-bunnies-1"
                target={"_blank"}
              >
                <SocialIcon>
                  <OpenseaSVG fill="#000" />
                </SocialIcon>
              </a>
            </ResSocialItems>
          </ResBarMenu>
        )}
      </HeaderBody>
    </HeaderOut>
  );
};
export default HeaderContainer;
