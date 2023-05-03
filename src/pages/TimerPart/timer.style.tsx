import styled from "styled-components";

export const TimerPart = styled.div`
z-index: -10;
@media screen and (max-width: 850px){
    display: none;
}
`;
export const TimerTitle = styled.div`
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
        width: 100%;
        margin: 0 10px;
        margin-bottom: 33px;
    }
`;
export const TimeBody = styled.div`
    display: flex;
    gap: 80px;
    @media screen and (max-width:550px){
        gap: 50px;
    }
    @media screen and (max-width:470px){
        gap: 30px;
        justify-content: center;
    }
    @media screen and (max-width:400px){
        gap: 15px;
    }
`;
export const TimeItem = styled.div`
`;
export const TimeNum = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    line-height: 110px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #DDEDC9;
    @media screen and (max-width:768px){
        font-size: 80px;
    }
        font-size: 60px;
        line-height: 60px;
    }
    @media screen and (max-width:400px){
        font-size: 50px;
        line-height: 45px;
    }
`;
export const TimeUnit = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
`;