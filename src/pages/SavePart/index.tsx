import React from "react";

import {
  SaveOut, SavePart, SaveTitle, SaveBtn,
} from "./save.style";

const SaveContainer = () => {
  return (
    <>
      <SaveOut>
        <SavePart>
          <SaveTitle>Save the Bunnies!</SaveTitle>
          <a href='https://discord.gg/Ab433VcrVU' target={'_blank'}>
            <SaveBtn>Join the Community</SaveBtn>
          </a>
        </SavePart>
      </SaveOut>
    </>
  );
};
export default SaveContainer;
