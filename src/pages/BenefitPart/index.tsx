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
            <BenefitTitle>PROJECTS</BenefitTitle>
            <BenefitUL>
              {data.benefitContent.map((v: string, k: number) => (
                <BenefitLi key={k}>{v}</BenefitLi>
              ))}
            </BenefitUL>
          </BenefitLeft>
          <BenefitRight src="img/eth.png" alt="" />
        </Benefit>
      </BenefitOut>
    </>
  );
};
export default BenefitContainer;
