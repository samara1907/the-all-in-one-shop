import React from 'react';
import Card from './Card';

const CardList = ({data}) =>{
    const cardcomponent = data.map((item, i) =>{
        return <Card key={i} id={data[i].id} name={data[i].name} username={data[i].username} email={data[i].email}/>
    })
    return(
        <div>
            {cardcomponent}
        </div>
    );
}

export default CardList;