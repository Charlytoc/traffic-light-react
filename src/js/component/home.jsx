import React, { useState } from "react";



//create your first component
const Home = () => {

  const [color, setColor] = useState("nothing")
  const [turnedOn, setTurnedOn] = useState(true)

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

  
  const turnOn = () => {

    if (turnedOn === false) {
      setTurnedOn(true)
    }
    else {setTurnedOn(false)}

    if (turnedOn === true) {
      setInterval ( () => {
        let coloursArray = ["red", "yellow", "green"];
          setColor(coloursArray[index]);
          index++;
          if (index > 2) {index = 0}
          }, 1000)
    }

    else {clearInterval( () => {
      let coloursArray = ["red", "yellow", "green"];
        setColor(coloursArray[index]);
        index++;
        if (index > 2) {index = 0}
        }, 1000)}
  
  }
 

  // NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL
// NOTA PARA EL QUE REVISE, NO ME SIRVE EL CLEAR INTERVAAAAL

	return (<>
    
		<div className="kontainer">
      
      <div className="botones">
        <span className="buttons" id="turn-off-button" onClick={turningOff}>Turn off</span>
        <span className="buttons" id="start-button" onClick={turnOn}>Start animation</span>
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
    {/* <div className="container">
            <div className="container bg-dark" style={{width: 67}}>
                <div className="rounded-circle bg-success" style={{width: 45, height: 45}} onClick={greenSelected}></div>
                <div><div className="rounded-circle bg-warning" style={{width: 45, height: 45}} onClick={yellowSelected}></div></div>
                <div><div className="rounded-circle bg-danger" style={{width: 45, height: 45}} onClick={redSelected}></div></div>
            </div> */}
        {/* </div> */}
    </>
	);
};

export default Home;
