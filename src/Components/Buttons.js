import React from 'react'
import Stopwatch from './Stopwatch';
import '../App.css'

//creating class Buttons with state wich has properties

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.timer=Stopwatch;

        this.state={
        
        hour:0,
        minute:0,
        seconde:0,
        milliseconde:0

      }
}
//  when start buttton pressed start count and start by 1
handleStart =()=>{
    this.timer=setInterval(()=>{
        this.setState((prevState)=>{
            return{
                milliseconde:prevState.milliseconde +1,
               
              
            };
        })
        //if millisecond =100 then start counting seconds starting to 1
        if (this.state.milliseconde===100){
            this.setState((prevState)=>{ 
                return{
                seconde:prevState.seconde + 1,
                milliseconde:0
            };
            }
            )
        };
        //if 60 sec start minute by 1
        if (this.state.seconde===60){
            this.setState((prevState)=>{ 
                return{
                minute:prevState.minute + 1,
                seconde:0
            };

            }

            )
        };
        //if 60min start hour starting by 1
        if (this.state.minute===60){
            this.setState((prevState)=>{ 
                return{
                hour:prevState.hour + 1,
                minute:0
            };

            }

            )

        };
    },10);
 
};
//pause button will pause the counting
handlePause =()=>{ 
 clearInterval(this.timer)

};
//reset button will reset the counting to 0
handleReset =()=>{
    this.setState(()=>{
        return{
          hour:0,
        minute:0,
        seconde:0,
        milliseconde:0

        };
    }
    ) ;
};
    //render the onclick events
    render() { 
        return (
            <div className="button">
                <Stopwatch time={this.state}/>
                <button onClick= {this.handleReset} id="reset">RESET</button>
                <button onClick= {this.handleStart} id="start"> START</button>
                <button onClick={this.handlePause}  id="pause">PAUSE</button>
            </div>

          );
    }
}
 
export default Buttons;