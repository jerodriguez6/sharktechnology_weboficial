import styled from "styled-components";

export const LegenOu = styled.div`
    z-index: 1;
    background: #fff;
    width: 100vw;
    display: flex;
    justify-content: center;
`;
export const LegenPart = styled.div`
    width: 1440px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
`;
export const LegenTitle = styled.div`
    padding-top: 100px;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #0d0ae5;
    z-index: 2;
    margin-bottom: 110px;
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
`;
export const LegenImg = styled.img`
`;
export const LegenItem = styled.div`
    padding: 12px 12px 24px;
    background-color: #fff;
    box-shadow: 12 px 12px 12px 16px -4px rgba(16, 24, 40, 0.05), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: 30px;
`;
export const LegenName = styled.div`
    font-family: 'Inter';
    font-style: bold;
    font-weight: bold;
    margin-top: 18px;
    font-size: 17px;
    line-height: 34px;
    color: #564B37;
`;
