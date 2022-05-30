import styled from "styled-components";

export const MintPartOut = styled.div`
  background: url("img/savedback.png") no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MintMainOut = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;
export const MintMain = styled.div`
  width: auto;
  height: fit-content;
  padding: 80px 66px;
  position: relative;
  max-width: 500px;
  border-radius: 20px;
  background-color: #fff;
  @media screen and (max-width: 660px) {
    padding: 80px 40px;
    margin: 10px;
  }
`;
export const SavedTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 78px;
  line-height: 80px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2e1e00;
  span {
    z-index: 2;
    position: relative;
    ::after {
      content: url("img/yellowline.svg");
      z-index: -1;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 210px;
      overflow: hidden;
      @media screen and (max-width: 660px) {
        width: 135px;
      }
      @media screen and (max-width: 400px) {
        width: 105px;
        bottom: -3px;
      }
    }
  }
  @media screen and (max-width: 660px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media screen and (max-width: 400px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
export const SavedText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 15px;
  line-height: 28px;
  text-align: center;
  color: #625744;
`;
export const Btn = styled.div`
  width: 243px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  height: 64px;
  background: #ffd600;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 12px;
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  transition: all 0.3s;
  color: #2e1e00;
  .discordIcon {
    margin-right: 10px;
    font-size: 20px;
  }
  :hover {
    background-color: #2e1e00;
    color: #ffd600;
  }
`;
export const SaveBunnyImg = styled.img`
  position: absolute;
  width: 105px;
  top: 0px;
  transition: all 0.5s;
`;
