import styled from "styled-components";

export const FooterAll = styled.div`
    width: 100%;
    display: flex;
    z-index: 1;
    @media screen and (min-width:400px){
        z-index: 5;
    }
`;

export const FooterOut = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: url('img/more.jpg');
    background-repeat: no-repeat;
    padding: 48px 0 30px 0;
    background-position: center;
    background-size: 100% 100%;
    margin-top: -10px;
    @media screen and (min-width:550px){
        z-index: 199;
    }
`;
export const SocialIconImg = styled.img`
    cursor: pointer;
    width: 24px;
`;
export const SocialItems = styled.div`
    display: flex;
    gap: 24px;
`;
export const FooterPart = styled.div`
    z-index: 1;
    width: 1440px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
`;
export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:920px){
        flex-direction: column;
        gap: 30px;
    }
    @media screen and (max-width: 400px){
        margin-left: 40px;
    }
`;
export const FooterLogoImg = styled.img`

`;
export const FooterNav = styled.div`
    display: flex;
    gap: 40px;
    @media screen and (max-width:550px){
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
`;
export const FooterItem = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    color: #FFFFFF;
    :hover{
        color: rgb(165,175,153);
    }
    @media screen and (max-width:550px){
        width: 90px;
        text-align: center;
    }
`;
export const FooterBottom = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:770px){
        flex-direction: column;
        gap: 10px;
    }
    @media screen and (max-width: 400px){
        margin-left: 40px;
    }
`;
export const FBLeft = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    transition: all .3s ease-in-out;
    line-height: 26px;
    color: rgb(165,175,153);
    :hover{
        color: #fff;
    }
`;
export const FBRight = styled.div`
    display: flex;
    gap: 24px;
`;
export const FBItem = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    color: rgb(165,175,153);
    :hover{
        color: #fff;
    }
`;

export const SocialIconDiscordImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/footer-hover/footerdiscord.svg');
    }
`;
export const SocialIconInstaImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/footer-hover/footerinstagram.svg');
    } 
`;
export const SocialIconOpenseaImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/footer-hover/footeropensea.svg');
    }
`;
export const SocialIconTwitterImg = styled.img`
    cursor: pointer;
    :hover{
        content: url('img/footer-hover/footertwitter.svg');
    } 
`;

export const SocialIcon = styled.div`
    :hover {
        svg {
            fill: rgb(137,187,77);
        }
    }
`