import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("nothing")

  const redSelected = () => {
    setColor("red")
  }
  const yellowSelected = () => {
    setColor("yellow")
  }
  const greenSelected = () => {
    setColor("green")
  }

  let redColored = "";
  if (color == "red") {redColored = "red"} 

  let yellowColored = "";
  if (color == "yellow") {yellowColored = "yellow"} 

  let greenColored = "";
  if (color == "green") {greenColored = "green"} 

  const turningOff = () => {
    setColor(null)
  }
  let index = 0

 
  const animation = () => {
    setInterval( () => {
      let coloursArray = ["red", "yellow", "green"];
      setColor(coloursArray[index]);
      index++;
      // if (color == null) {clearInterval(this)}
      if (index > 2) {index = 0}}, 1000)
      
    
  }

	return (<>
    
		<div className="kontainer">
      <div className="botones">
        <span className="buttons" id="turn-off-button" onClick={turningOff}>Turn off</span>
        <span className="buttons" id="start-button" onClick={animation}>Start animation</span>
        {/* <span className="buttons" id="stop-button" onClick={stopAnimation}>Stop animation</span> */}

      </div>
      <div className="semaforo">
        <span className="light-circle red" onClick={redSelected} id={redColored}></span>
        <span className="light-circle yellow" onClick={yellowSelected} id={yellowColored}></span>
        <span className="light-circle green" onClick={greenSelected} id={greenColored}></span>
      </div>
      <div className="palito">
      </div>
      <div className="floor"></div>
       
    </div>
    </>
	);
};

export default Home;
