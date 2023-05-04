import styled from "styled-components";

export const LegenContenedor = styled.div`
z-index: 1;
width: 100%;
display: flex;
padding-top: 112px;
padding-bottom: 50px;
justify-content: center;
background: #fff;
`;
export const LegenOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 650px) {
        margin-left: -50px;
}
`;
export const LegenPart = styled.div`
    z-index: 3;
    width: 1440px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
    @media screen and (max-width: 700px) {
        width: 90%;
        margin-left: 10px;
      }
    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: 20px;
}
`;
export const LegenTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #0d0ae5;
    z-index: 2;
    margin-bottom: 40px;
    position: relative;
    ::after{
        content: url('img/legenline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
        @media screen and (max-width:930px){
            width: 450px;
            overflow: hidden;
        }
        @media screen and (max-width:490px){
            width: 345px;
        }
    }
    @media screen and (max-width:930px){
        font-size: 60px;
    }
    @media screen and (max-width:600px){
        font-size: 70px;
        margin-left: 20px;
    }
    @media screen and (max-width:490px){
        font-size: 66px;
        margin-left: 20px;
    }
    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: 10px;
      }
`;
export const LegenImg = styled.img`
    z-index: 99;
`;
export const LegenItem = styled.div`
    padding: 12px 12px 24px;
    background-color: #fff;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.05), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: 30px;
    @media screen and (max-width: 700px) {
        width: 90%;
      }
`;
export const LegenName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    margin-top: 18px;
    font-size: 24px;
    line-height: 34px;
    color: #2E1E00;
`;
