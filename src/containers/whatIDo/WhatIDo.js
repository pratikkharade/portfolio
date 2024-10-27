import React from "react";
import "./WhatIDo.css";
import WhatIDoSection from "./WhatIDoSection";
import { Fade } from "react-reveal";

export default function WhatIDo(props) {
  const theme = props.theme;
  return (
    <div className="whatIDo-main" id="whatIDo">
      <div className="whatIDo-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="whatIDo-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <WhatIDoSection theme={theme} />
    </div>
  );
}
