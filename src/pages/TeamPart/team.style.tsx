import styled from "styled-components";

export const TeamOut = styled.div`
  z-index: 1;
  width: 95%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
export const TeamPart = styled.div`
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
  margin-left: 40px;
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
  /*@media screen and (max-width: 400px) {
    width: 90%;
    //margin-left: -28px;
  }*/
`;
export const TeamBody = styled.div`
  display: flex;
  gap: 48px;
  margin: 20px;
  @media screen and (max-width: 1010px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 1366px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`;
export const TeamItem = styled.div`
  @media screen and (max-width: 1010px) {
    width: 294px;
  }
  @media screen and (max-width: 1366px) {
    width: 250px;
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
  margin-left: -20px; 
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 294px;
  color: #000;
`;
