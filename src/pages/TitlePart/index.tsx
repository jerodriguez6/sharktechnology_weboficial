import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getBlockchain from "scripts/ethereum";

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
import { BsWallet } from "react-icons/bs";


const TitleContainer = () => {
  const isTabletMode = useMediaQuery("(max-width: 1140px)");
  const [data, setData] = useState<any>({
    bunnyImg: {},
    bunnyTitle: "",
    bunnySubTitle: "",
  });

  const [text, setText] = useState('CONNECT WALLET');

  const [walletAdress, setWalletAdress] = useState('');

  const connectWallet = async () => {
    const { accounts } = await getBlockchain();
    console.log(accounts);
    const account = accounts[0];

    setText(null);
    setWalletAdress(
      account[0] +
      account[1] +
      account[2] +
      account[3] +
      account[4] +
      account[5] +
      "..." +
      account[35] +
      account[36] +
      account[37] +
      account[38] +
      account[39] +
      account[40] +
      account[41]
    );
  }

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
                Mint:
                <br />
                <span>COMING SOON</span>
              </SaveBunniBtnLeft>
            </Link>
            <SaveBunniBtnRight onClick={connectWallet}>{walletAdress}{text}</SaveBunniBtnRight>
          </SaveBunniBtns>
        </TLeft>
        <RightOut>
          <TRight src="img/app.png" alt="" />
        </RightOut>
      </TitlePart >
    </TitlePartOut >
  );

};
export default TitleContainer;
