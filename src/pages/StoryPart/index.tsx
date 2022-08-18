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
          <OurStory>ABOUT US</OurStory>
          <MainStory>
            <StoryLeft>
              <StoryTitle>We are a consulting company and developer of Blockchain technology. We help startups and companies from different industries to integrate Blockchain technologies,.</StoryTitle>
              <StorySub>If your company is ready to implement innovative Blockchain technologies, our company is what you need for your digital transformation.</StorySub>
            </StoryLeft>
            <StoryRight>
              <StoryRightItem>
                <StoryImg src="img/st.png" alt="" />
                <StoryText>Our Blockchain specialists and engineers know how to turn your project idea into reality. We are ready to build Blockchain solutions according to your needs.</StoryText>
              </StoryRightItem>
              <StoryRightItem>
                <StoryImg src="img/st.png" alt="" />
                <StoryText>From the development of smart contracts, crypto assets, asset tokenization, wallets, to the creation of payment dApps, NFT, metaverse. By cooperating with SHARK TECHNOLOGY, you will get the full range of benefits from our Blockchain technology expertise.</StoryText>
              </StoryRightItem>
            </StoryRight>
          </MainStory>
        </StoryPart>
      </StoryPartOut>
    </>
  );
};
export default StoryContainer;
