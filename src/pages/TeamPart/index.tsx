import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TeamOut,
  TeamPart,
  TeamTitle,
  TeamBody,
  TeamItem,
  TeamImg,
  TeamItemName,
  TeamItemText,
} from "./team.style";
const TeamContainer = () => {
  const [data, setData] = useState<any>({
    teamContent: [],
    teamTitle: [],
    teamImg: [],
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "",
        method: "post",
        data: {
          query: `
            query {
              teams {
                teamContent
                teamTitle
                teamImg {
                  fileName
                  url
                }
              }
            }
          `,
        },
      });
      setData(query.data.data.teams[0]);
    };
    getData();
  }, []);
  return (
    <>
      <TeamOut id="team">
        <TeamPart>
          <TeamTitle>OUR TEAM</TeamTitle>
          <TeamBody>
            <TeamItem key={1}>
              <TeamImg src="img/JAM.png" alt="" />
              <TeamItemName>JAMES RODRIGUEZ</TeamItemName>
              <TeamItemText><h2>Founder, CEO</h2></TeamItemText>
              <TeamItemText>Blockchain and web engineer, with experience leading technology development and business teams. Certified in HyperLedger and passionate about blockchain. Business Developer.</TeamItemText>
            </TeamItem>
            <TeamItem key={2}>
              <TeamImg src="img/DIEGO.png" alt="" />
              <TeamItemName>DIEGO ROMERO</TeamItemName>
              <TeamItemText><h2>Co-Founder, CTO</h2></TeamItemText>
              <TeamItemText>Software engineer, with more than 5 years of experience.
                Experience in the development of solutions that implement blockchain using HyperLedger and knowledge in the development of smart contracts with Solidity.</TeamItemText>
            </TeamItem>
            <TeamItem key={3}>
              <TeamImg src="img/DAVID.png" alt="" />
              <TeamItemName>DAVID GARCIA</TeamItemName>
              <TeamItemText><h2>FULL STACK DEVELOPER</h2></TeamItemText>
              <TeamItemText>Web developer, with high knowledge and mastery in database management and web layout, oriented to web3.</TeamItemText>
            </TeamItem>
            <TeamItem key={4}>
              <TeamImg src="img/GERMAN.png" alt="" />
              <TeamItemName>GERMAN TROCONIS</TeamItemName>
              <TeamItemText><h2>UNREAL ENGINE GAME DEVELOPER</h2></TeamItemText>
              <TeamItemText>Experienced developer in game mechanics, animations and game blueprint and metaverse programming, he has been involved in several major projects in the video game industry.</TeamItemText>
            </TeamItem>
            <TeamItem key={5}>
              <TeamImg src="img/LAUSUA.png" alt="" />
              <TeamItemName>LAURA SUA</TeamItemName>
              <TeamItemText><h2>Director of design and marketing.</h2></TeamItemText>
              <TeamItemText>Expert in digital marketing with more than 3 years creating brands and companies, she has helped many small businesses achieve their goal..</TeamItemText>
            </TeamItem>
          </TeamBody>
        </TeamPart>
      </TeamOut>
    </>
  );
};
export default TeamContainer;
