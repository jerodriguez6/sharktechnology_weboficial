import styled from "styled-components";

interface FaqFlag {
  flag: boolean;
}

export const FAQOut = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 112px;
`;
export const FAQPart = styled.div`
  display: flex;
  width: 1440px;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1480px) {
    width: 95%;
  }
`;
export const FAQLeft = styled.div`
  width: 100%;
  position: relative;
`;
export const FAQTitle = styled.div`
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
    content: url("img/faqline.svg");
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: -13px;
  }
`;
export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
  @media screen and (max-width: 1480px) {
    width: 100%;
  }
`;
export const FAQItem = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 864px;
  padding: 20px 28px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #101828;
  :hover {
    color: rgb(255, 135, 0);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media screen and (max-width: 1480px) {
    width: 95%;
    padding: 20px 0;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
    margin-right: 20px;
    line-height: 22px;
  }
`;
export const PlusImg = styled.img<FaqFlag>`
  margin-right: 19.94px;
  transition: all 0.3s;
  transform: rotate(${(props: any) => props.flag && "-45deg"});
  @media screen and (max-width: 1480px) {
    margin-left: 20px;
  }
`;
export const FAQRight = styled.img`
  width: 500px;
  @media screen and (max-width: 1110px) {
    display: none;
  }
`;
export const FAQBody = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-left: 52px;
  font-size: 16px;
  line-height: 23px;
  margin-top: 15px;
  color: #625744;
  @media screen and (max-width: 1480px) {
    margin-left: 72px;
    margin-right: 15px;
  }
`;
export const FAQMain = styled.div`
  display: flex;
  align-items: center;
`;
