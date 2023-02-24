import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BenefitOut,
  Benefit,
  BenefitLeft,
  BenefitTitle,
  BenefitUL,
  BenefitLi,
  BenefitRight,
} from "./benefit.style";
const BenefitContainer = () => {
  const [data, setData] = useState<any>({
    benefitContent: [],
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              benefits {
                benefitContent
              }
            }
          `,
        },
      });
      setData(query.data.data.benefits[0]);
    };
    getData();
  }, []);
  return (
    <>
      <BenefitOut id="benefit">
        <Benefit>
          <BenefitLeft>
            <BenefitTitle>SERVICES</BenefitTitle>
            <BenefitUL>
              <BenefitLi key={1}>SMART CONTRACT</BenefitLi>
              <BenefitLi key={1}>CRIPTOCURRENCY AND TOKEN</BenefitLi>
              <BenefitLi key={1}>WALLET</BenefitLi>
              <BenefitLi key={1}>NFT</BenefitLi>
              <BenefitLi key={1}>MARKETPLACE</BenefitLi>
              <BenefitLi key={1}>DAPPS</BenefitLi>
              <BenefitLi key={1}>VIDEO GAME</BenefitLi>
              <BenefitLi key={1}>REAL ESTATE TOKENIZATION</BenefitLi>
              <BenefitLi key={1}>METAVERSE</BenefitLi>
              <BenefitLi key={1}>AUTOMATION</BenefitLi>
              <BenefitLi key={1}>CONSULTANCY AND ADVICE</BenefitLi>
              <BenefitLi key={1}>SOFTWARE DEVELOPMENT</BenefitLi>
            </BenefitUL>
          </BenefitLeft>
          <BenefitRight src="img/eth.png" alt="" />
        </Benefit>
      </BenefitOut>
    </>
  );
};
export default BenefitContainer;
