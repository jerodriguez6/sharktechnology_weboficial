import styled from "styled-components";

export const StoryPartOut = styled.div`
    width: 100vw;
    display: flex;
    margin-top: 208px;
    margin-bottom: 180px;
    justify-content: center;
`;
export const StoryPart = styled.div`
    width: 1440px;
    margin-left: 100px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
    @media screen and (max-width:830px){
        margin-left: 0;
    }
`;

export const RoadmapTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    margin-bottom: 55px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #2E1E00;
     z-index: 2;
    position: relative;
    ::after{
        content: url('img/privacyline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
    }
`;
export const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 635px;
    line-height: 28px;
    color: #625744;
    @media screen and (max-width:830px){
        width: 100%;
    }
`;
export const Subtitle = styled.div`
    font-family: 'InterBold';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #2E1E00;
`;
