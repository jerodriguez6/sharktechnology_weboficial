import styled from "styled-components";

interface ImgProps {
    transform: number
}

export const BunniPart = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    background color: url('img/topback.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom: 50px;
    @media screen and (max-width:850px){
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;
export const MountainImg = styled.img<ImgProps>`
    position: absolute;
    left: 0;
    /* height: 500px; */
    width: 100vw;
    bottom: -200px;
    transform: ${(props: ImgProps) => `translate3d(0px, ${props.transform}px, 0px)`};
    /* transition: all .1s; */
    @media screen and (max-width:850px){
        display: none;
    }
`;
export const GrassImg = styled.img`
    position: absolute;
    left: 0;
    /* height: 350px; */
    object-fit: cover;
    /* transition: all 1.2s; */
    width: 100vw;
    bottom: -200px;
    @media screen and (max-width:850px){
        display: none;
    }
`;
export  const CloudImg = styled.img`
    position: absolute;
    top: 300px;
    /* transition: all 1s; */
    @media screen and (max-width:850px){
        display: none;
    }
`;
