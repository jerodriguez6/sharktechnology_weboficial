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
import {
  BenefitUL,
  BenefitLi,
} from "./../BenefitPart/benefit.style";
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
        url: "",
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
          <RoadmapTitle>ROADMAP</RoadmapTitle>
          {/* -----------first part---------------- */}
          <RoadmapFirstPart mt="40px">
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>Q4 - 2021</RoadRightTitle>
              <BenefitUL>
              <BenefitLi key={1}>Formation of the work team.</BenefitLi>
              <BenefitLi key={1}>Workplan.</BenefitLi>
              <BenefitLi key={1}>Social networks.</BenefitLi>
              <BenefitLi key={1}>Web development of NFT games and dApp.</BenefitLi>
              </BenefitUL>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>Q1 - 2022</RoadRightTitle>
                  <BenefitUL>
                    <BenefitLi key={1}>Development and integration of VR applications
                    <br></br> for Oculus go, Oculus rift 2 and Oculus Quest 2.</BenefitLi>
                    <BenefitLi key={1}>Smart contract development for NFT.</BenefitLi>
                    <BenefitLi key={1}>NFT game dApp development.</BenefitLi>
                  </BenefitUL>
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
                  <RoadSecRightTitle>Q2 - 2022</RoadSecRightTitle>
                  <BenefitUL>
                    <BenefitLi key={1}>2FA Security.</BenefitLi>
                    <BenefitLi key={1}>Exchange platform developmentT.</BenefitLi>
                    <BenefitLi key={1}>NFT game dApp development.</BenefitLi>
                  </BenefitUL>
                </RoadSecCardRight>
              </RoadSecCard>
              <RoadSecCard>
                <RoadSecProImg src="img/tibu.png" alt="" />
                <RoadSecCardRight>
                  <RoadSecRightTitle>Q3 - 2022</RoadSecRightTitle>
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
                  <RoadRightTitle>Q4 - 2022</RoadRightTitle>
                  <RoadRightText>{data.roadmapContent[4]}</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>Q1 - 2023</RoadRightTitle>
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
