import styled from "styled-components";

export const RoadMapOut = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 112px;
  justify-content: center;
`;
export const Roadmap = styled.div`
  width: 1440px;
  @media screen and (max-width: 1480px) {
    width: 95%;
  }
`;
export const RoadmapTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 78px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #2e1e00;
  z-index: 2;
  position: relative;
  ::after {
    content: url("img/roadmapline.svg");
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: -13px;
  }
`;
export const RoadmapFirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1480px) {
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
  padding: 52px 0 52px 74px;
  background: #ffffff;
  width: 980px;
  border-radius: 30px;
  @media screen and (max-width: 1480px) {
    width: 100%;
  }
  @media screen and (max-width: 1300px) {
    padding: 30px 50px 30px 30px;
  }
  @media screen and (max-width: 1100px) {
    padding: 30px 0 20px 0;
  }
  @media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
    width: 162px;
    margin-right: 0;
    margin-left: 0;
  }
`;
export const RoadCardRight = styled.div`
  width: 504px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 700px) {
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
  color: #625744;
`;
export const RoadRightTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 42px;
  color: #2e1e00;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
export const RoadmapFirstRight = styled.img`
  width: 420px;
  margin-left: -30px;
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
  @media screen and (max-width: 1480px) {
    width: 100%;
  }
`;
export const RoadmapSecRight = styled.img`
  margin-left: -50px;
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
  @media screen and (max-width: 1480px) {
    margin-right: 30px;
    margin-left: 0;
  }
  @media screen and (max-width: 1230px) {
    width: 350px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const RoadSecCard = styled.div`
  display: flex;
  padding: 52px 0 52px 74px;
  background: #ffffff;
  width: 980px;
  border-radius: 30px;
  @media screen and (max-width: 1480px) {
    padding: 52px 0;
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const RoadSecProImg = styled.img`
  margin-right: 74px;
  @media screen and (max-width: 1480px) {
    margin-right: 30px;
    margin-left: 20px;
  }
  @media screen and (max-width: 700px) {
    width: 162px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const RoadSecCardRight = styled.div`
  width: 504px;
  @media screen and (max-width: 1480px) {
    width: 100%;
    margin-right: 20px;
  }
  @media screen and (max-width: 700px) {
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
  color: #2e1e00;
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
export const RoadmapFirstRightOut = styled.div``;
