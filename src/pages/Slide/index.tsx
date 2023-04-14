import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Scrollbar } from "swiper";
import {
  LegenOu,
  LegenPart,
  LegenTitle,
  LegenImg,
  LegenItem,
  LegenName,
} from "./legen.style1";
import "./swiper.style.css";
import axios from "axios";
export default function LengeContainer() {
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
      <LegenOu>
        <LegenPart>
          <LegenTitle>Technologies</LegenTitle>
          <Swiper
            slidesPerView={8}
            spaceBetween={30}
            freeMode={true}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              680: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1330: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}

            pagination={{
              clickable: true,
            }}

            navigation={true}
            modules={[FreeMode, Navigation, Autoplay]}

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}

            className="mySwiper"
          >
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='https://desafiolatam.com/assets/images/cursos/react/icono-react.png' alt="" />
                <LegenName>REACT</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='https://docs.nestjs.com/assets/logo-small.svg' alt="" />
                <LegenName>NEST JS</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt="" />
                <LegenName>XPRESS</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://www.svgrepo.com/download/303360/nodejs-logo.svg" alt="" />
                <LegenName>NODE</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png' alt="" />
                <LegenName>JAVASCRIPT</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='https://solidity-es.readthedocs.io/es/latest/_images/logo.svg' alt="" />
                <LegenName>SOLIDITY</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Pic.png' alt="" />
                <LegenName>MONGO</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
                <LegenName>POSTGRESS</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
                <LegenName>ANGULAR</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://trufflesuite.com/assets/logo.png" alt="" />
                <LegenName>TRUFFLE SUIT</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/hardhat-colored.svg" alt="" />
                <LegenName>HARDHAT</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="img/unity.png" alt="" />
                <LegenName>UNITY</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/1200px-Unreal_Engine_Logo.svg.png" alt="" />
                <LegenName>UNREAL ENGINE 5</LegenName>
              </LegenItem>
            </SwiperSlide>
          </Swiper>
        </LegenPart>
      </LegenOu>
    </>
  );
};
