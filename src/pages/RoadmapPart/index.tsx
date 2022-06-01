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
                  <RoadRightText>Desarrollamos billeteras criptográficas de acuerdo a la necesidad de su proyecto. Desde billeteras de un solo token hasta billeteras criptográficas de múltiples tokens.</RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src="img/tibu.png" alt="" />
                <RoadCardRight>
                  <RoadRightTitle>Q1 - 2022</RoadRightTitle>
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
                  <RoadSecRightTitle>Q2 - 2022</RoadSecRightTitle>
                  <RoadSecRightText>{data.roadmapContent[2]}</RoadSecRightText>
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
