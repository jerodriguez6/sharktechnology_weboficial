import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MintPartOut,
  MintMain,
  MintBuyPart,
  MintValuePart,
  MintBuyLeft,
  MintBuyRight,
  MintValueItem,
  MintTitle,
  MintValue,
  MintTotalCounter,
  MintRightTitle,
  MintPrice,
  MintCounter,
  MintMinus,
  MintNumber,
  MintPlus,
  MintBtn,
  MinusImg,
} from "./mint.style";
const MintContainer: React.FC = () => {
  const [price, setprice] = useState(0);
  const [mintcount, setmintcount] = useState(1);
  const ChangMintNumber = (e: any) => {
    if (e <= 0) {
      return;
    } else if (e > 20) {
      return;
    }
    setmintcount(e);
  };
  useEffect(() => {
    setprice(new Date() > new Date("2022-3-30") ? 0.15 : 0.1);
  }, []);
  return (
    <>
      <MintPartOut>
        <MintMain>
          <MintBuyPart>
            <MintBuyLeft>
              <MintTotalCounter>1 / 6,564</MintTotalCounter>
            </MintBuyLeft>
            <MintBuyRight>
              <MintRightTitle>SAVE A BUNNY!</MintRightTitle>
              <MintPrice>
                {(price * mintcount).toFixed(price === 0.1 ? 1 : 2)} ETH
              </MintPrice>
              <MintCounter>
                <MintMinus onClick={() => ChangMintNumber(mintcount - 1)}>
                  <MinusImg src="img/mintminus.png" alt="" draggable={false} />
                </MintMinus>
                <MintNumber>{mintcount}</MintNumber>
                <MintPlus onClick={() => ChangMintNumber(mintcount + 1)}>
                  <MinusImg src="img/mintplus.png" alt="" draggable={false} />
                </MintPlus>
              </MintCounter>
              <Link to="/saved">
                <MintBtn>MINT</MintBtn>
              </Link>
            </MintBuyRight>
          </MintBuyPart>
          <MintValuePart>
            <MintValueItem>
              <MintTitle>Supply</MintTitle>
              <MintValue>6,564</MintValue>
            </MintValueItem>
            <MintValueItem>
              <MintTitle>Price</MintTitle>
              <MintValue>0.1 ETH</MintValue>
            </MintValueItem>
            <MintValueItem>
              <MintTitle>Max Per Transaction</MintTitle>
              <MintValue>20</MintValue>
            </MintValueItem>
          </MintValuePart>
        </MintMain>
      </MintPartOut>
    </>
  );
};
export default MintContainer;
