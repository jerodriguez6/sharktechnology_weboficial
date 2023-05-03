import styled from "styled-components";

interface ImgProps {
    transform: number
}
export const ContainerPart = styled.div`
    width: 100%;
    overflow-x: hidden;
`;
export const BunniPart = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background color: url('img/topback.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom: 50px;
    z-index: 100;
    @media screen and (max-width:850px){
        background: url('img/marea.png');
        z-index: 100;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    @media screen and (max-width: 600px) {
        z-index: 100;
        // Aquí puedes agregar tus estilos para max-width: 600px
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    @media screen and (max-width: 470px) {
        z-index: 100;
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
`;

export const FloatingWhatsApp = styled.div`
    position:absolute; 
    z-index: 100;
    @media screen and (max-width:850px){
        margin-left: 200px;
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    @media screen and (max-width: 600px) {
        margin-left: 150px;
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    @media screen and (max-width: 470px) {
        margin-left: 100px;
        background: url('img/marea.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
`;

export const MountainImg = styled.img<ImgProps>`
    position: absolute;
    left: 0;
    /* height: 350px; */
    object-fit: cover;
    /* transition: all 1.2s; */
    width: 100%;
    bottom: -200px;
    @media screen and (max-width:850px){
        display: none;
    }
    @media screen and (min-width:1366px){
        display: none;
    }
`;

export const GrassImg = styled.img`
    position: absolute;
    left: 0;
    /* height: 350px; */
    object-fit: cover;
    /* transition: all 1.2s; */
    width: 100%;
    bottom: -200px;
    @media screen and (max-width:850px){
        display: none;
    }
`;

export const CloudImg = styled.img`
    position: absolute;
    top: 500px;
    /*transition: all 1s;*/
    @media screen and (max-width:850px){
        display: none;
    }
    @media screen and (max-width:450px){
        display: none;
        margin-buttom: 200px;
        margin-right: 130px;
    }
`;