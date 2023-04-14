import axios from "axios";
import { useState, useEffect } from "react";
import {
  Benefitcontainer,
  BenefitOut,
  Benefit,
  BenefitLeft,
  BenefitTitle,
  BenefitUL,
  BenefitLi,
  ContentWrapper,
  ParticlesWrapper,
} from "./benefit.style";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};
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
      <Benefitcontainer>
        <ParticlesWrapper>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push"
                  },
                  onHover: {
                    enable: true,
                  },
                  resize: true
                },
                modes: {
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  }
                }
              },
              particles: {
                color: {
                  value: "#blue"
                },
                links: {
                  color: "#fff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce"
                  },
                  random: false,
                  speed: 1,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 1, max: 5 }
                }
              },
              detectRetina: false
            }}
          />
        </ParticlesWrapper>
        <ContentWrapper>
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
            </Benefit>
          </BenefitOut>
        </ContentWrapper>
      </Benefitcontainer>
    </>
  );
};
export default BenefitContainer;
