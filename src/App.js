import React from 'react';
import Header from './Components/Header'
import './App.css';

import Buttons from'./Components/Buttons'
import Stopwatch from './Components/Stopwatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
       <div className='main'>
        <Header/>
        
        <Buttons 
        handleStart={this.handleStart} 
        handlePause={ this.handlePause} 
        handleReset ={ this.handleReset}/>
      </div>
      </div> 
     );
  }
}
 
export default App;


//https://www.youtube.com/watch?v=N2NFOgPujEc