import styled from "styled-components";

export const TeamContenedo = styled.div`
  background: #fff
  z-index: 1;
  width: 100%;
  display: flex;
  margin-right: 15px;
  padding-top: 112px;
  padding-bottom: 50px;
  justify-content: center;
  background: #fff;
`;
export const TeamOut = styled.div`
margin-top: 100px;
  background: #fff
  z-index: 1;
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
export const TeamPart = styled.div`
  margin-left: -20px;
  z-index: 1;
  width: 1440px;
  @media screen and (max-width: 1480px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const TeamTitle = styled.div`
  margin-left: 30px;
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 35px;
  font-size: 78px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #0d0ae5;
  z-index: 2;
  position: relative;
  ::after {
    content: url("img/teamline.svg");
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: -13px;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    margin-left: 20px;
  }
`;
export const TeamBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px;
  margin-left: 50px;
  @media screen and (max-width: 1010px) {
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 1366px) {
    justify-content: center;
    text-align: center;
  }
`;
export const TeamItem = styled.div`
  width: 250px;
  margin: 0 15px;
  @media screen and (max-width: 1010px) {
    margin: 0 15px 30px 15px;
  }
  @media screen and (max-width: 1366px) {
    margin: 0 15px 30px 15px;
  }
`;
export const TeamImg = styled.img`
   width: 250px;
   height:250px;
`;

export const TeamItemName = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  margin: 28px 0 12px 0;
  font-size: 38px;
  line-height: 42px;
  color: #000;
`;
export const TeamItemText = styled.div`
  margin-left: -22px; 
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 294px;
  color: #000;
`;
