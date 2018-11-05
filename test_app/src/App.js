import React, { Component } from 'react';
import UserForm from './Components/Form/UserForm'

class App extends Component {

  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <UserForm onCreate={this.handleCreate}/>
      </div>
    );
  }
}

export default App;