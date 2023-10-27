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
              <TeamItemText><h2>CEO - CO Founder</h2></TeamItemText>
              <TeamItemText>Blockchain and web engineer, with experience leading technology development and business teams. Certified in HyperLedger and passionate about blockchain. Business Developer.</TeamItemText>
            </TeamItem>
            <TeamItem key={2}>
              <TeamImg src="img/DIEGO.png" alt="" />
              <TeamItemName>DIEGO <br />ROMERO</TeamItemName>
              <TeamItemText><h2>CTO</h2></TeamItemText>
              <TeamItemText>Software engineer, with more than 5 years of experience.
                Experience in the development of solutions that implement blockchain using HyperLedger and knowledge in the development of smart contracts with Solidity.</TeamItemText>
            </TeamItem>
            <TeamItem key={3}>
              <TeamImg src="img/DAVID.png" alt="" />
              <TeamItemName>DAVID <br />GARCIA</TeamItemName>
              <TeamItemText><h2>Full Stack Developer</h2></TeamItemText>
              <TeamItemText>Web developer, with high knowledge and mastery in database management and web layout, oriented to web3.</TeamItemText>
            </TeamItem>
            <TeamItem key={4}>
              <TeamImg src="img/lampar.png" alt="" />
              <TeamItemName>GERMAN <br />TROCONIS</TeamItemName>
              <TeamItemText><h2>Unreal Engine Game Developer</h2></TeamItemText>
              <TeamItemText>Experienced developer in game mechanics, animations and game blueprint and metaverse programming, he has been involved in several major projects in the video game industry.</TeamItemText>
            </TeamItem>
            <TeamItem key={5}>
              <TeamImg src="img/full.png" alt="" />
              <TeamItemName>MARIANO DELL AQUILA</TeamItemName>
              <TeamItemText><h2>Blockchain Developer</h2></TeamItemText>
              <TeamItemText>Expert in blockchain technology development with more than 4 years of experience.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={6}>
              <TeamImg src="img/rudo.png" alt="" />
              <TeamItemName>JESUS CAICEDO</TeamItemName>
              <TeamItemText><h2>Full Stack Developer</h2></TeamItemText>
              <TeamItemText>Expert in blockchain technology development with more than 4 years of experience.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={7}>
              <TeamImg src="img/fuer.png" alt="" />
              <TeamItemName>ISMAEL GARCIA</TeamItemName>
              <TeamItemText><h2>Frontend Developer</h2></TeamItemText>
              <TeamItemText>Expert in blockchain technology development with more than 4 years of experience.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={8}>
              <TeamImg src="img/fachero.png" alt="" />
              <TeamItemName>JEFFERSON MIRANDA</TeamItemName>
              <TeamItemText><h2>Backend Developer</h2></TeamItemText>
              <TeamItemText>Expert in blockchain technology development with more than 4 years of experience.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={9}>
              <TeamImg src="img/LAUSUA.png" alt="" />
              <TeamItemName>LAURA <br />SUA</TeamItemName>
              <TeamItemText><h2>Director of design and marketing.</h2></TeamItemText>
              <TeamItemText>Expert in digital marketing with more than 3 years creating brands and companies, she has helped many small businesses achieve their goal.</TeamItemText>
            </TeamItem>
            <TeamItem key={10}>
              <TeamImg src="img/abog.png" alt="" />
              <TeamItemName>RENE ANTONILEZ</TeamItemName>
              <TeamItemText><h2>Legal Address</h2></TeamItemText>
              <TeamItemText>Experienced and innovative lawyer. With a proven track record in achieving favorable results for clients. A strong leader who understands the complexities of the legal system and the world of blockchain technology.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={11}>
              <TeamImg src="img/amis.png" alt="" />
              <TeamItemName>ADMINISTRATIVE TEAM</TeamItemName>
              <TeamItemText><h2>Legal Address</h2></TeamItemText>
              <TeamItemText>Expert team in finance and human resources administration.
              </TeamItemText>
            </TeamItem>
            
          </TeamBody>
        </TeamPart>
      </TeamOut>
    </>
  );
};
export default TeamContainer;
