
import React from "react";

var style = {
    backgroundColor: "#F8F8F8",
    color: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  color: "black"
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <p>Copyright by
                    <br/>
                website.petrovic@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Footer