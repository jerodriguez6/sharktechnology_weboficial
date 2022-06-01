import { useState } from "react";
import {RiBarChartHorizontalFill} from "react-icons/ri";
import { Link } from "react-router-dom";
import {
    HeaderOut, LogoImg, NavMenu,HeaderBody, NavItem, SocialIconDiscordImg,SocialIconInstaImg,SocialIconOpenseaImg,SocialIconTwitterImg, SocialItems,ResBarMenu,ResNavMenu,ResSocialItems,
} from "./not.style";
const HeaderContainer = () => {
    const [resflag,setresflag] = useState(false);
    return (
        <HeaderOut className='headerout'>
            <HeaderBody>
            <Link to='/'>
                <LogoImg src='img/logo.png' alt='' />
            </Link>
            <NavMenu>
                <a href='#story'>
                    <NavItem>ABOUT</NavItem>
                </a>
                <a href='#benefit'>
                    <NavItem>BeNeFITS</NavItem>
                </a>
                <a href='#roadmap'>
                    <NavItem>ROADMAP</NavItem>
                </a>
                <a href='#team'>
                    <NavItem>TeAM</NavItem>
                </a>
                <a href='#faq'>
                    <NavItem>FAQ</NavItem>
                </a>
            </NavMenu>
            <SocialItems>
            <a href='https://twitter.com/SHARKTECHNOLOG2' target={'_blank'}>
                    <SocialIconTwitterImg src='img/twitter.svg' alt='' item='twitter.svg'/>
                </a>
                <a href='https://www.instagram.com/shark_technology_dev/?hl=en' target={'_blank'}>
                    <SocialIconInstaImg src='img/instagram.svg' alt='' item='instagram.svg'/>
                </a>
                <a href='https://discord.gg/Ab433VcrVU' target={'_blank'}>
                    <SocialIconDiscordImg src='img/discord.svg' alt='' item='discord.svg'/>
                </a>
                <a href="https://opensea.io/collection/save-the-bunnies-1" target={'_blank'}>
                    <SocialIconOpenseaImg src='img/opensea.svg' alt='' item='opensea.svg'/>
                </a>
            </SocialItems>
            <RiBarChartHorizontalFill className="resIcon" onClick={()=>setresflag(!resflag)}/>
            {resflag && 
                <ResBarMenu>
                    <ResNavMenu>
                    <a href='#story'>
                        <NavItem>ABOUT</NavItem>
                    </a>
                    <a href='#benefit'>
                        <NavItem>BeNeFITS</NavItem>
                    </a>
                    <a href='#roadmap'>
                        <NavItem>ROADMAP</NavItem>
                    </a>
                    <a href='#team'>
                        <NavItem>TeAM</NavItem>
                    </a>
                    <a href='#faq'>
                        <NavItem>FAQ</NavItem>
                    </a>
                    </ResNavMenu>
                    <ResSocialItems>
                    <a href='https://twitter.com/SHARKTECHNOLOG2' target={'_blank'}>
                    <SocialIconTwitterImg src='img/twitter.svg' alt='' item='twitter.svg'/>
                </a>
                <a href='https://www.instagram.com/shark_technology_dev/?hl=en' target={'_blank'}>
                    <SocialIconInstaImg src='img/instagram.svg' alt='' item='instagram.svg'/>
                </a>
                <a href='https://discord.gg/Ab433VcrVU' target={'_blank'}>
                    <SocialIconDiscordImg src='img/discord.svg' alt='' item='discord.svg'/>
                </a>
                <a href="https://opensea.io/collection/save-the-bunnies-1" target={'_blank'}>
                    <SocialIconOpenseaImg src='img/opensea.svg' alt='' item='opensea.svg'/>
                </a>
                    </ResSocialItems>
                </ResBarMenu>
            }
            </HeaderBody>
        </HeaderOut>
    );
};
export default HeaderContainer;
