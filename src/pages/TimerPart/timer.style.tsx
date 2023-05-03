import styled from "styled-components";

export const TimerPart = styled.div`
@media screen and (max-width: 850px){
    display: none;
    z-index: -10;
}
`;
export const TimerTitle = styled.div`
    z-index: -10;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 33px;
    width: 95%;
    @media screen and (max-width:500px){
        z-index: -10;
        width: 100%;
        margin: 0 10px;
        margin-bottom: 33px;
    }
`;
export const TimeBody = styled.div`
z-index: -10;
    display: flex;
    gap: 80px;
    @media screen and (max-width:550px){
        z-index: -10;
        gap: 50px;
    }
    @media screen and (max-width:470px){
        z-index: -10;
        gap: 30px;
        justify-content: center;
    }
    @media screen and (max-width:400px){
        z-index: -10;
        gap: 15px;
    }
`;
export const TimeItem = styled.div`
z-index: -10;
`;
export const TimeNum = styled.div`
z-index: -10;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    line-height: 110px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #DDEDC9;
    @media screen and (max-width:768px){
        z-index: -10;
        font-size: 80px;
    }
    @media screen and (max-width:630px){
        z-index: -10;
        font-size: 60px;
        line-height: 60px;
    }
    @media screen and (max-width:400px){
        z-index: -10;
        font-size: 50px;
        line-height: 45px;
    }
`;
export const TimeUnit = styled.div`
    z-index: -10;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
`;