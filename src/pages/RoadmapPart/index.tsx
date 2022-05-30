import React, { useEffect, useState } from "react";
import AOS from "aos";
import {
  RoadMapOut,
  Roadmap,
  RoadmapTitle,
  RoadmapFirstLeft,
  RoadmapFirstPart,
  RoadCard,
  RoadProImg,
  RoadCardRight,
  RoadRightText,
  RoadRightTitle,
  RoadmapFirstRight,
  RoadmapSecPart,
  RoadmapSecLeft,
  RoadmapFirstRightOut,
  RoadmapSecRight,
  RoadSecCard,
  RoadSecProImg,
  RoadSecCardRight,
  RoadSecRightTitle,
  RoadSecRightText,
} from "./roadmap.style";
import axios from "axios";
const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [data, setData] = useState<any>({
    roadmapTitle: "",
    roadmapContent: "",
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              roadmaps {
                roadmapTitle
                roadmapContent
              }
            }
          `,
        },
      });
      setData(query.data.data.roadmaps[0]);
    };
    getData();
  }, []);
  return (
    <>
      <RoadMapOut id="roadmap">
        <Roadmap>
          <RoadmapTitle>RoADMAP</RoadmapTitle>
          {/* -----------first part---------------- */}
          <RoadmapFirstPart mt="40px">
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src="img/onepro.svg" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>{data.roadmapTitle[0]}</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[0]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/twopro.svg" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>{data.roadmapTitle[1]}</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[1]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRightOut
              data-aos="fade-left"
              className="aos-init aos-animate"
            >
              <RoadmapFirstRight src="img/roadfirst.png" alt="" />
            </RoadmapFirstRightOut>
          </RoadmapFirstPart>
          {/* ------------sec part---------------------- */}
          <RoadmapSecPart>
            <RoadmapFirstRightOut
              data-aos="fade-right"
              className="aos-init aos-animate"
            >
              <RoadmapSecRight src="img/secroadmap.png" alt="" />
            </RoadmapFirstRightOut>
            <RoadmapSecLeft>
              <RoadSecCard>
                <RoadSecProImg src="img/fourpro.svg" alt="" />
                <RoadSecCardRight>
                  <RoadSecRightTitle>{data.roadmapTitle[2]}</RoadSecRightTitle>
                  <RoadSecRightText>{data.roadmapContent[2]}</RoadSecRightText>
                </RoadSecCardRight>
              </RoadSecCard>
              <RoadSecCard>
                <RoadSecProImg src="img/sixpro.svg" alt="" />
                <RoadSecCardRight>
                  <RoadSecRightTitle>{data.roadmapTitle[3]}</RoadSecRightTitle>
                  <RoadSecRightText>{data.roadmapContent[3]}</RoadSecRightText>
                </RoadSecCardRight>
              </RoadSecCard>
            </RoadmapSecLeft>
          </RoadmapSecPart>
          {/* -----------third part--------------- */}
          <RoadmapFirstPart mt="30px">
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src="img/eightpro.svg" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>{data.roadmapTitle[4]}</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[4]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/hundredpro.svg" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>{data.roadmapTitle[5]}</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[5]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRightOut
              data-aos="fade-left"
              className="aos-init aos-animate"
            >
              <RoadmapFirstRight src="img/thirdroad.png" alt="" />
            </RoadmapFirstRightOut>
          </RoadmapFirstPart>
        </Roadmap>
      </RoadMapOut>
    </>
  );
};
export default MainPage;
