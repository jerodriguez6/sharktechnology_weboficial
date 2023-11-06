import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import {
  LegenOut,
  LegenPart,
  LegenTitle,
  LegenImg,
  LegenItem,
  LegenName,
  LegenContenedor,
} from "./legen.style";
import axios from "axios";
const LengeContainer = () => {
  const [data, setData] = useState<any>({
    lgenName: [],
    legenImg: [],
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              legendaries {
                legenName
                legenImg {
                  fileName
                  url
                }
              }
            }
          `,
        },
      });
      setData(query.data.data.legendaries[0]);
      console.log(data.legenName);
    };
    getData();
  }, []);
  return (
    <>
      <LegenContenedor>
        <LegenOut>
          <LegenPart>
            <LegenTitle>PROJECTS</LegenTitle>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              slidesPerGroup={1}
              loopFillGroupWithBlank={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                680: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1330: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/OGB.png" alt="" />
                  <LegenName>ORDEN GLOBLAL BLOCKCHAIN</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/dapplinkmeup.png" alt="" />
                  <LegenName>DAPPLINKMEUP</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/veta.png" alt="" />
                  <LegenName>VETAWALLET</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/ceti.png" alt="" />
                  <LegenName>CETIFARMA</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/coffee.png" alt="" />
                  <LegenName>COFFEE BEANSWAP</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/ori.jpg" alt="" />
                  <LegenName>ORIGEN DAPP</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/mytokenpay.png" alt="" />
                  <LegenName>MYTOKENPAY</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/token.png" alt="" />
                  <LegenName>ORDEN KAPITAL</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/ROJOP.jpeg" alt="" />
                  <LegenName>ROJO PASION NFT</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/blumer.jfif" alt="" />
                  <LegenName>BLUMER NFT</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/icon_hb.jpeg" alt="" />
                  <LegenName>FARMVERSE</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/galaxy.png" alt="" />
                  <LegenName>ERIS GALAXY</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/CANA.jpg" alt="" />
                  <LegenName>CANNABISCOIN</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/grass.jpg" alt="" />
                  <LegenName>GRASS ARENA</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <LegenImg src="img/OBIC.png" alt="" />
                  <LegenName>ORION BLACK</LegenName>
                </LegenItem>
              </SwiperSlide>

              <SwiperSlide>
                <LegenItem>
                  <video src="img/demo.mp4" width="350" height="280" controls></video>
                  <LegenName>VIDEO GAME</LegenName>
                </LegenItem>
              </SwiperSlide>

            </Swiper>
          </LegenPart>
        </LegenOut>
      </LegenContenedor>
    </>
  );
};
export default LengeContainer;
