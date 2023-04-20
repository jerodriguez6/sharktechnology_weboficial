import React, { useEffect, useState } from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  TwitterSVG,
  FacebookSVG,
  InstagramSVG,
  LinkedinSVG
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
            <NavItem>ABOUT US</NavItem>
          </a>
          <a href="#benefit">
            <NavItem>SERVICES</NavItem>
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
          <Link to="/blog">
            <NavItem>NEWS</NavItem>
          </Link>
        </NavMenu>
        <SocialItems>
          <a href="https://twitter.com/SHARKTECHNOLOG2" target={"_blank"}>
            <SocialIcon>
              <TwitterSVG fill="#000" />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com/shark_technology_dev/?hl=en" target={"_blank"}>
            <SocialIcon>
              <InstagramSVG fill="#000" />
            </SocialIcon>
          </a>
          <a href="https://www.facebook.com/sharktechnologyengineers" target={"_blank"}>
            <SocialIcon>
              <FacebookSVG fill="#000" />
            </SocialIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/sharktechnology-engineers/"
            target={"_blank"}
          >
            <SocialIcon>
              <LinkedinSVG fill="#000" />
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
                <NavItem>ABOUT US</NavItem>
              </a>
              <a href="#benefit">
                <NavItem>SERVICES</NavItem>
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
              <Link to="/blog">
                <NavItem>NEWS</NavItem>
              </Link>
            </ResNavMenu>
            <ResSocialItems>
              <a href="https://twitter.com/SHARKTECHNOLOG2" target={"_blank"}>
                <SocialIcon>
                  <TwitterSVG fill="#000" />
                </SocialIcon>
              </a>
              <a
                href="https://www.instagram.com/shark_technology_dev/?hl=en"
                target={"_blank"}
              >
                <SocialIcon>
                  <InstagramSVG fill="#000" />
                </SocialIcon>
              </a>
              <a href="https://www.facebook.com/sharktechnologyengineers" target={"_blank"}>
                <SocialIcon>
                  <FacebookSVG fill="#000" />
                </SocialIcon>
              </a>
              <a
                href="https://www.linkedin.com/company/sharktechnology-engineers/"
                target={"_blank"}
              >
                <SocialIcon>
                  <LinkedinSVG fill="#000" />
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
