import styled from "styled-components";

export const SaveAll = styled.div`
    width: 100%;
    display: flex;
    z-index: 1;
    @media screen and (max-width:600px){
    }
    @media (max-width: 400px) {
        margin-left: 20px;
      }
`;
export const SaveOut = styled.div`
    z-index: 2;
    background: url('img/stor.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding: 145px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width:600px){
        height: 90%;
    }
`;
export const SavePart = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SaveTitle = styled.div`
    margin-top: -90px;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    @media screen and (max-width:780px){
        font-size: 50px;
    }
    @media screen and (max-width:500px){
        font-size: 40px;
    }
`;
export const SaveBtn = styled.div`
    width: 226px;
    height: 64px;
    background: #FFD600;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 12px;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    transition: all .3s ease-in-out;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    color: #2E1E00;
    margin-top: 20px;
    :hover{
        color: #FFD600;
        background-color: #2E1E00;
    }
`;
