import styled from "styled-components";

export const ParticlesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const ContentWrapper = styled.div`

  position: relative;
  z-index: 0;
`;

export const Benefitcontainer = styled.div`
  /* fallback for old browsers */
  background: #000428;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: -1;
`;
export const BenefitOut = styled.div`
  <video src="img/demo.mp4" width="350" height="280" controls></video>
  background-repeat: no-repeat;
  margin-top: -10px;
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  padding: 112px 0;
  justify-content: center;
  z-index: -1;
`;


export const Benefit = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1480px) {
    width: 95%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    margin-left: 20px;
  }
`;

export const BenefitLeft = styled.div``;

export const BenefitTitle = styled.div`
  font-family: "Luckiest Guy";
  font-style: normal;
  font-weight: 400;
  font-size: 78px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #ffffff;
  z-index: 4;
  position: relative;
  ::after {
    content: url("img/graphic_line.svg");
    z-index: 4;
    position: absolute;
    left: 0;
    bottom: -15px;
  }
`;

export const BenefitUL = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BenefitLi = styled.li`
  width: 400px;
  ::marker {
    color: #ffd600;
    width: 12px;
    height: 12px;
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  @media screen and (max-width: 1230px) {
    width: auto;
  }
`;

export const BenefitRight = styled.img`
  width: 500px;
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 500px) {
    width: 320px;
  }
`;
