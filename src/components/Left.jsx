import React from "react";
import Div from "./Div";
import contents from "../leftContents";

const className = 'flex flex-col items-center justify-center h-screen bg-emerald-400 basis-1/4'

function Left() {
   return (
      <div className={className}>
         { contents.map(content => <Div tag={content.tag} />)}
      </div>
   );
};

export default Left;