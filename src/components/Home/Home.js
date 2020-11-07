import CardList from '../CardList/CardList';
import {data} from '../../data';
import Footer from '../Footer/Footer';

  function Home() {
    return (
      <div>
        <div>
        <CardList data={data}/>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  