import React, { useEffect } from "react";

function importScript() {
  if (window && document) {
    const script = document.createElement("script");
    const body = document.getElementsByTagName("body")[0];
    script.id = "reviewScript";
    script.src = "http://localhost:3003/recommend.bundle.js";
    body.appendChild(script);
  }
}

const Recommended = () => {
  useEffect(() => {
    importScript();
  }, []);

  return <div id="recommend-root"></div>;
};

export default Recommended;
