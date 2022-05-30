import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StoryPartOut,
  StoryPart,
  OurStory,
  MainStory,
  StoryLeft,
  StoryText,
  StoryTitle,
  StorySub,
  StoryRightItem,
  StoryImg,
  StoryRight,
} from "./story.style";
const StoryContainer = () => {
  const [data, setData] = useState<any>({
    storyTitle: "",
    storySubtitle: "",
    storyContent: "",
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              stories {
                storyContent
                storySubtitle
                storyTitle
                storySection1
                storySection2
              }
            }
          `,
        },
      });
      setData(query.data.data.stories[0]);
    };
    getData();
  }, []);
  return (
    <>
      <StoryPartOut id="story">
        <StoryPart>
          <OurStory>{data.storyTitle}</OurStory>
          <MainStory>
            <StoryLeft>
              <StoryTitle>{data.storySubtitle}</StoryTitle>
              <StorySub>{data.storyContent}</StorySub>
            </StoryLeft>
            <StoryRight>
              <StoryRightItem>
                <StoryImg src="img/bear.svg" alt="" />
                <StoryText>{data.storySection1}</StoryText>
              </StoryRightItem>
              <StoryRightItem>
                <StoryImg src="img/greenheart.svg" alt="" />
                <StoryText>{data.storySection2}</StoryText>
              </StoryRightItem>
            </StoryRight>
          </MainStory>
        </StoryPart>
      </StoryPartOut>
    </>
  );
};
export default StoryContainer;
