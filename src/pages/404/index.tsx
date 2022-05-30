import React from "react";
import {
  StoryPartOut, StoryPart, MainStory, StoryLeft, StoryText, StoryTitle, StoryRightItem, StoryRight,Btn
} from "./404.style";
import Footer from "../../layout/Footer";
import Header from "../../layout/NotFoundHeader";
const StoryContainer = () => {
  return (
    <>
      <Header />
      <StoryPartOut>
        <StoryPart>
          <MainStory>
            <StoryLeft>
              <StoryTitle>
                PAGE NoT FOUND!
              </StoryTitle>
            </StoryLeft>
            <StoryRight>
              <StoryRightItem>
                <StoryText>
                  Sorry, the page you are looking for doesn't exist or has been moved.
                </StoryText>
                <Btn>
                  TAKE ME HoME
                </Btn>
              </StoryRightItem>
            </StoryRight>
          </MainStory>
        </StoryPart>
      </StoryPartOut>
      <Footer/>
    </>
  );
};
export default StoryContainer;
