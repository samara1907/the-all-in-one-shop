import './Shop.css';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from '../CardList/CardList';
import {data} from '../../data';
import Footer from '../Footer/Footer';



const Shop = ()=>{

  
    return(
        <div>
  <h1>Categories</h1>
            <div className="center">
            <Tabs className="tabs" defaultActiveKey="electronics" id="uncontrolled-tab-example">
            <Tab eventKey="electronics" title="Electronics">
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="mobile accessories" title="Mobile Accessories">
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="home" title="Home" >
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="computer accessories" title="Computer Accessories" >
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="cosmetics" title="Cosmetics" >
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="clocks" title="Clocks" >
              <CardList data={data}/>
            </Tab>
            <Tab eventKey="kids games" title="Kids Games" >
              <CardList data={data}/>
            </Tab>
          </Tabs>
          </div>
          <Footer/>
            </div>
    );
}

export default  Shop;