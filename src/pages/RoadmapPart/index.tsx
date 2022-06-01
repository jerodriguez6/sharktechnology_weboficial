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
          <RoadmapTitle>SERVICES</RoadmapTitle>
          {/* -----------first part---------------- */}
          <RoadmapFirstPart mt="40px">
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>WALLETS</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[0]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>CRYPTOCURRENCY AND TOKEN</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[1]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRightOut
              data-aos="fade-left"
              className="aos-init aos-animate"
            >
              <RoadmapFirstRight src="img/wallet.png" alt="" />
            </RoadmapFirstRightOut>
          </RoadmapFirstPart>
          {/* ------------sec part---------------------- */}
          <RoadmapSecPart>
            <RoadmapFirstRightOut
              data-aos="fade-right"
              className="aos-init aos-animate"
            >
              <RoadmapSecRight src="img/smartc.png" alt="" />
            </RoadmapFirstRightOut>
            <RoadmapSecLeft>
              <RoadSecCard>
                <RoadSecProImg src="img/tibu.png" alt="" />
                <RoadSecCardRight>
                  <RoadSecRightTitle>SMART CONTRACT</RoadSecRightTitle>
                  <RoadSecRightText>{data.roadmapContent[2]}</RoadSecRightText>
                </RoadSecCardRight>
              </RoadSecCard>
              <RoadSecCard>
                <RoadSecProImg src="img/tibu.png" alt="" />
                <RoadSecCardRight>
                  <RoadSecRightTitle>NFT AND MARKETPLACE</RoadSecRightTitle>
                  <RoadSecRightText>{data.roadmapContent[3]}</RoadSecRightText>
                </RoadSecCardRight>
              </RoadSecCard>
            </RoadmapSecLeft>
          </RoadmapSecPart>
          {/* -----------third part--------------- */}
          <RoadmapFirstPart mt="30px">
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>VIDEO GAMES DEVELOPMENT</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[4]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>METAVERSE</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[5]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRightOut
              data-aos="fade-left"
              className="aos-init aos-animate"
            >
              <RoadmapFirstRight src="img/meta.png" alt="" />
            </RoadmapFirstRightOut>
          </RoadmapFirstPart>
        </Roadmap>
      </RoadMapOut>
    </>
  );
};
export default MainPage;
