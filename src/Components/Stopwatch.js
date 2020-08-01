import React from 'react';


// 
const Stopwatch =(props)=>{


        return ( 
          //timer division which will display the time(counting)
        <div className="timer">
          
        <div className="time">{props.time.hour}</div>:
        <div className="time">{props.time.minute}</div>:
        <div className="time">{props.time.seconde}</div>:
        <div className="time">{props.time.milliseconde}</div>:
          
        </div> 
        );
    }


 
export default  Stopwatch;