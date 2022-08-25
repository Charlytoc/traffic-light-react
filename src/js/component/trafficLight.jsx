
import React from "react";

 const TrafficLight = ({funct}) => {
    return (
        <div className="container">
            <div className="container bg-dark" style={{width: 67}}>
                <div className="rounded-circle bg-success" style={{width: 45, height: 45}} onClick={funct}></div>
                <div className="rounded-circle bg-danger" style={{width: 45, height: 45}}></div>
                <div className="rounded-circle bg-warning" style={{width: 45, height: 45}}></div>
            </div>
        </div>
    )
}

export default TrafficLight;