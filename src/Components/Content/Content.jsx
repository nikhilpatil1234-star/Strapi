import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./content.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Clipboard from "../../assests/clipboard.jpeg";
import CopyToClipboard from "react-copy-to-clipboard";

const Content = () => {
  const [copyText, setCopyText] = useState(
    "npx create-strapi-app@latest my-project"
  );
  const [copied, setCopied] = useState(false);
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  useEffect(() => {
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  const copyEvent = () => {};
  return (
    <div className=" mainbodycontainer container justify-center">
      <div className="mainbodyptag">
        <p>
          <span
            className="spanforcloud"
            style={{
              color: "white",
              backgroundColor: "#8c4bff",
              fontWeight: "600",
              padding: "2px 12px ",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          >
            CLOUD
          </span>
          Strapi Cloud is coming soon ☁️
          <span style={{ color: "#8c4bff", fontWeight: "700" }}>
            {" "}
            Join the waitlist{" "}
          </span>
        </p>
      </div>
      <div className="hmainbodyheading">
        <h1>Manage Any Content.</h1>
      </div>
      <div className=" hmainbodyheadingmedia hmainbodyheading  ">
        <h1 className="hmainbodyheadingmedia">Anywhere.</h1>
      </div>

      <div className="mainbodyptag1">
        <p>
          Strapi is the leading open-source headless cms.It's 100% Js and fully
        </p>
        <p className="textcustom text-center">customizable. </p>
      </div>
      <div className="copyinputboxcontainer">
        <div className="copyinputbox"></div>
        <div className="copyinputboxbelowbuttons">
          <div className="displayingingimageininputcontainer">
            <input
              className="addclipboard"
              type="text"
              // placeholder="npx create-strapi-app@latest my-project"
              value={copyText}
              onChange={handleCopyText}
              id=""
            />

            {["bottom"].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    copy to clipboard
                  </Tooltip>
                }
              >
                <div className="imageclipbord ">
                  <CopyToClipboard
                    text={copyText}
                    onCopy={() => setCopied(true)}
                  >
                    <Button className="buttoninclipboard" onClick={copyEvent}>
                      <img src={Clipboard} alt="" srcset="" />{" "}
                    </Button>

                    {/* <a href=" " onClick={copyEvent}> <img src={Clipboard} alt="" srcset="" />    </a> */}
                  </CopyToClipboard>

                  {copied ? (
                    <span style={{ color: "white" }}>copied!</span>
                  ) : null}
                </div>
              </OverlayTrigger>
            ))}
          </div>
          <Button className="getstartedbutton" size="lg">
            Get started
          </Button>
          <Button className="trythelivedemobutton" size="lg">
            try the live demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
