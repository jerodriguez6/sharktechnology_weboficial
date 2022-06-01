import styled from "styled-components";

export const StoryPartOut = styled.div`
    background: url('img/stor.jpg');
    background-position: center;
    background-size: 100% 100%;
    margin-top: -5px;
    padding: 112px 0;
    width: 100vw;
    display: flex;
    justify-content: center;
`;
export const StoryPart = styled.div`
    width: 1440px;
    @media screen and (max-width:1480px){
        width: 95%;
    }
    @media screen and (max-width:1140px){
        display: flex;
        justify-content: center;
    }
`;
export const MainStory = styled.div`
    display: flex;
    margin-left: 100px;
    min-height: calc(100vh - 525px);
    margin-top: 20px;
    align-items: center;
    @media screen and (max-width:1140px){
        margin-left: 0;
    }
    @media screen and (max-width:960px){
        flex-direction: column;
        text-align: center;
    }
`;
export const StoryLeft = styled.div`
    
`;
export const StoryText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    width: 418px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    span{
        color: #FFD600;
    }
    @media screen and (max-width:480px){
        width: 95%;
    }
`;
export const StoryTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    margin-right: 120px;
    line-height: 80px;
    color: #FFFFFF;
    width: 350px;
    @media screen and (max-width:960px){
        margin-right: 0;
        margin-bottom: 30px;
    }
    @media screen and (max-width:480px){
        font-size: 50px;
        line-height: 50px;
        width:100%;
    }
`;
export const StoryRightItem = styled.div`
    @media screen and (max-width:960px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const StoryRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;
export const Btn = styled.div`
    width: 167px;
    height: 64px;
    background: #FFD600;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    transition: all .3s ease-in-out;
    font-size: 18px;
    line-height: 24px;
    color: #2E1E00;
    margin-top: 40px;
    :hover{
        color: #FFD600;
        background-color: #2E1E00;
    }
`;