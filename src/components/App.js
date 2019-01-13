import React, { Component } from 'react';
import './App.css';
import Posts from './Posts/Posts';
import axios from 'axios';
import Spinner from './Spinner/Spinner';
class App extends Component {
  state = {
    tseries:[], pewdew:[]

  };

    componentDidMount(){

      
      const urlT = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=tseries&fields=items/statistics/subscriberCount&key=AIzaSyCcaGTIHATCiPmaiX6gGA6yp8KfHkejTsM';
      const urlP = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=pewdiepie&fields=items/statistics/subscriberCount&key=AIzaSyCcaGTIHATCiPmaiX6gGA6yp8KfHkejTsM';
    
      setInterval(()=>{
        axios.get(urlT).then(
          response => {
            this.setState({tseries : response.data.items});
          }
        )
    
        axios.get(urlP).then(
          response =>{
            this.setState({pewdew: response.data.items});
          }
        )
      },1000)
      
  }
  render() {
    const tserSubs = this.state.tseries.map(
      element => {
        return element.statistics.subscriberCount;
      }
    );
    const pewdSubs = this.state.pewdew.map(
      element => {
        return element.statistics.subscriberCount;
      }
    );

    return (
      <div className="App">
        <Posts title="Tseries subscribers" subs={tserSubs}></Posts>
        <Posts title="Pewdiepie subscribers" subs={pewdSubs}></Posts>
        <Posts title="Difference between both" subs={pewdSubs - tserSubs}></Posts>
        <Spinner />
      </div>
    );
  }
}

export default App;
