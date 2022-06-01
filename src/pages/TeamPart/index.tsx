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
                <TeamImg src="img/SRT.jpg" alt="" />
                <TeamItemName>KENNY OTOYA</TeamItemName>
                <TeamItemText><h2>Co-Founder, CTO</h2></TeamItemText>
                <TeamItemText>Blockchain and Dev ops engineer, experience in the field of computer security. He also has experience developing solutions that implement blockchain using HyperLedger and knowledge developing smart contracts with Solidity.</TeamItemText>
              </TeamItem>
          </TeamBody>
        </TeamPart>
      </TeamOut>
    </>
  );
};
export default TeamContainer;
