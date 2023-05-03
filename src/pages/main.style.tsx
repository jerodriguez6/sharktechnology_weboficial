import styled from "styled-components";

interface ImgProps {
  transform: number;
}

export const ContainerPart = styled.div`

  overflow-x: hidden;
`;

export const BunniPart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("img/topback.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-bottom: 50px;
  z-index: 100;

  @media screen and (max-width: 850px) {
    background-image: url("img/marea.png");
  }

  @media screen and (max-width: 600px) {
    background-image: url("img/marea.png");
  }

  @media screen and (max-width: 470px) {
    background-image: url("img/marea.png");
  }
`;

export const FloatingWhatsApp = styled.div`
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
`;

export const MountainImg = styled.img<ImgProps>`
  position: absolute;
  left: 0;
  object-fit: cover;
  width: 100%;
  bottom: -200px;

  @media screen and (max-width: 850px) {
    display: none;
  }

  @media screen and (min-width: 1366px) {
    display: none;
  }
`;

export const GrassImg = styled.img`
  position: absolute;
  left: 0;
  object-fit: cover;
  width: 100%;
  bottom: -200px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const CloudImg = styled.img`
  position: absolute;
  top: 500px;

  @media screen and (max-width: 850px) {
    display: none;
  }

  @media screen and (max-width: 450px) {
    display: none;
    margin-bottom: 200px;
    margin-right: 130px;
  }
`;
