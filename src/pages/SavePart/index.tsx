import React from "react";

import {
  SaveAll, SaveOut, SavePart, SaveTitle, SaveBtn,
} from "./save.style";

const SaveContainer = () => {
  return (
    <>
      <SaveAll>
        <SaveOut>
          <SavePart>
            <SaveTitle>shark</SaveTitle>
            <a href='https://discord.gg/Ab433VcrVU' target={'_blank'}>
              <SaveBtn>Join the Community</SaveBtn>
            </a>
          </SavePart>
        </SaveOut>
      </SaveAll>
    </>
  );
};
export default SaveContainer;
