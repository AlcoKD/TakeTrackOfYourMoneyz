import React, {Component} from 'react';
import Login from './form/login';
import Register from './form/register';
import Header from './Components/Header';
import User from './Components/User';
import Balance from './Components/Balance';
import Records from './Components/Record';
import Info from './Components/Info';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'login',
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  } 

  render(){
     return (
        <div className="App">
         { this.state.route === 'home' 
          ? <div>
             <Header />
              <div className='container-flex'>
               <User onRouteChange={this.onRouteChange} />
                <Balance />
            </div>
                <Records />
                 <Info /> 
            </div>
          : (
              this.state.route === 'login' 
              ? <Login onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )        
          }
        </div>
    
  )};

 }

export default App;
