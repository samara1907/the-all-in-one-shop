import CardList from '../CardList/CardList';
import {data} from '../../data';
import Footer from '../Footer/Footer';

  function Home({onRouteChange}) {
    return (
      <div>
        <div>
        <CardList onRouteChange={onRouteChange} data={data}/>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  