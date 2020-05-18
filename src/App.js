import React from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      profiles: []
    }
  }

  addNewProfileData = (profileData) => {
    this.setState(prevState => ({ profiles: [...prevState.profiles, profileData],
    }));
    console.log(`App` , profileData );
  }

  render(){
    return (
    <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit = {this.addNewProfileData}/>
      <CardList profiles = {this.state.profiles} />
    </div>
    )
  }
}

export default App;

