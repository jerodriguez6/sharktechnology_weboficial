import styled from "styled-components";

export const MintPartOut = styled.div`
  background: url("img/marea.jpg") no-repeat;
  z-index: -1;
  background-position: center;
  background-size: 100% 100%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    height: fit-content;
    padding: 100px 0;
  }
`;
export const MintMain = styled.div`
  width: auto;
  height: fit-content;
  padding: 66px;
  border-radius: 20px;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 30px;
  }
`;
export const MintBuyPart = styled.div`
  margin-bottom: 50px;
  display: flex;
  gap: 50px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const MintValuePart = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const MintBuyLeft = styled.div`
  width: 340px;
  position: relative;
  height: 340px;
  border-radius: 20px;
  background: url("img/mintbunny.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
  @media screen and (max-width: 430px) {
    width: 300px;
    height: 300px;
  }
`;
export const MintBuyRight = styled.div``;
export const MintValueItem = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const MintTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #625744;
`;
export const MintValue = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  margin-top: 5px;
  font-size: 26px;
  line-height: 30px;
  color: #2e1e00;
`;
export const MintTotalCounter = styled.div`
  position: absolute;
  width: 98px;
  height: 44px;
  background: #eaecf0;
  border-radius: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  bottom: 0;
  left: 0;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d2939;
`;
export const MintRightTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 54px;
  text-align: center;
  color: #2e1e00;
  @media screen and (max-width: 430px) {
    font-size: 35px;
  }
`;
export const MintPrice = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  margin-top: 20px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #2e1e00;
`;
export const MintCounter = styled.div`
  display: flex;
  margin-top: 20px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  height: 72px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dedfe3;
  overflow: hidden;
`;
export const MintMinus = styled.div`
  height: 100%;
  min-width: 72px;
  border-right: 1px solid #dedfe3;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
export const MintNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #2e1e00;
  align-items: center;
`;
export const MintPlus = styled.div`
  height: 100%;
  min-width: 72px;
  cursor: pointer;
  border-left: 1px solid #dedfe3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MintBtn = styled.div`
  background: #ffd600;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 12px;
  width: 100%;
  height: 64px;
  margin-top: 20px;
  font-family: "Luckiest Guy";
  font-style: normal;
  transition: all 0.3s;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 24px;
  color: #2e1e00;
  :hover {
    background-color: #2e1e00;
    color: #ffd600;
  }
`;
export const MinusImg = styled.img``;
