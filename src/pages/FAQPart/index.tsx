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
              <FAQItem onClick={() => OpenFAQ(1)} key={1}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 1 && faqflag && true}
                      alt=""
                    />
                    ¿Que es un metaverso?
                  </FAQMain>
                  {faqflag && openflag == 1 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `El Metaverso es un mundo virtual, uno al que nos conectaremos utilizando una serie de dispositivos que nos harán pensar que realmente estamos dentro de él, interactuando con todos sus elementos.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(2)} key={2}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 2 && faqflag && true}
                      alt=""
                    />
                    ¿Que es blockchain?
                  </FAQMain>
                  {faqflag && openflag == 2 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Blockchain es un sistema distribuido y descentralizado usado para almacenar bloques de transacciones y verificarlos con una red de nodos. Estos bloques no pueden ser alterados una vez verificados.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(3)} key={3}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 3 && faqflag && true}
                      alt=""
                    />
                    ¿Que son NFT's?
                  </FAQMain>
                  {faqflag && openflag == 3 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Las siglas de NFT significan Non -Fungible Token, un token no fungible. Los tokens son unidades de valor que se le asignan a un modelo de negocio, como por ejemplo el de las criptomonedas.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(4)} key={4}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 4 && faqflag && true}
                      alt=""
                    />
                    ¿Que es realidad mixta (XR)?
                  </FAQMain>
                  {faqflag && openflag == 4 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `La realidad mixta es una mezcla de universos físicos y digitales, que permite interacciones 3D naturales e intuitivas entre personas, equipos y el entorno.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(5)} key={5}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 5 && faqflag && true}
                      alt=""
                    />
                    ¿Que es realidad virtual (VR)?
                  </FAQMain>
                  {faqflag && openflag == 5 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Es un entorno de escenas y objetos de apariencia real —generado mediante tecnología informática— que crea en el usuario la sensación de estar inmerso en él. Dicho entorno se contempla a través de un dispositivo conocido como gafas o casco de Realidad Virtual.`,
                      }}
                    />
                  )}
                </FAQItem>
            </FAQList>
          </FAQLeft>
          <FAQRight src="img/carrot.png" alt="" />
        </FAQPart>
      </FAQOut>
    </>
  );
};
export default MainPage;
