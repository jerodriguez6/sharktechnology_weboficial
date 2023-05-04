import styled from "styled-components";

export const TitlePartOut = styled.div`
  width: 100%;
  display: flex;
  z-index: 9;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    z-index: -1;
    width: 95%;
    margin-left: 7px;
  }
`;
export const TitlePart = styled.div`
  width: calc(1440px + (100% - 1440px) / 2);
  margin-top: 143px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1480px) {
    width: 95%;
  }
  @media screen and (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const TLeft = styled.div`
  @media screen and (max-width: 1140px) {
    width: 95%;
  }
`;
export const RightOut = styled.div`
  @media screen and (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
export const SaveBunniText = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 110px;
  line-height: 110px;
  letter-spacing: -0.02em;
  color: #0d0ae5;
  width: 460px;
  span {
    z-index: 2;
    position: relative;
    ::after {
      content: url("img/yellowline.svg");
      z-index: -1;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen and (max-width: 1140px) {
        bottom: -10px;
      }
      @media screen and (max-width: 1000px) {
        width: 180px;
        overflow: hidden;
      }
      @media screen and (max-width: 750px) {
        width: 130px;
      }
      @media screen and (max-width: 570px) {
        width: 100px;
      }
      @media screen and (max-width: 410px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: center;
    span {
      padding-right: 16px;
    }
  }
  @media screen and (max-width: 1000px) {
    font-size: 80px;
  }
  @media screen and (max-width: 750px) {
    font-size: 60px;
  }
  @media screen and (max-width: 570px) {
    font-size: 45px;
    line-height: 60px;
  }
  @media screen and (max-width: 410px) {
    text-align: center;
    flex-direction: column;
    line-height: 45px;
  }
`;
export const SaveBunniSub = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  font-size: 18px;
  margin-top: 15px;
  width: 510px;
  line-height: 28px;
  color: #000000;
  @media screen and (max-width: 1140px) {
    width: 100%;
    text-align: center;
  }
`;
export const SaveBunniBtnRight = styled.div`
  background: #ffd600;
  width: 239px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 12px;
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  line-height: 24px;
  color: #2e1e00;
  :hover {
    color: #ffd600;
    background-color: #2e1e00;
    cursor: pointer;
  }
`;
export const SaveBunniBtns = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;
  align-items: center;
  @media screen and (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;
export const TRight = styled.img`
  @media screen and (max-width: 1330px) {
    width: 50vw;
  }
  @media screen and (max-width: 1140px) {
    width: 60%;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    z-index: 2;
    width: 350px;
  }
  @media screen and (max-width: 700px) {
    z-index: 2;
    width: 350px;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    z-index: 2;
    width: 350px;
    margin: 0 auto;
  }
`;
export const SaveBunniBtnLeft = styled.div`
  background: #ffffff;
  border: 2px solid #ddedc9;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #625744;
  padding: 15px 0 0 23px;
  width: 160px;
  height: 78px;
  span {
    font-family: "Luckiest Guy";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2e1e00;
  }
`;
