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
} from "./legen.style";
import "./swiper.style.css";
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
      <LegenOut>
        <LegenPart>
          <LegenTitle>PROJECTS</LegenTitle>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            slidesPerGroup={0}
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
              <LegenImg src="img/blumer.jfif" alt="" />
                <LegenName>BLUMER</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
              <LegenImg src="img/icon_hb.jpeg" alt="" />
                <LegenName>FarmVerse</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
              <LegenImg src="img/eris.webp" alt="" />
                <LegenName>ERIS GALAXY</LegenName>
              </LegenItem>
            </SwiperSlide>            
            <SwiperSlide>
              <LegenItem>
              <LegenImg src="img/CCC.png" alt="" />
                <LegenName>CANABIS</LegenName>
              </LegenItem>
            </SwiperSlide>
            {data.legenImg.map((v: any, k: number) => (
              <SwiperSlide key={k}>
                <LegenItem>
                <video src="img/demo.mp4" width="350" height="280" controls></video>
                  <LegenName>COMING SOON</LegenName>
                </LegenItem>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </LegenPart>
      </LegenOut>
    </>
  );
};
export default LengeContainer;
