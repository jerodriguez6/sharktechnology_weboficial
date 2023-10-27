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
              <TeamItemText>BBlockchain engineer, with experience leading 
                technological and business development teams. Certified in
                 HyperLedger and passionate about blockchain. Business developer.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={2}>
              <TeamImg src="img/DIEGO.png" alt="" />
              <TeamItemName>DIEGO <br />ROMERO</TeamItemName>
              <TeamItemText><h2>CTO</h2></TeamItemText>
              <TeamItemText>
                Software engineer, with more <br />
                than 5 years of experience in the development of solutions
                that implement blockchain and <br />
                knowledge in the development of smart contracts with Solidity.
              </TeamItemText>

            </TeamItem>
            <TeamItem key={3}>
              <TeamImg src="img/DAVID.png" alt="" />
              <TeamItemName>DAVID <br />GARCIA</TeamItemName>
              <TeamItemText><h2>Full Stack Developer</h2></TeamItemText>
              <TeamItemText>Web developer, with high knowledge and mastery
                 in database <br />
                 management and web layout,<br />
                  oriented to web3.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={4}>
              <TeamImg src="img/lampar.png" alt="" />
              <TeamItemName>GERMAN <br />TROCONIS</TeamItemName>
              <TeamItemText><h2>Unreal Engine Game Developer</h2></TeamItemText>
              <TeamItemText>
              Experienced developer game mechanics, animations and game plan and metaverse programming, involved in important video game projects.
               </TeamItemText>
            </TeamItem>
            <TeamItem key={5}>
              <TeamImg src="img/bily.png" alt="" />
              <TeamItemName>MARIANO DELL AQUILA</TeamItemName>
              <TeamItemText><h2>Blockchain Developer</h2></TeamItemText>
              <TeamItemText>Expert in blockchain technology development with more than 4 years of experience.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={6}>
              <TeamImg src="img/migue.png" alt="" />
              <TeamItemName>REYNEL CAICEDO</TeamItemName>
              <TeamItemText><h2>Full Stack Developer</h2></TeamItemText>
              <TeamItemText>Full stack developer, with <br />
              experience and mastery in <br />
              database and layout.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={7}>
              <TeamImg src="img/fuer.png" alt="" />
              <TeamItemName>ISMAEL GARCIA</TeamItemName>
              <TeamItemText><h2>Frontend Developer</h2></TeamItemText>
              <TeamItemText>Expert developer in design and layout with more than 3 years using modern technology.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={8}>
              <TeamImg src="img/negro.png" alt="" />
              <TeamItemName>JEFFERSON MIRANDA</TeamItemName>
              <TeamItemText><h2>Backend Developer</h2></TeamItemText>
              <TeamItemText>Backend developer, with experience in web3 database integration, cybersecurity and DevOps.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={9}>
              <TeamImg src="img/LAUSUA.png" alt="" />
              <TeamItemName>LAURA <br />SUA</TeamItemName>
              <TeamItemText><h2>Marketing Director</h2></TeamItemText>
              <TeamItemText>Digital marketing expert with more than 3 years creating brands and companies, she has helped many businesses achieve their goals.</TeamItemText>
            </TeamItem>
            <TeamItem key={10}>
              <TeamImg src="img/abog.png" alt="" />
              <TeamItemName>RENE ANTONILEZ</TeamItemName>
              <TeamItemText><h2>Legal Advisor</h2></TeamItemText>
              <TeamItemText>Experienced lawyer, with<br />
               a great track record, who <br />
               understands the complexities of the legal system and the world of blockchain technology.
              </TeamItemText>
            </TeamItem>
            <TeamItem key={11}>
              <TeamImg src="img/amis.png" alt="" />
              <TeamItemName>ADMINISTRATIVE TEAM</TeamItemName>
              <TeamItemText><h2>Administrator</h2></TeamItemText>
              <TeamItemText>Experienced personnel in supervising company operations, managing resources, making decisions, <br />
              ensuring compliance and growth of the company.
              </TeamItemText>
            </TeamItem>
            
          </TeamBody>
        </TeamPart>
      </TeamOut>
    </>
  );
};
export default TeamContainer;
