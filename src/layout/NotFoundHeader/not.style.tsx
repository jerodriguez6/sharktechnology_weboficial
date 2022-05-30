import styled from "styled-components";

export const HeaderOut = styled.div `
    width: 100vw;
    display: flex;
    background-color: #fff;
    z-index: 200;
    justify-content: center;
`;
export const HeaderBody = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    z-index: 100;
    position: relative;
    .resIcon{
        font-size : 25px;
        cursor: pointer;
        display:none;
    }
    @media screen and (max-width:1480px){
        width: 95%;
    }
    @media screen and (max-width:950px){
        .resIcon{
            display: flex;
        }
    }
    
`;
export const LogoImg = styled.img `
    width: 50px;
`;
export const NavMenu = styled.div `
    display: flex;
    gap: 40px;
    @media screen and (max-width:950px){
        display: none;
    }
`;
export const NavItem = styled.div `
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    color: #4E7B18;
    :hover{
        color:rgb(137,187,77);
    }
`;

export const SocialIconDiscordImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/header-hover/discord.svg');
    }
`;
export const SocialIconInstaImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/header-hover/instagram.svg');
    } 
`;
export const SocialIconOpenseaImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/header-hover/opensea.svg');
    }
`;
export const SocialIconTwitterImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/header-hover/twitter.svg');
    } 
`;

export const SocialItems = styled.div `
    display: flex;
    gap: 24px;
    @media screen and (max-width:950px){
        display: none;
    }
`;
export const ResBarMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 300px;
    right: 0;
`;
export const ResNavMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
`;
export const ResSocialItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
