import {React} from 'react';
import './Card.css';
import 'tachyons';
import { Button} from 'react-bootstrap';
import watch from './watch.jpg';

const Card = ({id, name, username, email, onRouteChange}) =>{

  return (

            <div className="contianer mr2 pa3 center ">
            <article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={watch} className="db w-100 br2 br--top" alt="catt"/>
            <div className="pa2 ph5-ns pb6-ns">
            <div className="dt w-100 mt1">
            <div className="dtc">
                <h1 className="f5 f4-ns mv2">{name}</h1>
            </div>
            <div className="dtc tr">
                <h2 className="f5 mv0">{username}</h2>
            </div>
            </div>
              <Button onClick={()=> onRouteChange('/details')}>
              Details
              </Button>
                   </div>
        </article>
        </div>
       
          

      );

}
 
  export default Card;








