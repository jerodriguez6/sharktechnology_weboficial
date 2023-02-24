import React, { useEffect } from "react";
import { BsDiscord } from "react-icons/bs";
import {
  MintPartOut,
  MintMain,
  SavedTitle,
  SavedText,
  Btn,
  SaveBunnyImg,
  MintMainOut,
} from "./saved.style";
const SavedContainer: React.FC = () => {
  useEffect(() => {
    const bunny: any = document.querySelector("#bunny");
    if (window.innerWidth > 660) bunny.style.top = "-150px";
    else bunny.style.top = "-140px";
  }, []);
  return (
    <>
      <MintPartOut>
        <MintMainOut>
          <SaveBunnyImg src="img/st.png" alt="" id="bunny" />
          <MintMain>
            <SavedTitle>
              YoU <span>SAVED</span> THIS SHARK!
            </SavedTitle>
            <SavedText>
              Cras vestibulum turpis ac libero rhoncus, vulputate maximus leo
              ullamcorper. Donec venenatis augue id arcu tincidunt commodo ut ac
              dui.
            </SavedText>
            <Btn>
              <BsDiscord className="discordIcon" /> JoIN THE DISCORD
            </Btn>
          </MintMain>
        </MintMainOut>
      </MintPartOut>
    </>
  );
};
export default SavedContainer;
