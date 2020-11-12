import {Media, Button} from 'react-bootstrap';
import {React} from 'react';


const Details = ()=> {
	const data = {
		name: "product",
		details: "sdlkfhnsdfhbsdfkjb"
	}
    return(
        <div>
            <Media>
				  <img
				    width={64}
				    height={64}
				    className="mr-3"
				    src="holder.js/64x64"
				    alt="Generic placeholder"
				  />
				  <Media.Body>
				  <div>
				    <h1>{data.name}</h1>
				    </div>
				    <p>
				      {data.details}
				    </p>
				  </Media.Body>
				</Media>
				<Button >Add To Cart</Button>
        </div>
    );    
   
}


export default Details;