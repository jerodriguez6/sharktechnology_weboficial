import { TwitterSVG, InstagramSVG, LinkedinSVG, FacebookSVG } from "components/SVG";
import React from "react";
import { Link } from "react-router-dom";
import {
    FooterAll, FooterOut, FooterPart, FooterTop, FooterLogoImg, FooterNav, FooterItem, SocialIconDiscordImg, SocialIconInstaImg, SocialIconOpenseaImg, SocialIconTwitterImg, SocialItems, FooterBottom, FBLeft, FBRight, FBItem, SocialIcon,
} from "./footer.style";
const FooterContainer = () => {
    return (
        < FooterAll>
            <FooterOut>
                <FooterPart>
                    <FooterTop>
                        <FooterLogoImg src='img/blanc.png' alt='' />

                        <SocialItems>
                            <a href='https://twitter.com/SHARKTECHNOLOG2' target={'_blank'}>
                                <SocialIcon><TwitterSVG fill="white" /></SocialIcon>
                            </a>
                            <a href='https://www.instagram.com/shark_technology_dev/?hl=en' target={'_blank'}>
                                <SocialIcon><InstagramSVG fill="white" /></SocialIcon>
                            </a>
                            <a href='https://www.facebook.com/sharktechnologyengineers' target={'_blank'}>
                                <SocialIcon><FacebookSVG fill="white" /></SocialIcon>
                            </a>
                            <a href="https://www.linkedin.com/company/sharktechnology-engineers/" target={'_blank'}>
                                <SocialIcon><LinkedinSVG fill="white" /></SocialIcon>
                            </a>
                        </SocialItems>
                    </FooterTop>
                    <FooterBottom>
                        <FBLeft>© 2021 SHARK TECHNOLOGY - Engineers. All rights reserved.</FBLeft>
                        <FBLeft>E-mail: info@sharktechnology.dev</FBLeft>
                        <FBRight>
                            <Link to='/privacy'>
                                <FBItem>Privacy</FBItem>
                            </Link>
                            <FBItem>Terms</FBItem>
                            {/* <FBItem>Do Not Sell My Info</FBItem> */}
                        </FBRight>
                    </FooterBottom>
                </FooterPart>
            </FooterOut>
        </FooterAll>
    );
};
export default FooterContainer;
