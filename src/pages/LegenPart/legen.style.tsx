import styled from "styled-components";

export const LegenContenedo = styled.div`
    background: #fff
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 10;
`;
export const LegenOut = styled.div`
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100vw;
    display: flex;
    padding-top: 80px;
    padding-bottom: 80px;
    justify-content: center;
`;
export const LegenPart = styled.div`
    z-index: 3;
    width: 1440px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: 69px;
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
        font-size: 50px;
    }
    @media screen and (max-width:490px){
        font-size: 38px;
    }
    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: -17px;
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
