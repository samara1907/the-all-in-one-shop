import './Shop.css';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from '../CardList/CardList';
import {data} from '../../data';
import Footer from '../Footer/Footer';



const Shop = ({onRouteChange})=>{
    return(
        <div>
            <h1>Categories</h1>
            <div className="center">
            <Tabs transition={false} unmountOnExit={true} variant="pills" className="tabs" defaultActiveKey="electronics" id="uncontrolled-tab-example" focus="true" >
            <Tab eventKey="electronics" title="Electronics" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="mobile accessories" title="Mobile Accessories">
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="home" title="Home" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="computer accessories" title="Computer Accessories" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="cosmetics" title="Cosmetics" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="clocks" title="Clocks" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
            <Tab eventKey="kids games" title="Kids Games" >
              <CardList onRouteChange={onRouteChange} data={data}/>
            </Tab>
          </Tabs>
          </div>
          <Footer/>
            </div>
    );
}

export default  Shop;