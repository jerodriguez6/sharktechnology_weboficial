import styled from "styled-components";

export const StoryPartOut = styled.div`
  background: url("img/fondo.jpg");
  background-position: center;
  background-size: 100% 100%;
  margin-top: -5px;
  position: relative;
  padding: 112px 0;
  display: flex;
  width: 100vw;
  justify-content: center;
`;
export const StoryPart = styled.div`
  width: 1440px;
  @media screen and (max-width: 1480px) {
    width: 95%;
  }
`;
export const OurStory = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 25px;
  color: #ffd600;
  @media screen and (max-width: 970px) {
    width: 100%;
    text-align: center;
  }
`;
export const MainStory = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;
export const StoryLeft = styled.div``;
export const StoryText = styled.div`
  font-family: "Inter";
  font-style: normal;
  width: 418px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  span {
    color: #ffd600;
  }
  @media screen and (max-width: 1100px) {
    width: 300px;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;
export const StoryTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  width: 636px;
  @media screen and (max-width: 1230px) {
    width: 500px;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 33px;
    line-height: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 35px;
  }
`;
export const StorySub = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-top: 25px;
  color: #ffffff;
  width: 636px;
  @media screen and (max-width: 1230px) {
    width: 500px;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    text-align: center;
  }
`;
export const StoryRightItem = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const StoryImg = styled.img`
  margin-right: 32px;
  @media screen and (max-width: 600px) {
    width: 50px;
    margin-right: 20px;
  }
`;
export const StoryRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media screen and (max-width: 970px) {
    margin-top: 50px;
  }
`;
