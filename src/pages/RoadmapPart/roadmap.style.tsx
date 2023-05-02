import styled from "styled-components";

export const RoadMapContenedor = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  margin-right: 15px;
  padding-top: 112px;
  padding-bottom: 50px;
  justify-content: center;
  background: #fff;
`;
export const RoadMapOut = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  margin-right: 15px;
  padding-top: 112px;
  justify-content: center;
  background: #fff;
`;
export const Roadmap = styled.div`
  margin-left: 20px;
  width: 90%;
  @media screen and (max-width: 1533px) {
    width: 90%;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
  }
`;
export const RoadmapTitle = styled.div`
  margin-left: 30px;
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 78px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #0d0ae5;
  z-index: 1;
  position: relative;
  ::after {
    content: url("img/roadmapline.svg");
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -13px;
  }
  @media screen and (min-width: 1920px) {
    z-index: -1;
    width: 100%;
    margin left: 100px;
  }
`;
export const RoadmapFirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1534px) {
    width: 90%;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
  }
`;
export const RoadmapFirstPart = styled.div<{ mt?: any }>`
  display: flex;
  align-items: center;
  margin-top: ${(props: any) => props.mt};
`;
export const RoadCard = styled.div`
  display: flex;
  background: #00adff;
  width: 500px;
  border-radius: 30px;

  @media screen and (min-width: 100px) {
    width: 100%;
  }
  @media screen and (max-width: 1300px) {
    padding: 30px 50px 30px 30px;
  }
  @media screen and (max-width: 1100px) {
    padding: 30px 0 20px 0;
  }
  @media screen and (max-width: 850px) {
    margin-right: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const RoadProImg = styled.img`
  margin-right: 74px;
  @media screen and (max-width: 1300px) {
    margin-right: 40px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 850px) {
    width: 162px;
    margin-right: 0;
    margin-left: 0;
  }
`;
export const RoadCardRight = styled.div`
  width: 504px;
  padding: 40px 0 40px 0px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 850px) {
    margin-right: 0;
    width: 95%;
  }
`;
export const RoadRightText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-top: 12px;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;
export const RoadRightTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 42px;
  color: #ffd600;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
export const RoadmapFirstRight = styled.img`
  display: block;
  width: 420px;
  animation: rotate 0.5s infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 1534px) {
    display: none;
  }
  @media screen and (min-width: 1920px) {
    display: flex;
  }
`;
export const RoadmapSecPart = styled.div`
  display: flex;
  margin-top: 28px;
  align-items: center;
  justify-content: space-between;
`;
export const RoadmapSecLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1534px) {
    width: 90%;
  }
`;
export const RoadmapSecRight = styled.img`
  width: 400px;
  animation: rotate 0.5s infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media screen and (max-width: 1534px) {
    margin-right: 30px;
    margin-left: 0;
  }
  @media screen and (max-width: 1230px) {
    width: 350px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 1534px) {
    display: none;
  }
`;
export const RoadSecCard = styled.div`
  display: flex;
  padding: 52px 0 52px 74px;
  background: #00adff;
  width: 980px;
  border-radius: 30px;
  @media screen and (max-width: 1534px) {
    padding: 52px 0;
    width: 100%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const RoadSecProImg = styled.img`
  margin-right: 74px;
  @media screen and (max-width: 1534px) {
    margin-right: 30px;
    margin-left: 20px;
  }
  @media screen and (max-width: 850px) {
    width: 162px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const RoadSecCardRight = styled.div`
  width: 504px;
  @media screen and (max-width: 1534px) {
    width: 100%;
    margin-right: 20px;
  }
  @media screen and (max-width: 850px) {
    margin-right: 0;
    width: 95%;
  }
`;
export const RoadSecRightTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 42px;
  color: #0931b5;
`;
export const RoadSecRightText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-top: 12px;
  font-size: 18px;
  line-height: 28px;
  color: #625744;
`;
export const RoadVideoMid = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  height: 500px;
  margin-bottom: 100px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 500px;
  }
  @media screen and (min-width: 801px) {
    width: 80%;
    height: 500px;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
    height: 800px;
  }

  @media screen and (min-width: 1920px) {
    margin: auto;
    width: 100%;
    height: 800px;
  }
`;

export const RoadmapFirstRightOut = styled.div``;
