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
            <FAQItem>
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
                <FAQItem onClick={() => OpenFAQ(6)} key={6}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 6 && faqflag && true}
                      alt=""
                    />
                    ¿Que es exchange?
                  </FAQMain>
                  {faqflag && openflag == 6 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Podemos definir el exchange como una plataforma o mercado virtual en la que podemos realizar intercambios de criptomonedas, ya sea comprar o vender. Estas sirven como intermediario y facilitan los movimientos financieros de los usuarios.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(7)} key={7}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 7 && faqflag && true}
                      alt=""
                    />
                    ¿Que es criptomoneda?
                  </FAQMain>
                  {faqflag && openflag == 7 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones, y controlar la creación de unidades adicionales, es decir, evitar que alguien pueda hacer copias como haríamos, por ejemplo, con una foto.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(8)} key={8}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 8 && faqflag && true}
                      alt=""
                    />
                    ¿Que es DAPP?
                  </FAQMain>
                  {faqflag && openflag == 8 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Son aplicaciones descentralizadas que utilizan 'blockchain' para que los usuarios se relacionen directamente entre ellos y cierren acuerdos, sin que exista una entidad central que gestione el servicio.`,
                      }}
                    />
                  )}
                </FAQItem>
                <FAQItem onClick={() => OpenFAQ(9)} key={9}>
                  <FAQMain>
                    <PlusImg
                      src="img/plus.svg"
                      flag={openflag == 9 && faqflag && true}
                      alt=""
                    />
                    ¿En que te podemos ayudar?
                  </FAQMain>
                  {faqflag && openflag == 9 && (
                    <FAQBody
                      dangerouslySetInnerHTML={{
                        __html: `Desde blockchain, metaversos, dapps y web3 apps. Desarrollamos las herramientas necesarias para que tu idea sea una realidad y puedas empezar el camino al exito `,
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
