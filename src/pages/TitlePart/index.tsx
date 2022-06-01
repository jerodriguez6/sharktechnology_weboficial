import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TitlePart,
  TLeft,
  SaveBunniText,
  RightOut,
  TitlePartOut,
  SaveBunniSub,
  SaveBunniBtnRight,
  SaveBunniBtns,
  TRight,
  SaveBunniBtnLeft,
} from "./titlepart.style";
import { useMediaQuery } from "beautiful-react-hooks";


const TitleContainer = () => {
  const isTabletMode = useMediaQuery("(max-width: 1140px)");
  const [data, setData] = useState<any>({
    bunnyImg: {},
    bunnyTitle: "",
    bunnySubTitle: "",
  });
  useEffect(() => {
    const getData = async () => {
      const query = await axios({
        url: "https://api-ca-central-1.graphcms.com/v2/cl14bkut8eyl601za5bmkb9kr/master",
        method: "post",
        data: {
          query: `
            query {
              bunnies {
                bunnySubTitle
                bunnyTitle
                bunnyImg {
                  url
                  fileName
                }
              }
            }
          `,
        },
      });
      setData(query.data.data.bunnies[0]);
    };
    getData();
  }, []);
  return (
    <TitlePartOut>
      <TitlePart>
        <TLeft>
          <SaveBunniText>
            <span>
            SHARK 
              {isTabletMode}
            </span>
            TECHNOLOGY
          </SaveBunniText>
          <SaveBunniSub>CONSULTING AND DEVELOPMENT OF BLOCKCHAIN ​​TECHNOLOGY FOR STARTUPS AND COMPANIES.</SaveBunniSub>
          <SaveBunniBtns>
            <Link to="/mint">
              <SaveBunniBtnLeft>
                Mint Date:
                <br />
                <span>COMING SOON</span>
              </SaveBunniBtnLeft>
            </Link>
            <a href="https://metamask.io/" target={"_blank"}>
              <SaveBunniBtnRight>CONNECT WALLET</SaveBunniBtnRight>
            </a>
          </SaveBunniBtns>
        </TLeft>
        <RightOut>
          <TRight src="img/app.png" alt="" />
        </RightOut>
      </TitlePart>
    </TitlePartOut>
  );
  
};
export default TitleContainer;
