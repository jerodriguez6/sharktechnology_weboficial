import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FAQOut,
  FAQPart,
  FAQLeft,
  FAQTitle,
  FAQList,
  FAQItem,
  PlusImg,
  FAQRight,
  FAQBody,
  FAQMain,
} from "./faq.style";
const MainPage = () => {
  const [faqflag, setfaqflag] = useState(false);
  const [openflag, setopenflag] = useState(0);
  const [data, setData] = useState<any>({
    faqTitle: [],
    faqContent: [],
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              faqs {
                faqTitle
                faqContent
              }
            }
          `,
        },
      });
      setData(query.data.data.faqs[0]);
    };
    getData();
  }, []);
  const OpenFAQ = (e: any) => {
    if (openflag == e) {
      setfaqflag(!faqflag);
    } else {
      setopenflag(e);
      setfaqflag(true);
    }
  };
  return (
    <>
      <FAQOut id="faq">
        <FAQPart>
          <FAQLeft>
            <FAQTitle>FAQ</FAQTitle>
            <FAQList>
              {data.faqTitle.map((v: any, k: number) => (
                <FAQItem onClick={() => OpenFAQ(k)} key={k}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == k && faqflag && true}
                      alt=""
                    />
                    {v}
                  </FAQMain>
                  {faqflag && openflag == k && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: data.faqContent[k],
                      }}
                    />
                  )}
                </FAQItem>
              ))}
            </FAQList>
          </FAQLeft>
          <FAQRight src="img/carrot.png" alt="" />
        </FAQPart>
      </FAQOut>
    </>
  );
};
export default MainPage;
