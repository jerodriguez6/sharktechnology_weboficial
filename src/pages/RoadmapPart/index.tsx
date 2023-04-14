import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
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
  RoadVideoMid,
  RoadMapContenedor,
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
      <RoadMapContenedor>
        <RoadMapOut id="roadmap">
          <Roadmap>
            < RoadVideoMid>
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=pLBuFxMYkx8&ab_channel=BorjaScript'}
                width='100%'
                height='100%'
                controls
                playing
              />
            </RoadVideoMid>
            <RoadmapTitle>ROADMAP</RoadmapTitle>
            {/* -----------first part---------------- */}
            <RoadmapFirstPart mt="40px">
              <RoadmapFirstLeft>
                <RoadCard>
                  <RoadProImg src="img/tibu.png" alt="" />
                  <RoadCardRight>
                    <RoadRightTitle>Q4 - 2021 ✔️</RoadRightTitle>
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
                    <RoadRightTitle>Q1 - 2022 ✔️</RoadRightTitle>
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
                data-aos="fade-right"
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
                    <RoadSecRightTitle>Q2 - 2022 ✔️</RoadSecRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>2FA Security.</BenefitLi>
                      <BenefitLi key={1}>Exchange platform development.</BenefitLi>
                      <BenefitLi key={1}>NFT game dApp development.</BenefitLi>
                    </BenefitUL>
                  </RoadSecCardRight>
                </RoadSecCard>
                <RoadSecCard>
                  <RoadSecProImg src="img/tibu.png" alt="" />
                  <RoadSecCardRight>
                    <RoadSecRightTitle>Q3 - 2022 ✔️</RoadSecRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Delivery of the first Marketplace NFT.</BenefitLi>
                      <BenefitLi key={1}>First centralized Wallet client.</BenefitLi>
                      <BenefitLi key={1}>Delivery of deflationary token to our client.</BenefitLi>
                      <BenefitLi key={1}>Pre-sale ICO dapp delivery.</BenefitLi>
                      <BenefitLi key={1}>Legalization of the company <br /> SHARK TECHNOLOGY – Engineers.</BenefitLi>
                    </BenefitUL>
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
                    <RoadRightTitle>Q4 - 2022 ✔️</RoadRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Development of Decentralized Wallet.</BenefitLi>
                      <BenefitLi key={1}>NFT Marketplace development.</BenefitLi>
                      <BenefitLi key={1}>Development of a DEX swap.</BenefitLi>
                    </BenefitUL>
                    <RoadRightText>{data.roadmapContent[4]}</RoadRightText>
                  </RoadCardRight>
                </RoadCard>
                <RoadCard>
                  <RoadProImg src="img/tibu.png" alt="" />
                  <RoadCardRight>
                    <RoadRightTitle>Q1 - 2023 ✔️</RoadRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Dapp design.</BenefitLi>
                      <BenefitLi key={1}>Development of Smart contract dapp.</BenefitLi>
                      <BenefitLi key={1}>Staking (token, nft).</BenefitLi>
                      <BenefitLi key={1}>Farming.</BenefitLi>
                      <BenefitLi key={1}>Exchange P2P.</BenefitLi>
                    </BenefitUL>
                    <RoadRightText>{data.roadmapContent[5]}</RoadRightText>
                  </RoadCardRight>
                </RoadCard>
              </RoadmapFirstLeft>
              <RoadmapFirstRightOut
                data-aos="fade-right"
                className="aos-init aos-animate"
              >
                <RoadmapFirstRight src="img/meta.png" alt="" />
              </RoadmapFirstRightOut>
            </RoadmapFirstPart>
            <RoadmapSecPart>
              <RoadmapFirstRightOut
                data-aos="fade-right"
                className="aos-init aos-animate"
              >
                <RoadmapSecRight src="img/NFTS.png" alt="" />
              </RoadmapFirstRightOut>
              <RoadmapSecLeft>
                <RoadSecCard>
                  <RoadSecProImg src="img/tibu.png" alt="" />
                  <RoadSecCardRight>
                    <RoadSecRightTitle>Q2 – 2023, COMING SOONn ⏳</RoadSecRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Swap development</BenefitLi>
                      <BenefitLi key={1}>Development of DAPP MINT, NFT UTILITY</BenefitLi>
                      <BenefitLi key={1}>TSeed capital search formulation</BenefitLi>
                      <BenefitLi key={1}>Development of Wallet POS.</BenefitLi>
                      <BenefitLi key={1}>Development of a blockchain traceability system for pharmacies</BenefitLi>
                      <BenefitLi key={1}>Development of perfumery NFT mining site.</BenefitLi>
                    </BenefitUL>
                  </RoadSecCardRight>
                </RoadSecCard>
                <RoadSecCard>
                  <RoadSecProImg src="img/tibu.png" alt="" />
                  <RoadSecCardRight>
                    <RoadSecRightTitle>Q3 – 2023, COMING SOON ⏳</RoadSecRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Development of a blockchain traceability system for airline companies</BenefitLi>
                      <BenefitLi key={1}>Development of a crypto lottery system.</BenefitLi>
                      <BenefitLi key={1}>Creation of TOKEN and NFT.</BenefitLi>
                      <BenefitLi key={1}>Marketing.</BenefitLi>
                      <BenefitLi key={1}>Pre-sale token and NFT.</BenefitLi>
                    </BenefitUL>
                    <RoadSecRightText>{data.roadmapContent[3]}</RoadSecRightText>
                  </RoadSecCardRight>
                </RoadSecCard>
              </RoadmapSecLeft>
            </RoadmapSecPart>
            <RoadmapFirstPart mt="30px">
              <RoadmapFirstLeft>
                <RoadCard>
                  <RoadProImg src="img/tibu.png" alt="" />
                  <RoadCardRight>
                    <RoadRightTitle>Q4 – 2023, COMING SOON ⏳</RoadRightTitle>
                    <BenefitUL>
                      <BenefitLi key={1}>Launch platform protocol for new projects</BenefitLi>
                      <BenefitLi key={1}>Development of a crypto wallet.</BenefitLi>
                      <BenefitLi key={1}>Development of a crypto Trading Bot.</BenefitLi>
                      <BenefitLi key={1}>Development of a tracking system based on the blockchain, for
                        sending end-to-end physical products..</BenefitLi>
                      <BenefitLi key={1}>Agreement with universities for training in Bockchain.</BenefitLi>
                      <BenefitLi key={1}>Pre-sale token and NFT</BenefitLi>
                      <BenefitLi key={1}>Development of the SharkDAO ecosystem.</BenefitLi>
                      <BenefitLi key={1}>Enterprise adoptio</BenefitLi>
                    </BenefitUL>
                    <RoadRightText>{data.roadmapContent[4]}</RoadRightText>
                  </RoadCardRight>
                </RoadCard>
              </RoadmapFirstLeft>
              <RoadmapFirstRightOut
                data-aos="fade-right"
                className="aos-init aos-animate"
              >
                <RoadmapFirstRight src="img/SAFE.png" alt="" />
              </RoadmapFirstRightOut>
            </RoadmapFirstPart>
          </Roadmap>
        </RoadMapOut>
      </RoadMapContenedor>
    </>
  );
};
export default MainPage;
