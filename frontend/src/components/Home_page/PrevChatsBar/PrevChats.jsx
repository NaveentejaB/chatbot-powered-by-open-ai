import React from 'react';
import { ChatBubbleOutlineIcon } from "@mui/icons-material";

const PrevChats = (props) => {
  return (
    <div className='top'>
      <div className="tab">
        <div className="one"><ChatBubbleOutlineIcon/></div>
        <div className="two">heading</div>
      </div>
    </div>
  );
}

export default PrevChats;
