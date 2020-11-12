import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Nav/Nav';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Component } from 'react';
import Details from './components/CardList/Details';
import {data} from './data';

class App extends Component {
  constructor(){
    super();
    this.state ={
      route: "route"
    }
  }
  onRouteChange =(route)=>{
  
    this.setState({route: route})
  }

  render() {
    return (


        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}/>
          {this.state.route === '/'
            ?<Home onRouteChange={this.onRouteChange}/>
            :this.state.route === '/shop'
            ?<Shop onRouteChange={this.onRouteChange}/>
            :this.state.route === '/about'
            ?<About/>
            :this.state.route === '/contact'
            ?<Contact/>
            :this.state.route === '/login'
            ?<Login onRouteChange={this.onRouteChange}/>
            :this.state.route === '/register'
            ?<Register onRouteChange={this.onRouteChange}/>
            :this.state.route === '/details'
            ? <Details data={data} />
            :<div>
              <Home onRouteChange={this.onRouteChange}/>
            </div>
          }
        </div>
   
    );
  }

}

export default App;
