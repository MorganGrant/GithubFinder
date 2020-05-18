import React from 'react';
import Card from './Card'


const CardList = props => (
    <div>
      {/* <Card {...testData[0]} />
      <Card {...testData[1]} /> */}
      {props.profiles.map( profile => < Card key = {profile.id} 
      {...profile } /> ) }
    </div>
)

export default CardList;

